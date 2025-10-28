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
          { en: "BERT uses masked language modeling to learn bidirectional representations by predicting masked tokens using both left and right context", es: "BERT usa modelado de lenguaje enmascarado para aprender representaciones bidireccionales prediciendo tokens enmascarados usando contexto izquierdo y derecho", de: "BERT verwendet Masked Language Modeling um bidirektionale Repräsentationen zu lernen durch Vorhersage maskierter Tokens mit linkem und rechtem Kontext", nl: "BERT gebruikt masked language modeling om bidirectionele representaties te leren door gemaskeerde tokens te voorspellen met zowel linker als rechter context" },
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
          { en: "Uses autoregressive language modeling with transformer decoder architecture, enabling unsupervised pre-training followed by task-specific fine-tuning", es: "Usa modelado de lenguaje autoregresivo con arquitectura decodificador transformer, permitiendo pre-entrenamiento no supervisado seguido de ajuste fino específico a tareas", de: "Verwendet autoregressives Sprachmodeling mit Transformer-Decoder-Architektur, ermöglicht unüberwachtes Vortraining gefolgt von aufgabenspezifischem Fine-Tuning", nl: "Gebruikt autoregressief taalmodelleren met transformer decoder architectuur, maakt ongesuperviseerde pre-training mogelijk gevolgd door taak-specifieke fine-tuning" },
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
          { en: "Treats all NLP tasks as text-to-text problems, using encoder-decoder architecture with unified input-output format and task prefixes", es: "Trata todas las tareas de NLP como problemas texto-a-texto, usando arquitectura codificador-decodificador con formato entrada-salida unificado y prefijos de tarea", de: "Behandelt alle NLP-Aufgaben als Text-zu-Text-Probleme, verwendet Encoder-Decoder-Architektur mit einheitlichem Ein-Ausgabeformat und Aufgabenpräfixen", nl: "Behandelt alle NLP taken als tekst-naar-tekst problemen, gebruikt encoder-decoder architectuur met uniform input-output formaat en taak prefixen" },
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
          { en: "Divides images into patches, linearly embeds them, adds positional encoding, and processes through standard transformer encoder layers", es: "Divide imágenes en parches, los incrusta linealmente, agrega codificación posicional, y procesa a través de capas codificador transformer estándar", de: "Teilt Bilder in Patches, bettet sie linear ein, fügt Positionskodierung hinzu, und verarbeitet durch Standard-Transformer-Encoder-Schichten", nl: "Verdeelt afbeeldingen in patches, insluit ze lineair, voegt positional encoding toe, en verwerkt door standaard transformer encoder lagen" },
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
          { en: "Jointly trains image and text encoders using contrastive learning to align visual and textual representations in a shared embedding space", es: "Entrena conjuntamente codificadores de imagen y texto usando aprendizaje contrastivo para alinear representaciones visuales y textuales en un espacio de incrustación compartido", de: "Trainiert gemeinsam Bild- und Text-Encoder mit kontrastivem Lernen um visuelle und textuelle Repräsentationen in einem geteilten Embedding-Raum auszurichten", nl: "Traint gezamenlijk beeld- en tekst encoders met contrastief leren om visuele en tekstuele representaties uit te lijnen in een gedeelde embedding ruimte" },
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
          { en: "GPT-3 (175B parameters) showed emergent abilities, GPT-3.5 added instruction following via RLHF, GPT-4 became multimodal with improved reasoning", es: "GPT-3 (175B parámetros) mostró habilidades emergentes, GPT-3.5 agregó seguimiento de instrucciones vía RLHF, GPT-4 se volvió multimodal con razonamiento mejorado", de: "GPT-3 (175B Parameter) zeigte emergente Fähigkeiten, GPT-3.5 fügte Instruktionsbefolgung via RLHF hinzu, GPT-4 wurde multimodal mit verbessertem Reasoning", nl: "GPT-3 (175B parameters) toonde emergente vaardigheden, GPT-3.5 voegde instructie volgen toe via RLHF, GPT-4 werd multimodaal met verbeterd redeneren" },
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
          { en: "Uses transformer decoder architecture to generate image tokens autoregressively from text prompts, treating images as sequences of discrete tokens", es: "Usa arquitectura decodificador transformer para generar tokens de imagen autoregresivamente de prompts de texto, tratando imágenes como secuencias de tokens discretos", de: "Verwendet Transformer-Decoder-Architektur um Bild-Tokens autoregressiv aus Text-Prompts zu generieren, behandelt Bilder als Sequenzen diskreter Tokens", nl: "Gebruikt transformer decoder architectuur om beeldtokens autoregressief te genereren uit tekst prompts, behandelt afbeeldingen als sequenties van discrete tokens" },
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
          { en: "Introduces recurrence mechanism with segment-level recurrence and relative positional encoding to capture longer dependencies", es: "Introduce mecanismo de recurrencia con recurrencia a nivel de segmento y codificación posicional relativa para capturar dependencias más largas", de: "Führt Rekurrenzmechanismus mit Segment-Level-Rekurrenz und relativer Positionskodierung ein um längere Abhängigkeiten zu erfassen", nl: "Introduceert recurrentie mechanisme met segment-niveau recurrentie en relatieve positional encoding om langere afhankelijkheden vast te leggen" },
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
          { en: "Uses replaced token detection where a generator creates plausible replacements and the discriminator learns to identify which tokens were replaced", es: "Usa detección de tokens reemplazados donde un generador crea reemplazos plausibles y el discriminador aprende a identificar qué tokens fueron reemplazados", de: "Verwendet Ersetzt-Token-Erkennung wo ein Generator plausible Ersetzungen erstellt und der Discriminator lernt zu identifizieren welche Tokens ersetzt wurden", nl: "Gebruikt vervangen token detectie waarbij een generator plausibele vervangingen maakt en de discriminator leert te identificeren welke tokens vervangen zijn" },
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
          { en: "Reveals what linguistic patterns and relationships the model has learned, showing syntactic and semantic dependencies across different heads and layers", es: "Revela qué patrones lingüísticos y relaciones ha aprendido el modelo, mostrando dependencias sintácticas y semánticas a través de diferentes cabezas y capas", de: "Enthüllt welche linguistischen Muster und Beziehungen das Modell gelernt hat, zeigt syntaktische und semantische Abhängigkeiten über verschiedene Heads und Schichten", nl: "Onthult welke linguïstische patronen en relaties het model heeft geleerd, toont syntactische en semantische afhankelijkheden over verschillende heads en lagen" },
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
          { en: "Uses encoder-decoder architecture with bidirectional encoder and autoregressive decoder, trained with denoising objective on corrupted text", es: "Usa arquitectura codificador-decodificador con codificador bidireccional y decodificador autoregresivo, entrenado con objetivo de reducción de ruido en texto corrupto", de: "Verwendet Encoder-Decoder-Architektur mit bidirektionalem Encoder und autoregressivem Decoder, trainiert mit Denoising-Ziel auf beschädigtem Text", nl: "Gebruikt encoder-decoder architectuur met bidirectionele encoder en autoregressieve decoder, getraind met denoising doelstelling op beschadigde tekst" },
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
          { en: "Fine-tuning updates model parameters for specific tasks, while prompt-based learning uses carefully designed input prompts to elicit desired behavior without parameter updates", es: "Ajuste fino actualiza parámetros del modelo para tareas específicas, mientras aprendizaje basado en prompts usa prompts de entrada cuidadosamente diseñados para provocar comportamiento deseado sin actualizaciones de parámetros", de: "Fine-Tuning aktualisiert Modellparameter für spezifische Aufgaben, während Prompt-basiertes Lernen sorgfältig entworfene Eingabe-Prompts verwendet um gewünschtes Verhalten ohne Parameterupdates hervorzurufen", nl: "Fine-tuning werkt modelparameters bij voor specifieke taken, terwijl prompt-gebaseerd leren zorgvuldig ontworpen input prompts gebruikt om gewenst gedrag op te roepen zonder parameter updates" },
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
          { en: "Predict model performance based on model size, dataset size, and compute budget, showing power-law relationships between scale and capabilities", es: "Predicen rendimiento del modelo basado en tamaño del modelo, tamaño del conjunto de datos y presupuesto de cómputo, mostrando relaciones de ley de potencia entre escala y capacidades", de: "Sagen Modellleistung basierend auf Modellgröße, Datensatzgröße und Compute-Budget voraus, zeigen Potenzgesetz-Beziehungen zwischen Skala und Fähigkeiten", nl: "Voorspellen modelprestaties gebaseerd op modelgrootte, datasetgrootte en compute budget, tonen machtwet relaties tussen schaal en capaciteiten" },
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
          { en: "Foundation models are trained on broad data to serve as adaptable bases for multiple downstream tasks through fine-tuning or prompting", es: "Los modelos fundacionales se entrenan en datos amplios para servir como bases adaptables para múltiples tareas posteriores a través de ajuste fino o prompting", de: "Foundation Models werden auf breiten Daten trainiert um als anpassbare Grundlagen für mehrere nachgelagerte Aufgaben durch Fine-Tuning oder Prompting zu dienen", nl: "Foundation models worden getraind op brede data om te dienen als aanpasbare basis voor meerdere downstream taken door fine-tuning of prompting" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();