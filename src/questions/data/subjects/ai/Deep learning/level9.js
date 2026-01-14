// Deep Learning Quiz - Level 9: State-of-the-Art and Emerging Technologies
(function() {
  const level9 = {
    name: {
      en: "Deep Learning Level 9",
      es: "Aprendizaje Profundo Nivel 9",
      de: "Deep Learning Stufe 9",
      nl: "Deep Learning Level 9"
    },
    questions: [
      {
        question: {
          en: "What is self-supervised learning and how does it differ from supervised learning?",
          es: "¿Qué es el aprendizaje auto-supervisado y cómo difiere del aprendizaje supervisado?",
          de: "Was ist selbstüberwachtes Lernen und wie unterscheidet es sich von überwachtem Lernen?",
          nl: "Wat is zelf-gesuperviseerd leren en hoe verschilt het van gesuperviseerd leren?"
        },
        options: [
          { en: "Learning representations from data without human-labeled targets by creating supervision signals from the data itself", es: "Aprender representaciones de datos sin objetivos etiquetados por humanos creando señales de supervisión de los datos mismos", de: "Repräsentationen aus Daten ohne menschlich beschriftete Ziele lernen durch Erstellung von Überwachungssignalen aus den Daten selbst", nl: "Representaties leren uit data zonder door mensen gelabelde doelen door supervisiesignalen te creëren uit de data zelf" },
          { en: "Models supervising themselves during training", es: "Modelos supervisándose a sí mismos durante el entrenamiento", de: "Modelle die sich während des Trainings selbst überwachen", nl: "Modellen die zichzelf superviseren tijdens training" },
          { en: "Learning that doesn't require any supervision", es: "Aprendizaje que no requiere ninguna supervisión", de: "Lernen das keine Überwachung erfordert", nl: "Leren dat geen supervisie vereist" },
          { en: "Automated supervision of model training", es: "Supervisión automatizada de entrenamiento de modelos", de: "Automatisierte Überwachung des Modelltrainings", nl: "Geautomatiseerde supervisie van modeltraining" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates training objectives from the data structure itself, like predicting masked words or image rotations, eliminating the need for expensive manual labeling.",
          es: "El aprendizaje auto-supervisado crea objetivos de entrenamiento de la estructura de datos misma, como predecir palabras enmascaradas o rotaciones de imagen, eliminando la necesidad de etiquetado manual costoso.",
          de: "Selbstüberwachtes Lernen erstellt Trainingsziele aus der Datenstruktur selbst, wie Vorhersage maskierter Wörter oder Bildrotationen, eliminiert Bedarf für teure manuelle Beschriftung.",
          nl: "Zelf-gesuperviseerd leren creëert trainingsdoelen uit de datastructuur zelf, zoals het voorspellen van gemaskeerde woorden of beeldrotaties, elimineert de behoefte aan dure handmatige labeling."
        }
      },
      {
        question: {
          en: "What are graph neural networks (GNNs) and what types of data do they process?",
          es: "¿Qué son las redes neuronales de grafos (GNN) y qué tipos de datos procesan?",
          de: "Was sind Graph Neural Networks (GNNs) und welche Arten von Daten verarbeiten sie?",
          nl: "Wat zijn graph neural networks (GNNs) en welke typen data verwerken ze?"
        },
        options: [
          { en: "Neural networks designed for graph-structured data like social networks, molecules, and knowledge graphs", es: "Redes neuronales diseñadas para datos estructurados en grafos como redes sociales, moléculas y grafos de conocimiento", de: "Neuronale Netzwerke entworfen für graphstrukturierte Daten wie soziale Netzwerke, Moleküle und Wissensgraphen", nl: "Neurale netwerken ontworpen voor graafgestructureerde data zoals sociale netwerken, moleculen en kennisgrafen" },
          { en: "Networks that create visual graphs and charts", es: "Redes que crean gráficos y tablas visuales", de: "Netzwerke die visuelle Graphiken und Diagramme erstellen", nl: "Netwerken die visuele grafieken en diagrammen maken" },
          { en: "Neural networks for processing mathematical graphs", es: "Redes neuronales para procesar gráficos matemáticos", de: "Neuronale Netzwerke für mathematische Graphen", nl: "Neurale netwerken voor het verwerken van wiskundige grafieken" },
          { en: "Networks that graph neural activity patterns", es: "Redes que grafican patrones de actividad neuronal", de: "Netzwerke die neuronale Aktivitätsmuster grafisch darstellen", nl: "Netwerken die neurale activiteitspatronen in grafieken weergeven" }
        ],
        correct: 0,
        explanation: {
          en: "GNNs operate on graph structures where entities are nodes and relationships are edges, enabling applications in drug discovery, recommendation systems, and social network analysis.",
          es: "Las GNN operan en estructuras de grafos donde entidades son nodos y relaciones son aristas, permitiendo aplicaciones en descubrimiento de medicamentos, sistemas de recomendación y análisis de redes sociales.",
          de: "GNNs operieren auf Graphstrukturen wo Entitäten Knoten und Beziehungen Kanten sind, ermöglichen Anwendungen in Medikamentenentdeckung, Empfehlungssystemen und sozialer Netzwerkanalyse.",
          nl: "GNNs werken op graafstructuren waarbij entiteiten knooppunten zijn en relaties randen, maken toepassingen mogelijk in medicijnontdekking, aanbevelingssystemen en sociale netwerkanalyse."
        }
      },
      {
        question: {
          en: "What is causal inference in deep learning and why is it important?",
          es: "¿Qué es la inferencia causal en aprendizaje profundo y por qué es importante?",
          de: "Was ist Kausalinferenz in Deep Learning und warum ist sie wichtig?",
          nl: "Wat is causale inferentie in deep learning en waarom is het belangrijk?"
        },
        options: [
          { en: "Understanding cause-and-effect relationships rather than just correlations for robust decision making", es: "Entender relaciones causa-efecto en lugar de solo correlaciones para toma de decisiones robusta", de: "Ursache-Wirkung-Beziehungen verstehen anstatt nur Korrelationen für robuste Entscheidungsfindung", nl: "Oorzaak-gevolg relaties begrijpen in plaats van alleen correlaties voor robuuste besluitvorming" },
          { en: "Inferring the causes of neural network failures", es: "Inferir las causas de fallas de redes neuronales", de: "Ursachen von neuronalen Netzwerkfehlern ableiten", nl: "De oorzaken van neurale netwerkfouten afleiden" },
          { en: "Finding causal relationships in training data", es: "Encontrar relaciones causales en datos de entrenamiento", de: "Kausale Beziehungen in Trainingsdaten finden", nl: "Causale relaties vinden in trainingsdata" },
          { en: "Inferring what causes learning to happen", es: "Inferir qué causa que ocurra el aprendizaje", de: "Ableiten was Lernen verursacht", nl: "Afleiden wat leren veroorzaakt" }
        ],
        correct: 0,
        explanation: {
          en: "Causal inference helps models understand true causality, leading to better generalization, fairness, and interpretability, especially crucial for high-stakes applications like healthcare and policy.",
          es: "La inferencia causal ayuda a modelos entender causalidad verdadera, llevando a mejor generalización, equidad e interpretabilidad, especialmente crucial para aplicaciones de alto riesgo como salud y política.",
          de: "Kausalinferenz hilft Modellen wahre Kausalität zu verstehen, führt zu besserer Generalisierung, Fairness und Interpretierbarkeit, besonders entscheidend für hochriskante Anwendungen wie Gesundheitswesen und Politik.",
          nl: "Causale inferentie helpt modellen echte causaliteit te begrijpen, leidt tot betere generalisatie, eerlijkheid en interpreteerbaarheid, vooral cruciaal voor hoge-inzet toepassingen zoals gezondheidszorg en beleid."
        }
      },
      {
        question: {
          en: "What is neural symbolic AI and how does it combine neural and symbolic approaches?",
          es: "¿Qué es la IA neuronal simbólica y cómo combina enfoques neuronales y simbólicos?",
          de: "Was ist Neural Symbolic AI und wie kombiniert sie neuronale und symbolische Ansätze?",
          nl: "Wat is neural symbolic AI en hoe combineert het neurale en symbolische benaderingen?"
        },
        options: [
          { en: "Integrating deep learning's pattern recognition with symbolic reasoning for interpretable and logical AI", es: "Integrar reconocimiento de patrones de aprendizaje profundo con razonamiento simbólico para IA interpretable y lógica", de: "Mustererkennung von Deep Learning mit symbolischem Reasoning für interpretierbare und logische KI integrieren", nl: "Patroonherkenning van deep learning integreren met symbolisch redeneren voor interpreteerbare en logische AI" },
          { en: "Using symbols to represent neural network weights", es: "Usar símbolos para representar pesos de redes neuronales", de: "Symbole zur Darstellung von neuronalen Netzwerkgewichten verwenden", nl: "Symbolen gebruiken om neurale netwerkgewichten te representeren" },
          { en: "Creating neural networks that process symbolic mathematics", es: "Crear redes neuronales que procesan matemáticas simbólicas", de: "Neuronale Netzwerke erstellen die symbolische Mathematik verarbeiten", nl: "Neurale netwerken maken die symbolische wiskunde verwerken" },
          { en: "Symbolic representation of neural network architectures", es: "Representación simbólica de arquitecturas de redes neuronales", de: "Symbolische Darstellung neuronaler Netzwerkarchitekturen", nl: "Symbolische representatie van neurale netwerkarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural symbolic AI aims to combine the learning capabilities of neural networks with the logical reasoning and interpretability of symbolic systems, addressing current AI limitations.",
          es: "La IA neuronal simbólica busca combinar capacidades de aprendizaje de redes neuronales con razonamiento lógico e interpretabilidad de sistemas simbólicos, abordando limitaciones actuales de IA.",
          de: "Neural Symbolic AI zielt darauf ab Lernfähigkeiten neuronaler Netzwerke mit logischem Reasoning und Interpretierbarkeit symbolischer Systeme zu kombinieren, adressiert aktuelle KI-Limitationen.",
          nl: "Neural symbolic AI streeft ernaar de leercapaciteiten van neurale netwerken te combineren met logisch redeneren en interpreteerbaarheid van symbolische systemen, pakt huidige AI beperkingen aan."
        }
      },
      {
        question: {
          en: "What is federated learning and what challenges does it address?",
          es: "¿Qué es el aprendizaje federado y qué desafíos aborda?",
          de: "Was ist Federated Learning und welche Herausforderungen adressiert es?",
          nl: "Wat is federated learning en welke uitdagingen pakt het aan?"
        },
        options: [
          { en: "Training models across distributed devices without centralizing data to preserve privacy and reduce communication costs", es: "Entrenar modelos a través de dispositivos distribuidos sin centralizar datos para preservar privacidad y reducir costos de comunicación", de: "Modelle über verteilte Geräte trainieren ohne Daten zu zentralisieren um Privatsphäre zu bewahren und Kommunikationskosten zu reduzieren", nl: "Modellen trainen over gedistribueerde apparaten zonder data te centraliseren om privacy te behouden en communicatiekosten te verminderen" },
          { en: "Creating federations of different AI models", es: "Crear federaciones de diferentes modelos de IA", de: "Föderationen verschiedener KI-Modelle erstellen", nl: "Federaties van verschillende AI modellen maken" },
          { en: "Learning about federal government policies", es: "Aprender sobre políticas del gobierno federal", de: "Über Bundesregierungspolitik lernen", nl: "Leren over federale overheidsbeleid" },
          { en: "Federating learning resources across institutions", es: "Federar recursos de aprendizaje entre instituciones", de: "Lernressourcen zwischen Institutionen föderieren", nl: "Leerbronnen federeren tussen instellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning enables collaborative AI training while keeping sensitive data on local devices, crucial for healthcare, finance, and mobile applications where privacy is paramount.",
          es: "El aprendizaje federado permite entrenamiento colaborativo de IA manteniendo datos sensibles en dispositivos locales, crucial para salud, finanzas y aplicaciones móviles donde privacidad es primordial.",
          de: "Federated Learning ermöglicht kollaboratives KI-Training während sensible Daten auf lokalen Geräten bleiben, entscheidend für Gesundheitswesen, Finanzen und mobile Anwendungen wo Privatsphäre vorrangig ist.",
          nl: "Federated learning maakt collaboratieve AI training mogelijk terwijl gevoelige data op lokale apparaten blijft, cruciaal voor gezondheidszorg, financiën en mobiele applicaties waar privacy voorop staat."
        }
      },
      {
        question: {
          en: "What is BERT and how does its bidirectional training differ from traditional language models?",
          es: "¿Qué es BERT y cómo difiere su entrenamiento bidireccional de modelos de lenguaje tradicionales?",
          de: "Was ist BERT und wie unterscheidet sich sein bidirektionales Training von traditionellen Sprachmodellen?",
          nl: "Wat is BERT en hoe verschilt zijn bidirectionele training van traditionele taalmodellen?"
        },
        options: [
          { en: "BERT uses masked language modeling to learn bidirectional representations by predicting masked tokens using both left and right context", es: "BERT usa modelado enmascarado para aprender representaciones bidireccionales prediciendo tokens con contexto izquierdo y derecho", de: "BERT verwendet Masked Modeling um bidirektionale Repräsentationen zu lernen durch Vorhersage mit linkem und rechtem Kontext", nl: "BERT gebruikt masked modeling om bidirectionele representaties te leren door tokens te voorspellen met linker en rechter context" },
          { en: "BERT processes text in both forward and backward directions sequentially", es: "BERT procesa texto en direcciones hacia adelante y hacia atrás secuencialmente", de: "BERT verarbeitet Text sowohl vorwärts als auch rückwärts sequenziell", nl: "BERT verwerkt tekst zowel voorwaarts als achterwaarts sequentieel" },
          { en: "BERT uses two separate encoders for left-to-right and right-to-left processing", es: "BERT usa dos codificadores separados para procesamiento izquierda-a-derecha y derecha-a-izquierda", de: "BERT verwendet zwei separate Encoder für Links-nach-Rechts und Rechts-nach-Links Verarbeitung", nl: "BERT gebruikt twee aparte encoders voor links-naar-rechts en rechts-naar-links verwerking" },
          { en: "BERT alternates between forward and backward passes during training", es: "BERT alterna entre pasadas hacia adelante y hacia atrás durante entrenamiento", de: "BERT wechselt zwischen Vorwärts- und Rückwärtsdurchläufen während des Trainings", nl: "BERT wisselt tussen voorwaartse en achterwaartse doorlopen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "BERT's masked language modeling allows it to use full bidirectional context, unlike autoregressive models that can only use previous tokens, leading to richer representations for understanding tasks.",
          es: "El modelado de lenguaje enmascarado de BERT le permite usar contexto bidireccional completo, a diferencia de modelos autoregresivos que solo pueden usar tokens previos, llevando a representaciones más ricas para tareas de comprensión.",
          de: "BERTs Masked Language Modeling ermöglicht die Nutzung vollständigen bidirektionalen Kontexts, im Gegensatz zu autoregressiven Modellen die nur vorherige Tokens verwenden können, führt zu reicheren Repräsentationen für Verstehensaufgaben.",
          nl: "BERT's masked language modeling maakt het mogelijk om volledige bidirectionele context te gebruiken, in tegenstelling tot autoregressieve modellen die alleen vorige tokens kunnen gebruiken, leidt tot rijkere representaties voor begrip taken."
        }
      },
      {
        question: {
          en: "What are the key innovations in GPT (Generative Pre-trained Transformer) architecture and training?",
          es: "¿Cuáles son las innovaciones clave en la arquitectura y entrenamiento de GPT (Generative Pre-trained Transformer)?",
          de: "Was sind die Schlüsselinnovationen in GPT (Generative Pre-trained Transformer) Architektur und Training?",
          nl: "Wat zijn de belangrijkste innovaties in GPT (Generative Pre-trained Transformer) architectuur en training?"
        },
        options: [
          { en: "Uses autoregressive language modeling with decoder architecture, enabling unsupervised pre-training followed by task-specific fine-tuning", es: "Usa modelado autoregresivo con decodificador transformer, permite pre-entrenamiento no supervisado seguido de fine-tuning", de: "Verwendet autoregressives Modeling mit Decoder-Architektur, ermöglicht unüberwachtes Vortraining gefolgt von Fine-Tuning", nl: "Gebruikt autoregressief modelleren met decoder architectuur, maakt ongesuperviseerde pre-training mogelijk gevolgd door fine-tuning" },
          { en: "Combines multiple transformer encoders in parallel", es: "Combina múltiples codificadores transformer en paralelo", de: "Kombiniert mehrere Transformer-Encoder parallel", nl: "Combineert meerdere transformer encoders parallel" },
          { en: "Uses generative adversarial training with transformers", es: "Usa entrenamiento generativo adversario con transformers", de: "Verwendet generatives adversariales Training mit Transformers", nl: "Gebruikt generatieve adversariale training met transformers" },
          { en: "Pre-trains on multiple languages simultaneously", es: "Pre-entrena en múltiples idiomas simultáneamente", de: "Trainiert gleichzeitig auf mehreren Sprachen vor", nl: "Pre-traint op meerdere talen tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "GPT pioneered the approach of unsupervised pre-training on large text corpora using autoregressive language modeling, then fine-tuning for specific downstream tasks, establishing the foundation for modern language models.",
          es: "GPT fue pionero en el enfoque de pre-entrenamiento no supervisado en grandes corpus de texto usando modelado de lenguaje autoregresivo, luego ajuste fino para tareas específicas posteriores, estableciendo la fundación para modelos de lenguaje modernos.",
          de: "GPT war Pionier des Ansatzes unüberwachten Vortrainings auf großen Textkorpora mit autoregressivem Sprachmodeling, dann Fine-Tuning für spezifische nachgelagerte Aufgaben, etablierte die Grundlage für moderne Sprachmodelle.",
          nl: "GPT was pionier in de benadering van ongesuperviseerde pre-training op grote tekstcorpora met autoregressief taalmodelleren, daarna fine-tuning voor specifieke downstream taken, vestigde de basis voor moderne taalmodellen."
        }
      },
      {
        question: {
          en: "What is T5 (Text-to-Text Transfer Transformer) and how does its unified framework work?",
          es: "¿Qué es T5 (Text-to-Text Transfer Transformer) y cómo funciona su marco unificado?",
          de: "Was ist T5 (Text-to-Text Transfer Transformer) und wie funktioniert sein einheitliches Framework?",
          nl: "Wat is T5 (Text-to-Text Transfer Transformer) en hoe werkt zijn uniforme framework?"
        },
        options: [
          { en: "Treats all NLP tasks as text-to-text problems, using encoder-decoder architecture with unified input-output format and task prefixes", es: "Trata todas las tareas NLP como texto-a-texto, usa arquitectura encoder-decoder con formato unificado y prefijos de tarea", de: "Behandelt alle NLP-Aufgaben als Text-zu-Text, verwendet Encoder-Decoder mit einheitlichem Format und Aufgabenpräfixen", nl: "Behandelt alle NLP taken als tekst-naar-tekst, gebruikt encoder-decoder architectuur met uniform formaat en taak prefixen" },
          { en: "Transfers knowledge between 5 different transformer models", es: "Transfiere conocimiento entre 5 modelos transformer diferentes", de: "Überträgt Wissen zwischen 5 verschiedenen Transformer-Modellen", nl: "Draagt kennis over tussen 5 verschillende transformer modellen" },
          { en: "Uses 5 layers of transformer blocks for better performance", es: "Usa 5 capas de bloques transformer para mejor rendimiento", de: "Verwendet 5 Schichten von Transformer-Blöcken für bessere Leistung", nl: "Gebruikt 5 lagen van transformer blokken voor betere prestaties" },
          { en: "Trains on text for 5 different time periods", es: "Entrena en texto por 5 períodos de tiempo diferentes", de: "Trainiert auf Text für 5 verschiedene Zeitperioden", nl: "Traint op tekst voor 5 verschillende tijdsperiodes" }
        ],
        correct: 0,
        explanation: {
          en: "T5's text-to-text framework enables a single model to handle diverse tasks like translation, summarization, and classification by converting all tasks to a consistent input-output format.",
          es: "El marco texto-a-texto de T5 permite a un solo modelo manejar tareas diversas como traducción, resumen y clasificación convirtiendo todas las tareas a un formato entrada-salida consistente.",
          de: "T5s Text-zu-Text Framework ermöglicht einem einzigen Modell vielfältige Aufgaben wie Übersetzung, Zusammenfassung und Klassifikation zu bewältigen durch Konvertierung aller Aufgaben zu einem konsistenten Ein-Ausgabeformat.",
          nl: "T5's tekst-naar-tekst framework stelt één model in staat om diverse taken zoals vertaling, samenvatting en classificatie te behandelen door alle taken om te zetten naar een consistent input-output formaat."
        }
      },
      {
        question: {
          en: "What is a Vision Transformer (ViT) and how does it adapt transformers for image processing?",
          es: "¿Qué es un Vision Transformer (ViT) y cómo adapta transformers para procesamiento de imágenes?",
          de: "Was ist ein Vision Transformer (ViT) und wie passt er Transformers für Bildverarbeitung an?",
          nl: "Wat is een Vision Transformer (ViT) en hoe past het transformers aan voor beeldverwerking?"
        },
        options: [
          { en: "Divides images into patches, linearly embeds them, adds positional encoding, and processes through standard transformer encoder layers", es: "Divide imágenes en parches, los incrusta linealmente, agrega codificación posicional y procesa a través de capas transformer", de: "Teilt Bilder in Patches, bettet sie linear ein, fügt Positionskodierung hinzu, verarbeitet durch Transformer-Schichten", nl: "Verdeelt afbeeldingen in patches, insluit ze lineair, voegt positional encoding toe, verwerkt door transformer encoder lagen" },
          { en: "Applies convolutional layers before transformer processing", es: "Aplica capas convolucionales antes del procesamiento transformer", de: "Wendet Faltungsschichten vor Transformer-Verarbeitung an", nl: "Past convolutionele lagen toe voor transformer verwerking" },
          { en: "Uses transformers to generate synthetic images", es: "Usa transformers para generar imágenes sintéticas", de: "Verwendet Transformers um synthetische Bilder zu generieren", nl: "Gebruikt transformers om synthetische afbeeldingen te genereren" },
          { en: "Transforms images into text descriptions for processing", es: "Transforma imágenes en descripciones de texto para procesamiento", de: "Transformiert Bilder in Textbeschreibungen für Verarbeitung", nl: "Transformeert afbeeldingen naar tekstbeschrijvingen voor verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs demonstrate that pure attention mechanisms can match or exceed CNN performance on image tasks when sufficient training data is available, revolutionizing computer vision.",
          es: "ViTs demuestran que mecanismos de atención puros pueden igualar o exceder rendimiento de CNN en tareas de imagen cuando datos de entrenamiento suficientes están disponibles, revolucionando visión por computadora.",
          de: "ViTs demonstrieren dass reine Attention-Mechanismen CNN-Leistung bei Bildaufgaben erreichen oder übertreffen können wenn ausreichend Trainingsdaten verfügbar sind, revolutionieren Computer Vision.",
          nl: "ViTs tonen aan dat pure attention mechanismen CNN prestaties kunnen evenaren of overtreffen bij beeldtaken wanneer voldoende trainingsdata beschikbaar is, revolutioneren computer vision."
        }
      },
      {
        question: {
          en: "What is CLIP (Contrastive Language-Image Pre-training) and how does it enable multimodal understanding?",
          es: "¿Qué es CLIP (Contrastive Language-Image Pre-training) y cómo permite comprensión multimodal?",
          de: "Was ist CLIP (Contrastive Language-Image Pre-training) und wie ermöglicht es multimodales Verstehen?",
          nl: "Wat is CLIP (Contrastive Language-Image Pre-training) en hoe maakt het multimodaal begrip mogelijk?"
        },
        options: [
          { en: "Jointly trains image and text encoders using contrastive learning to align visual and textual representations in a shared embedding space", es: "Entrena codificadores de imagen y texto usando aprendizaje contrastivo para alinear representaciones en espacio compartido", de: "Trainiert Bild- und Text-Encoder mit kontrastivem Lernen um Repräsentationen in geteiltem Embedding-Raum auszurichten", nl: "Traint beeld- en tekst encoders met contrastief leren om representaties uit te lijnen in gedeelde embedding ruimte" },
          { en: "Clips images and text together for joint processing", es: "Recorta imágenes y texto juntos para procesamiento conjunto", de: "Schneidet Bilder und Text für gemeinsame Verarbeitung zusammen", nl: "Knipt afbeeldingen en tekst samen voor gezamenlijke verwerking" },
          { en: "Creates clips of video content with text descriptions", es: "Crea clips de contenido de video con descripciones de texto", de: "Erstellt Clips von Videoinhalten mit Textbeschreibungen", nl: "Maakt clips van video content met tekstbeschrijvingen" },
          { en: "Pre-processes images by clipping them to standard sizes", es: "Pre-procesa imágenes recortándolas a tamaños estándar", de: "Vorverarbeitet Bilder durch Zuschneiden auf Standardgrößen", nl: "Pre-verwerkt afbeeldingen door ze bij te knippen naar standaardformaten" }
        ],
        correct: 0,
        explanation: {
          en: "CLIP learns to associate images and text without explicit supervision, enabling zero-shot classification and cross-modal retrieval by learning rich multimodal representations.",
          es: "CLIP aprende a asociar imágenes y texto sin supervisión explícita, permitiendo clasificación de cero ejemplos y recuperación cruzada modal aprendiendo representaciones multimodales ricas.",
          de: "CLIP lernt Bilder und Text ohne explizite Überwachung zu assoziieren, ermöglicht Zero-Shot-Klassifikation und kreuzmodale Suche durch Lernen reicher multimodaler Repräsentationen.",
          nl: "CLIP leert afbeeldingen en tekst te associëren zonder expliciete supervisie, maakt zero-shot classificatie en cross-modale retrieval mogelijk door rijke multimodale representaties te leren."
        }
      },
      {
        question: {
          en: "What is the difference between GPT-3, GPT-3.5, and GPT-4 in terms of capabilities and architecture?",
          es: "¿Cuál es la diferencia entre GPT-3, GPT-3.5 y GPT-4 en términos de capacidades y arquitectura?",
          de: "Was ist der Unterschied zwischen GPT-3, GPT-3.5 und GPT-4 in Bezug auf Fähigkeiten und Architektur?",
          nl: "Wat is het verschil tussen GPT-3, GPT-3.5 en GPT-4 wat betreft capaciteiten en architectuur?"
        },
        options: [
          { en: "GPT-3 (175B parameters) showed emergent abilities, GPT-3.5 added instruction following via RLHF, GPT-4 became multimodal with improved reasoning", es: "GPT-3 (175B) mostró habilidades emergentes, GPT-3.5 agregó seguimiento de instrucciones via RLHF, GPT-4 multimodal con razonamiento mejorado", de: "GPT-3 (175B) zeigte emergente Fähigkeiten, GPT-3.5 fügte Instruktionsbefolgung via RLHF hinzu, GPT-4 wurde multimodal", nl: "GPT-3 (175B) toonde emergente vaardigheden, GPT-3.5 voegde instructie volgen via RLHF toe, GPT-4 werd multimodaal met verbeterd redeneren" },
          { en: "Each version doubles the number of parameters", es: "Cada versión duplica el número de parámetros", de: "Jede Version verdoppelt die Anzahl der Parameter", nl: "Elke versie verdubbelt het aantal parameters" },
          { en: "They use different transformer architectures", es: "Usan diferentes arquitecturas transformer", de: "Sie verwenden verschiedene Transformer-Architekturen", nl: "Ze gebruiken verschillende transformer architecturen" },
          { en: "Each is trained on different types of data", es: "Cada uno se entrena en diferentes tipos de datos", de: "Jeder wird auf verschiedenen Datentypen trainiert", nl: "Elk wordt getraind op verschillende datatypes" }
        ],
        correct: 0,
        explanation: {
          en: "The GPT series shows the evolution from large-scale language modeling to instruction-following and multimodal capabilities, demonstrating the impact of scale, training techniques, and architectural improvements.",
          es: "La serie GPT muestra la evolución desde modelado de lenguaje a gran escala hasta capacidades de seguimiento de instrucciones y multimodales, demostrando el impacto de escala, técnicas de entrenamiento y mejoras arquitectónicas.",
          de: "Die GPT-Serie zeigt die Evolution von großskaligem Sprachmodeling zu Instruktionsbefolgung und multimodalen Fähigkeiten, demonstriert den Einfluss von Skalierung, Trainingstechniken und architektonischen Verbesserungen.",
          nl: "De GPT serie toont de evolutie van grootschalig taalmodelleren naar instructie-volgen en multimodale capaciteiten, toont de impact van schaal, trainingstechnieken en architecturale verbeteringen."
        }
      },
      {
        question: {
          en: "What is RoBERTa and how does it improve upon the original BERT model?",
          es: "¿Qué es RoBERTa y cómo mejora sobre el modelo BERT original?",
          de: "Was ist RoBERTa und wie verbessert es das ursprüngliche BERT-Modell?",
          nl: "Wat is RoBERTa en hoe verbetert het het originele BERT model?"
        },
        options: [
          { en: "Robustly optimized BERT with longer training, larger batches, more data, removed NSP task, and dynamic masking", es: "BERT optimizado robustamente con entrenamiento más largo, lotes más grandes, más datos, tarea NSP removida, y enmascarado dinámico", de: "Robust optimiertes BERT mit längerem Training, größeren Batches, mehr Daten, entfernter NSP-Aufgabe und dynamischem Maskieren", nl: "Robuust geoptimaliseerde BERT met langere training, grotere batches, meer data, verwijderde NSP taak, en dynamische maskering" },
          { en: "BERT with robotic control capabilities", es: "BERT con capacidades de control robótico", de: "BERT mit robotischen Kontrollkapazitäten", nl: "BERT met robotische besturingscapaciteiten" },
          { en: "BERT trained specifically for robotic applications", es: "BERT entrenado específicamente para aplicaciones robóticas", de: "BERT speziell für robotische Anwendungen trainiert", nl: "BERT getraind specifiek voor robotica toepassingen" },
          { en: "BERT with robust error handling mechanisms", es: "BERT con mecanismos robustos de manejo de errores", de: "BERT mit robusten Fehlerbehandlungsmechanismen", nl: "BERT met robuuste foutafhandelingsmechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "RoBERTa demonstrated that BERT was undertrained and achieved significant improvements through better training practices, longer training, and removing the next sentence prediction task.",
          es: "RoBERTa demostró que BERT estaba sub-entrenado y logró mejoras significativas a través de mejores prácticas de entrenamiento, entrenamiento más largo, y removiendo la tarea de predicción de siguiente oración.",
          de: "RoBERTa demonstrierte dass BERT untertrainiert war und erreichte signifikante Verbesserungen durch bessere Trainingspraktiken, längeres Training und Entfernung der Vorhersage des nächsten Satzes.",
          nl: "RoBERTa toonde aan dat BERT ondergetraind was en behaalde significante verbeteringen door betere trainingspraktijken, langere training, en het verwijderen van de volgende zin voorspelling taak."
        }
      },
      {
        question: {
          en: "What is DALL-E and how does it generate images from text descriptions?",
          es: "¿Qué es DALL-E y cómo genera imágenes a partir de descripciones de texto?",
          de: "Was ist DALL-E und wie generiert es Bilder aus Textbeschreibungen?",
          nl: "Wat is DALL-E en hoe genereert het afbeeldingen uit tekstbeschrijvingen?"
        },
        options: [
          { en: "Uses transformer decoder architecture to generate image tokens autoregressively from text prompts, treating images as sequences of discrete tokens", es: "Usa decodificador transformer para generar tokens de imagen autoregresivamente de prompts, trata imágenes como secuencias de tokens", de: "Verwendet Decoder um Bild-Tokens autoregressiv aus Prompts zu generieren, behandelt Bilder als Sequenzen diskreter Tokens", nl: "Gebruikt decoder architectuur om beeldtokens autoregressief te genereren uit prompts, behandelt afbeeldingen als sequenties tokens" },
          { en: "Combines DALL (a painting robot) with E (Einstein's equations)", es: "Combina DALL (un robot de pintura) con E (ecuaciones de Einstein)", de: "Kombiniert DALL (ein Malroboter) mit E (Einsteins Gleichungen)", nl: "Combineert DALL (een schilderrobot) met E (Einstein's vergelijkingen)" },
          { en: "Uses convolutional neural networks for text-to-image generation", es: "Usa redes neuronales convolucionales para generación texto-a-imagen", de: "Verwendet Faltungsneuronale Netzwerke für Text-zu-Bild-Generierung", nl: "Gebruikt convolutionele neurale netwerken voor tekst-naar-beeld generatie" },
          { en: "Generates images by manipulating existing image databases", es: "Genera imágenes manipulando bases de datos de imágenes existentes", de: "Generiert Bilder durch Manipulation bestehender Bilddatenbanken", nl: "Genereert afbeeldingen door bestaande beelddatabases te manipuleren" }
        ],
        correct: 0,
        explanation: {
          en: "DALL-E pioneered text-to-image generation using transformers by discretizing images into tokens and training a large autoregressive model to generate these tokens conditioned on text descriptions.",
          es: "DALL-E fue pionero en generación texto-a-imagen usando transformers discretizando imágenes en tokens y entrenando un modelo autoregresivo grande para generar estos tokens condicionados en descripciones de texto.",
          de: "DALL-E war Pionier der Text-zu-Bild-Generierung mit Transformers durch Diskretisierung von Bildern in Tokens und Training eines großen autoregressiven Modells um diese Tokens konditioniert auf Textbeschreibungen zu generieren.",
          nl: "DALL-E was pionier in tekst-naar-beeld generatie met transformers door afbeeldingen te discretiseren naar tokens en een groot autoregressief model te trainen om deze tokens te genereren geconditioneerd op tekstbeschrijvingen."
        }
      },
      {
        question: {
          en: "What is the Transformer-XL architecture and how does it address length limitations?",
          es: "¿Qué es la arquitectura Transformer-XL y cómo aborda limitaciones de longitud?",
          de: "Was ist die Transformer-XL Architektur und wie adressiert sie Längenbegrenzungen?",
          nl: "Wat is de Transformer-XL architectuur en hoe pakt het lengtebeperkingen aan?"
        },
        options: [
          { en: "Introduces recurrence mechanism with segment-level recurrence and relative positional encoding to capture longer dependencies", es: "Introduce mecanismo de recurrencia con recurrencia segmento y codificación posicional relativa para capturar dependencias largas", de: "Führt Rekurrenzmechanismus mit Segment-Rekurrenz und relativer Positionskodierung ein um längere Abhängigkeiten zu erfassen", nl: "Introduceert recurrentie mechanisme met segment-recurrentie en relatieve positional encoding om langere afhankelijkheden vast te leggen" },
          { en: "Extends transformer width rather than length", es: "Extiende ancho de transformer en lugar de longitud", de: "Erweitert Transformer-Breite anstatt Länge", nl: "Breidt transformer breedte uit in plaats van lengte" },
          { en: "Uses extra-large transformer models", es: "Usa modelos transformer extra-grandes", de: "Verwendet extra-große Transformer-Modelle", nl: "Gebruikt extra-grote transformer modellen" },
          { en: "Processes extremely long sequences by chunking", es: "Procesa secuencias extremadamente largas mediante fragmentación", de: "Verarbeitet extrem lange Sequenzen durch Chunking", nl: "Verwerkt extreem lange sequenties door chunking" }
        ],
        correct: 0,
        explanation: {
          en: "Transformer-XL maintains hidden states from previous segments and uses relative positional encoding, enabling it to model dependencies beyond the fixed segment length during training.",
          es: "Transformer-XL mantiene estados ocultos de segmentos previos y usa codificación posicional relativa, permitiéndole modelar dependencias más allá de la longitud de segmento fija durante entrenamiento.",
          de: "Transformer-XL erhält versteckte Zustände aus vorherigen Segmenten und verwendet relative Positionskodierung, ermöglicht Modellierung von Abhängigkeiten jenseits der festen Segmentlänge während des Trainings.",
          nl: "Transformer-XL houdt verborgen toestanden van vorige segmenten bij en gebruikt relatieve positional encoding, maakt het mogelijk om afhankelijkheden te modelleren voorbij de vaste segmentlengte tijdens training."
        }
      },
      {
        question: {
          en: "What is ELECTRA and how does its training approach differ from BERT's masked language modeling?",
          es: "¿Qué es ELECTRA y cómo difiere su enfoque de entrenamiento del modelado de lenguaje enmascarado de BERT?",
          de: "Was ist ELECTRA und wie unterscheidet sich sein Trainingsansatz von BERTs Masked Language Modeling?",
          nl: "Wat is ELECTRA en hoe verschilt zijn trainingsaanpak van BERT's masked language modeling?"
        },
        options: [
          { en: "Uses replaced token detection where a generator creates plausible replacements and the discriminator learns to identify which tokens were replaced", es: "Usa detección de tokens reemplazados donde generador crea reemplazos y discriminador identifica tokens reemplazados", de: "Verwendet Ersetzt-Token-Erkennung wo Generator Ersetzungen erstellt und Discriminator lernt welche Tokens ersetzt wurden", nl: "Gebruikt vervangen token detectie waarbij generator vervangingen maakt en discriminator leert welke tokens vervangen zijn" },
          { en: "Uses electrical connections between transformer layers", es: "Usa conexiones eléctricas entre capas transformer", de: "Verwendet elektrische Verbindungen zwischen Transformer-Schichten", nl: "Gebruikt elektrische verbindingen tussen transformer lagen" },
          { en: "Generates electricity-related text content", es: "Genera contenido de texto relacionado con electricidad", de: "Generiert elektrizitätsbezogenen Textinhalt", nl: "Genereert elektriciteit-gerelateerde tekstinhoud" },
          { en: "Uses electronic circuits for faster computation", es: "Usa circuitos electrónicos para computación más rápida", de: "Verwendet elektronische Schaltkreise für schnellere Berechnung", nl: "Gebruikt elektronische circuits voor snellere berekening" }
        ],
        correct: 0,
        explanation: {
          en: "ELECTRA's replaced token detection is more efficient than masked language modeling because it provides a training signal for every input token rather than just the masked ones.",
          es: "La detección de tokens reemplazados de ELECTRA es más eficiente que el modelado de lenguaje enmascarado porque proporciona una señal de entrenamiento para cada token de entrada en lugar de solo los enmascarados.",
          de: "ELECTRAs Ersetzt-Token-Erkennung ist effizienter als Masked Language Modeling weil es ein Trainingssignal für jeden Eingabe-Token bietet anstatt nur für die maskierten.",
          nl: "ELECTRA's vervangen token detectie is efficiënter dan masked language modeling omdat het een trainingssignaal biedt voor elke input token in plaats van alleen de gemaskeerde."
        }
      },
      {
        question: {
          en: "What is the significance of the attention visualization in transformers and what insights does it provide?",
          es: "¿Cuál es la significancia de la visualización de atención en transformers y qué percepciones proporciona?",
          de: "Was ist die Bedeutung der Attention-Visualisierung in Transformers und welche Einsichten bietet sie?",
          nl: "Wat is de betekenis van attention visualisatie in transformers en welke inzichten biedt het?"
        },
        options: [
          { en: "Reveals what linguistic patterns and relationships the model has learned, showing syntactic and semantic dependencies across different heads and layers", es: "Revela qué patrones lingüísticos y relaciones aprendió el modelo, muestra dependencias sintácticas y semánticas en capas", de: "Enthüllt welche linguistischen Muster das Modell lernte, zeigt syntaktische und semantische Abhängigkeiten über Heads", nl: "Onthult welke linguïstische patronen het model leerde, toont syntactische en semantische afhankelijkheden over heads en lagen" },
          { en: "Shows the visual appearance of attention mechanisms", es: "Muestra la apariencia visual de mecanismos de atención", de: "Zeigt das visuelle Erscheinungsbild von Attention-Mechanismen", nl: "Toont het visuele uiterlijk van attention mechanismen" },
          { en: "Provides attention-based user interfaces", es: "Proporciona interfaces de usuario basadas en atención", de: "Bietet aufmerksamkeitsbasierte Benutzeroberflächen", nl: "Biedt attention-gebaseerde gebruikersinterfaces" },
          { en: "Creates visual attention maps for computer vision", es: "Crea mapas de atención visual para visión por computadora", de: "Erstellt visuelle Attention-Karten für Computer Vision", nl: "Maakt visuele attention maps voor computer vision" }
        ],
        correct: 0,
        explanation: {
          en: "Attention visualization helps researchers understand model behavior, debug issues, and gain insights into how transformers process language, revealing phenomena like syntactic attention patterns.",
          es: "La visualización de atención ayuda a investigadores entender comportamiento del modelo, depurar problemas, y obtener percepciones sobre cómo transformers procesan lenguaje, revelando fenómenos como patrones de atención sintáctica.",
          de: "Attention-Visualisierung hilft Forschern Modellverhalten zu verstehen, Probleme zu debuggen, und Einsichten zu gewinnen wie Transformers Sprache verarbeiten, enthüllt Phänomene wie syntaktische Attention-Muster.",
          nl: "Attention visualisatie helpt onderzoekers modelgedrag te begrijpen, problemen te debuggen, en inzichten te krijgen in hoe transformers taal verwerken, onthult fenomenen zoals syntactische attention patronen."
        }
      },
      {
        question: {
          en: "What is BART (Bidirectional and Auto-Regressive Transformers) and how does it combine different training objectives?",
          es: "¿Qué es BART (Bidirectional and Auto-Regressive Transformers) y cómo combina diferentes objetivos de entrenamiento?",
          de: "Was ist BART (Bidirectional and Auto-Regressive Transformers) und wie kombiniert es verschiedene Trainingsziele?",
          nl: "Wat is BART (Bidirectional and Auto-Regressive Transformers) en hoe combineert het verschillende trainingsdoelstellingen?"
        },
        options: [
          { en: "Uses encoder-decoder architecture with bidirectional encoder and autoregressive decoder, trained with denoising objective on corrupted text", es: "Usa arquitectura encoder-decoder con encoder bidireccional y decoder autoregresivo, entrenado con denoising en texto corrupto", de: "Verwendet Encoder-Decoder mit bidirektionalem Encoder und autoregressivem Decoder, trainiert mit Denoising auf beschädigtem Text", nl: "Gebruikt encoder-decoder met bidirectionele encoder en autoregressieve decoder, getraind met denoising op beschadigde tekst" },
          { en: "Combines BERT and GPT architectures in parallel", es: "Combina arquitecturas BERT y GPT en paralelo", de: "Kombiniert BERT- und GPT-Architekturen parallel", nl: "Combineert BERT en GPT architecturen parallel" },
          { en: "Alternates between bidirectional and autoregressive training", es: "Alterna entre entrenamiento bidireccional y autoregresivo", de: "Wechselt zwischen bidirektionalem und autoregressivem Training", nl: "Wisselt tussen bidirectionele en autoregressieve training" },
          { en: "Uses bart (a type of neural activation) for better performance", es: "Usa bart (un tipo de activación neuronal) para mejor rendimiento", de: "Verwendet bart (eine Art neuronaler Aktivierung) für bessere Leistung", nl: "Gebruikt bart (een type neurale activatie) voor betere prestaties" }
        ],
        correct: 0,
        explanation: {
          en: "BART's denoising autoencoder approach with flexible corruption schemes makes it particularly effective for text generation and summarization tasks while maintaining strong understanding capabilities.",
          es: "El enfoque de autoencoder de reducción de ruido de BART con esquemas de corrupción flexibles lo hace particularmente efectivo para tareas de generación de texto y resumen mientras mantiene capacidades de comprensión fuertes.",
          de: "BARTs Denoising Autoencoder Ansatz mit flexiblen Korruptionsschemata macht es besonders effektiv für Textgenerierung und Zusammenfassungsaufgaben während starke Verstehenskapazitäten beibehalten werden.",
          nl: "BART's denoising autoencoder aanpak met flexibele corruptie schema's maakt het bijzonder effectief voor tekstgeneratie en samenvatting taken terwijl sterke begrip capaciteiten behouden blijven."
        }
      },
      {
        question: {
          en: "What is the difference between fine-tuning and prompt-based learning in large language models?",
          es: "¿Cuál es la diferencia entre ajuste fino y aprendizaje basado en prompts en modelos de lenguaje grandes?",
          de: "Was ist der Unterschied zwischen Fine-Tuning und Prompt-basiertem Lernen in großen Sprachmodellen?",
          nl: "Wat is het verschil tussen fine-tuning en prompt-gebaseerd leren in grote taalmodellen?"
        },
        options: [
          { en: "Fine-tuning updates model parameters for specific tasks, while prompt-based learning uses designed prompts to elicit desired behavior without updates", es: "Fine-tuning actualiza parámetros para tareas, aprendizaje basado en prompts usa prompts para provocar comportamiento sin actualizaciones", de: "Fine-Tuning aktualisiert Parameter für Aufgaben, Prompt-Lernen verwendet Prompts um Verhalten ohne Updates hervorzurufen", nl: "Fine-tuning werkt parameters bij voor taken, prompt-leren gebruikt prompts om gedrag op te roepen zonder updates" },
          { en: "Fine-tuning is faster while prompt-based learning is more accurate", es: "Ajuste fino es más rápido mientras aprendizaje basado en prompts es más preciso", de: "Fine-Tuning ist schneller während Prompt-basiertes Lernen genauer ist", nl: "Fine-tuning is sneller terwijl prompt-gebaseerd leren nauwkeuriger is" },
          { en: "Fine-tuning works on small models while prompts work on large models", es: "Ajuste fino funciona en modelos pequeños mientras prompts funcionan en modelos grandes", de: "Fine-Tuning funktioniert bei kleinen Modellen während Prompts bei großen Modellen funktionieren", nl: "Fine-tuning werkt op kleine modellen terwijl prompts werken op grote modellen" },
          { en: "Fine-tuning requires more data while prompts require less data", es: "Ajuste fino requiere más datos mientras prompts requieren menos datos", de: "Fine-Tuning erfordert mehr Daten während Prompts weniger Daten erfordern", nl: "Fine-tuning vereist meer data terwijl prompts minder data vereisen" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt-based learning leverages the knowledge already present in large pre-trained models, often requiring fewer examples and avoiding catastrophic forgetting, while fine-tuning adapts the entire model to specific tasks.",
          es: "El aprendizaje basado en prompts aprovecha el conocimiento ya presente en modelos grandes pre-entrenados, a menudo requiriendo menos ejemplos y evitando olvido catastrófico, mientras ajuste fino adapta todo el modelo a tareas específicas.",
          de: "Prompt-basiertes Lernen nutzt das bereits in großen vortrainierten Modellen vorhandene Wissen, erfordert oft weniger Beispiele und vermeidet katastrophales Vergessen, während Fine-Tuning das gesamte Modell an spezifische Aufgaben anpasst.",
          nl: "Prompt-gebaseerd leren benut de kennis die al aanwezig is in grote voorgetrainde modellen, vereist vaak minder voorbeelden en vermijdt catastrophic forgetting, terwijl fine-tuning het gehele model aanpast aan specifieke taken."
        }
      },
      {
        question: {
          en: "What is the significance of scaling laws in large language models and what do they predict?",
          es: "¿Cuál es la significancia de las leyes de escalado en modelos de lenguaje grandes y qué predicen?",
          de: "Was ist die Bedeutung von Skalierungsgesetzen in großen Sprachmodellen und was sagen sie voraus?",
          nl: "Wat is de betekenis van scaling laws in grote taalmodellen en wat voorspellen ze?"
        },
        options: [
          { en: "Predict model performance based on model size, dataset size, and compute budget, showing power-law relationships between scale and capabilities", es: "Predicen rendimiento basado en tamaño de modelo, datos y cómputo, muestran relaciones de ley de potencia entre escala y capacidades", de: "Sagen Leistung basierend auf Modellgröße, Daten und Compute voraus, zeigen Potenzgesetz-Beziehungen zwischen Skala und Fähigkeiten", nl: "Voorspellen prestaties gebaseerd op modelgrootte, datasetgrootte en compute, tonen machtwet relaties tussen schaal en capaciteiten" },
          { en: "Legal regulations governing the scale of AI models", es: "Regulaciones legales que gobiernan la escala de modelos de IA", de: "Rechtliche Vorschriften für die Skalierung von KI-Modellen", nl: "Juridische regelgeving voor de schaal van AI modellen" },
          { en: "Mathematical laws for scaling up neural networks", es: "Leyes matemáticas para escalar redes neuronales", de: "Mathematische Gesetze für die Skalierung neuronaler Netzwerke", nl: "Wiskundige wetten voor het opschalen van neurale netwerken" },
          { en: "Rules for determining optimal model architectures", es: "Reglas para determinar arquitecturas de modelo óptimas", de: "Regeln zur Bestimmung optimaler Modellarchitekturen", nl: "Regels voor het bepalen van optimale modelarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Scaling laws provide valuable insights for resource allocation and development planning, suggesting that model performance continues to improve predictably with increased scale across multiple dimensions.",
          es: "Las leyes de escalado proporcionan percepciones valiosas para asignación de recursos y planificación de desarrollo, sugiriendo que el rendimiento del modelo continúa mejorando predeciblemente con escala aumentada a través de múltiples dimensiones.",
          de: "Skalierungsgesetze bieten wertvolle Einsichten für Ressourcenzuteilung und Entwicklungsplanung, deuten darauf hin dass Modellleistung vorhersagbar mit erhöhter Skalierung über mehrere Dimensionen weiter verbessert.",
          nl: "Scaling laws bieden waardevolle inzichten voor resource allocatie en ontwikkelingsplanning, suggereren dat modelprestaties voorspelbaar blijven verbeteren met verhoogde schaal over meerdere dimensies."
        }
      },
      {
        question: {
          en: "What distinguishes foundation models from traditional task-specific deep learning models?",
          es: "¿Qué distingue a los modelos fundacionales de los modelos tradicionales de aprendizaje profundo específicos de tareas?",
          de: "Was unterscheidet Foundation Models von traditionellen aufgabenspezifischen Deep Learning Modellen?",
          nl: "Wat onderscheidt foundation models van traditionele taak-specifieke deep learning modellen?"
        },
        options: [
          { en: "Foundation models are trained on broad data to serve as adaptable bases for multiple downstream tasks through fine-tuning or prompting", es: "Los modelos fundacionales se entrenan en datos amplios para servir como bases adaptables para tareas mediante fine-tuning o prompting", de: "Foundation Models werden auf breiten Daten trainiert als anpassbare Grundlagen für Aufgaben durch Fine-Tuning oder Prompting", nl: "Foundation models worden getraind op brede data als aanpasbare basis voor downstream taken door fine-tuning of prompting" },
          { en: "Foundation models are only used for computer vision tasks", es: "Los modelos fundacionales solo se usan para tareas de visión por computadora", de: "Foundation Models werden nur für Computer Vision Aufgaben verwendet", nl: "Foundation models worden alleen gebruikt voor computer vision taken" },
          { en: "Foundation models require less computational resources", es: "Los modelos fundacionales requieren menos recursos computacionales", de: "Foundation Models benötigen weniger Rechenressourcen", nl: "Foundation models vereisen minder computationele bronnen" },
          { en: "Foundation models can only be trained from scratch", es: "Los modelos fundacionales solo pueden entrenarse desde cero", de: "Foundation Models können nur von Grund auf trainiert werden", nl: "Foundation models kunnen alleen vanaf nul getraind worden" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models represent a paradigm shift toward general-purpose models trained on diverse, large-scale datasets that can be adapted for numerous specific tasks, enabling more efficient development and deployment of AI systems.",
          es: "Los modelos fundacionales representan un cambio de paradigma hacia modelos de propósito general entrenados en conjuntos de datos diversos y de gran escala que pueden adaptarse para numerosas tareas específicas, permitiendo desarrollo y despliegue más eficiente de sistemas de IA.",
          de: "Foundation Models repräsentieren einen Paradigmenwechsel zu allzweckmodellen die auf vielfältigen, groß angelegten Datensätzen trainiert werden und für zahlreiche spezifische Aufgaben angepasst werden können, ermöglichen effizientere Entwicklung und Deployment von KI-Systemen.",
          nl: "Foundation models vertegenwoordigen een paradigmaverschuiving naar algemene modellen getraind op diverse, grootschalige datasets die aangepast kunnen worden voor talrijke specifieke taken, maken efficiëntere ontwikkeling en deployment van AI systemen mogelijk."
        }
      },
      {
        question: {
          en: "What key innovation in ELMo differentiates it from static word embeddings?",
          es: "¿Qué innovación clave en ELMo lo diferencia de los word embeddings estáticos?",
          de: "Welche Schlüsselinnovation in ELMo unterscheidet es von statischen Word Embeddings?",
          nl: "Welke belangrijke innovatie in ELMo onderscheidt het van statische word embeddings?"
        },
        options: [
          { en: "Context-dependent embeddings from bidirectional LSTM", es: "Embeddings dependientes del contexto desde LSTM bidireccional", de: "Kontextabhängige Embeddings aus bidirektionalem LSTM", nl: "Context-afhankelijke embeddings van bidirectionele LSTM" },
          { en: "Attention-based static vectors", es: "Vectores estáticos basados en atención", de: "Aufmerksamkeitsbasierte statische Vektoren", nl: "Aandacht-gebaseerde statische vectoren" },
          { en: "Transformer architecture", es: "Arquitectura Transformer", de: "Transformer-Architektur", nl: "Transformer-architectuur" },
          { en: "Character-level tokenization", es: "Tokenización a nivel de carácter", de: "Tokenisierung auf Zeichenebene", nl: "Tokenisatie op karakterniveau" }
        ],
        correct: 0,
        explanation: {
          en: "ELMo (Embeddings from Language Models) generates context-dependent word representations using deep bidirectional LSTMs, unlike static embeddings (Word2Vec, GloVe) where each word has one fixed vector regardless of context.",
          es: "ELMo (Embeddings from Language Models) genera representaciones de palabras dependientes del contexto usando LSTMs bidireccionales profundos, a diferencia de embeddings estáticos (Word2Vec, GloVe) donde cada palabra tiene un vector fijo sin importar el contexto.",
          de: "ELMo (Embeddings from Language Models) generiert kontextabhängige Wortdarstellungen mit tiefen bidirektionalen LSTMs, im Gegensatz zu statischen Embeddings (Word2Vec, GloVe), wo jedes Wort einen festen Vektor hat, unabhängig vom Kontext.",
          nl: "ELMo (Embeddings from Language Models) genereert context-afhankelijke woordrepresentaties met diepe bidirectionele LSTMs, in tegenstelling tot statische embeddings (Word2Vec, GloVe) waar elk woord één vaste vector heeft ongeacht de context."
        }
      },
      {
        question: {
          en: "What problem does the Gumbel-Softmax trick address in VAEs?",
          es: "¿Qué problema resuelve el truco Gumbel-Softmax en VAEs?",
          de: "Welches Problem löst der Gumbel-Softmax-Trick in VAEs?",
          nl: "Welk probleem lost de Gumbel-Softmax-truc op in VAEs?"
        },
        options: [
          { en: "Enables backpropagation through discrete sampling", es: "Permite retropropagación a través de muestreo discreto", de: "Ermöglicht Backpropagation durch diskretes Sampling", nl: "Maakt backpropagation mogelijk door discrete sampling" },
          { en: "Reduces model complexity", es: "Reduce complejidad del modelo", de: "Reduziert Modellkomplexität", nl: "Vermindert modelcomplexiteit" },
          { en: "Improves training stability", es: "Mejora estabilidad del entrenamiento", de: "Verbessert Trainingsstabilität", nl: "Verbetert trainingsstabiliteit" },
          { en: "Prevents mode collapse", es: "Previene colapso de modos", de: "Verhindert Moduskollaps", nl: "Voorkomt mode collapse" }
        ],
        correct: 0,
        explanation: {
          en: "Gumbel-Softmax provides a continuous, differentiable approximation to discrete categorical distributions, allowing gradient-based optimization in VAEs with discrete latent variables. The temperature parameter controls the trade-off between discrete and continuous.",
          es: "Gumbel-Softmax proporciona una aproximación continua y diferenciable a distribuciones categóricas discretas, permitiendo optimización basada en gradientes en VAEs con variables latentes discretas. El parámetro de temperatura controla el balance entre discreto y continuo.",
          de: "Gumbel-Softmax bietet eine kontinuierliche, differenzierbare Approximation diskreter kategorialer Verteilungen, die gradientenbasierte Optimierung in VAEs mit diskreten latenten Variablen ermöglicht. Der Temperaturparameter steuert den Trade-off zwischen diskret und kontinuierlich.",
          nl: "Gumbel-Softmax biedt een continue, differentieerbare benadering van discrete categorische verdelingen, waardoor gradiënt-gebaseerde optimalisatie mogelijk is in VAEs met discrete latente variabelen. De temperatuurparameter regelt de afweging tussen discreet en continu."
        }
      },
      {
        question: {
          en: "What distinguishes neural architecture search (NAS) from hyperparameter tuning?",
          es: "¿Qué distingue la búsqueda de arquitectura neural (NAS) del ajuste de hiperparámetros?",
          de: "Was unterscheidet Neural Architecture Search (NAS) von Hyperparameter-Tuning?",
          nl: "Wat onderscheidt neural architecture search (NAS) van hyperparameter-tuning?"
        },
        options: [
          { en: "NAS searches over network topology, not just parameter values", es: "NAS busca sobre topología de red, no solo valores de parámetros", de: "NAS sucht über Netzwerktopologie, nicht nur Parameterwerte", nl: "NAS zoekt over netwerktopologie, niet alleen parameterwaarden" },
          { en: "NAS is always faster to compute", es: "NAS siempre es más rápido de calcular", de: "NAS ist immer schneller zu berechnen", nl: "NAS is altijd sneller te berekenen" },
          { en: "NAS only works with CNNs", es: "NAS solo funciona con CNNs", de: "NAS funktioniert nur mit CNNs", nl: "NAS werkt alleen met CNNs" },
          { en: "NAS requires no training data", es: "NAS no requiere datos de entrenamiento", de: "NAS benötigt keine Trainingsdaten", nl: "NAS vereist geen trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "NAS automates the design of neural network architectures by searching over the space of possible network structures (layers, connections, operations), while hyperparameter tuning optimizes numerical settings within a fixed architecture. Methods include reinforcement learning, evolutionary algorithms, and gradient-based approaches like DARTS.",
          es: "NAS automatiza el diseño de arquitecturas de redes neuronales buscando sobre el espacio de posibles estructuras de red (capas, conexiones, operaciones), mientras que el ajuste de hiperparámetros optimiza configuraciones numéricas dentro de una arquitectura fija. Los métodos incluyen aprendizaje por refuerzo, algoritmos evolutivos y enfoques basados en gradientes como DARTS.",
          de: "NAS automatisiert das Design neuronaler Netzwerkarchitekturen durch Suche über den Raum möglicher Netzwerkstrukturen (Schichten, Verbindungen, Operationen), während Hyperparameter-Tuning numerische Einstellungen innerhalb einer festen Architektur optimiert. Methoden umfassen Reinforcement Learning, evolutionäre Algorithmen und gradientenbasierte Ansätze wie DARTS.",
          nl: "NAS automatiseert het ontwerp van neurale netwerkarchitecturen door te zoeken over de ruimte van mogelijke netwerkstructuren (lagen, verbindingen, operaties), terwijl hyperparameter-tuning numerieke instellingen binnen een vaste architectuur optimaliseert. Methoden omvatten reinforcement learning, evolutionaire algoritmen en gradiënt-gebaseerde benaderingen zoals DARTS."
        }
      },
      {
        question: {
          en: "How does XLNet improve upon BERT's masked language modeling?",
          es: "¿Cómo mejora XLNet el modelado de lenguaje enmascarado de BERT?",
          de: "Wie verbessert XLNet BERTs Masked Language Modeling?",
          nl: "Hoe verbetert XLNet BERT's masked language modeling?"
        },
        options: [
          { en: "Permutation language modeling captures all factorization orders", es: "Modelado de lenguaje por permutación captura todos los órdenes de factorización", de: "Permutations-Sprachmodellierung erfasst alle Faktorisierungsreihenfolgen", nl: "Permutatie-taalmodellering vangt alle factorisatieorders" },
          { en: "Uses more training data", es: "Usa más datos de entrenamiento", de: "Verwendet mehr Trainingsdaten", nl: "Gebruikt meer trainingsdata" },
          { en: "Employs smaller models", es: "Emplea modelos más pequeños", de: "Verwendet kleinere Modelle", nl: "Gebruikt kleinere modellen" },
          { en: "Removes self-attention", es: "Elimina auto-atención", de: "Entfernt Self-Attention", nl: "Verwijdert self-attention" }
        ],
        correct: 0,
        explanation: {
          en: "XLNet uses permutation language modeling to maximize expected log-likelihood over all possible permutations of the factorization order, overcoming BERT's limitation where [MASK] tokens create a pretrain-finetune discrepancy. It also integrates Transformer-XL's segment recurrence mechanism for longer context.",
          es: "XLNet usa modelado de lenguaje por permutación para maximizar la log-verosimilitud esperada sobre todas las permutaciones posibles del orden de factorización, superando la limitación de BERT donde los tokens [MASK] crean una discrepancia pretrain-finetune. También integra el mecanismo de recurrencia de segmentos de Transformer-XL para contexto más largo.",
          de: "XLNet verwendet Permutations-Sprachmodellierung, um die erwartete Log-Likelihood über alle möglichen Permutationen der Faktorisierungsreihenfolge zu maximieren, wodurch BERTs Einschränkung überwunden wird, wo [MASK]-Tokens eine Pretrain-Finetune-Diskrepanz erzeugen. Es integriert auch Transformer-XLs Segment-Rekurrenzmechanismus für längeren Kontext.",
          nl: "XLNet gebruikt permutatie-taalmodellering om de verwachte log-likelihood te maximaliseren over alle mogelijke permutaties van de factorisatievolgorde, waarmee BERT's beperking wordt overwonnen waarbij [MASK]-tokens een pretrain-finetune-discrepantie creëren. Het integreert ook Transformer-XL's segment-recurrentiemechanisme voor langere context."
        }
      },
      {
        question: {
          en: "What is the primary advantage of neural ODEs over standard residual networks?",
          es: "¿Cuál es la ventaja principal de ODEs neuronales sobre redes residuales estándar?",
          de: "Was ist der Hauptvorteil neuronaler ODEs gegenüber Standard-Residual-Netzwerken?",
          nl: "Wat is het primaire voordeel van neurale ODEs boven standaard residual networks?"
        },
        options: [
          { en: "Continuous-depth transformations with constant memory", es: "Transformaciones de profundidad continua con memoria constante", de: "Transformationen mit kontinuierlicher Tiefe bei konstantem Speicher", nl: "Continue-diepte transformaties met constant geheugen" },
          { en: "Faster training speed", es: "Velocidad de entrenamiento más rápida", de: "Schnellere Trainingsgeschwindigkeit", nl: "Snellere trainingssnelheid" },
          { en: "Better accuracy on all tasks", es: "Mejor precisión en todas las tareas", de: "Bessere Genauigkeit bei allen Aufgaben", nl: "Betere nauwkeurigheid op alle taken" },
          { en: "Simpler implementation", es: "Implementación más simple", de: "Einfachere Implementierung", nl: "Eenvoudigere implementatie" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs model hidden state dynamics as continuous-time ordinary differential equations, allowing arbitrary depth networks with O(1) memory cost via adjoint sensitivity method. This enables adaptive computation, continuous normalizing flows, and irregular time series modeling.",
          es: "Las ODEs neuronales modelan la dinámica del estado oculto como ecuaciones diferenciales ordinarias de tiempo continuo, permitiendo redes de profundidad arbitraria con costo de memoria O(1) mediante el método de sensibilidad adjunta. Esto permite computación adaptativa, flujos normalizadores continuos y modelado de series temporales irregulares.",
          de: "Neurale ODEs modellieren Hidden-State-Dynamik als zeitkontinuierliche gewöhnliche Differentialgleichungen, wodurch Netzwerke beliebiger Tiefe mit O(1)-Speicherkosten über die Adjoint-Sensitivitätsmethode ermöglicht werden. Dies ermöglicht adaptive Berechnung, kontinuierliche normalisierende Flüsse und Modellierung irregulärer Zeitreihen.",
          nl: "Neurale ODEs modelleren hidden state-dynamiek als continue-tijd gewone differentiaalvergelijkingen, waardoor willekeurige diepte-netwerken mogelijk zijn met O(1) geheugenkosten via de adjoint-gevoeligheidsmethode. Dit maakt adaptieve berekening, continue normaliserende flows en onregelmatige tijdreeksmodellering mogelijk."
        }
      },
      {
        question: {
          en: "How do normalizing flows differ from VAEs for generative modeling?",
          es: "¿En qué se diferencian los flujos normalizadores de los VAEs para modelado generativo?",
          de: "Wie unterscheiden sich normalisierende Flüsse von VAEs für generative Modellierung?",
          nl: "Hoe verschillen normaliserende flows van VAEs voor generatieve modellering?"
        },
        options: [
          { en: "Exact likelihood computation via invertible transformations", es: "Cálculo de verosimilitud exacta mediante transformaciones invertibles", de: "Exakte Likelihood-Berechnung durch invertierbare Transformationen", nl: "Exacte likelihood-berekening via inverteerbare transformaties" },
          { en: "Lower computational cost", es: "Menor costo computacional", de: "Geringere Rechenkosten", nl: "Lagere rekenkosten" },
          { en: "Better sample quality always", es: "Mejor calidad de muestra siempre", de: "Immer bessere Sample-Qualität", nl: "Altijd betere sample-kwaliteit" },
          { en: "Simpler architecture", es: "Arquitectura más simple", de: "Einfachere Architektur", nl: "Eenvoudigere architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Normalizing flows learn bijective transformations between data and latent distributions, enabling exact likelihood computation via change-of-variables. VAEs use approximate inference (ELBO). Flow models include RealNVP, Glow, and continuous flows, requiring invertible operations with tractable Jacobians.",
          es: "Los flujos normalizadores aprenden transformaciones biyectivas entre datos y distribuciones latentes, permitiendo cálculo exacto de verosimilitud mediante cambio de variables. VAEs usan inferencia aproximada (ELBO). Modelos de flujo incluyen RealNVP, Glow y flujos continuos, requiriendo operaciones invertibles con Jacobianos tratables.",
          de: "Normalisierende Flüsse lernen bijektive Transformationen zwischen Daten- und Latentverteilungen, wodurch exakte Likelihood-Berechnung über Variablenwechsel ermöglicht wird. VAEs verwenden approximative Inferenz (ELBO). Flussmodelle umfassen RealNVP, Glow und kontinuierliche Flüsse, die invertierbare Operationen mit handhabbaren Jacobi-Matrizen erfordern.",
          nl: "Normaliserende flows leren bijectieve transformaties tussen data en latente verdelingen, waardoor exacte likelihood-berekening mogelijk is via variabelenverandering. VAEs gebruiken benaderende inferentie (ELBO). Flow-modellen omvatten RealNVP, Glow en continue flows, die inverteerbare operaties met traceerbare Jacobianen vereisen."
        }
      },
      {
        question: {
          en: "What challenge does the 'barren plateau' phenomenon pose for quantum neural networks?",
          es: "¿Qué desafío plantea el fenómeno de 'meseta árida' para redes neuronales cuánticas?",
          de: "Welche Herausforderung stellt das 'Barren Plateau'-Phänomen für Quanten-Neuronale Netze dar?",
          nl: "Welke uitdaging vormt het 'barren plateau'-fenomeen voor quantum neurale netwerken?"
        },
        options: [
          { en: "Exponentially vanishing gradients in deep quantum circuits", es: "Gradientes que se desvanecen exponencialmente en circuitos cuánticos profundos", de: "Exponentiell verschwindende Gradienten in tiefen Quantenschaltkreisen", nl: "Exponentieel verdwijnende gradiënten in diepe quantum-circuits" },
          { en: "Quantum decoherence issues", es: "Problemas de decoherencia cuántica", de: "Quantendekohärenzprobleme", nl: "Quantum-decoherentieproblemen" },
          { en: "Hardware limitations", es: "Limitaciones de hardware", de: "Hardware-Einschränkungen", nl: "Hardware-beperkingen" },
          { en: "High measurement error", es: "Alto error de medición", de: "Hoher Messfehler", nl: "Hoge meetfout" }
        ],
        correct: 0,
        explanation: {
          en: "Barren plateaus occur when randomly initialized parameterized quantum circuits produce gradients that vanish exponentially with circuit depth/width, making gradient-based optimization infeasible. Solutions include problem-inspired ansatze, layer-wise training, and correlation-based initialization strategies.",
          es: "Las mesetas áridas ocurren cuando circuitos cuánticos parametrizados inicializados aleatoriamente producen gradientes que se desvanecen exponencialmente con la profundidad/ancho del circuito, haciendo inviable la optimización basada en gradientes. Las soluciones incluyen ansatzes inspirados en problemas, entrenamiento por capas y estrategias de inicialización basadas en correlación.",
          de: "Barren Plateaus treten auf, wenn zufällig initialisierte parametrisierte Quantenschaltkreise Gradienten erzeugen, die exponentiell mit Schaltkreistiefe/-breite verschwinden, wodurch gradientenbasierte Optimierung undurchführbar wird. Lösungen umfassen problemorientierte Ansätze, schichtweises Training und korrelationsbasierte Initialisierungsstrategien.",
          nl: "Barren plateaus treden op wanneer willekeurig geïnitialiseerde geparametriseerde quantum-circuits gradiënten produceren die exponentieel verdwijnen met circuit-diepte/-breedte, waardoor gradiënt-gebaseerde optimalisatie onhaalbaar wordt. Oplossingen omvatten probleemgeïnspireerde ansatze, laag-gewijze training en correlatie-gebaseerde initialisatiestrategieën."
        }
      },
      {
        question: {
          en: "What is the key insight behind contrastive learning methods like SimCLR?",
          es: "¿Cuál es la idea clave detrás de métodos de aprendizaje contrastivo como SimCLR?",
          de: "Was ist die Schlüsselerkenntnis hinter kontrastiven Lernmethoden wie SimCLR?",
          nl: "Wat is het belangrijkste inzicht achter contrastieve leermethoden zoals SimCLR?"
        },
        options: [
          { en: "Maximize agreement between augmented views of same data", es: "Maximizar acuerdo entre vistas aumentadas de los mismos datos", de: "Übereinstimmung zwischen augmentierten Ansichten derselben Daten maximieren", nl: "Overeenstemming maximaliseren tussen augmented views van dezelfde data" },
          { en: "Minimize reconstruction error", es: "Minimizar error de reconstrucción", de: "Rekonstruktionsfehler minimieren", nl: "Reconstructiefout minimaliseren" },
          { en: "Maximize entropy of predictions", es: "Maximizar entropía de predicciones", de: "Entropie von Vorhersagen maximieren", nl: "Entropie van voorspellingen maximaliseren" },
          { en: "Use adversarial training", es: "Usar entrenamiento adversarial", de: "Adversariales Training verwenden", nl: "Adversarial training gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "SimCLR learns representations by maximizing agreement (similarity) between differently augmented views of the same image (positive pairs) while minimizing similarity to other images (negative pairs) using NT-Xent loss. Key components: strong augmentation, large batch sizes, projection head, and temperature-scaled contrastive loss.",
          es: "SimCLR aprende representaciones maximizando el acuerdo (similitud) entre vistas aumentadas diferentemente de la misma imagen (pares positivos) mientras minimiza la similitud con otras imágenes (pares negativos) usando pérdida NT-Xent. Componentes clave: aumento fuerte, tamaños de lote grandes, cabeza de proyección y pérdida contrastiva escalada por temperatura.",
          de: "SimCLR lernt Repräsentationen durch Maximierung der Übereinstimmung (Ähnlichkeit) zwischen unterschiedlich augmentierten Ansichten desselben Bildes (positive Paare), während die Ähnlichkeit zu anderen Bildern (negative Paare) mit NT-Xent-Loss minimiert wird. Schlüsselkomponenten: starke Augmentation, große Batch-Größen, Projektionskopf und temperatur-skalierter kontrastiver Loss.",
          nl: "SimCLR leert representaties door overeenstemming (gelijkenis) te maximaliseren tussen verschillend geaugmenteerde views van hetzelfde beeld (positieve paren) terwijl gelijkenis met andere beelden (negatieve paren) wordt geminimaliseerd met NT-Xent loss. Belangrijke componenten: sterke augmentatie, grote batch-groottes, projectie-head en temperatuur-geschaalde contrastieve loss."
        }
      },
      {
        question: {
          en: "How does Perceiver IO generalize the Perceiver architecture?",
          es: "¿Cómo generaliza Perceiver IO la arquitectura Perceiver?",
          de: "Wie verallgemeinert Perceiver IO die Perceiver-Architektur?",
          nl: "Hoe generaliseert Perceiver IO de Perceiver-architectuur?"
        },
        options: [
          { en: "Flexible output queries for arbitrary task outputs", es: "Consultas de salida flexibles para salidas de tareas arbitrarias", de: "Flexible Output-Queries für beliebige Aufgabenausgaben", nl: "Flexibele output-queries voor willekeurige taakoutputs" },
          { en: "Larger model size only", es: "Solo tamaño de modelo más grande", de: "Nur größere Modellgröße", nl: "Alleen grotere modelgrootte" },
          { en: "Better data augmentation", es: "Mejor aumento de datos", de: "Bessere Datenaugmentation", nl: "Betere data-augmentatie" },
          { en: "Faster inference speed", es: "Velocidad de inferencia más rápida", de: "Schnellere Inferenzgeschwindigkeit", nl: "Snellere inferentiesnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Perceiver IO extends Perceiver by adding a flexible output decoder using cross-attention with task-specific output queries, enabling diverse outputs (classification, language, multimodal) while maintaining the efficient latent bottleneck. The original Perceiver was limited to fixed-size outputs.",
          es: "Perceiver IO extiende Perceiver añadiendo un decodificador de salida flexible usando atención cruzada con consultas de salida específicas de la tarea, permitiendo salidas diversas (clasificación, lenguaje, multimodal) mientras mantiene el cuello de botella latente eficiente. El Perceiver original estaba limitado a salidas de tamaño fijo.",
          de: "Perceiver IO erweitert Perceiver durch Hinzufügen eines flexiblen Output-Decoders mit Cross-Attention und aufgabenspezifischen Output-Queries, wodurch diverse Ausgaben (Klassifikation, Sprache, multimodal) ermöglicht werden, während der effiziente Latent-Bottleneck beibehalten wird. Der ursprüngliche Perceiver war auf feste Ausgabegrößen beschränkt.",
          nl: "Perceiver IO breidt Perceiver uit door een flexibele output-decoder toe te voegen met cross-attention en taak-specifieke output-queries, waardoor diverse outputs (classificatie, taal, multimodaal) mogelijk zijn terwijl het efficiënte latente bottleneck behouden blijft. De originele Perceiver was beperkt tot vaste output-groottes."
        }
      },
      {
        question: {
          en: "What distinguishes PEFT (Parameter-Efficient Fine-Tuning) from full fine-tuning?",
          es: "¿Qué distingue PEFT (Ajuste Fino Eficiente en Parámetros) del ajuste fino completo?",
          de: "Was unterscheidet PEFT (Parameter-Efficient Fine-Tuning) von vollständigem Fine-Tuning?",
          nl: "Wat onderscheidt PEFT (Parameter-Efficient Fine-Tuning) van volledige fine-tuning?"
        },
        options: [
          { en: "Updates only a small subset of parameters or adds adapters", es: "Actualiza solo un pequeño subconjunto de parámetros o añade adaptadores", de: "Aktualisiert nur eine kleine Teilmenge von Parametern oder fügt Adapter hinzu", nl: "Werkt alleen een kleine subset van parameters bij of voegt adapters toe" },
          { en: "Uses smaller datasets", es: "Usa conjuntos de datos más pequeños", de: "Verwendet kleinere Datensätze", nl: "Gebruikt kleinere datasets" },
          { en: "Trains faster always", es: "Entrena más rápido siempre", de: "Trainiert immer schneller", nl: "Traint altijd sneller" },
          { en: "Requires no GPU", es: "No requiere GPU", de: "Benötigt keine GPU", nl: "Vereist geen GPU" }
        ],
        correct: 0,
        explanation: {
          en: "PEFT methods (LoRA, adapters, prefix tuning, prompt tuning) update <1% of parameters while achieving comparable performance to full fine-tuning. Benefits: reduced memory, faster training, easier model sharing, and avoiding catastrophic forgetting. LoRA adds low-rank matrices to attention weights.",
          es: "Los métodos PEFT (LoRA, adaptadores, prefix tuning, prompt tuning) actualizan <1% de parámetros mientras logran rendimiento comparable al ajuste fino completo. Beneficios: memoria reducida, entrenamiento más rápido, intercambio de modelos más fácil y evitar olvido catastrófico. LoRA añade matrices de rango bajo a pesos de atención.",
          de: "PEFT-Methoden (LoRA, Adapter, Prefix-Tuning, Prompt-Tuning) aktualisieren <1% der Parameter bei vergleichbarer Leistung zum vollständigen Fine-Tuning. Vorteile: reduzierter Speicher, schnelleres Training, einfacheres Modellteilen und Vermeidung katastrophalen Vergessens. LoRA fügt Low-Rank-Matrizen zu Attention-Gewichten hinzu.",
          nl: "PEFT-methoden (LoRA, adapters, prefix tuning, prompt tuning) werken <1% van parameters bij terwijl ze vergelijkbare prestaties behalen als volledige fine-tuning. Voordelen: verminderd geheugen, snellere training, gemakkelijker model delen en het vermijden van catastrofaal vergeten. LoRA voegt low-rank matrices toe aan attention-gewichten."
        }
      },
      {
        question: {
          en: "What problem does the Chinchilla scaling law address?",
          es: "¿Qué problema aborda la ley de escalado Chinchilla?",
          de: "Welches Problem adressiert das Chinchilla-Skalierungsgesetz?",
          nl: "Welk probleem pakt de Chinchilla-schaalwet aan?"
        },
        options: [
          { en: "Optimal balance between model size and training data", es: "Balance óptimo entre tamaño del modelo y datos de entrenamiento", de: "Optimales Gleichgewicht zwischen Modellgröße und Trainingsdaten", nl: "Optimale balans tussen modelgrootte en trainingsdata" },
          { en: "Faster inference speed", es: "Velocidad de inferencia más rápida", de: "Schnellere Inferenzgeschwindigkeit", nl: "Snellere inferentiesnelheid" },
          { en: "Better prompt engineering", es: "Mejor ingeniería de prompts", de: "Besseres Prompt-Engineering", nl: "Betere prompt-engineering" },
          { en: "Reduced hallucinations", es: "Alucinaciones reducidas", de: "Reduzierte Halluzinationen", nl: "Verminderde hallucinaties" }
        ],
        correct: 0,
        explanation: {
          en: "Chinchilla research showed most LLMs were undertrained: optimal compute allocation requires scaling data ~linearly with parameters (not quadratically as previously thought). A 70B model should train on ~1.4T tokens, not 300B. This explains why smaller, data-rich models (Chinchilla, Llama) outperform larger undertrained ones (Gopher).",
          es: "La investigación Chinchilla mostró que la mayoría de LLMs estaban subentrenados: la asignación óptima de cómputo requiere escalar datos ~linealmente con parámetros (no cuadráticamente como se pensaba). Un modelo de 70B debe entrenar con ~1.4T tokens, no 300B. Esto explica por qué modelos más pequeños ricos en datos (Chinchilla, Llama) superan a otros más grandes subentrenados (Gopher).",
          de: "Chinchilla-Forschung zeigte, dass die meisten LLMs untertrainiert waren: optimale Compute-Allokation erfordert Skalierung von Daten ~linear mit Parametern (nicht quadratisch wie zuvor gedacht). Ein 70B-Modell sollte auf ~1,4T Tokens trainieren, nicht 300B. Dies erklärt, warum kleinere, datenreiche Modelle (Chinchilla, Llama) größere untertrainierte (Gopher) übertreffen.",
          nl: "Chinchilla-onderzoek toonde aan dat de meeste LLMs ondergetraind waren: optimale compute-allocatie vereist dat data ~lineair schaalt met parameters (niet kwadratisch zoals eerder gedacht). Een 70B-model zou moeten trainen op ~1,4T tokens, niet 300B. Dit verklaart waarom kleinere, data-rijke modellen (Chinchilla, Llama) grotere ondergetrainde (Gopher) overtreffen."
        }
      },
      {
        question: {
          en: "How does FlashAttention improve transformer efficiency?",
          es: "¿Cómo mejora FlashAttention la eficiencia del transformer?",
          de: "Wie verbessert FlashAttention die Transformer-Effizienz?",
          nl: "Hoe verbetert FlashAttention de transformer-efficiëntie?"
        },
        options: [
          { en: "IO-aware tiling reduces memory bandwidth bottleneck", es: "Mosaico consciente de IO reduce cuello de botella de ancho de banda de memoria", de: "IO-bewusstes Tiling reduziert Speicherbandbreiten-Bottleneck", nl: "IO-bewuste tiling vermindert geheugenbandbreedtebottleneck" },
          { en: "Removes attention mechanism entirely", es: "Elimina completamente el mecanismo de atención", de: "Entfernt Attention-Mechanismus vollständig", nl: "Verwijdert attention-mechanisme volledig" },
          { en: "Uses smaller models", es: "Usa modelos más pequeños", de: "Verwendet kleinere Modelle", nl: "Gebruikt kleinere modellen" },
          { en: "Applies quantization only", es: "Aplica solo cuantización", de: "Wendet nur Quantisierung an", nl: "Past alleen kwantisatie toe" }
        ],
        correct: 0,
        explanation: {
          en: "FlashAttention achieves exact attention with 2-4x speedup by optimizing memory access patterns: fusing operations, tiling Q/K/V matrices to fit in SRAM, and computing attention in blocks. This reduces HBM reads/writes (the bottleneck on modern GPUs), enabling longer context windows with less memory.",
          es: "FlashAttention logra atención exacta con aceleración de 2-4x optimizando patrones de acceso a memoria: fusionando operaciones, mosaicando matrices Q/K/V para caber en SRAM y computando atención en bloques. Esto reduce lecturas/escrituras HBM (el cuello de botella en GPUs modernas), permitiendo ventanas de contexto más largas con menos memoria.",
          de: "FlashAttention erreicht exakte Attention mit 2-4x Beschleunigung durch Optimierung von Speicherzugriffsmustern: Fusion von Operationen, Tiling von Q/K/V-Matrizen für SRAM-Passung und blockweise Attention-Berechnung. Dies reduziert HBM-Lese-/Schreibvorgänge (der Bottleneck auf modernen GPUs) und ermöglicht längere Kontextfenster mit weniger Speicher.",
          nl: "FlashAttention bereikt exacte attention met 2-4x versnelling door geheugentoegangpatronen te optimaliseren: fuseren van operaties, tiling van Q/K/V-matrices om in SRAM te passen en attention in blokken berekenen. Dit vermindert HBM-lees-/schrijfoperaties (de bottleneck op moderne GPU's), waardoor langere context-vensters mogelijk zijn met minder geheugen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism behind 'emergent abilities' in LLMs?",
          es: "¿Cuál es el mecanismo principal detrás de 'habilidades emergentes' en LLMs?",
          de: "Was ist der primäre Mechanismus hinter 'emergenten Fähigkeiten' in LLMs?",
          nl: "Wat is het primaire mechanisme achter 'emergente vaardigheden' in LLMs?"
        },
        options: [
          { en: "Phase transitions at critical model/data scale thresholds", es: "Transiciones de fase en umbrales críticos de escala de modelo/datos", de: "Phasenübergänge bei kritischen Modell-/Datenskalen-Schwellenwerten", nl: "Faseovergangen bij kritieke model-/dataschaaldrempels" },
          { en: "Explicit programming of abilities", es: "Programación explícita de habilidades", de: "Explizite Programmierung von Fähigkeiten", nl: "Expliciete programmering van vaardigheden" },
          { en: "Better hardware utilization", es: "Mejor utilización de hardware", de: "Bessere Hardware-Nutzung", nl: "Beter hardwaregebruik" },
          { en: "More training epochs", es: "Más épocas de entrenamiento", de: "Mehr Trainingsepochen", nl: "Meer trainingsepochs" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent abilities are capabilities not present in smaller models but appearing sharply above certain scale thresholds (e.g., multi-step reasoning, few-shot learning). Recent research debates whether these are true phase transitions or measurement artifacts. Examples: arithmetic in GPT-3, instruction following in FLAN models.",
          es: "Las habilidades emergentes son capacidades no presentes en modelos más pequeños pero que aparecen bruscamente por encima de ciertos umbrales de escala (ej., razonamiento multi-paso, aprendizaje few-shot). Investigaciones recientes debaten si son verdaderas transiciones de fase o artefactos de medición. Ejemplos: aritmética en GPT-3, seguimiento de instrucciones en modelos FLAN.",
          de: "Emergente Fähigkeiten sind Kapazitäten, die in kleineren Modellen nicht vorhanden sind, aber oberhalb bestimmter Skalenschwellen scharf auftreten (z.B. mehrstufiges Reasoning, Few-Shot-Learning). Aktuelle Forschung debattiert, ob dies echte Phasenübergänge oder Messartefakte sind. Beispiele: Arithmetik in GPT-3, Instruktionsbefolgung in FLAN-Modellen.",
          nl: "Emergente vaardigheden zijn capaciteiten die niet aanwezig zijn in kleinere modellen maar scherp verschijnen boven bepaalde schaaldrempels (bijv. meerstaps-redeneren, few-shot learning). Recent onderzoek debatteert of dit echte faseovergangen of meetartefacten zijn. Voorbeelden: rekenen in GPT-3, instructie-opvolging in FLAN-modellen."
        }
      },
      {
        question: {
          en: "How does mixture-of-experts (MoE) achieve efficiency in large models?",
          es: "¿Cómo logran los mixture-of-experts (MoE) eficiencia en modelos grandes?",
          de: "Wie erreichen Mixture-of-Experts (MoE) Effizienz in großen Modellen?",
          nl: "Hoe bereiken mixture-of-experts (MoE) efficiëntie in grote modellen?"
        },
        options: [
          { en: "Conditional computation activates only subset of parameters per token", es: "Computación condicional activa solo subconjunto de parámetros por token", de: "Bedingte Berechnung aktiviert nur Teilmenge von Parametern pro Token", nl: "Conditionele berekening activeert slechts subset van parameters per token" },
          { en: "Reduces model size permanently", es: "Reduce tamaño del modelo permanentemente", de: "Reduziert Modellgröße dauerhaft", nl: "Vermindert modelgrootte permanent" },
          { en: "Uses only one expert always", es: "Usa solo un experto siempre", de: "Verwendet immer nur einen Experten", nl: "Gebruikt altijd slechts één expert" },
          { en: "Removes attention layers", es: "Elimina capas de atención", de: "Entfernt Attention-Schichten", nl: "Verwijdert attention-lagen" }
        ],
        correct: 0,
        explanation: {
          en: "MoE layers contain many 'expert' networks but route each token to only k experts (typically 1-2) via learned gating. This allows massive parameter counts (100B+) with ~constant compute per token. Challenges include load balancing, training stability, and expert collapse. Used in Switch Transformer, GLaM, and Mixtral.",
          es: "Las capas MoE contienen muchas redes 'expertas' pero enrutan cada token a solo k expertos (típicamente 1-2) mediante gating aprendido. Esto permite conteos masivos de parámetros (100B+) con cómputo ~constante por token. Los desafíos incluyen balanceo de carga, estabilidad de entrenamiento y colapso de expertos. Usado en Switch Transformer, GLaM y Mixtral.",
          de: "MoE-Schichten enthalten viele 'Experten'-Netzwerke, leiten aber jeden Token nur zu k Experten (typischerweise 1-2) über gelerntes Gating. Dies ermöglicht massive Parameteranzahlen (100B+) mit ~konstanter Berechnung pro Token. Herausforderungen sind Lastausgleich, Trainingsstabilität und Expertenkollaps. Verwendet in Switch Transformer, GLaM und Mixtral.",
          nl: "MoE-lagen bevatten veel 'expert'-netwerken maar routeren elk token naar slechts k experts (typisch 1-2) via geleerd gating. Dit maakt massale parametertelling mogelijk (100B+) met ~constante berekening per token. Uitdagingen zijn load balancing, trainingsstabiliteit en expert-collapse. Gebruikt in Switch Transformer, GLaM en Mixtral."
        }
      },
      {
        question: {
          en: "What distinguishes Mamba architecture from standard transformers?",
          es: "¿Qué distingue la arquitectura Mamba de transformers estándar?",
          de: "Was unterscheidet die Mamba-Architektur von Standard-Transformern?",
          nl: "Wat onderscheidt Mamba-architectuur van standaard transformers?"
        },
        options: [
          { en: "Selective state space models with linear-time inference", es: "Modelos de espacio de estado selectivos con inferencia en tiempo lineal", de: "Selektive Zustandsraummodelle mit linearer Inferenzzeit", nl: "Selectieve toestandsruimtemodellen met lineaire-tijd inferentie" },
          { en: "Uses standard self-attention", es: "Usa auto-atención estándar", de: "Verwendet Standard-Self-Attention", nl: "Gebruikt standaard self-attention" },
          { en: "Requires larger memory", es: "Requiere más memoria", de: "Benötigt größeren Speicher", nl: "Vereist groter geheugen" },
          { en: "Only works for vision tasks", es: "Solo funciona para tareas de visión", de: "Funktioniert nur für Vision-Aufgaben", nl: "Werkt alleen voor vision-taken" }
        ],
        correct: 0,
        explanation: {
          en: "Mamba uses selective structured state space models (S6) that achieve O(n) complexity for sequence length n, versus O(n²) for attention. The selection mechanism allows input-dependent state transitions, combining efficiency of recurrent models with modeling power approaching transformers. Particularly effective for long sequences (DNA, audio, time series).",
          es: "Mamba usa modelos de espacio de estado estructurados selectivos (S6) que logran complejidad O(n) para longitud de secuencia n, versus O(n²) para atención. El mecanismo de selección permite transiciones de estado dependientes de entrada, combinando eficiencia de modelos recurrentes con poder de modelado cercano a transformers. Particularmente efectivo para secuencias largas (ADN, audio, series temporales).",
          de: "Mamba verwendet selektive strukturierte Zustandsraummodelle (S6), die O(n)-Komplexität für Sequenzlänge n erreichen, versus O(n²) für Attention. Der Selektionsmechanismus ermöglicht eingabeabhängige Zustandsübergänge und kombiniert Effizienz rekurrenter Modelle mit Modellierungskraft nahe an Transformern. Besonders effektiv für lange Sequenzen (DNA, Audio, Zeitreihen).",
          nl: "Mamba gebruikt selectieve gestructureerde toestandsruimtemodellen (S6) die O(n)-complexiteit bereiken voor sequentielengte n, versus O(n²) voor attention. Het selectiemechanisme maakt input-afhankelijke toestandsovergangen mogelijk, waarbij efficiëntie van recurrente modellen wordt gecombineerd met modelleringskracht die transformers benadert. Bijzonder effectief voor lange sequenties (DNA, audio, tijdreeksen)."
        }
      },
      {
        question: {
          en: "What does 'mode connectivity' reveal about neural network loss landscapes?",
          es: "¿Qué revela la 'conectividad de modos' sobre paisajes de pérdida de redes neuronales?",
          de: "Was offenbart 'Mode Connectivity' über Loss-Landschaften neuronaler Netze?",
          nl: "Wat onthult 'mode connectivity' over loss-landschappen van neurale netwerken?"
        },
        options: [
          { en: "Different optima often connected by low-loss paths", es: "Diferentes óptimos a menudo conectados por caminos de pérdida baja", de: "Verschiedene Optima oft durch Low-Loss-Pfade verbunden", nl: "Verschillende optima vaak verbonden door low-loss paden" },
          { en: "All solutions are isolated", es: "Todas las soluciones están aisladas", de: "Alle Lösungen sind isoliert", nl: "Alle oplossingen zijn geïsoleerd" },
          { en: "Loss surfaces are convex", es: "Superficies de pérdida son convexas", de: "Loss-Oberflächen sind konvex", nl: "Loss-oppervlakken zijn convex" },
          { en: "Initialization doesn't matter", es: "La inicialización no importa", de: "Initialisierung spielt keine Rolle", nl: "Initialisatie maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Research shows independently trained networks can be connected via simple curves (e.g., polygonal chains) with no significant loss barrier, despite high-dimensional loss landscape non-convexity. This has implications for ensembling, transfer learning, and understanding generalization. Methods include linear mode connectivity and loss surface traversal techniques.",
          es: "La investigación muestra que redes entrenadas independientemente pueden conectarse mediante curvas simples (ej., cadenas poligonales) sin barrera significativa de pérdida, a pesar de la no convexidad del paisaje de pérdida de alta dimensión. Esto tiene implicaciones para ensamblaje, transfer learning y comprensión de generalización. Los métodos incluyen conectividad lineal de modos y técnicas de recorrido de superficie de pérdida.",
          de: "Forschung zeigt, dass unabhängig trainierte Netzwerke über einfache Kurven (z.B. polygonale Ketten) ohne signifikante Loss-Barriere verbunden werden können, trotz hochdimensionaler Loss-Landschafts-Nicht-Konvexität. Dies hat Implikationen für Ensembling, Transfer Learning und Generalisierungsverständnis. Methoden umfassen lineare Mode Connectivity und Loss-Surface-Traversal-Techniken.",
          nl: "Onderzoek toont aan dat onafhankelijk getrainde netwerken verbonden kunnen worden via eenvoudige krommen (bijv. polygonale ketens) zonder significante loss-barrière, ondanks hoogdimensionale loss-landschap niet-convexiteit. Dit heeft implicaties voor ensembling, transfer learning en begrip van generalisatie. Methoden omvatten lineaire mode connectivity en loss-oppervlak traversal-technieken."
        }
      },
      {
        question: {
          en: "How does speculative decoding accelerate LLM inference?",
          es: "¿Cómo acelera la decodificación especulativa la inferencia de LLM?",
          de: "Wie beschleunigt spekulatives Dekodieren die LLM-Inferenz?",
          nl: "Hoe versnelt speculatieve decodering LLM-inferentie?"
        },
        options: [
          { en: "Small draft model generates candidates verified by large model", es: "Modelo borrador pequeño genera candidatos verificados por modelo grande", de: "Kleines Draft-Modell generiert Kandidaten, verifiziert durch großes Modell", nl: "Klein ontwerp-model genereert kandidaten geverifieerd door groot model" },
          { en: "Reduces model size permanently", es: "Reduce tamaño del modelo permanentemente", de: "Reduziert Modellgröße dauerhaft", nl: "Vermindert modelgrootte permanent" },
          { en: "Uses different tokenization", es: "Usa tokenización diferente", de: "Verwendet andere Tokenisierung", nl: "Gebruikt andere tokenisatie" },
          { en: "Removes attention mechanism", es: "Elimina mecanismo de atención", de: "Entfernt Attention-Mechanismus", nl: "Verwijdert attention-mechanisme" }
        ],
        correct: 0,
        explanation: {
          en: "Speculative decoding uses a fast draft model to propose multiple tokens, then verifies them in parallel with the target large model. Accepted tokens match the large model's distribution; rejected tokens fall back to large model generation. This achieves 2-3x speedup with identical output distribution, exploiting parallelism to amortize memory bandwidth costs.",
          es: "La decodificación especulativa usa un modelo borrador rápido para proponer múltiples tokens, luego los verifica en paralelo con el modelo grande objetivo. Los tokens aceptados coinciden con la distribución del modelo grande; los rechazados vuelven a generación del modelo grande. Esto logra aceleración de 2-3x con distribución de salida idéntica, explotando paralelismo para amortizar costos de ancho de banda de memoria.",
          de: "Spekulatives Dekodieren verwendet ein schnelles Draft-Modell, um mehrere Tokens vorzuschlagen, die dann parallel mit dem großen Zielmodell verifiziert werden. Akzeptierte Tokens entsprechen der Verteilung des großen Modells; abgelehnte fallen auf Generierung des großen Modells zurück. Dies erreicht 2-3x Beschleunigung bei identischer Ausgabeverteilung und nutzt Parallelität zur Amortisierung von Speicherbandbreitenkosten.",
          nl: "Speculatieve decodering gebruikt een snel ontwerp-model om meerdere tokens voor te stellen, die vervolgens parallel met het grote doelmodel worden geverifieerd. Geaccepteerde tokens komen overeen met de verdeling van het grote model; afgewezen tokens vallen terug op generatie van het grote model. Dit bereikt 2-3x versnelling met identieke output-verdeling, waarbij parallellisme wordt benut om geheugenbandbreedtekosten te amortiseren."
        }
      },
      {
        question: {
          en: "What is the key advantage of rotary position embeddings (RoPE) over absolute position encodings?",
          es: "¿Cuál es la ventaja clave de embeddings de posición rotatorios (RoPE) sobre codificaciones de posición absolutas?",
          de: "Was ist der Hauptvorteil von Rotary Position Embeddings (RoPE) gegenüber absoluten Positionskodierungen?",
          nl: "Wat is het belangrijkste voordeel van rotary position embeddings (RoPE) boven absolute positiecodeeringen?"
        },
        options: [
          { en: "Encodes relative position via rotation in complex plane", es: "Codifica posición relativa mediante rotación en plano complejo", de: "Kodiert relative Position durch Rotation in komplexer Ebene", nl: "Codeert relatieve positie via rotatie in complex vlak" },
          { en: "Uses less memory always", es: "Usa menos memoria siempre", de: "Verwendet immer weniger Speicher", nl: "Gebruikt altijd minder geheugen" },
          { en: "Works only with small sequences", es: "Funciona solo con secuencias pequeñas", de: "Funktioniert nur mit kleinen Sequenzen", nl: "Werkt alleen met kleine sequenties" },
          { en: "Removes need for attention", es: "Elimina necesidad de atención", de: "Entfernt Notwendigkeit für Attention", nl: "Verwijdert noodzaak voor attention" }
        ],
        correct: 0,
        explanation: {
          en: "RoPE applies rotation matrices to query/key embeddings based on position, naturally encoding relative distances while maintaining compatibility with attention's dot-product structure. This enables better length extrapolation than absolute encodings and is used in models like LLaMA, PaLM, and GPT-NeoX. The rotation angle is proportional to position.",
          es: "RoPE aplica matrices de rotación a embeddings de query/key basados en posición, codificando naturalmente distancias relativas mientras mantiene compatibilidad con la estructura de producto punto de atención. Esto permite mejor extrapolación de longitud que codificaciones absolutas y se usa en modelos como LLaMA, PaLM y GPT-NeoX. El ángulo de rotación es proporcional a la posición.",
          de: "RoPE wendet Rotationsmatrizen auf Query-/Key-Embeddings basierend auf Position an, kodiert natürlich relative Abstände und behält Kompatibilität mit der Dot-Product-Struktur von Attention. Dies ermöglicht bessere Längenextrapolation als absolute Kodierungen und wird in Modellen wie LLaMA, PaLM und GPT-NeoX verwendet. Der Rotationswinkel ist proportional zur Position.",
          nl: "RoPE past rotatiematrices toe op query-/key-embeddings gebaseerd op positie, waarbij relatieve afstanden natuurlijk worden gecodeerd terwijl compatibiliteit met de dot-product-structuur van attention behouden blijft. Dit maakt betere lengte-extrapolatie mogelijk dan absolute codeeringen en wordt gebruikt in modellen zoals LLaMA, PaLM en GPT-NeoX. De rotatiehoek is evenredig met positie."
        }
      },
      {
        question: {
          en: "What problem does the 'reversal curse' highlight in LLM training?",
          es: "¿Qué problema resalta la 'maldición de inversión' en el entrenamiento de LLM?",
          de: "Welches Problem hebt der 'Reversal Curse' im LLM-Training hervor?",
          nl: "Welk probleem benadrukt de 'reversal curse' in LLM-training?"
        },
        options: [
          { en: "Models fail to infer reverse relations from forward ones", es: "Modelos fallan al inferir relaciones inversas de las directas", de: "Modelle scheitern daran, umgekehrte Beziehungen aus vorwärts gerichteten zu folgern", nl: "Modellen slagen er niet in om omgekeerde relaties af te leiden uit voorwaartse" },
          { en: "Training is too slow", es: "El entrenamiento es demasiado lento", de: "Training ist zu langsam", nl: "Training is te langzaam" },
          { en: "Models hallucinate more", es: "Modelos alucinan más", de: "Modelle halluzinieren mehr", nl: "Modellen hallucineren meer" },
          { en: "Context windows are limited", es: "Ventanas de contexto son limitadas", de: "Kontextfenster sind begrenzt", nl: "Context-vensters zijn beperkt" }
        ],
        correct: 0,
        explanation: {
          en: "Research shows if an LLM learns \"A is B\" (e.g., \"Tom Cruise starred in Top Gun\"), it doesn't automatically know \"B is A\" (\"Top Gun starred Tom Cruise\"). This reveals limitations in logical reasoning and suggests models memorize surface patterns rather than understanding symmetric relations. Implications for knowledge representation and reasoning capabilities.",
          es: "La investigación muestra que si un LLM aprende \"A es B\" (ej., \"Tom Cruise protagonizó Top Gun\"), no sabe automáticamente \"B es A\" (\"Top Gun protagonizó Tom Cruise\"). Esto revela limitaciones en razonamiento lógico y sugiere que los modelos memorizan patrones superficiales en lugar de comprender relaciones simétricas. Implicaciones para representación de conocimiento y capacidades de razonamiento.",
          de: "Forschung zeigt, wenn ein LLM \"A ist B\" lernt (z.B. \"Tom Cruise spielte in Top Gun\"), weiß es nicht automatisch \"B ist A\" (\"Top Gun spielte Tom Cruise\"). Dies offenbart Einschränkungen im logischen Reasoning und deutet darauf hin, dass Modelle Oberflächenmuster auswendig lernen, anstatt symmetrische Beziehungen zu verstehen. Implikationen für Wissensdarstellung und Reasoning-Fähigkeiten.",
          nl: "Onderzoek toont aan dat als een LLM \"A is B\" leert (bijv. \"Tom Cruise speelde in Top Gun\"), het niet automatisch \"B is A\" weet (\"Top Gun speelde Tom Cruise\"). Dit onthult beperkingen in logisch redeneren en suggereert dat modellen oppervlaktepatronen memoriseren in plaats van symmetrische relaties te begrijpen. Implicaties voor kennisrepresentatie en redeneercapaciteiten."
        }
      },
      {
        question: {
          en: "How does group query attention (GQA) balance efficiency and quality?",
          es: "¿Cómo equilibra group query attention (GQA) eficiencia y calidad?",
          de: "Wie balanciert Group Query Attention (GQA) Effizienz und Qualität?",
          nl: "Hoe balanceert group query attention (GQA) efficiëntie en kwaliteit?"
        },
        options: [
          { en: "Shares key/value heads across query groups", es: "Comparte cabezas de key/value entre grupos de query", de: "Teilt Key-/Value-Heads über Query-Gruppen", nl: "Deelt key-/value-heads over query-groepen" },
          { en: "Removes all attention heads", es: "Elimina todas las cabezas de atención", de: "Entfernt alle Attention-Heads", nl: "Verwijdert alle attention-heads" },
          { en: "Uses only one query head", es: "Usa solo una cabeza de query", de: "Verwendet nur einen Query-Head", nl: "Gebruikt slechts één query-head" },
          { en: "Increases model parameters", es: "Aumenta parámetros del modelo", de: "Erhöht Modellparameter", nl: "Vergroot modelparameters" }
        ],
        correct: 0,
        explanation: {
          en: "GQA interpolates between multi-head attention (MHA) and multi-query attention (MQA) by dividing queries into groups that share K/V heads. For example, 32 query heads might use 8 K/V heads (4 queries per group). This reduces KV cache size for faster inference while maintaining better quality than MQA. Used in Llama-2 and PaLM-2.",
          es: "GQA interpola entre atención multi-cabeza (MHA) y atención multi-query (MQA) dividiendo queries en grupos que comparten cabezas K/V. Por ejemplo, 32 cabezas de query podrían usar 8 cabezas K/V (4 queries por grupo). Esto reduce el tamaño del caché KV para inferencia más rápida mientras mantiene mejor calidad que MQA. Usado en Llama-2 y PaLM-2.",
          de: "GQA interpoliert zwischen Multi-Head-Attention (MHA) und Multi-Query-Attention (MQA), indem Queries in Gruppen aufgeteilt werden, die K/V-Heads teilen. Zum Beispiel könnten 32 Query-Heads 8 K/V-Heads verwenden (4 Queries pro Gruppe). Dies reduziert die KV-Cache-Größe für schnellere Inferenz bei besserer Qualität als MQA. Verwendet in Llama-2 und PaLM-2.",
          nl: "GQA interpoleert tussen multi-head attention (MHA) en multi-query attention (MQA) door queries te verdelen in groepen die K/V-heads delen. Bijvoorbeeld, 32 query-heads kunnen 8 K/V-heads gebruiken (4 queries per groep). Dit vermindert KV-cachegrootte voor snellere inferentie terwijl betere kwaliteit behouden blijft dan MQA. Gebruikt in Llama-2 en PaLM-2."
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