// Natuurlijke taalverwerking Quiz - Level 10
(function() {
  const level10 = {
    name: {
          "en": "GPT/BERT Architectures & Prompt Engineering",
          "es": "Arquitecturas GPT/BERT e Ingeniería de Prompts",
          "de": "GPT/BERT Architekturen & Prompt Engineering",
          "nl": "GPT/BERT Architecturen & Prompt Engineering"
    },
    questions: [
      {
        question: {
                  "en": "What are multimodal language models and how do they extend traditional NLP capabilities?",
                  "es": "¿Qué son los modelos de lenguaje multimodales y cómo extienden las capacidades tradicionales de PLN?",
                  "de": "Was sind multimodale Sprachmodelle und wie erweitern sie traditionelle NLP-Fähigkeiten?",
                  "nl": "Wat zijn multimodale taalmodellen en hoe breiden ze traditionele NLP-capaciteiten uit?"
        },
        options: [
        {
                  "en": "Language models with multiple layers",
                  "es": "Modelos de lenguaje con múltiples capas",
                  "de": "Sprachmodelle mit mehreren Schichten",
                  "nl": "Taalmodellen met meerdere lagen"
        },
        {
                  "en": "Models that process text, images, audio, and other modalities together for richer understanding and generation",
                  "es": "Modelos que procesan texto, imágenes, audio y otras modalidades juntas para comprensión y generación más rica",
                  "de": "Modelle die Text, Bilder, Audio und andere Modalitäten zusammen verarbeiten für reicheres Verständnis und Generierung",
                  "nl": "Modellen die tekst, afbeeldingen, audio en andere modaliteiten samen verwerken voor rijkere begrip en generatie"
        },
        {
                  "en": "Models that support multiple human languages",
                  "es": "Modelos que soportan múltiples idiomas humanos",
                  "de": "Modelle die mehrere menschliche Sprachen unterstützen",
                  "nl": "Modellen die meerdere menselijke talen ondersteunen"
        },
        {
                  "en": "Models that work in multiple programming languages",
                  "es": "Modelos que funcionan en múltiples lenguajes de programación",
                  "de": "Modelle die in mehreren Programmiersprachen funktionieren",
                  "nl": "Modellen die werken in meerdere programmeertalen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Multimodal models like GPT-4V, CLIP, and DALL-E integrate vision, language, and other modalities, enabling tasks like image captioning, visual question answering, and text-to-image generation.",
                  "es": "Los modelos multimodales como GPT-4V, CLIP y DALL-E integran visión, lenguaje y otras modalidades, permitiendo tareas como descripción de imágenes, respuesta a preguntas visuales y generación de texto a imagen.",
                  "de": "Multimodale Modelle wie GPT-4V, CLIP und DALL-E integrieren Vision, Sprache und andere Modalitäten, ermöglichen Aufgaben wie Bildbeschreibung, visuelle Fragebeantwortung und Text-zu-Bild-Generierung.",
                  "nl": "Multimodale modellen zoals GPT-4V, CLIP en DALL-E integreren visie, taal en andere modaliteiten, maken taken mogelijk zoals beeldbeschrijving, visuele vraagbeantwoording en tekst-naar-beeld generatie."
        }
      },
      {
        question: {
                  "en": "What is in-context learning and how does it differ from traditional fine-tuning?",
                  "es": "¿Qué es el aprendizaje en contexto y cómo difiere del ajuste fino tradicional?",
                  "de": "Was ist In-Context Learning und wie unterscheidet es sich von traditionellem Fine-Tuning?",
                  "nl": "Wat is in-context learning en hoe verschilt het van traditionele fine-tuning?"
        },
        options: [
        {
                  "en": "Learning within the context of specific domains",
                  "es": "Aprender dentro del contexto de dominios específicos",
                  "de": "Lernen im Kontext spezifischer Domänen",
                  "nl": "Leren binnen de context van specifieke domeinen"
        },
        {
                  "en": "Learning new tasks through examples provided in the input context without updating model parameters",
                  "es": "Aprender nuevas tareas a través de ejemplos proporcionados en el contexto de entrada sin actualizar parámetros del modelo",
                  "de": "Neue Aufgaben durch im Eingabekontext bereitgestellte Beispiele lernen ohne Modellparameter zu aktualisieren",
                  "nl": "Nieuwe taken leren door voorbeelden in de invoercontext zonder modelparameters bij te werken"
        },
        {
                  "en": "Learning from context clues in text",
                  "es": "Aprender de pistas contextuales en texto",
                  "de": "Aus Kontexthinweisen im Text lernen",
                  "nl": "Leren van contextuele aanwijzingen in tekst"
        },
        {
                  "en": "Contextual understanding of language",
                  "es": "Comprensión contextual del lenguaje",
                  "de": "Kontextelles Verstehen der Sprache",
                  "nl": "Contextueel begrip van taal"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "In-context learning leverages the emergent ability of large language models to adapt to new tasks simply by seeing examples in their input, without requiring parameter updates or retraining.",
                  "es": "El aprendizaje en contexto aprovecha la capacidad emergente de modelos de lenguaje grandes para adaptarse a nuevas tareas simplemente viendo ejemplos en su entrada, sin requerir actualizaciones de parámetros o reentrenamiento.",
                  "de": "In-Context Learning nutzt die emergente Fähigkeit großer Sprachmodelle sich an neue Aufgaben anzupassen einfach durch Sehen von Beispielen in ihrer Eingabe, ohne Parameteraktualisierungen oder Umschulung zu benötigen.",
                  "nl": "In-context learning benut het emergente vermogen van grote taalmodellen om zich aan te passen aan nieuwe taken door simpelweg voorbeelden in hun invoer te zien, zonder parameter updates of hertraining te vereisen."
        }
      },
      {
        question: {
                  "en": "What is constitutional AI and how does it address AI safety in language models?",
                  "es": "¿Qué es la IA constitucional y cómo aborda la seguridad de IA en modelos de lenguaje?",
                  "de": "Was ist konstitutionelle KI und wie adressiert sie KI-Sicherheit in Sprachmodellen?",
                  "nl": "Wat is constitutionele AI en hoe pakt het AI-veiligheid aan in taalmodellen?"
        },
        options: [
        {
                  "en": "Legal frameworks for AI development",
                  "es": "Marcos legales para desarrollo de IA",
                  "de": "Rechtliche Rahmen für KI-Entwicklung",
                  "nl": "Juridische kaders voor AI ontwikkeling"
        },
        {
                  "en": "Constitutional rights for AI systems",
                  "es": "Derechos constitucionales para sistemas de IA",
                  "de": "Verfassungsrechte für KI-Systeme",
                  "nl": "Grondwettelijke rechten voor AI systemen"
        },
        {
                  "en": "Training AI systems to follow a set of principles or constitution to ensure helpful, harmless, and honest behavior",
                  "es": "Entrenar sistemas de IA para seguir un conjunto de principios o constitución para asegurar comportamiento útil, inofensivo y honesto",
                  "de": "KI-Systeme trainieren um einem Satz von Prinzipien oder Verfassung zu folgen um hilfreiches, harmloses und ehrliches Verhalten sicherzustellen",
                  "nl": "AI systemen trainen om een set principes of grondwet te volgen om behulpzaam, ongevaarlijk en eerlijk gedrag te verzekeren"
        },
        {
                  "en": "AI systems designed for government applications",
                  "es": "Sistemas de IA diseñados para aplicaciones gubernamentales",
                  "de": "KI-Systeme entworfen für Regierungsanwendungen",
                  "nl": "AI systemen ontworpen voor overheidstoepassingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Constitutional AI trains models to critique and revise their own outputs according to a set of principles, reducing harmful outputs and improving alignment with human values through self-supervision.",
                  "es": "La IA constitucional entrena modelos para criticar y revisar sus propias salidas según un conjunto de principios, reduciendo salidas dañinas y mejorando alineación con valores humanos a través de auto-supervisión.",
                  "de": "Konstitutionelle KI trainiert Modelle ihre eigenen Ausgaben nach einem Satz von Prinzipien zu kritisieren und zu revidieren, reduziert schädliche Ausgaben und verbessert Ausrichtung mit menschlichen Werten durch Selbstüberwachung.",
                  "nl": "Constitutionele AI traint modellen om hun eigen outputs te bekritiseren en herzien volgens een set principes, vermindert schadelijke outputs en verbetert uitlijning met menselijke waarden door zelf-supervisie."
        }
      },
      {
        question: {
                  "en": "What are the key challenges and considerations for deploying large language models in production environments?",
                  "es": "¿Cuáles son los desafíos clave y consideraciones para desplegar modelos de lenguaje grandes en entornos de producción?",
                  "de": "Was sind die Hauptherausforderungen und Überlegungen für die Bereitstellung großer Sprachmodelle in Produktionsumgebungen?",
                  "nl": "Wat zijn de belangrijkste uitdagingen en overwegingen voor het inzetten van grote taalmodellen in productieomgevingen?"
        },
        options: [
        {
                  "en": "User interface and user experience design",
                  "es": "Diseño de interfaz de usuario y experiencia de usuario",
                  "de": "Benutzeroberflächen- und Benutzererfahrungsdesign",
                  "nl": "Gebruikersinterface en gebruikerservaring ontwerp"
        },
        {
                  "en": "Computational costs, latency, hallucinations, bias, safety measures, and responsible AI governance",
                  "es": "Costos computacionales, latencia, alucinaciones, sesgo, medidas de seguridad y gobernanza responsable de IA",
                  "de": "Rechenkosten, Latenz, Halluzinationen, Bias, Sicherheitsmaßnahmen und verantwortliche KI-Governance",
                  "nl": "Computationele kosten, latentie, hallucinaties, vooringenomenheid, veiligheidsmaatregelen en verantwoordelijke AI governance"
        },
        {
                  "en": "Only computational and memory requirements",
                  "es": "Solo requerimientos computacionales y de memoria",
                  "de": "Nur rechnerische und Speicheranforderungen",
                  "nl": "Alleen computationele en geheugenvereisten"
        },
        {
                  "en": "Language support and translation accuracy",
                  "es": "Soporte de idiomas y precisión de traducción",
                  "de": "Sprachunterstützung und Übersetzungsgenauigkeit",
                  "nl": "Taalondersteuning en vertaalnauwkeurigheid"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Production deployment requires addressing technical challenges like inference costs and latency, safety issues like hallucinations and bias, plus establishing governance frameworks for responsible AI use and monitoring.",
                  "es": "El despliegue en producción requiere abordar desafíos técnicos como costos de inferencia y latencia, problemas de seguridad como alucinaciones y sesgo, además de establecer marcos de gobernanza para uso responsable de IA y monitoreo.",
                  "de": "Produktionsbereitstellung erfordert Adressierung technischer Herausforderungen wie Inferenzkosten und Latenz, Sicherheitsprobleme wie Halluzinationen und Bias, plus Etablierung von Governance-Frameworks für verantwortlichen KI-Einsatz und Überwachung.",
                  "nl": "Productie-implementatie vereist het aanpakken van technische uitdagingen zoals inferentiekosten en latentie, veiligheidsproblemen zoals hallucinaties en vooringenomenheid, plus het vestigen van governance frameworks voor verantwoordelijk AI gebruik en monitoring."
        }
      },
      {
        question: {
                  "en": "What are the future directions and emerging paradigms in natural language processing research?",
                  "es": "¿Cuáles son las direcciones futuras y paradigmas emergentes en investigación de procesamiento de lenguaje natural?",
                  "de": "Was sind die zukünftigen Richtungen und aufkommenden Paradigmen in der Forschung zur natürlichen Sprachverarbeitung?",
                  "nl": "Wat zijn de toekomstige richtingen en opkomende paradigma's in natuurlijke taalverwerking onderzoek?"
        },
        options: [
        {
                  "en": "Focus solely on text processing",
                  "es": "Enfoque únicamente en procesamiento de texto",
                  "de": "Fokus ausschließlich auf Textverarbeitung",
                  "nl": "Focus uitsluitend op tekstverwerking"
        },
        {
                  "en": "Multimodal integration, reasoning capabilities, efficient architectures, neurosymbolic approaches, and embodied language understanding",
                  "es": "Integración multimodal, capacidades de razonamiento, arquitecturas eficientes, enfoques neurosimbólicos y comprensión de lenguaje encarnado",
                  "de": "Multimodale Integration, Reasoning-Fähigkeiten, effiziente Architekturen, neurosymbolische Ansätze und embodied Language Understanding",
                  "nl": "Multimodale integratie, redeneercapaciteiten, efficiënte architecturen, neurosymbolische benaderingen en belichaamd taalbegrip"
        },
        {
                  "en": "Only faster processing and larger models",
                  "es": "Solo procesamiento más rápido y modelos más grandes",
                  "de": "Nur schnellere Verarbeitung und größere Modelle",
                  "nl": "Alleen snellere verwerking en grotere modellen"
        },
        {
                  "en": "Traditional rule-based approaches",
                  "es": "Enfoques tradicionales basados en reglas",
                  "de": "Traditionelle regelbasierte Ansätze",
                  "nl": "Traditionele regel-gebaseerde benaderingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Future NLP research focuses on integrating multiple modalities, improving reasoning and factual accuracy, developing more efficient models, combining neural and symbolic approaches, and enabling AI systems to understand language in physical and social contexts.",
                  "es": "La investigación futura de PLN se enfoca en integrar múltiples modalidades, mejorar razonamiento y precisión factual, desarrollar modelos más eficientes, combinar enfoques neuronales y simbólicos, y permitir que sistemas de IA entiendan lenguaje en contextos físicos y sociales.",
                  "de": "Zukünftige NLP-Forschung fokussiert auf Integration multipler Modalitäten, Verbesserung von Reasoning und faktischer Genauigkeit, Entwicklung effizienterer Modelle, Kombination neuronaler und symbolischer Ansätze, und Ermöglichung dass KI-Systeme Sprache in physischen und sozialen Kontexten verstehen.",
                  "nl": "Toekomstig NLP onderzoek richt zich op het integreren van meerdere modaliteiten, verbeteren van redeneren en feitelijke nauwkeurigheid, ontwikkelen van efficiëntere modellen, combineren van neurale en symbolische benaderingen, en AI systemen in staat stellen taal te begrijpen in fysieke en sociale contexten."
        }
      },
      {
        question: {
                  "en": "What is the key architectural difference between BERT and GPT models?",
                  "es": "¿Cuál es la diferencia arquitectónica clave entre los modelos BERT y GPT?",
                  "de": "Was ist der wichtigste architektonische Unterschied zwischen BERT- und GPT-Modellen?",
                  "nl": "Wat is het belangrijkste architecturale verschil tussen BERT en GPT modellen?"
        },
        options: [
        {
                  "en": "BERT is larger than GPT models",
                  "es": "BERT es más grande que los modelos GPT",
                  "de": "BERT ist größer als GPT-Modelle",
                  "nl": "BERT is groter dan GPT modellen"
        },
        {
                  "en": "BERT uses bidirectional encoder-only architecture while GPT uses unidirectional decoder-only architecture",
                  "es": "BERT usa arquitectura bidireccional solo-encoder mientras GPT usa arquitectura unidireccional solo-decoder",
                  "de": "BERT verwendet bidirektionale Encoder-only Architektur während GPT unidirektionale Decoder-only Architektur verwendet",
                  "nl": "BERT gebruikt bidirectionele encoder-only architectuur terwijl GPT unidirectionele decoder-only architectuur gebruikt"
        },
        {
                  "en": "There is no significant architectural difference",
                  "es": "No hay diferencia arquitectónica significativa",
                  "de": "Es gibt keinen signifikanten architektonischen Unterschied",
                  "nl": "Er is geen significant architecturaal verschil"
        },
        {
                  "en": "BERT processes images while GPT only processes text",
                  "es": "BERT procesa imágenes mientras GPT solo procesa texto",
                  "de": "BERT verarbeitet Bilder während GPT nur Text verarbeitet",
                  "nl": "BERT verwerkt afbeeldingen terwijl GPT alleen tekst verwerkt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "BERT uses bidirectional attention to see context from both directions for understanding tasks, while GPT uses causal (left-to-right) attention for autoregressive text generation.",
                  "es": "BERT usa atención bidireccional para ver contexto desde ambas direcciones para tareas de comprensión, mientras GPT usa atención causal (izquierda-a-derecha) para generación autoregresiva de texto.",
                  "de": "BERT verwendet bidirektionale Aufmerksamkeit um Kontext aus beiden Richtungen für Verständnisaufgaben zu sehen, während GPT kausale (links-nach-rechts) Aufmerksamkeit für autoregressive Textgenerierung verwendet.",
                  "nl": "BERT gebruikt bidirectionele aandacht om context vanuit beide richtingen te zien voor begrip taken, terwijl GPT causale (links-naar-rechts) aandacht gebruikt voor autoregressieve tekstgeneratie."
        }
      },
      {
        question: {
                  "en": "What is prompt engineering and why is it important for large language models?",
                  "es": "¿Qué es la ingeniería de prompts y por qué es importante para modelos de lenguaje grandes?",
                  "de": "Was ist Prompt Engineering und warum ist es wichtig für große Sprachmodelle?",
                  "nl": "Wat is prompt engineering en waarom is het belangrijk voor grote taalmodellen?"
        },
        options: [
        {
                  "en": "Building the technical infrastructure for language models",
                  "es": "Construir la infraestructura técnica para modelos de lenguaje",
                  "de": "Aufbau der technischen Infrastruktur für Sprachmodelle",
                  "nl": "Bouwen van de technische infrastructuur voor taalmodellen"
        },
        {
                  "en": "The practice of crafting effective input prompts to elicit desired responses from language models without fine-tuning",
                  "es": "La práctica de crear prompts de entrada efectivos para obtener respuestas deseadas de modelos de lenguaje sin ajuste fino",
                  "de": "Die Praxis effektive Eingabeprompts zu erstellen um gewünschte Antworten von Sprachmodellen ohne Fine-Tuning zu erhalten",
                  "nl": "De praktijk van het creëren van effectieve invoer prompts om gewenste reacties uit taalmodellen te krijgen zonder fine-tuning"
        },
        {
                  "en": "Training language models from scratch",
                  "es": "Entrenar modelos de lenguaje desde cero",
                  "de": "Sprachmodelle von Grund auf trainieren",
                  "nl": "Taalmodellen van nul af aan trainen"
        },
        {
                  "en": "Optimizing model architecture design",
                  "es": "Optimizar el diseño de arquitectura del modelo",
                  "de": "Optimierung des Modellarchitekturdesigns",
                  "nl": "Optimaliseren van model architectuur ontwerp"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Prompt engineering involves designing inputs that guide LLMs to produce accurate, relevant responses. It's crucial for leveraging pre-trained models effectively without expensive retraining.",
                  "es": "La ingeniería de prompts involucra diseñar entradas que guíen a LLMs para producir respuestas precisas y relevantes. Es crucial para aprovechar modelos preentrenados efectivamente sin reentrenamiento costoso.",
                  "de": "Prompt Engineering beinhaltet das Entwerfen von Eingaben die LLMs leiten um genaue, relevante Antworten zu produzieren. Es ist entscheidend um vortrainierte Modelle effektiv zu nutzen ohne teure Umschulung.",
                  "nl": "Prompt engineering houdt in het ontwerpen van invoer die LLMs leidt om nauwkeurige, relevante reacties te produceren. Het is cruciaal voor het effectief benutten van voorgetrainde modellen zonder dure hertraining."
        }
      },
      {
        question: {
                  "en": "What is the difference between few-shot and zero-shot prompting?",
                  "es": "¿Cuál es la diferencia entre prompting de pocos ejemplos y prompting de cero ejemplos?",
                  "de": "Was ist der Unterschied zwischen Few-Shot und Zero-Shot Prompting?",
                  "nl": "Wat is het verschil tussen few-shot en zero-shot prompting?"
        },
        options: [
        {
                  "en": "Few-shot requires fine-tuning, zero-shot doesn't",
                  "es": "Few-shot requiere ajuste fino, zero-shot no",
                  "de": "Few-Shot erfordert Fine-Tuning, Zero-Shot nicht",
                  "nl": "Few-shot vereist fine-tuning, zero-shot niet"
        },
        {
                  "en": "Few-shot provides examples in the prompt, zero-shot gives only task description without examples",
                  "es": "Few-shot proporciona ejemplos en el prompt, zero-shot da solo descripción de tarea sin ejemplos",
                  "de": "Few-Shot bietet Beispiele im Prompt, Zero-Shot gibt nur Aufgabenbeschreibung ohne Beispiele",
                  "nl": "Few-shot geeft voorbeelden in de prompt, zero-shot geeft alleen taakbeschrijving zonder voorbeelden"
        },
        {
                  "en": "There is no difference between them",
                  "es": "No hay diferencia entre ellos",
                  "de": "Es gibt keinen Unterschied zwischen ihnen",
                  "nl": "Er is geen verschil tussen hen"
        },
        {
                  "en": "Few-shot uses small models, zero-shot uses no models",
                  "es": "Few-shot usa modelos pequeños, zero-shot no usa modelos",
                  "de": "Few-Shot verwendet kleine Modelle, Zero-Shot verwendet keine Modelle",
                  "nl": "Few-shot gebruikt kleine modellen, zero-shot gebruikt geen modellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Zero-shot prompting asks the model to perform a task with only instructions, while few-shot prompting includes demonstration examples to help the model understand the desired format and approach.",
                  "es": "El prompting zero-shot pide al modelo realizar una tarea con solo instrucciones, mientras el prompting few-shot incluye ejemplos de demostración para ayudar al modelo entender el formato y enfoque deseado.",
                  "de": "Zero-Shot Prompting bittet das Modell eine Aufgabe nur mit Anweisungen auszuführen, während Few-Shot Prompting Demonstrationsbeispiele einschließt um dem Modell zu helfen das gewünschte Format und den Ansatz zu verstehen.",
                  "nl": "Zero-shot prompting vraagt het model een taak uit te voeren met alleen instructies, terwijl few-shot prompting demonstratievoorbeelden bevat om het model te helpen het gewenste formaat en benadering te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is chain-of-thought prompting and how does it improve reasoning in language models?",
                  "es": "¿Qué es el prompting de cadena de pensamiento y cómo mejora el razonamiento en modelos de lenguaje?",
                  "de": "Was ist Chain-of-Thought Prompting und wie verbessert es das Reasoning in Sprachmodellen?",
                  "nl": "Wat is chain-of-thought prompting en hoe verbetert het redeneren in taalmodellen?"
        },
        options: [
        {
                  "en": "Linking multiple language models together",
                  "es": "Vincular múltiples modelos de lenguaje juntos",
                  "de": "Mehrere Sprachmodelle miteinander verknüpfen",
                  "nl": "Meerdere taalmodellen aan elkaar koppelen"
        },
        {
                  "en": "Training models to think sequentially",
                  "es": "Entrenar modelos para pensar secuencialmente",
                  "de": "Modelle trainieren sequenziell zu denken",
                  "nl": "Modellen trainen om sequentieel te denken"
        },
        {
                  "en": "Encouraging models to show intermediate reasoning steps by including step-by-step examples in prompts",
                  "es": "Alentar a modelos a mostrar pasos de razonamiento intermedios incluyendo ejemplos paso a paso en prompts",
                  "de": "Modelle ermutigen Zwischenschritte des Reasonings zu zeigen durch Einschließen von Schritt-für-Schritt Beispielen in Prompts",
                  "nl": "Modellen aanmoedigen om tussenliggende redeneerstappen te tonen door stap-voor-stap voorbeelden in prompts op te nemen"
        },
        {
                  "en": "Creating a sequence of related prompts",
                  "es": "Crear una secuencia de prompts relacionados",
                  "de": "Eine Sequenz verwandter Prompts erstellen",
                  "nl": "Een reeks gerelateerde prompts creëren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chain-of-thought prompting guides models to break down complex problems into logical steps, significantly improving performance on mathematical reasoning, logic puzzles, and multi-step problem solving.",
                  "es": "El prompting de cadena de pensamiento guía a modelos a descomponer problemas complejos en pasos lógicos, mejorando significativamente el rendimiento en razonamiento matemático, rompecabezas lógicos y resolución de problemas multi-paso.",
                  "de": "Chain-of-Thought Prompting leitet Modelle an komplexe Probleme in logische Schritte aufzuteilen, verbessert signifikant die Leistung bei mathematischem Reasoning, Logikrätseln und mehrstufiger Problemlösung.",
                  "nl": "Chain-of-thought prompting leidt modellen om complexe problemen op te splitsen in logische stappen, verbetert aanzienlijk de prestaties bij wiskundig redeneren, logische puzzels en meerstaps probleemoplossing."
        }
      },
      {
        question: {
                  "en": "What is the purpose of special tokens like [CLS], [SEP], and [MASK] in BERT?",
                  "es": "¿Cuál es el propósito de tokens especiales como [CLS], [SEP] y [MASK] en BERT?",
                  "de": "Was ist der Zweck spezieller Token wie [CLS], [SEP] und [MASK] in BERT?",
                  "nl": "Wat is het doel van speciale tokens zoals [CLS], [SEP] en [MASK] in BERT?"
        },
        options: [
        {
                  "en": "[CLS] for classification representation, [SEP] to separate sentences, [MASK] for masked language modeling",
                  "es": "[CLS] para representación de clasificación, [SEP] para separar oraciones, [MASK] para modelado de lenguaje enmascarado",
                  "de": "[CLS] für Klassifikationsrepräsentation, [SEP] um Sätze zu trennen, [MASK] für maskiertes Sprachmodellierung",
                  "nl": "[CLS] voor classificatie representatie, [SEP] om zinnen te scheiden, [MASK] voor gemaskeerde taalmodellering"
        },
        {
                  "en": "They represent different languages",
                  "es": "Representan diferentes idiomas",
                  "de": "Sie repräsentieren verschiedene Sprachen",
                  "nl": "Ze vertegenwoordigen verschillende talen"
        },
        {
                  "en": "They are used only for tokenization",
                  "es": "Se usan solo para tokenización",
                  "de": "Sie werden nur für Tokenisierung verwendet",
                  "nl": "Ze worden alleen gebruikt voor tokenisatie"
        },
        {
                  "en": "They are debugging tokens",
                  "es": "Son tokens de depuración",
                  "de": "Sie sind Debugging-Token",
                  "nl": "Het zijn debugging tokens"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "BERT uses [CLS] at the beginning for sequence-level tasks, [SEP] to separate sentence pairs, and [MASK] during pre-training to hide tokens for the masked language modeling objective.",
                  "es": "BERT usa [CLS] al principio para tareas a nivel de secuencia, [SEP] para separar pares de oraciones, y [MASK] durante preentrenamiento para ocultar tokens para el objetivo de modelado de lenguaje enmascarado.",
                  "de": "BERT verwendet [CLS] am Anfang für Aufgaben auf Sequenzebene, [SEP] um Satzpaare zu trennen, und [MASK] während Vortraining um Token für das maskierte Sprachmodellierungsziel zu verbergen.",
                  "nl": "BERT gebruikt [CLS] aan het begin voor taken op sequentieniveau, [SEP] om zin paren te scheiden, en [MASK] tijdens voortraining om tokens te verbergen voor de gemaskeerde taalmodellering doelstelling."
        }
      },
      {
        question: {
                  "en": "What is the difference between autoregressive and autoencoding language models?",
                  "es": "¿Cuál es la diferencia entre modelos de lenguaje autoregresivos y autocodificadores?",
                  "de": "Was ist der Unterschied zwischen autoregressiven und autokodierenden Sprachmodellen?",
                  "nl": "Wat is het verschil tussen autoregressieve en autoencodende taalmodellen?"
        },
        options: [
        {
                  "en": "The difference is only in their training data",
                  "es": "La diferencia está solo en sus datos de entrenamiento",
                  "de": "Der Unterschied liegt nur in ihren Trainingsdaten",
                  "nl": "Het verschil zit alleen in hun trainingsdata"
        },
        {
                  "en": "Autoregressive models are smaller than autoencoding models",
                  "es": "Modelos autoregresivos son más pequeños que modelos autocodificadores",
                  "de": "Autoregressive Modelle sind kleiner als autokodierenden Modelle",
                  "nl": "Autoregressieve modellen zijn kleiner dan autoencodende modellen"
        },
        {
                  "en": "They are the same type of model",
                  "es": "Son el mismo tipo de modelo",
                  "de": "Sie sind derselbe Modelltyp",
                  "nl": "Het zijn hetzelfde type model"
        },
        {
                  "en": "Autoregressive models predict next tokens sequentially (GPT), autoencoding models reconstruct masked tokens (BERT)",
                  "es": "Modelos autoregresivos predicen próximos tokens secuencialmente (GPT), modelos autocodificadores reconstruyen tokens enmascarados (BERT)",
                  "de": "Autoregressive Modelle sagen nächste Token sequenziell vorher (GPT), autokodierenden Modelle rekonstruieren maskierte Token (BERT)",
                  "nl": "Autoregressieve modellen voorspellen volgende tokens sequentieel (GPT), autoencodende modellen reconstrueren gemaskeerde tokens (BERT)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Autoregressive models like GPT generate text by predicting one token at a time from left to right, while autoencoding models like BERT use bidirectional context to fill in masked tokens.",
                  "es": "Modelos autoregresivos como GPT generan texto prediciendo un token a la vez de izquierda a derecha, mientras modelos autocodificadores como BERT usan contexto bidireccional para llenar tokens enmascarados.",
                  "de": "Autoregressive Modelle wie GPT generieren Text durch Vorhersage eines Tokens nach dem anderen von links nach rechts, während autokodierenden Modelle wie BERT bidirektionalen Kontext verwenden um maskierte Token zu füllen.",
                  "nl": "Autoregressieve modellen zoals GPT genereren tekst door één token tegelijk te voorspellen van links naar rechts, terwijl autoencodende modellen zoals BERT bidirectionele context gebruiken om gemaskeerde tokens in te vullen."
        }
      },
      {
        question: {
                  "en": "What is instruction tuning and how does it differ from standard fine-tuning?",
                  "es": "¿Qué es el ajuste de instrucciones y cómo difiere del ajuste fino estándar?",
                  "de": "Was ist Instruction Tuning und wie unterscheidet es sich von Standard Fine-Tuning?",
                  "nl": "Wat is instruction tuning en hoe verschilt het van standaard fine-tuning?"
        },
        options: [
        {
                  "en": "Fine-tuning with better instructions for developers",
                  "es": "Ajuste fino con mejores instrucciones para desarrolladores",
                  "de": "Fine-Tuning mit besseren Anweisungen für Entwickler",
                  "nl": "Fine-tuning met betere instructies voor ontwikkelaars"
        },
        {
                  "en": "Teaching models programming instructions",
                  "es": "Enseñar a modelos instrucciones de programación",
                  "de": "Modelle Programmierbefehle lehren",
                  "nl": "Modellen programmeerinstructies leren"
        },
        {
                  "en": "A more efficient version of fine-tuning",
                  "es": "Una versión más eficiente de ajuste fino",
                  "de": "Eine effizientere Version von Fine-Tuning",
                  "nl": "Een efficiëntere versie van fine-tuning"
        },
        {
                  "en": "Training models to follow diverse natural language instructions rather than learning specific tasks",
                  "es": "Entrenar modelos para seguir diversas instrucciones en lenguaje natural en lugar de aprender tareas específicas",
                  "de": "Modelle trainieren verschiedene natürlichsprachliche Anweisungen zu befolgen anstatt spezifische Aufgaben zu lernen",
                  "nl": "Modellen trainen om diverse natuurlijke taal instructies te volgen in plaats van specifieke taken te leren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Instruction tuning trains models on diverse instruction-following datasets, enabling them to generalize to new tasks described in natural language without task-specific fine-tuning.",
                  "es": "El ajuste de instrucciones entrena modelos en diversos conjuntos de datos de seguimiento de instrucciones, permitiéndoles generalizar a nuevas tareas descritas en lenguaje natural sin ajuste fino específico de tarea.",
                  "de": "Instruction Tuning trainiert Modelle auf verschiedenen Anweisungsfolge-Datensätzen, ermöglicht ihnen zu neuen in natürlicher Sprache beschriebenen Aufgaben zu generalisieren ohne aufgabenspezifisches Fine-Tuning.",
                  "nl": "Instruction tuning traint modellen op diverse instructie-volgende datasets, waardoor ze kunnen generaliseren naar nieuwe taken beschreven in natuurlijke taal zonder taak-specifieke fine-tuning."
        }
      },
      {
        question: {
                  "en": "What is the role of positional encoding in Transformer architectures?",
                  "es": "¿Cuál es el papel de la codificación posicional en arquitecturas Transformer?",
                  "de": "Was ist die Rolle der Positionskodierung in Transformer-Architekturen?",
                  "nl": "Wat is de rol van positionele encoding in Transformer architecturen?"
        },
        options: [
        {
                  "en": "Encoding the position of words in a dictionary",
                  "es": "Codificar la posición de palabras en un diccionario",
                  "de": "Kodierung der Position von Wörtern in einem Wörterbuch",
                  "nl": "Het coderen van de positie van woorden in een woordenboek"
        },
        {
                  "en": "Representing the physical position of text on a page",
                  "es": "Representar la posición física del texto en una página",
                  "de": "Repräsentation der physischen Position von Text auf einer Seite",
                  "nl": "Het representeren van de fysieke positie van tekst op een pagina"
        },
        {
                  "en": "Storing metadata about token positions",
                  "es": "Almacenar metadatos sobre posiciones de tokens",
                  "de": "Speicherung von Metadaten über Token-Positionen",
                  "nl": "Het opslaan van metadata over token posities"
        },
        {
                  "en": "Providing sequence order information since self-attention is permutation invariant",
                  "es": "Proporcionar información de orden de secuencia ya que la auto-atención es invariante a permutaciones",
                  "de": "Bereitstellung von Sequenzordnungsinformation da Selbstaufmerksamkeit permutationsinvariant ist",
                  "nl": "Het verstrekken van sequentie volgorde informatie omdat zelf-aandacht permutatie invariant is"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Since Transformers process all tokens simultaneously through self-attention (unlike RNNs), positional encodings are added to input embeddings to maintain sequence order information.",
                  "es": "Como los Transformers procesan todos los tokens simultáneamente a través de auto-atención (a diferencia de RNNs), las codificaciones posicionales se agregan a embeddings de entrada para mantener información de orden de secuencia.",
                  "de": "Da Transformers alle Token gleichzeitig durch Selbstaufmerksamkeit verarbeiten (im Gegensatz zu RNNs), werden Positionskodierungen zu Eingabeeinbettungen hinzugefügt um Sequenzordnungsinformation zu erhalten.",
                  "nl": "Omdat Transformers alle tokens tegelijkertijd verwerken door zelf-aandacht (in tegenstelling tot RNNs), worden positionele encodings toegevoegd aan invoer embeddings om sequentie volgorde informatie te behouden."
        }
      },
      {
        question: {
                  "en": "What is model alignment in the context of large language models?",
                  "es": "¿Qué es la alineación de modelos en el contexto de modelos de lenguaje grandes?",
                  "de": "Was ist Modellausrichtung im Kontext großer Sprachmodelle?",
                  "nl": "Wat is model uitlijning in de context van grote taalmodellen?"
        },
        options: [
        {
                  "en": "Synchronizing multiple models to work together",
                  "es": "Sincronizar múltiples modelos para trabajar juntos",
                  "de": "Mehrere Modelle synchronisieren um zusammenzuarbeiten",
                  "nl": "Meerdere modellen synchroniseren om samen te werken"
        },
        {
                  "en": "Aligning model parameters for better performance",
                  "es": "Alinear parámetros del modelo para mejor rendimiento",
                  "de": "Modellparameter für bessere Leistung ausrichten",
                  "nl": "Model parameters uitlijnen voor betere prestaties"
        },
        {
                  "en": "Training models to behave according to human values, preferences, and intentions",
                  "es": "Entrenar modelos para comportarse según valores, preferencias e intenciones humanas",
                  "de": "Modelle trainieren sich nach menschlichen Werten, Präferenzen und Absichten zu verhalten",
                  "nl": "Modellen trainen om zich te gedragen volgens menselijke waarden, voorkeuren en intenties"
        },
        {
                  "en": "Aligning text inputs with model outputs",
                  "es": "Alinear entradas de texto con salidas del modelo",
                  "de": "Texteingaben mit Modellausgaben ausrichten",
                  "nl": "Tekst invoer uitlijnen met model uitvoer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Model alignment ensures AI systems act helpfully, harmlessly, and honestly according to human values. It addresses issues like harmful outputs, misinformation, and unintended behaviors.",
                  "es": "La alineación de modelos asegura que sistemas de IA actúen de manera útil, inofensiva y honesta según valores humanos. Aborda problemas como salidas dañinas, desinformación y comportamientos no deseados.",
                  "de": "Modellausrichtung stellt sicher dass KI-Systeme hilfreich, harmlos und ehrlich nach menschlichen Werten handeln. Es adressiert Probleme wie schädliche Ausgaben, Fehlinformationen und unbeabsichtigte Verhaltensweisen.",
                  "nl": "Model uitlijning zorgt ervoor dat AI systemen behulpzaam, ongevaarlijk en eerlijk handelen volgens menselijke waarden. Het pakt problemen aan zoals schadelijke outputs, misinformatie en onbedoeld gedrag."
        }
      },
      {
        question: {
                  "en": "What are the key components of the GPT architecture?",
                  "es": "¿Cuáles son los componentes clave de la arquitectura GPT?",
                  "de": "Was sind die Schlüsselkomponenten der GPT-Architektur?",
                  "nl": "Wat zijn de belangrijkste componenten van de GPT architectuur?"
        },
        options: [
        {
                  "en": "Recurrent layers with LSTM cells",
                  "es": "Capas recurrentes con celdas LSTM",
                  "de": "Rekurrente Schichten mit LSTM-Zellen",
                  "nl": "Recurrente lagen met LSTM cellen"
        },
        {
                  "en": "Convolutional layers with pooling operations",
                  "es": "Capas convolucionales con operaciones de pooling",
                  "de": "Faltungsschichten mit Pooling-Operationen",
                  "nl": "Convolutionele lagen met pooling operaties"
        },
        {
                  "en": "Decoder-only Transformer blocks with causal self-attention, layer normalization, and feed-forward networks",
                  "es": "Bloques Transformer solo-decoder con auto-atención causal, normalización de capas y redes feed-forward",
                  "de": "Decoder-only Transformer-Blöcke mit kausaler Selbstaufmerksamkeit, Schichtnormalisierung und Feed-Forward-Netzwerken",
                  "nl": "Decoder-only Transformer blokken met causale zelf-aandacht, laag normalisatie en feed-forward netwerken"
        },
        {
                  "en": "Encoder-decoder architecture with bidirectional attention",
                  "es": "Arquitectura encoder-decoder con atención bidireccional",
                  "de": "Encoder-Decoder Architektur mit bidirektionaler Aufmerksamkeit",
                  "nl": "Encoder-decoder architectuur met bidirectionele aandacht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "GPT uses a decoder-only architecture with masked self-attention to prevent looking at future tokens, enabling autoregressive text generation while maintaining the Transformer's parallelizable training.",
                  "es": "GPT usa una arquitectura solo-decoder con auto-atención enmascarada para prevenir mirar tokens futuros, permitiendo generación autoregresiva de texto mientras mantiene entrenamiento paralelizable del Transformer.",
                  "de": "GPT verwendet eine Decoder-only Architektur mit maskierter Selbstaufmerksamkeit um das Betrachten zukünftiger Token zu verhindern, ermöglicht autoregressive Textgenerierung während es die parallelisierbare Schulung des Transformers beibehält.",
                  "nl": "GPT gebruikt een decoder-only architectuur met gemaskeerde zelf-aandacht om het kijken naar toekomstige tokens te voorkomen, maakt autoregressieve tekstgeneratie mogelijk terwijl het de paralleliseerbare training van de Transformer behoudt."
        }
      },
      {
        question: {
                  "en": "What is retrieval-augmented generation (RAG) and how does it enhance language models?",
                  "es": "¿Qué es la generación aumentada por recuperación (RAG) y cómo mejora los modelos de lenguaje?",
                  "de": "Was ist Retrieval-Augmented Generation (RAG) und wie verbessert es Sprachmodelle?",
                  "nl": "Wat is retrieval-augmented generation (RAG) en hoe verbetert het taalmodellen?"
        },
        options: [
        {
                  "en": "Generating random text augmentations",
                  "es": "Generar aumentos de texto aleatorios",
                  "de": "Zufällige Textvergrößerungen generieren",
                  "nl": "Het genereren van willekeurige tekst augmentaties"
        },
        {
                  "en": "Combining pre-trained language models with external knowledge retrieval to ground responses in factual information",
                  "es": "Combinar modelos de lenguaje preentrenados con recuperación de conocimiento externo para fundamentar respuestas en información factual",
                  "de": "Kombination vortrainierter Sprachmodelle mit externer Wissensbeschaffung um Antworten in faktischen Informationen zu verankern",
                  "nl": "Het combineren van voorgetrainde taalmodellen met externe kennisopvraging om reacties te gronden in feitelijke informatie"
        },
        {
                  "en": "Retrieving and storing model parameters",
                  "es": "Recuperar y almacenar parámetros del modelo",
                  "de": "Modellparameter abrufen und speichern",
                  "nl": "Het ophalen en opslaan van model parameters"
        },
        {
                  "en": "A new training algorithm for language models",
                  "es": "Un nuevo algoritmo de entrenamiento para modelos de lenguaje",
                  "de": "Ein neuer Trainingsalgorithmus für Sprachmodelle",
                  "nl": "Een nieuw trainingsalgoritme voor taalmodellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "RAG retrieves relevant documents from external knowledge bases and incorporates them into the generation process, reducing hallucinations and providing access to up-to-date information beyond training data.",
                  "es": "RAG recupera documentos relevantes de bases de conocimiento externas y los incorpora en el proceso de generación, reduciendo alucinaciones y proporcionando acceso a información actualizada más allá de datos de entrenamiento.",
                  "de": "RAG ruft relevante Dokumente aus externen Wissensdatenbanken ab und integriert sie in den Generierungsprozess, reduziert Halluzinationen und bietet Zugang zu aktuellen Informationen jenseits der Trainingsdaten.",
                  "nl": "RAG haalt relevante documenten op uit externe kennisbanken en integreert ze in het generatieproces, vermindert hallucinaties en biedt toegang tot actuele informatie buiten trainingsdata."
        }
      },
      {
        question: {
                  "en": "What is the purpose of layer normalization in Transformer models?",
                  "es": "¿Cuál es el propósito de la normalización de capas en modelos Transformer?",
                  "de": "Was ist der Zweck der Schichtnormalisierung in Transformer-Modellen?",
                  "nl": "Wat is het doel van laag normalisatie in Transformer modellen?"
        },
        options: [
        {
                  "en": "Organizing layers in the correct order",
                  "es": "Organizar capas en el orden correcto",
                  "de": "Schichten in der richtigen Reihenfolge organisieren",
                  "nl": "Lagen in de juiste volgorde organiseren"
        },
        {
                  "en": "Converting layers to standard formats",
                  "es": "Convertir capas a formatos estándar",
                  "de": "Schichten in Standardformate konvertieren",
                  "nl": "Lagen converteren naar standaard formaten"
        },
        {
                  "en": "Reducing the number of parameters in the model",
                  "es": "Reducir el número de parámetros en el modelo",
                  "de": "Reduzierung der Anzahl von Parametern im Modell",
                  "nl": "Het reduceren van het aantal parameters in het model"
        },
        {
                  "en": "Stabilizing training by normalizing activations and enabling deeper networks with residual connections",
                  "es": "Estabilizar entrenamiento normalizando activaciones y permitiendo redes más profundas con conexiones residuales",
                  "de": "Training stabilisieren durch Normalisierung von Aktivierungen und Ermöglichung tieferer Netzwerke mit residualen Verbindungen",
                  "nl": "Training stabiliseren door activaties te normaliseren en diepere netwerken mogelijk maken met residuele verbindingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Layer normalization normalizes inputs across the feature dimension, helping with gradient flow and training stability, which is crucial for the deep architecture of Transformers.",
                  "es": "La normalización de capas normaliza entradas a través de la dimensión de características, ayudando con flujo de gradientes y estabilidad de entrenamiento, lo cual es crucial para la arquitectura profunda de Transformers.",
                  "de": "Schichtnormalisierung normalisiert Eingaben über die Merkmalsdimension, hilft bei Gradientenfluss und Trainingsstabilität, was für die tiefe Architektur von Transformers entscheidend ist.",
                  "nl": "Laag normalisatie normaliseert invoer over de kenmerk dimensie, helpt met gradiënt stroom en training stabiliteit, wat cruciaal is voor de diepe architectuur van Transformers."
        }
      },
      {
        question: {
                  "en": "What is prompt injection and how can it be mitigated?",
                  "es": "¿Qué es la inyección de prompts y cómo se puede mitigar?",
                  "de": "Was ist Prompt Injection und wie kann es gemildert werden?",
                  "nl": "Wat is prompt injection en hoe kan het worden beperkt?"
        },
        options: [
        {
                  "en": "Malicious inputs designed to override system instructions; mitigated through input validation, prompt filtering, and system message protection",
                  "es": "Entradas maliciosas diseñadas para anular instrucciones del sistema; mitigado a través de validación de entrada, filtrado de prompts y protección de mensajes del sistema",
                  "de": "Bösartige Eingaben entworfen um Systembefehle zu überschreiben; gemildert durch Eingabevalidierung, Prompt-Filterung und Systemnachrichten-Schutz",
                  "nl": "Kwaadaardige invoer ontworpen om systeeminstructies te overschrijven; beperkt door invoervalidatie, prompt filtering en systeembericht bescherming"
        },
        {
                  "en": "A technique for improving prompt engineering",
                  "es": "Una técnica para mejorar ingeniería de prompts",
                  "de": "Eine Technik zur Verbesserung von Prompt Engineering",
                  "nl": "Een techniek voor het verbeteren van prompt engineering"
        },
        {
                  "en": "Injecting training data into prompts",
                  "es": "Inyectar datos de entrenamiento en prompts",
                  "de": "Trainingsdaten in Prompts injizieren",
                  "nl": "Trainingsdata injecteren in prompts"
        },
        {
                  "en": "Adding extra prompts to improve model performance",
                  "es": "Agregar prompts extra para mejorar rendimiento del modelo",
                  "de": "Zusätzliche Prompts hinzufügen um Modellleistung zu verbessern",
                  "nl": "Extra prompts toevoegen om modelprestaties te verbeteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Prompt injection attacks attempt to manipulate LLM behavior by embedding malicious instructions in user inputs. Defenses include robust input sanitization, separating user content from system instructions, and implementing security boundaries.",
                  "es": "Los ataques de inyección de prompts intentan manipular el comportamiento de LLM incrustando instrucciones maliciosas en entradas de usuario. Las defensas incluyen sanitización robusta de entrada, separar contenido de usuario de instrucciones del sistema e implementar límites de seguridad.",
                  "de": "Prompt Injection Angriffe versuchen LLM-Verhalten zu manipulieren durch Einbettung bösartiger Anweisungen in Benutzereingaben. Verteidigungen umfassen robuste Eingabereinigung, Trennung von Benutzerinhalten von Systembefehlen und Implementierung von Sicherheitsgrenzen.",
                  "nl": "Prompt injection aanvallen proberen LLM gedrag te manipuleren door kwaadaardige instructies in gebruikersinvoer in te bedden. Verdedigingen omvatten robuuste invoer sanitatie, het scheiden van gebruikersinhoud van systeeminstructies en het implementeren van beveiligingsgrenzen."
        }
      },
      {
        question: {
                  "en": "What is the difference between BERT-base and BERT-large?",
                  "es": "¿Cuál es la diferencia entre BERT-base y BERT-large?",
                  "de": "Was ist der Unterschied zwischen BERT-base und BERT-large?",
                  "nl": "Wat is het verschil tussen BERT-base en BERT-large?"
        },
        options: [
        {
                  "en": "There is no significant difference",
                  "es": "No hay diferencia significativa",
                  "de": "Es gibt keinen signifikanten Unterschied",
                  "nl": "Er is geen significant verschil"
        },
        {
                  "en": "BERT-large has different training objectives",
                  "es": "BERT-large tiene diferentes objetivos de entrenamiento",
                  "de": "BERT-large hat verschiedene Trainingsziele",
                  "nl": "BERT-large heeft verschillende trainingsdoelstellingen"
        },
        {
                  "en": "BERT-large supports more languages",
                  "es": "BERT-large soporta más idiomas",
                  "de": "BERT-large unterstützt mehr Sprachen",
                  "nl": "BERT-large ondersteunt meer talen"
        },
        {
                  "en": "BERT-large has more layers (24 vs 12), larger hidden size (1024 vs 768), and more attention heads (16 vs 12)",
                  "es": "BERT-large tiene más capas (24 vs 12), tamaño oculto más grande (1024 vs 768) y más cabezas de atención (16 vs 12)",
                  "de": "BERT-large hat mehr Schichten (24 vs 12), größere versteckte Größe (1024 vs 768) und mehr Aufmerksamkeitsköpfe (16 vs 12)",
                  "nl": "BERT-large heeft meer lagen (24 vs 12), grotere verborgen grootte (1024 vs 768) en meer aandacht hoofden (16 vs 12)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "BERT-large is a scaled-up version with double the layers, larger hidden dimensions, and more attention heads, resulting in 340M parameters compared to BERT-base's 110M parameters, generally achieving better performance.",
                  "es": "BERT-large es una versión escalada con el doble de capas, dimensiones ocultas más grandes y más cabezas de atención, resultando en 340M parámetros comparado con los 110M parámetros de BERT-base, generalmente logrando mejor rendimiento.",
                  "de": "BERT-large ist eine skalierte Version mit doppelt so vielen Schichten, größeren versteckten Dimensionen und mehr Aufmerksamkeitsköpfen, resultiert in 340M Parametern verglichen mit BERT-base's 110M Parametern, erreicht generell bessere Leistung.",
                  "nl": "BERT-large is een opgeschaalde versie met dubbel zoveel lagen, grotere verborgen dimensies en meer aandacht hoofden, resulterend in 340M parameters vergeleken met BERT-base's 110M parameters, behaalt over het algemeen betere prestaties."
        }
      },
      {
        question: {
                  "en": "What is temperature in the context of text generation and how does it affect output?",
                  "es": "¿Qué es la temperatura en el contexto de generación de texto y cómo afecta la salida?",
                  "de": "Was ist Temperatur im Kontext der Textgenerierung und wie beeinflusst sie die Ausgabe?",
                  "nl": "Wat is temperatuur in de context van tekstgeneratie en hoe beïnvloedt het de output?"
        },
        options: [
        {
                  "en": "The training temperature of the model",
                  "es": "La temperatura de entrenamiento del modelo",
                  "de": "Die Trainingstemperatur des Modells",
                  "nl": "De trainingstemperatuur van het model"
        },
        {
                  "en": "The computational heat generated during inference",
                  "es": "El calor computacional generado durante inferencia",
                  "de": "Die rechnerische Wärme die während Inferenz generiert wird",
                  "nl": "De computationele warmte gegenereerd tijdens inferentie"
        },
        {
                  "en": "A parameter controlling randomness in sampling; lower values make output more deterministic, higher values more creative",
                  "es": "Un parámetro que controla aleatoriedad en muestreo; valores más bajos hacen salida más determinista, valores más altos más creativa",
                  "de": "Ein Parameter der Zufälligkeit beim Sampling kontrolliert; niedrigere Werte machen Ausgabe deterministischer, höhere Werte kreativer",
                  "nl": "Een parameter die willekeurigheid in sampling controleert; lagere waarden maken output deterministischer, hogere waarden creatiever"
        },
        {
                  "en": "The speed of text generation",
                  "es": "La velocidad de generación de texto",
                  "de": "Die Geschwindigkeit der Textgenerierung",
                  "nl": "De snelheid van tekstgeneratie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Temperature scales the logits before applying softmax during sampling. Temperature of 0 gives deterministic outputs, 1.0 preserves original probabilities, and higher values increase randomness and creativity.",
                  "es": "La temperatura escala los logits antes de aplicar softmax durante muestreo. Temperatura de 0 da salidas deterministas, 1.0 preserva probabilidades originales, y valores más altos aumentan aleatoriedad y creatividad.",
                  "de": "Temperatur skaliert die Logits vor Anwendung von Softmax während Sampling. Temperatur von 0 gibt deterministische Ausgaben, 1.0 bewahrt ursprüngliche Wahrscheinlichkeiten, und höhere Werte erhöhen Zufälligkeit und Kreativität.",
                  "nl": "Temperatuur schaalt de logits voor het toepassen van softmax tijdens sampling. Temperatuur van 0 geeft deterministische outputs, 1.0 behoudt originele waarschijnlijkheden, en hogere waarden verhogen willekeurigheid en creativiteit."
        }
      },
      {
        question: {
                  "en": "What is top-k sampling in text generation?",
                  "es": "¿Qué es el muestreo top-k en generación de texto?",
                  "de": "Was ist Top-k Sampling in der Textgenerierung?",
                  "nl": "Wat is top-k sampling in tekstgeneratie?"
        },
        options: [
        {
                  "en": "Selecting k random words from vocabulary",
                  "es": "Seleccionar k palabras aleatorias del vocabulario",
                  "de": "K zufällige Wörter aus dem Vokabular wählen",
                  "nl": "K willekeurige woorden uit vocabulaire selecteren"
        },
        {
                  "en": "Restricting sampling to the k most probable next tokens to balance diversity and quality",
                  "es": "Restringir muestreo a los k tokens siguientes más probables para equilibrar diversidad y calidad",
                  "de": "Sampling auf die k wahrscheinlichsten nächsten Tokens beschränken um Diversität und Qualität auszubalancieren",
                  "nl": "Sampling beperken tot de k meest waarschijnlijke volgende tokens om diversiteit en kwaliteit te balanceren"
        },
        {
                  "en": "Taking the k best training examples",
                  "es": "Tomar los k mejores ejemplos de entrenamiento",
                  "de": "Die k besten Trainingsbeispiele nehmen",
                  "nl": "De k beste trainingsvoorbeelden nemen"
        },
        {
                  "en": "Sampling from the top layer of the model",
                  "es": "Muestrear de la capa superior del modelo",
                  "de": "Aus der obersten Schicht des Modells samplen",
                  "nl": "Samplen uit de bovenste laag van het model"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Top-k sampling limits the model to choosing from only the k highest probability tokens at each step, preventing selection of very low-probability words while maintaining some diversity. Common k values are 40-50.",
                  "es": "El muestreo top-k limita el modelo a elegir solo de los k tokens de probabilidad más alta en cada paso, previniendo selección de palabras de probabilidad muy baja mientras mantiene algo de diversidad. Valores comunes de k son 40-50.",
                  "de": "Top-k Sampling begrenzt das Modell darauf nur aus den k Tokens mit höchster Wahrscheinlichkeit bei jedem Schritt zu wählen, verhindert Auswahl sehr niedriger Wahrscheinlichkeitswörter während etwas Diversität beibehalten wird. Übliche k-Werte sind 40-50.",
                  "nl": "Top-k sampling beperkt het model tot het kiezen uit alleen de k hoogste waarschijnlijkheidstokens bij elke stap, voorkomt selectie van zeer lage waarschijnlijkheidswoorden terwijl enige diversiteit behouden blijft. Gebruikelijke k-waarden zijn 40-50."
        }
      },
      {
        question: {
                  "en": "What is nucleus (top-p) sampling and how does it differ from top-k?",
                  "es": "¿Qué es el muestreo nucleus (top-p) y cómo difiere de top-k?",
                  "de": "Was ist Nucleus (Top-p) Sampling und wie unterscheidet es sich von Top-k?",
                  "nl": "Wat is nucleus (top-p) sampling en hoe verschilt het van top-k?"
        },
        options: [
        {
                  "en": "Selects from the smallest set of tokens whose cumulative probability exceeds threshold p, adapting dynamically to probability distribution",
                  "es": "Selecciona del conjunto más pequeño de tokens cuya probabilidad acumulativa excede umbral p, adaptándose dinámicamente a distribución de probabilidad",
                  "de": "Wählt aus der kleinsten Menge von Tokens deren kumulative Wahrscheinlichkeit Schwelle p überschreitet, passt sich dynamisch an Wahrscheinlichkeitsverteilung an",
                  "nl": "Selecteert uit de kleinste set tokens waarvan cumulatieve waarschijnlijkheid drempel p overschrijdt, past zich dynamisch aan aan waarschijnlijkheidsverdeling"
        },
        {
                  "en": "Samples from the nucleus (center) of the model",
                  "es": "Muestrea del núcleo (centro) del modelo",
                  "de": "Sampelt aus dem Kern (Zentrum) des Modells",
                  "nl": "Samplet uit de nucleus (kern) van het model"
        },
        {
                  "en": "Focuses on the most important parameters only",
                  "es": "Se enfoca solo en los parámetros más importantes",
                  "de": "Fokussiert nur auf die wichtigsten Parameter",
                  "nl": "Richt zich alleen op de belangrijkste parameters"
        },
        {
                  "en": "It's exactly the same as top-k sampling",
                  "es": "Es exactamente lo mismo que muestreo top-k",
                  "de": "Es ist genau dasselbe wie Top-k Sampling",
                  "nl": "Het is precies hetzelfde als top-k sampling"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Nucleus sampling (p=0.9 is common) dynamically adjusts the candidate set size based on the probability distribution, including more tokens when probabilities are spread out and fewer when concentrated, providing more flexible control than fixed top-k.",
                  "es": "El muestreo nucleus (p=0.9 es común) ajusta dinámicamente el tamaño del conjunto candidato basado en la distribución de probabilidad, incluyendo más tokens cuando probabilidades están dispersas y menos cuando concentradas, proporcionando control más flexible que top-k fijo.",
                  "de": "Nucleus Sampling (p=0.9 ist üblich) passt die Kandidatenmenge dynamisch basierend auf der Wahrscheinlichkeitsverteilung an, schließt mehr Tokens ein wenn Wahrscheinlichkeiten verteilt sind und weniger wenn konzentriert, bietet flexiblere Kontrolle als festes Top-k.",
                  "nl": "Nucleus sampling (p=0.9 is gebruikelijk) past de kandidatenset dynamisch aan op basis van de waarschijnlijkheidsverdeling, omvat meer tokens wanneer waarschijnlijkheden verspreid zijn en minder wanneer geconcentreerd, biedt flexibeler controle dan vaste top-k."
        }
      },
      {
        question: {
                  "en": "What is model quantization and why is it important for deploying LLMs?",
                  "es": "¿Qué es la cuantización de modelos y por qué es importante para desplegar LLMs?",
                  "de": "Was ist Modellquantisierung und warum ist sie wichtig für die Bereitstellung von LLMs?",
                  "nl": "Wat is modelkwantisatie en waarom is het belangrijk voor het implementeren van LLMs?"
        },
        options: [
        {
                  "en": "Counting the number of parameters in the model",
                  "es": "Contar el número de parámetros en el modelo",
                  "de": "Die Anzahl der Parameter im Modell zählen",
                  "nl": "Het aantal parameters in het model tellen"
        },
        {
                  "en": "Reducing model precision from FP32 to lower-bit representations (INT8, INT4) to decrease memory and computational requirements",
                  "es": "Reducir precisión del modelo de FP32 a representaciones de menor bit (INT8, INT4) para disminuir requisitos de memoria y computación",
                  "de": "Modellpräzision von FP32 auf niedrigere Bit-Repräsentationen (INT8, INT4) reduzieren um Speicher- und Rechenanforderungen zu verringern",
                  "nl": "Modelprecisie verminderen van FP32 naar lagere-bit representaties (INT8, INT4) om geheugen- en computationele vereisten te verlagen"
        },
        {
                  "en": "Measuring model performance quantitatively",
                  "es": "Medir rendimiento del modelo cuantitativamente",
                  "de": "Modellleistung quantitativ messen",
                  "nl": "Modelprestaties kwantitatief meten"
        },
        {
                  "en": "Converting models to quantum computing format",
                  "es": "Convertir modelos a formato de computación cuántica",
                  "de": "Modelle in Quantencomputing-Format konvertieren",
                  "nl": "Modellen converteren naar kwantumcomputing formaat"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Quantization reduces the numerical precision of model weights and activations from 32-bit floating point to 8-bit or 4-bit integers, enabling 4-8x smaller models with faster inference and lower memory usage, often with minimal accuracy loss.",
                  "es": "La cuantización reduce la precisión numérica de pesos y activaciones del modelo de punto flotante de 32 bits a enteros de 8 o 4 bits, permitiendo modelos 4-8x más pequeños con inferencia más rápida y menor uso de memoria, a menudo con pérdida mínima de precisión.",
                  "de": "Quantisierung reduziert die numerische Präzision von Modellgewichten und Aktivierungen von 32-Bit Gleitkomma auf 8-Bit oder 4-Bit Ganzzahlen, ermöglicht 4-8x kleinere Modelle mit schnellerer Inferenz und geringerem Speicherverbrauch, oft mit minimalem Genauigkeitsverlust.",
                  "nl": "Kwantisatie vermindert de numerieke precisie van modelgewichten en activaties van 32-bit floating point naar 8-bit of 4-bit integers, maakt 4-8x kleinere modellen mogelijk met snellere inferentie en lager geheugengebruik, vaak met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
                  "en": "What is LoRA (Low-Rank Adaptation) and how does it enable efficient fine-tuning?",
                  "es": "¿Qué es LoRA (Adaptación de Rango Bajo) y cómo permite ajuste fino eficiente?",
                  "de": "Was ist LoRA (Low-Rank Adaptation) und wie ermöglicht es effizientes Fine-Tuning?",
                  "nl": "Wat is LoRA (Low-Rank Adaptation) en hoe maakt het efficiënte fine-tuning mogelijk?"
        },
        options: [
        {
                  "en": "A new architecture for language models",
                  "es": "Una nueva arquitectura para modelos de lenguaje",
                  "de": "Eine neue Architektur für Sprachmodelle",
                  "nl": "Een nieuwe architectuur voor taalmodellen"
        },
        {
                  "en": "A compression technique for vocabulary",
                  "es": "Una técnica de compresión para vocabulario",
                  "de": "Eine Kompressionstechnik für Vokabular",
                  "nl": "Een compressietechniek voor vocabulaire"
        },
        {
                  "en": "Low-rank approximation of attention matrices",
                  "es": "Aproximación de rango bajo de matrices de atención",
                  "de": "Niedrig-Rang Approximation von Aufmerksamkeitsmatrizen",
                  "nl": "Low-rank benadering van aandacht matrices"
        },
        {
                  "en": "Training small low-rank matrices that adapt frozen pre-trained weights, requiring only a fraction of parameters to update",
                  "es": "Entrenar pequeñas matrices de rango bajo que adaptan pesos pre-entrenados congelados, requiriendo solo una fracción de parámetros para actualizar",
                  "de": "Kleine niedrig-rang Matrizen trainieren die gefrorene vortrainierte Gewichte anpassen, erfordert nur einen Bruchteil von Parametern zum Aktualisieren",
                  "nl": "Kleine low-rank matrices trainen die bevroren voorgetrainde gewichten aanpassen, vereist alleen een fractie van parameters om bij te werken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "LoRA freezes pre-trained model weights and injects trainable low-rank decomposition matrices into each layer, reducing trainable parameters by 10,000x while maintaining comparable performance. This enables fine-tuning large models on consumer hardware.",
                  "es": "LoRA congela pesos del modelo pre-entrenado e inyecta matrices de descomposición de rango bajo entrenables en cada capa, reduciendo parámetros entrenables en 10,000x mientras mantiene rendimiento comparable. Esto permite ajustar modelos grandes en hardware de consumidor.",
                  "de": "LoRA friert vortrainierte Modellgewichte ein und injiziert trainierbare niedrig-Rang Zerlegungsmatrizen in jede Schicht, reduziert trainierbare Parameter um 10.000x während vergleichbare Leistung beibehalten wird. Dies ermöglicht Fine-Tuning großer Modelle auf Consumer-Hardware.",
                  "nl": "LoRA bevriest voorgetrainde modelgewichten en injecteert trainbare low-rank decompositie matrices in elke laag, vermindert trainbare parameters met 10.000x terwijl vergelijkbare prestaties behouden blijven. Dit maakt fine-tuning van grote modellen op consumenten hardware mogelijk."
        }
      },
      {
        question: {
                  "en": "What is flash attention and why is it important?",
                  "es": "¿Qué es la atención flash y por qué es importante?",
                  "de": "Was ist Flash Attention und warum ist sie wichtig?",
                  "nl": "Wat is flash attention en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "An optimized attention algorithm that reduces memory I/O to dramatically speed up training and enable longer context windows",
                  "es": "Un algoritmo de atención optimizado que reduce I/O de memoria para acelerar dramáticamente entrenamiento y permitir ventanas de contexto más largas",
                  "de": "Ein optimierter Aufmerksamkeitsalgorithmus der Speicher-I/O reduziert um Training dramatisch zu beschleunigen und längere Kontextfenster zu ermöglichen",
                  "nl": "Een geoptimaliseerd aandachtsalgoritme dat geheugen I/O vermindert om training dramatisch te versnellen en langere contextvensters mogelijk te maken"
        },
        {
                  "en": "Very fast attention computation",
                  "es": "Computación de atención muy rápida",
                  "de": "Sehr schnelle Aufmerksamkeitsberechnung",
                  "nl": "Zeer snelle aandachtberekening"
        },
        {
                  "en": "Attention that activates instantaneously",
                  "es": "Atención que se activa instantáneamente",
                  "de": "Aufmerksamkeit die sofort aktiviert",
                  "nl": "Aandacht die onmiddellijk activeert"
        },
        {
                  "en": "Sparse attention with caching",
                  "es": "Atención dispersa con caché",
                  "de": "Spärliche Aufmerksamkeit mit Caching",
                  "nl": "Sparse aandacht met caching"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "FlashAttention reorganizes attention computation to minimize memory reads/writes between GPU HBM and SRAM, achieving 2-4x speedup and enabling training with sequences up to 64K tokens. This makes training large models more efficient and accessible.",
                  "es": "FlashAttention reorganiza computación de atención para minimizar lecturas/escrituras de memoria entre HBM y SRAM de GPU, logrando aceleración de 2-4x y permitiendo entrenamiento con secuencias hasta 64K tokens. Esto hace entrenamiento de modelos grandes más eficiente y accesible.",
                  "de": "FlashAttention reorganisiert Aufmerksamkeitsberechnung um Speicherlesungen/-schreibungen zwischen GPU HBM und SRAM zu minimieren, erreicht 2-4x Beschleunigung und ermöglicht Training mit Sequenzen bis zu 64K Tokens. Dies macht Training großer Modelle effizienter und zugänglicher.",
                  "nl": "FlashAttention reorganiseert aandachtberekening om geheugenleesacties/-schrijfacties tussen GPU HBM en SRAM te minimaliseren, behaalt 2-4x versnelling en maakt training mogelijk met sequenties tot 64K tokens. Dit maakt training van grote modellen efficiënter en toegankelijker."
        }
      },
      {
        question: {
                  "en": "What is mixture of experts (MoE) in large language models?",
                  "es": "¿Qué es la mezcla de expertos (MoE) en modelos de lenguaje grandes?",
                  "de": "Was ist Mixture of Experts (MoE) in großen Sprachmodellen?",
                  "nl": "Wat is mixture of experts (MoE) in grote taalmodellen?"
        },
        options: [
        {
                  "en": "An architecture with multiple specialized sub-networks where a gating mechanism routes inputs to relevant experts",
                  "es": "Una arquitectura con múltiples sub-redes especializadas donde un mecanismo de puerta enruta entradas a expertos relevantes",
                  "de": "Eine Architektur mit mehreren spezialisierten Sub-Netzwerken wo ein Gating-Mechanismus Eingaben zu relevanten Experten leitet",
                  "nl": "Een architectuur met meerdere gespecialiseerde sub-netwerken waarbij een gating-mechanisme invoer routeert naar relevante experts"
        },
        {
                  "en": "Using human experts to improve models",
                  "es": "Usar expertos humanos para mejorar modelos",
                  "de": "Menschliche Experten verwenden um Modelle zu verbessern",
                  "nl": "Menselijke experts gebruiken om modellen te verbeteren"
        },
        {
                  "en": "Combining predictions from multiple separate models",
                  "es": "Combinar predicciones de múltiples modelos separados",
                  "de": "Vorhersagen von mehreren separaten Modellen kombinieren",
                  "nl": "Voorspellingen combineren van meerdere afzonderlijke modellen"
        },
        {
                  "en": "Training different experts on different languages",
                  "es": "Entrenar diferentes expertos en diferentes idiomas",
                  "de": "Verschiedene Experten auf verschiedenen Sprachen trainieren",
                  "nl": "Verschillende experts trainen op verschillende talen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "MoE models like Switch Transformer and GPT-4 (reportedly) use sparse activation where only a few expert networks process each token, enabling massive parameter counts while keeping computational cost manageable. This allows models to specialize in different tasks or domains.",
                  "es": "Los modelos MoE como Switch Transformer y GPT-4 (supuestamente) usan activación dispersa donde solo unas pocas redes expertas procesan cada token, permitiendo conteos masivos de parámetros mientras mantienen costo computacional manejable. Esto permite que modelos se especialicen en diferentes tareas o dominios.",
                  "de": "MoE-Modelle wie Switch Transformer und GPT-4 (angeblich) verwenden spärliche Aktivierung wo nur wenige Experten-Netzwerke jeden Token verarbeiten, ermöglicht massive Parameterzahlen während Rechenkosten handhabbar bleiben. Dies ermöglicht Modellen sich auf verschiedene Aufgaben oder Domänen zu spezialisieren.",
                  "nl": "MoE-modellen zoals Switch Transformer en GPT-4 (naar verluidt) gebruiken sparse activatie waarbij slechts enkele expert-netwerken elk token verwerken, maakt massale parameterhoeveelheden mogelijk terwijl computationele kosten beheersbaar blijven. Dit stelt modellen in staat te specialiseren in verschillende taken of domeinen."
        }
      },
      {
        question: {
                  "en": "What is in-context learning in large language models?",
                  "es": "¿Qué es el aprendizaje en contexto en modelos de lenguaje grandes?",
                  "de": "Was ist In-Context Learning in großen Sprachmodellen?",
                  "nl": "Wat is in-context learning in grote taalmodellen?"
        },
        options: [
        {
                  "en": "Context window optimization",
                  "es": "Optimización de ventana de contexto",
                  "de": "Kontextfenster-Optimierung",
                  "nl": "Contextvenster optimalisatie"
        },
        {
                  "en": "Training on conversational data",
                  "es": "Entrenar en datos conversacionales",
                  "de": "Auf Gesprächsdaten trainieren",
                  "nl": "Trainen op conversationele gegevens"
        },
        {
                  "en": "The ability to perform new tasks by providing examples in the prompt without updating model parameters",
                  "es": "La capacidad de realizar nuevas tareas proporcionando ejemplos en el prompt sin actualizar parámetros del modelo",
                  "de": "Die Fähigkeit neue Aufgaben auszuführen durch Bereitstellen von Beispielen im Prompt ohne Modellparameter zu aktualisieren",
                  "nl": "Het vermogen om nieuwe taken uit te voeren door voorbeelden in de prompt te geven zonder modelparameters bij te werken"
        },
        {
                  "en": "Learning from the surrounding context of words",
                  "es": "Aprender del contexto circundante de palabras",
                  "de": "Aus dem umgebenden Kontext von Wörtern lernen",
                  "nl": "Leren van de omringende context van woorden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In-context learning emerges in large language models, enabling few-shot or zero-shot task performance by including task demonstrations in the prompt. The model learns the pattern from examples without gradient updates, showcasing remarkable generalization abilities.",
                  "es": "El aprendizaje en contexto emerge en modelos de lenguaje grandes, permitiendo rendimiento de tareas de pocos o cero ejemplos incluyendo demostraciones de tareas en el prompt. El modelo aprende el patrón de ejemplos sin actualizaciones de gradiente, mostrando capacidades de generalización notables.",
                  "de": "In-Context Learning entsteht in großen Sprachmodellen, ermöglicht Few-Shot oder Zero-Shot Aufgabenleistung durch Einbeziehen von Aufgaben-Demonstrationen im Prompt. Das Modell lernt das Muster aus Beispielen ohne Gradientenaktualisierungen, zeigt bemerkenswerte Generalisierungsfähigkeiten.",
                  "nl": "In-context learning ontstaat in grote taalmodellen, maakt few-shot of zero-shot taakprestaties mogelijk door taakdemonstraties op te nemen in de prompt. Het model leert het patroon uit voorbeelden zonder gradiënt updates, toont opmerkelijke generalisatiecapaciteiten."
        }
      },
      {
        question: {
                  "en": "What is constitutional AI and how does it improve alignment?",
                  "es": "¿Qué es la IA constitucional y cómo mejora la alineación?",
                  "de": "Was ist Constitutional AI und wie verbessert sie Alignment?",
                  "nl": "Wat is constitutional AI en hoe verbetert het alignment?"
        },
        options: [
        {
                  "en": "Constitutional frameworks for AI governance",
                  "es": "Marcos constitucionales para gobernanza de IA",
                  "de": "Verfassungsrahmen für KI-Governance",
                  "nl": "Constitutionele kaders voor AI-governance"
        },
        {
                  "en": "AI systems based on legal constitutions",
                  "es": "Sistemas de IA basados en constituciones legales",
                  "de": "KI-Systeme basierend auf rechtlichen Verfassungen",
                  "nl": "AI-systemen gebaseerd op juridische constituties"
        },
        {
                  "en": "Training models to critique and revise their own outputs according to constitutional principles without human feedback on each revision",
                  "es": "Entrenar modelos para criticar y revisar sus propias salidas según principios constitucionales sin retroalimentación humana en cada revisión",
                  "de": "Modelle trainieren um ihre eigenen Ausgaben gemäß konstitutionellen Prinzipien zu kritisieren und zu revidieren ohne menschliches Feedback bei jeder Revision",
                  "nl": "Modellen trainen om hun eigen outputs te bekritiseren en herzien volgens constitutionele principes zonder menselijke feedback bij elke herziening"
        },
        {
                  "en": "Human-written rules for AI behavior",
                  "es": "Reglas escritas por humanos para comportamiento de IA",
                  "de": "Von Menschen geschriebene Regeln für KI-Verhalten",
                  "nl": "Door mensen geschreven regels voor AI-gedrag"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Constitutional AI (CAI), developed by Anthropic, trains models using self-improvement: the model generates responses, critiques them against principles (constitution), revises them, and learns from revised versions. This enables scalable oversight without labeling every interaction.",
                  "es": "La IA constitucional (CAI), desarrollada por Anthropic, entrena modelos usando auto-mejora: el modelo genera respuestas, las critica contra principios (constitución), las revisa y aprende de versiones revisadas. Esto permite supervisión escalable sin etiquetar cada interacción.",
                  "de": "Constitutional AI (CAI), entwickelt von Anthropic, trainiert Modelle mit Selbstverbesserung: das Modell generiert Antworten, kritisiert sie gegen Prinzipien (Verfassung), revidiert sie und lernt von revidierten Versionen. Dies ermöglicht skalierbare Aufsicht ohne jede Interaktion zu labeln.",
                  "nl": "Constitutional AI (CAI), ontwikkeld door Anthropic, traint modellen met zelfverbetering: het model genereert reacties, bekritiseert ze tegen principes (constitutie), herziet ze en leert van herziene versies. Dit maakt schaalbaar toezicht mogelijk zonder elke interactie te labelen."
        }
      },
      {
        question: {
                  "en": "What is retrieval-augmented generation (RAG) and why is it valuable?",
                  "es": "¿Qué es la generación aumentada por recuperación (RAG) y por qué es valiosa?",
                  "de": "Was ist Retrieval-Augmented Generation (RAG) und warum ist sie wertvoll?",
                  "nl": "Wat is retrieval-augmented generation (RAG) en waarom is het waardevol?"
        },
        options: [
        {
                  "en": "Combining language models with document retrieval to ground responses in external knowledge and reduce hallucinations",
                  "es": "Combinar modelos de lenguaje con recuperación de documentos para fundamentar respuestas en conocimiento externo y reducir alucinaciones",
                  "de": "Sprachmodelle mit Dokumentenabruf kombinieren um Antworten in externem Wissen zu verankern und Halluzinationen zu reduzieren",
                  "nl": "Taalmodellen combineren met documentopvraging om reacties te verankeren in externe kennis en hallucinaties te verminderen"
        },
        {
                  "en": "Augmenting training data through retrieval",
                  "es": "Aumentar datos de entrenamiento mediante recuperación",
                  "de": "Trainingsdaten durch Abruf augmentieren",
                  "nl": "Trainingsgegevens versterken door opvraging"
        },
        {
                  "en": "Generating synthetic retrieval datasets",
                  "es": "Generar conjuntos de datos de recuperación sintéticos",
                  "de": "Synthetische Abrufdatensätze generieren",
                  "nl": "Synthetische opvragingsdatasets genereren"
        },
        {
                  "en": "Random augmentation during generation",
                  "es": "Aumentación aleatoria durante generación",
                  "de": "Zufällige Augmentierung während Generierung",
                  "nl": "Willekeurige augmentatie tijdens generatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "RAG retrieves relevant documents from a knowledge base before generation, providing factual grounding for the model's responses. This enables up-to-date information, source attribution, and reduced hallucinations without retraining the model.",
                  "es": "RAG recupera documentos relevantes de una base de conocimiento antes de generación, proporcionando base factual para respuestas del modelo. Esto permite información actualizada, atribución de fuentes y alucinaciones reducidas sin reentrenar el modelo.",
                  "de": "RAG ruft relevante Dokumente aus einer Wissensbasis vor Generierung ab, bietet faktische Grundlage für Modellantworten. Dies ermöglicht aktuelle Informationen, Quellenattribution und reduzierte Halluzinationen ohne Modell neu zu trainieren.",
                  "nl": "RAG haalt relevante documenten op uit een kennisbasis vóór generatie, biedt feitelijke fundering voor de reacties van het model. Dit maakt actuele informatie mogelijk, bronvermelding en verminderde hallucinaties zonder het model opnieuw te trainen."
        }
      },
      {
        question: {
                  "en": "What is model alignment in AI safety?",
                  "es": "¿Qué es la alineación de modelos en seguridad de IA?",
                  "de": "Was ist Model Alignment in KI-Sicherheit?",
                  "nl": "Wat is model alignment in AI-veiligheid?"
        },
        options: [
        {
                  "en": "Synchronizing multiple models",
                  "es": "Sincronizar múltiples modelos",
                  "de": "Mehrere Modelle synchronisieren",
                  "nl": "Meerdere modellen synchroniseren"
        },
        {
                  "en": "Aligning model parameters during training",
                  "es": "Alinear parámetros del modelo durante entrenamiento",
                  "de": "Modellparameter während Training ausrichten",
                  "nl": "Modelparameters uitlijnen tijdens training"
        },
        {
                  "en": "Ensuring AI systems behave according to human values, intentions, and ethical principles",
                  "es": "Asegurar que sistemas de IA se comporten según valores humanos, intenciones y principios éticos",
                  "de": "Sicherstellen dass KI-Systeme sich gemäß menschlichen Werten, Absichten und ethischen Prinzipien verhalten",
                  "nl": "Ervoor zorgen dat AI-systemen zich gedragen volgens menselijke waarden, intenties en ethische principes"
        },
        {
                  "en": "Matching model outputs to training labels",
                  "es": "Hacer coincidir salidas del modelo con etiquetas de entrenamiento",
                  "de": "Modellausgaben mit Trainings-Labels abgleichen",
                  "nl": "Modeluitvoer matchen met trainingslabels"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Model alignment addresses the challenge of making AI systems helpful, harmless, and honest. Techniques include RLHF (reinforcement learning from human feedback), constitutional AI, and red teaming to ensure models behave as intended and avoid harmful outputs.",
                  "es": "La alineación de modelos aborda el desafío de hacer sistemas de IA útiles, inofensivos y honestos. Las técnicas incluyen RLHF (aprendizaje por refuerzo desde retroalimentación humana), IA constitucional y equipos rojos para asegurar que modelos se comporten según lo previsto y eviten salidas dañinas.",
                  "de": "Model Alignment adressiert die Herausforderung KI-Systeme hilfreich, harmlos und ehrlich zu machen. Techniken umfassen RLHF (Reinforcement Learning from Human Feedback), Constitutional AI und Red Teaming um sicherzustellen dass Modelle sich wie beabsichtigt verhalten und schädliche Ausgaben vermeiden.",
                  "nl": "Model alignment pakt de uitdaging aan om AI-systemen behulpzaam, onschadelijk en eerlijk te maken. Technieken omvatten RLHF (reinforcement learning from human feedback), constitutional AI en red teaming om ervoor te zorgen dat modellen zich gedragen zoals bedoeld en schadelijke outputs vermijden."
        }
      },
      {
        question: {
                  "en": "What is the scaling hypothesis in language models?",
                  "es": "¿Qué es la hipótesis de escala en modelos de lenguaje?",
                  "de": "Was ist die Scaling-Hypothese in Sprachmodellen?",
                  "nl": "Wat is de scaling hypothese in taalmodellen?"
        },
        options: [
        {
                  "en": "The observation that model capabilities improve predictably with increases in parameters, data, and compute",
                  "es": "La observación de que capacidades del modelo mejoran predeciblemente con aumentos en parámetros, datos y cómputo",
                  "de": "Die Beobachtung dass Modellfähigkeiten vorhersagbar mit Erhöhungen in Parametern, Daten und Rechenleistung verbessern",
                  "nl": "De observatie dat modelcapaciteiten voorspelbaar verbeteren met verhogingen in parameters, data en rekenkracht"
        },
        {
                  "en": "Scaling model outputs to match targets",
                  "es": "Escalar salidas del modelo para coincidir con objetivos",
                  "de": "Modellausgaben skalieren um Ziele zu matchen",
                  "nl": "Modeluitvoer schalen om doelen te matchen"
        },
        {
                  "en": "Hypothesis about optimal model size",
                  "es": "Hipótesis sobre tamaño óptimo del modelo",
                  "de": "Hypothese über optimale Modellgröße",
                  "nl": "Hypothese over optimale modelgrootte"
        },
        {
                  "en": "Theory about scaling training speed",
                  "es": "Teoría sobre escalar velocidad de entrenamiento",
                  "de": "Theorie über Skalierung der Trainingsgeschwindigkeit",
                  "nl": "Theorie over schalen van trainingssnelheid"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Scaling laws show that loss decreases predictably as a power law with model size, dataset size, and compute budget. This principle drove development from GPT-2 (1.5B) to GPT-3 (175B) to GPT-4, with emergent capabilities appearing at scale.",
                  "es": "Las leyes de escala muestran que la pérdida disminuye predeciblemente como ley de potencia con tamaño del modelo, tamaño de conjunto de datos y presupuesto de cómputo. Este principio impulsó desarrollo desde GPT-2 (1.5B) a GPT-3 (175B) a GPT-4, con capacidades emergentes apareciendo a escala.",
                  "de": "Skalierungsgesetze zeigen dass Verlust vorhersagbar als Potenzgesetz mit Modellgröße, Datensatzgröße und Rechenbudget abnimmt. Dieses Prinzip trieb Entwicklung von GPT-2 (1.5B) zu GPT-3 (175B) zu GPT-4, mit emergenten Fähigkeiten die bei Skalierung erscheinen.",
                  "nl": "Schaalwetten tonen dat verlies voorspelbaar afneemt als machtswet met modelgrootte, datasetgrootte en rekenbudget. Dit principe dreef ontwikkeling van GPT-2 (1.5B) naar GPT-3 (175B) naar GPT-4, met emergente capaciteiten die op schaal verschijnen."
        }
      },
      {
        question: {
                  "en": "What are emergent abilities in large language models?",
                  "es": "¿Qué son las habilidades emergentes en modelos de lenguaje grandes?",
                  "de": "Was sind emergente Fähigkeiten in großen Sprachmodellen?",
                  "nl": "Wat zijn emergente capaciteiten in grote taalmodellen?"
        },
        options: [
        {
                  "en": "Skills that emerge from fine-tuning",
                  "es": "Habilidades que emergen del ajuste fino",
                  "de": "Fähigkeiten die aus Fine-Tuning entstehen",
                  "nl": "Vaardigheden die voortkomen uit fine-tuning"
        },
        {
                  "en": "Abilities learned during emergence training",
                  "es": "Habilidades aprendidas durante entrenamiento de emergencia",
                  "de": "Fähigkeiten die während Notfalltraining gelernt werden",
                  "nl": "Capaciteiten geleerd tijdens noodtraining"
        },
        {
                  "en": "Capabilities that appear suddenly at certain model scales but are absent in smaller models",
                  "es": "Capacidades que aparecen repentinamente en ciertas escalas de modelo pero están ausentes en modelos más pequeños",
                  "de": "Fähigkeiten die plötzlich bei bestimmten Modellskalen erscheinen aber in kleineren Modellen fehlen",
                  "nl": "Capaciteiten die plotseling verschijnen bij bepaalde modelschalen maar afwezig zijn in kleinere modellen"
        },
        {
                  "en": "Emergency response capabilities",
                  "es": "Capacidades de respuesta de emergencia",
                  "de": "Notfall-Reaktionsfähigkeiten",
                  "nl": "Noodrespons capaciteiten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Emergent abilities like multi-step reasoning, arithmetic, and complex instruction following appear unpredictably as models scale up. GPT-3 showed few-shot learning, while larger models exhibit chain-of-thought reasoning and other sophisticated behaviors not seen in smaller versions.",
                  "es": "Habilidades emergentes como razonamiento de múltiples pasos, aritmética y seguimiento de instrucciones complejas aparecen impredeciblemente cuando modelos se escalan. GPT-3 mostró aprendizaje de pocos ejemplos, mientras modelos más grandes exhiben razonamiento de cadena de pensamiento y otros comportamientos sofisticados no vistos en versiones más pequeñas.",
                  "de": "Emergente Fähigkeiten wie mehrstufiges Denken, Arithmetik und komplexes Anweisungsfolgen erscheinen unvorhersehbar wenn Modelle skalieren. GPT-3 zeigte Few-Shot Learning, während größere Modelle Chain-of-Thought Reasoning und andere ausgeklügelte Verhaltensweisen zeigen die in kleineren Versionen nicht zu sehen sind.",
                  "nl": "Emergente capaciteiten zoals meerstaps redenering, rekenkunde en complex instructievolgen verschijnen onvoorspelbaar wanneer modellen opschalen. GPT-3 toonde few-shot learning, terwijl grotere modellen chain-of-thought redenering en ander geavanceerd gedrag vertonen dat niet wordt gezien in kleinere versies."
        }
      },
      {
        question: {
                  "en": "What is red teaming in AI safety?",
                  "es": "¿Qué es el equipo rojo en seguridad de IA?",
                  "de": "Was ist Red Teaming in KI-Sicherheit?",
                  "nl": "Wat is red teaming in AI-veiligheid?"
        },
        options: [
        {
                  "en": "Security testing by external teams",
                  "es": "Pruebas de seguridad por equipos externos",
                  "de": "Sicherheitstests durch externe Teams",
                  "nl": "Beveiligingstests door externe teams"
        },
        {
                  "en": "Testing models with red-colored data",
                  "es": "Probar modelos con datos de color rojo",
                  "de": "Modelle mit roten Daten testen",
                  "nl": "Modellen testen met rode gegevens"
        },
        {
                  "en": "Deliberately attempting to make AI systems produce harmful, biased, or unintended outputs to identify vulnerabilities",
                  "es": "Intentar deliberadamente hacer que sistemas de IA produzcan salidas dañinas, sesgadas o no intencionales para identificar vulnerabilidades",
                  "de": "Absichtlich versuchen KI-Systeme dazu zu bringen schädliche, voreingenommene oder unbeabsichtigte Ausgaben zu produzieren um Schwachstellen zu identifizieren",
                  "nl": "Opzettelijk proberen AI-systemen schadelijke, bevooroordeelde of onbedoelde outputs te laten produceren om kwetsbaarheden te identificeren"
        },
        {
                  "en": "Using adversarial networks",
                  "es": "Usar redes adversariales",
                  "de": "Adversariale Netzwerke verwenden",
                  "nl": "Adversarial netwerken gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Red teaming involves adversarial testing where researchers systematically probe models for weaknesses, trying to elicit harmful content, bypass safety measures, or expose biases. Findings inform safety improvements before deployment.",
                  "es": "El equipo rojo implica pruebas adversariales donde investigadores sondean sistemáticamente modelos en busca de debilidades, intentando provocar contenido dañino, eludir medidas de seguridad o exponer sesgos. Los hallazgos informan mejoras de seguridad antes del despliegue.",
                  "de": "Red Teaming beinhaltet adversariale Tests wo Forscher systematisch Modelle auf Schwächen prüfen, versuchen schädliche Inhalte hervorzurufen, Sicherheitsmaßnahmen zu umgehen oder Bias aufzudecken. Erkenntnisse informieren Sicherheitsverbesserungen vor Bereitstellung.",
                  "nl": "Red teaming omvat adversarial testen waarbij onderzoekers systematisch modellen onderzoeken op zwakheden, proberen schadelijke inhoud uit te lokken, veiligheidsmaatregelen te omzeilen of vooroordelen bloot te leggen. Bevindingen informeren veiligheidsverbeteringen vóór implementatie."
        }
      },
      {
        question: {
                  "en": "What is the difference between sparse and dense models?",
                  "es": "¿Cuál es la diferencia entre modelos dispersos y densos?",
                  "de": "Was ist der Unterschied zwischen spärlichen und dichten Modellen?",
                  "nl": "Wat is het verschil tussen sparse en dense modellen?"
        },
        options: [
        {
                  "en": "Sparse models activate only a subset of parameters per input, dense models use all parameters for every input",
                  "es": "Los modelos dispersos activan solo un subconjunto de parámetros por entrada, modelos densos usan todos los parámetros para cada entrada",
                  "de": "Spärliche Modelle aktivieren nur eine Teilmenge von Parametern pro Eingabe, dichte Modelle verwenden alle Parameter für jede Eingabe",
                  "nl": "Sparse modellen activeren slechts een subset van parameters per invoer, dense modellen gebruiken alle parameters voor elke invoer"
        },
        {
                  "en": "Dense models are more accurate",
                  "es": "Los modelos densos son más precisos",
                  "de": "Dichte Modelle sind genauer",
                  "nl": "Dense modellen zijn nauwkeuriger"
        },
        {
                  "en": "Sparse models use sparse attention only",
                  "es": "Los modelos dispersos usan solo atención dispersa",
                  "de": "Spärliche Modelle verwenden nur spärliche Aufmerksamkeit",
                  "nl": "Sparse modellen gebruiken alleen sparse aandacht"
        },
        {
                  "en": "Sparse models have fewer parameters total",
                  "es": "Los modelos dispersos tienen menos parámetros totales",
                  "de": "Spärliche Modelle haben insgesamt weniger Parameter",
                  "nl": "Sparse modellen hebben in totaal minder parameters"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sparse models like Mixture-of-Experts conditionally activate subsets of parameters, enabling larger total parameter counts with constant computational cost per token. Dense models like standard Transformers always use all parameters, limiting scalability.",
                  "es": "Los modelos dispersos como Mixture-of-Experts activan condicionalmente subconjuntos de parámetros, permitiendo conteos totales de parámetros más grandes con costo computacional constante por token. Los modelos densos como Transformadores estándar siempre usan todos los parámetros, limitando escalabilidad.",
                  "de": "Spärliche Modelle wie Mixture-of-Experts aktivieren bedingt Teilmengen von Parametern, ermöglichen größere Gesamtparameterzahlen mit konstanten Rechenkosten pro Token. Dichte Modelle wie Standard-Transformer verwenden immer alle Parameter, begrenzen Skalierbarkeit.",
                  "nl": "Sparse modellen zoals Mixture-of-Experts activeren voorwaardelijk subsets van parameters, maken grotere totale parameterhoeveelheden mogelijk met constante computationele kosten per token. Dense modellen zoals standaard Transformers gebruiken altijd alle parameters, beperken schaalbaarheid."
        }
      },
      {
        question: {
                  "en": "What is knowledge distillation in NLP?",
                  "es": "¿Qué es la destilación de conocimiento en PLN?",
                  "de": "Was ist Wissensdestillation in NLP?",
                  "nl": "Wat is kennisdistillatie in NLP?"
        },
        options: [
        {
                  "en": "Training a smaller student model to mimic a larger teacher model's outputs and soft probabilities",
                  "es": "Entrenar un modelo estudiante más pequeño para imitar salidas y probabilidades suaves de un modelo profesor más grande",
                  "de": "Ein kleineres Schüler-Modell trainieren um Ausgaben und weiche Wahrscheinlichkeiten eines größeren Lehrer-Modells nachzuahmen",
                  "nl": "Een kleiner student-model trainen om de outputs en zachte waarschijnlijkheden van een groter leraarmodel na te bootsen"
        },
        {
                  "en": "Compressing knowledge bases",
                  "es": "Comprimir bases de conocimiento",
                  "de": "Wissensbasen komprimieren",
                  "nl": "Kennisbanken comprimeren"
        },
        {
                  "en": "Extracting knowledge from unstructured text",
                  "es": "Extraer conocimiento de texto no estructurado",
                  "de": "Wissen aus unstrukturiertem Text extrahieren",
                  "nl": "Kennis extraheren uit ongestructureerde tekst"
        },
        {
                  "en": "Purifying training data",
                  "es": "Purificar datos de entrenamiento",
                  "de": "Trainingsdaten reinigen",
                  "nl": "Trainingsgegevens zuiveren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Knowledge distillation transfers knowledge from a large, accurate teacher model to a smaller, faster student model. The student learns from the teacher's soft predictions (probability distributions) which contain richer information than hard labels, achieving good performance with fewer parameters.",
                  "es": "La destilación de conocimiento transfiere conocimiento de un modelo profesor grande y preciso a un modelo estudiante más pequeño y rápido. El estudiante aprende de las predicciones suaves del profesor (distribuciones de probabilidad) que contienen información más rica que etiquetas duras, logrando buen rendimiento con menos parámetros.",
                  "de": "Wissensdestillation überträgt Wissen von einem großen, genauen Lehrer-Modell zu einem kleineren, schnelleren Schüler-Modell. Der Schüler lernt von den weichen Vorhersagen des Lehrers (Wahrscheinlichkeitsverteilungen) die reichere Informationen als harte Labels enthalten, erzielt gute Leistung mit weniger Parametern.",
                  "nl": "Kennisdistillatie draagt kennis over van een groot, nauwkeurig leraarmodel naar een kleiner, sneller student-model. De student leert van de zachte voorspellingen van de leraar (waarschijnlijkheidsverdelingen) die rijkere informatie bevatten dan harde labels, behaalt goede prestaties met minder parameters."
        }
      },
      {
        question: {
                  "en": "What is model pruning and when is it used?",
                  "es": "¿Qué es la poda de modelos y cuándo se usa?",
                  "de": "Was ist Modell-Pruning und wann wird es verwendet?",
                  "nl": "Wat is model pruning en wanneer wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Removing bad training examples",
                  "es": "Eliminar malos ejemplos de entrenamiento",
                  "de": "Schlechte Trainingsbeispiele entfernen",
                  "nl": "Slechte trainingsvoorbeelden verwijderen"
        },
        {
                  "en": "Removing unnecessary weights or neurons from trained models to reduce size while maintaining performance",
                  "es": "Eliminar pesos o neuronas innecesarias de modelos entrenados para reducir tamaño mientras se mantiene rendimiento",
                  "de": "Unnötige Gewichte oder Neuronen aus trainierten Modellen entfernen um Größe zu reduzieren während Leistung beibehalten wird",
                  "nl": "Onnodige gewichten of neuronen verwijderen uit getrainde modellen om grootte te verminderen terwijl prestaties behouden blijven"
        },
        {
                  "en": "Cutting layers from models",
                  "es": "Cortar capas de modelos",
                  "de": "Schichten aus Modellen schneiden",
                  "nl": "Lagen uit modellen knippen"
        },
        {
                  "en": "Removing outdated knowledge",
                  "es": "Eliminar conocimiento obsoleto",
                  "de": "Veraltetes Wissen entfernen",
                  "nl": "Verouderde kennis verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pruning identifies and removes weights with low magnitude or importance, creating sparser networks. Structured pruning removes entire neurons/layers, while unstructured pruning removes individual weights. This can reduce model size by 50-90% with minimal accuracy loss.",
                  "es": "La poda identifica y elimina pesos con baja magnitud o importancia, creando redes más dispersas. La poda estructurada elimina neuronas/capas enteras, mientras la poda no estructurada elimina pesos individuales. Esto puede reducir tamaño del modelo en 50-90% con pérdida mínima de precisión.",
                  "de": "Pruning identifiziert und entfernt Gewichte mit niedriger Magnitude oder Wichtigkeit, erstellt spärlichere Netzwerke. Strukturiertes Pruning entfernt ganze Neuronen/Schichten, während unstrukturiertes Pruning einzelne Gewichte entfernt. Dies kann Modellgröße um 50-90% reduzieren mit minimaler Genauigkeitseinbuße.",
                  "nl": "Pruning identificeert en verwijdert gewichten met lage magnitude of belangrijkheid, creëert sparsere netwerken. Gestructureerde pruning verwijdert hele neuronen/lagen, terwijl ongestructureerde pruning individuele gewichten verwijdert. Dit kan modelgrootte met 50-90% verminderen met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
                  "en": "What is the attention head concept in Transformers?",
                  "es": "¿Qué es el concepto de cabeza de atención en Transformadores?",
                  "de": "Was ist das Attention Head Konzept in Transformern?",
                  "nl": "Wat is het attention head concept in Transformers?"
        },
        options: [
        {
                  "en": "Multiple parallel attention mechanisms that learn different aspects of relationships between tokens",
                  "es": "Múltiples mecanismos de atención paralelos que aprenden diferentes aspectos de relaciones entre tokens",
                  "de": "Mehrere parallele Aufmerksamkeitsmechanismen die verschiedene Aspekte von Beziehungen zwischen Tokens lernen",
                  "nl": "Meerdere parallelle aandachtmechanismen die verschillende aspecten van relaties tussen tokens leren"
        },
        {
                  "en": "Attention to the head of sequences",
                  "es": "Atención al inicio de secuencias",
                  "de": "Aufmerksamkeit auf den Anfang von Sequenzen",
                  "nl": "Aandacht aan het begin van sequenties"
        },
        {
                  "en": "The primary attention computation",
                  "es": "La computación de atención primaria",
                  "de": "Die primäre Aufmerksamkeitsberechnung",
                  "nl": "De primaire aandachtberekening"
        },
        {
                  "en": "The top layer of attention",
                  "es": "La capa superior de atención",
                  "de": "Die oberste Aufmerksamkeitsschicht",
                  "nl": "De bovenste laag van aandacht"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-head attention runs multiple attention operations in parallel, each with different learned projections. Different heads specialize in different patterns (syntax, semantics, long-range dependencies), and their outputs are concatenated. BERT-base uses 12 heads per layer.",
                  "es": "La atención multi-cabeza ejecuta múltiples operaciones de atención en paralelo, cada una con diferentes proyecciones aprendidas. Diferentes cabezas se especializan en diferentes patrones (sintaxis, semántica, dependencias de largo alcance), y sus salidas se concatenan. BERT-base usa 12 cabezas por capa.",
                  "de": "Multi-Head Attention führt mehrere Aufmerksamkeitsoperationen parallel aus, jede mit unterschiedlichen gelernten Projektionen. Verschiedene Heads spezialisieren sich auf verschiedene Muster (Syntax, Semantik, weitreichende Abhängigkeiten), und ihre Ausgaben werden konkateniert. BERT-base verwendet 12 Heads pro Schicht.",
                  "nl": "Multi-head aandacht voert meerdere aandachtoperaties parallel uit, elk met verschillende geleerde projecties. Verschillende heads specialiseren zich in verschillende patronen (syntaxis, semantiek, lange-afstand afhankelijkheden), en hun outputs worden samengevoegd. BERT-base gebruikt 12 heads per laag."
        }
      },
      {
        question: {
                  "en": "What is the importance of the feedforward network in Transformer layers?",
                  "es": "¿Cuál es la importancia de la red feedforward en capas de Transformer?",
                  "de": "Was ist die Bedeutung des Feedforward-Netzwerks in Transformer-Schichten?",
                  "nl": "Wat is het belang van het feedforward netwerk in Transformer-lagen?"
        },
        options: [
        {
                  "en": "It feeds data forward through the network",
                  "es": "Alimenta datos hacia adelante a través de la red",
                  "de": "Es führt Daten vorwärts durch das Netzwerk",
                  "nl": "Het voedt gegevens voorwaarts door het netwerk"
        },
        {
                  "en": "It applies non-linear transformations to each position independently, enabling complex feature learning",
                  "es": "Aplica transformaciones no lineales a cada posición independientemente, permitiendo aprendizaje de características complejas",
                  "de": "Es wendet nichtlineare Transformationen auf jede Position unabhängig an, ermöglicht komplexes Feature-Learning",
                  "nl": "Het past niet-lineaire transformaties toe op elke positie onafhankelijk, maakt complex kenmerkenleren mogelijk"
        },
        {
                  "en": "It connects layers in sequence",
                  "es": "Conecta capas en secuencia",
                  "de": "Es verbindet Schichten sequenziell",
                  "nl": "Het verbindt lagen in volgorde"
        },
        {
                  "en": "It provides forward predictions",
                  "es": "Proporciona predicciones hacia adelante",
                  "de": "Es liefert Vorwärtsvorhersagen",
                  "nl": "Het biedt voorwaartse voorspellingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "After self-attention gathers information across positions, the position-wise feedforward network (two linear layers with activation) processes each position independently with non-linear transformations. This accounts for most of the model's parameters and is crucial for learning complex patterns.",
                  "es": "Después de que auto-atención recopila información a través de posiciones, la red feedforward por posición (dos capas lineales con activación) procesa cada posición independientemente con transformaciones no lineales. Esto representa la mayoría de los parámetros del modelo y es crucial para aprender patrones complejos.",
                  "de": "Nachdem Selbstaufmerksamkeit Informationen über Positionen sammelt, verarbeitet das positionsweise Feedforward-Netzwerk (zwei lineare Schichten mit Aktivierung) jede Position unabhängig mit nichtlinearen Transformationen. Dies macht den Großteil der Modellparameter aus und ist entscheidend für das Lernen komplexer Muster.",
                  "nl": "Nadat zelf-aandacht informatie verzamelt over posities, verwerkt het positie-gewijze feedforward netwerk (twee lineaire lagen met activatie) elke positie onafhankelijk met niet-lineaire transformaties. Dit is goed voor de meeste modelparameters en is cruciaal voor het leren van complexe patronen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of layernorm in Transformers?",
                  "es": "¿Cuál es el propósito de layernorm en Transformadores?",
                  "de": "Was ist der Zweck von Layernorm in Transformern?",
                  "nl": "Wat is het doel van layernorm in Transformers?"
        },
        options: [
        {
                  "en": "Standardizing layer outputs",
                  "es": "Estandarizar salidas de capa",
                  "de": "Schichtausgaben standardisieren",
                  "nl": "Laaguitvoer standaardiseren"
        },
        {
                  "en": "Normalizing layer weights",
                  "es": "Normalizar pesos de capa",
                  "de": "Schichtgewichte normalisieren",
                  "nl": "Laaggewichten normaliseren"
        },
        {
                  "en": "Creating normal distributions",
                  "es": "Crear distribuciones normales",
                  "de": "Normalverteilungen erstellen",
                  "nl": "Normale verdelingen creëren"
        },
        {
                  "en": "Normalizing activations to stabilize training and enable deeper networks",
                  "es": "Normalizar activaciones para estabilizar entrenamiento y permitir redes más profundas",
                  "de": "Aktivierungen normalisieren um Training zu stabilisieren und tiefere Netzwerke zu ermöglichen",
                  "nl": "Activaties normaliseren om training te stabiliseren en diepere netwerken mogelijk te maken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Layer normalization normalizes activations across features for each example, computing mean and variance per layer input. Applied before or after sublayers with residual connections, it stabilizes gradients and enables training very deep Transformer networks.",
                  "es": "La normalización de capa normaliza activaciones a través de características para cada ejemplo, calculando media y varianza por entrada de capa. Aplicada antes o después de subcapas con conexiones residuales, estabiliza gradientes y permite entrenar redes Transformer muy profundas.",
                  "de": "Layer Normalization normalisiert Aktivierungen über Features für jedes Beispiel, berechnet Mittelwert und Varianz pro Schichteingabe. Angewendet vor oder nach Unterschichten mit Residualverbindungen, stabilisiert es Gradienten und ermöglicht Training sehr tiefer Transformer-Netzwerke.",
                  "nl": "Laagnormalisatie normaliseert activaties over features voor elk voorbeeld, berekent gemiddelde en variantie per laagin voer. Toegepast voor of na sublagen met residuele verbindingen, stabiliseert het gradiënten en maakt training van zeer diepe Transformer-netwerken mogelijk."
        }
      },
      {
        question: {
                  "en": "What is strategy in games?",
                  "es": "What is strategy in games?",
                  "de": "What is strategy in games?",
                  "nl": "What is strategy in games?"
        },
        options: [
        {
                  "en": "No planning",
                  "es": "No planning",
                  "de": "No planning",
                  "nl": "No planning"
        },
        {
                  "en": "Planning to achieve objectives",
                  "es": "Planning to achieve objectives",
                  "de": "Planning to achieve objectives",
                  "nl": "Planning to achieve objectives"
        },
        {
                  "en": "Random moves",
                  "es": "Random moves",
                  "de": "Random moves",
                  "nl": "Random moves"
        },
        {
                  "en": "Luck only",
                  "es": "Luck only",
                  "de": "Luck only",
                  "nl": "Luck only"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Strategy involves planning and decision-making to achieve game objectives.",
                  "es": "Strategy involves planning and decision-making to achieve game objectives.",
                  "de": "Strategy involves planning and decision-making to achieve game objectives.",
                  "nl": "Strategy involves planning and decision-making to achieve game objectives."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }
})();