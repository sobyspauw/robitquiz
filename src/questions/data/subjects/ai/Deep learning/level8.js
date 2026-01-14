// Deep Learning Quiz - Level 8: Cutting-Edge Research and Applications
(function() {
  const level8 = {
    name: {
      en: "Deep Learning Level 8",
      es: "Aprendizaje Profundo Nivel 8",
      de: "Deep Learning Stufe 8",
      nl: "Deep Learning Level 8"
    },
    questions: [
      {
        question: {
          en: "What are foundation models and how do they differ from traditional deep learning models?",
          es: "¿Qué son los modelos de fundación y cómo difieren de los modelos tradicionales de aprendizaje profundo?",
          de: "Was sind Foundation Models und wie unterscheiden sie sich von traditionellen Deep Learning Modellen?",
          nl: "Wat zijn foundation models en hoe verschillen ze van traditionele deep learning modellen?"
        },
        options: [
          { en: "Large-scale pre-trained models that can be adapted for multiple downstream tasks", es: "Modelos pre-entrenados a gran escala que pueden adaptarse para múltiples tareas posteriores", de: "Groß angelegte vortrainierte Modelle die für mehrere nachgelagerte Aufgaben angepasst werden können", nl: "Grootschalige voorgetrainde modellen die aangepast kunnen worden voor meerdere downstream taken" },
          { en: "Models that form the foundation of neural networks", es: "Modelos que forman la fundación de redes neuronales", de: "Modelle die die Grundlage neuronaler Netzwerke bilden", nl: "Modellen die de basis vormen van neurale netwerken" },
          { en: "Basic models used for teaching deep learning", es: "Modelos básicos usados para enseñar aprendizaje profundo", de: "Grundmodelle für Deep Learning Lehre", nl: "Basismodellen gebruikt voor het onderwijzen van deep learning" },
          { en: "Models built on mathematical foundations", es: "Modelos construidos sobre fundaciones matemáticas", de: "Modelle auf mathematischen Grundlagen aufgebaut", nl: "Modellen gebouwd op wiskundige fundamenten" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models like GPT, BERT, and CLIP are trained on massive datasets and can be fine-tuned or adapted for various specific tasks, representing a paradigm shift in AI development.",
          es: "Los modelos de fundación como GPT, BERT y CLIP se entrenan en conjuntos de datos masivos y pueden afinarse o adaptarse para varias tareas específicas, representando un cambio de paradigma en desarrollo de IA.",
          de: "Foundation Models wie GPT, BERT und CLIP werden auf massiven Datensätzen trainiert und können für verschiedene spezifische Aufgaben feinabgestimmt oder angepasst werden, repräsentieren einen Paradigmenwechsel in der KI-Entwicklung.",
          nl: "Foundation models zoals GPT, BERT en CLIP worden getraind op massieve datasets en kunnen fine-getuned of aangepast worden voor verschillende specifieke taken, vertegenwoordigen een paradigmashift in AI ontwikkeling."
        }
      },
      {
        question: {
          en: "What is contrastive learning and how does it improve representation learning?",
          es: "¿Qué es el aprendizaje contrastivo y cómo mejora el aprendizaje de representaciones?",
          de: "Was ist Contrastive Learning und wie verbessert es Representation Learning?",
          nl: "Wat is contrastive learning en hoe verbetert het representation learning?"
        },
        options: [
          { en: "Learning representations by distinguishing between similar and dissimilar data pairs", es: "Aprender representaciones distinguiendo entre pares de datos similares y disímiles", de: "Repräsentationen lernen durch Unterscheidung zwischen ähnlichen und unähnlichen Datenpaaren", nl: "Representaties leren door onderscheid te maken tussen vergelijkbare en verschillende dataparen" },
          { en: "Learning by contrasting different neural architectures", es: "Aprender contrastando diferentes arquitecturas neuronales", de: "Lernen durch Kontrastierung verschiedener neuronaler Architekturen", nl: "Leren door verschillende neurale architecturen te contrasteren" },
          { en: "Creating contrast in image brightness and color", es: "Crear contraste en brillo y color de imagen", de: "Kontrast in Bildhelligkeit und Farbe erstellen", nl: "Contrast creëren in beeldhelderheid en kleur" },
          { en: "Learning opposite behaviors from training data", es: "Aprender comportamientos opuestos de datos de entrenamiento", de: "Gegensätzliche Verhaltensweisen aus Trainingsdaten lernen", nl: "Tegengestelde gedragingen leren uit trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning trains models to pull similar examples together and push dissimilar ones apart in representation space, leading to robust and generalizable features without explicit labels.",
          es: "El aprendizaje contrastivo entrena modelos para atraer ejemplos similares y alejar los disímiles en espacio de representación, llevando a características robustas y generalizables sin etiquetas explícitas.",
          de: "Contrastive Learning trainiert Modelle ähnliche Beispiele zusammenzuziehen und unähnliche im Repräsentationsraum auseinanderzudrücken, führt zu robusten und generalisierbaren Features ohne explizite Labels.",
          nl: "Contrastive learning traint modellen om vergelijkbare voorbeelden samen te trekken en verschillende uit elkaar te duwen in representatieruimte, leidt tot robuuste en generaliseerbare features zonder expliciete labels."
        }
      },
      {
        question: {
          en: "What is neural ordinary differential equations (Neural ODEs) and their significance?",
          es: "¿Qué son las ecuaciones diferenciales ordinarias neuronales (Neural ODEs) y su significancia?",
          de: "Was sind Neural Ordinary Differential Equations (Neural ODEs) und ihre Bedeutung?",
          nl: "Wat zijn neural ordinary differential equations (Neural ODEs) en hun betekenis?"
        },
        options: [
          { en: "Models that parameterize continuous dynamics of hidden states using differential equations", es: "Modelos que parametrizan dinámicas continuas de estados ocultos usando ecuaciones diferenciales", de: "Modelle die kontinuierliche Dynamiken versteckter Zustände mit Differentialgleichungen parametrisieren", nl: "Modellen die continue dynamiek van verborgen toestanden parametriseren met behulp van differentiaalvergelijkingen" },
          { en: "Neural networks for solving ordinary mathematical problems", es: "Redes neuronales para resolver problemas matemáticos ordinarios", de: "Neuronale Netzwerke für gewöhnliche mathematische Probleme", nl: "Neurale netwerken voor het oplossen van gewone wiskundige problemen" },
          { en: "Standard equations used in all neural networks", es: "Ecuaciones estándar usadas en todas las redes neuronales", de: "Standardgleichungen in allen neuronalen Netzwerken", nl: "Standaardvergelijkingen gebruikt in alle neurale netwerken" },
          { en: "Simple differential equations for basic neural operations", es: "Ecuaciones diferenciales simples para operaciones neuronales básicas", de: "Einfache Differentialgleichungen für grundlegende neuronale Operationen", nl: "Eenvoudige differentiaalvergelijkingen voor basis neurale operaties" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs treat neural networks as continuous dynamical systems, enabling memory-efficient training, adaptive computation, and modeling of irregular time series data.",
          es: "Las Neural ODEs tratan redes neuronales como sistemas dinámicos continuos, permitiendo entrenamiento eficiente en memoria, computación adaptiva y modelado de datos de series temporales irregulares.",
          de: "Neural ODEs behandeln neuronale Netzwerke als kontinuierliche dynamische Systeme, ermöglichen speichereffizientes Training, adaptive Berechnung und Modellierung irregulärer Zeitreihendaten.",
          nl: "Neural ODEs behandelen neurale netwerken als continue dynamische systemen, maken geheugenefficiënte training mogelijk, adaptieve berekening en modellering van onregelmatige tijdreeksdata."
        }
      },
      {
        question: {
          en: "What is few-shot learning and what are the main approaches to achieve it?",
          es: "¿Qué es el aprendizaje de pocos ejemplos y cuáles son los principales enfoques para lograrlo?",
          de: "Was ist Few-Shot Learning und was sind die Hauptansätze es zu erreichen?",
          nl: "Wat is few-shot learning en wat zijn de hoofdbenaderingen om het te bereiken?"
        },
        options: [
          { en: "Learning new tasks from very few examples using meta-learning, transfer learning, or data augmentation", es: "Aprender nuevas tareas de muy pocos ejemplos usando meta-aprendizaje, aprendizaje por transferencia o aumento de datos", de: "Neue Aufgaben aus sehr wenigen Beispielen lernen mit Meta-Learning, Transfer Learning oder Datenaugmentation", nl: "Nieuwe taken leren uit zeer weinig voorbeelden met behulp van meta-learning, transfer learning of data augmentatie" },
          { en: "Taking only a few shots in photography applications", es: "Tomar solo unas pocas fotos en aplicaciones de fotografía", de: "Nur wenige Aufnahmen in Fotografie-Anwendungen machen", nl: "Slechts een paar opnames maken in fotografie applicaties" },
          { en: "Training models with few computational steps", es: "Entrenar modelos con pocos pasos computacionales", de: "Modelle mit wenigen Berechnungsschritten trainieren", nl: "Modellen trainen met weinig computationele stappen" },
          { en: "Learning tasks that require few resources", es: "Aprender tareas que requieren pocos recursos", de: "Aufgaben lernen die wenige Ressourcen erfordern", nl: "Taken leren die weinig bronnen vereisen" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to quickly adapt to new classes or tasks with minimal training examples, crucial for domains where data is scarce or expensive to obtain.",
          es: "El aprendizaje de pocos ejemplos permite a modelos adaptarse rápidamente a nuevas clases o tareas con ejemplos de entrenamiento mínimos, crucial para dominios donde datos son escasos o costosos de obtener.",
          de: "Few-Shot Learning ermöglicht Modellen sich schnell an neue Klassen oder Aufgaben mit minimalen Trainingsbeispielen anzupassen, entscheidend für Bereiche wo Daten knapp oder teuer zu beschaffen sind.",
          nl: "Few-shot learning stelt modellen in staat om snel aan te passen aan nieuwe klassen of taken met minimale trainingsvoorbeelden, cruciaal voor domeinen waar data schaars of duur is om te verkrijgen."
        }
      },
      {
        question: {
          en: "What is the significance of vision transformers (ViTs) in computer vision?",
          es: "¿Cuál es la significancia de los transformers de visión (ViTs) en visión por computadora?",
          de: "Was ist die Bedeutung von Vision Transformers (ViTs) in Computer Vision?",
          nl: "Wat is de betekenis van vision transformers (ViTs) in computer vision?"
        },
        options: [
          { en: "Applying transformer architecture to images by treating image patches as sequences", es: "Aplicar arquitectura transformer a imágenes tratando parches de imagen como secuencias", de: "Transformer-Architektur auf Bilder anwenden durch Behandlung von Bildpatches als Sequenzen", nl: "Transformer architectuur toepassen op afbeeldingen door beeldpatches als sequenties te behandelen" },
          { en: "Transforming visual data into different formats", es: "Transformar datos visuales en diferentes formatos", de: "Visuelle Daten in verschiedene Formate transformieren", nl: "Visuele data transformeren naar verschillende formaten" },
          { en: "Using electrical transformers in vision systems", es: "Usar transformadores eléctricos en sistemas de visión", de: "Elektrische Transformatoren in Vision-Systemen verwenden", nl: "Elektrische transformatoren gebruiken in visiesystemen" },
          { en: "Converting vision models to work with transformers", es: "Convertir modelos de visión para trabajar con transformers", de: "Vision-Modelle für Transformer konvertieren", nl: "Visiemodellen converteren om te werken met transformers" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs revolutionized computer vision by demonstrating that pure attention mechanisms can match or exceed CNN performance on image classification when trained on sufficient data.",
          es: "Los ViTs revolucionaron visión por computadora demostrando que mecanismos de atención puros pueden igualar o exceder rendimiento de CNN en clasificación de imágenes cuando se entrenan con datos suficientes.",
          de: "ViTs revolutionierten Computer Vision durch Demonstration dass reine Aufmerksamkeitsmechanismen CNN-Leistung bei Bildklassifikation erreichen oder übertreffen können wenn auf ausreichenden Daten trainiert.",
          nl: "ViTs revolutioneerden computer vision door te demonstreren dat pure attention mechanismen CNN prestaties kunnen evenaren of overtreffen bij beeldclassificatie wanneer getraind op voldoende data."
        }
      },
      {
        question: {
          en: "What is the self-attention mechanism and how does it differ from traditional attention?",
          es: "¿Qué es el mecanismo de auto-atención y cómo difiere de la atención tradicional?",
          de: "Was ist der Self-Attention-Mechanismus und wie unterscheidet er sich von traditioneller Attention?",
          nl: "Wat is het self-attention mechanisme en hoe verschilt het van traditionele attention?"
        },
        options: [
          { en: "Allows each position in a sequence to attend to all positions in the same sequence, computing relationships within the input itself", es: "Permite que cada posición en una secuencia atienda a todas las posiciones en la misma, computando relaciones internas", de: "Ermöglicht jeder Position in einer Sequenz alle Positionen in derselben Sequenz zu beachten, berechnet interne Beziehungen", nl: "Stelt elke positie in een sequentie in staat om te letten op alle posities in dezelfde sequentie, berekent relaties binnen de input zelf" },
          { en: "Attention mechanism that focuses only on itself without external input", es: "Mecanismo de atención que se enfoca solo en sí mismo sin entrada externa", de: "Attention-Mechanismus der sich nur auf sich selbst ohne externe Eingabe fokussiert", nl: "Attention mechanisme dat zich alleen op zichzelf richt zonder externe input" },
          { en: "Self-supervised attention learning without labels", es: "Aprendizaje de atención auto-supervisado sin etiquetas", de: "Selbstüberwachtes Attention-Lernen ohne Labels", nl: "Zelf-gesuperviseerd attention leren zonder labels" },
          { en: "Attention that automatically adjusts its parameters", es: "Atención que ajusta automáticamente sus parámetros", de: "Attention die automatisch ihre Parameter anpasst", nl: "Attention die automatisch zijn parameters aanpast" }
        ],
        correct: 0,
        explanation: {
          en: "Self-attention computes attention weights between all pairs of positions in the input sequence, allowing the model to capture long-range dependencies and relationships within the data.",
          es: "La auto-atención computa pesos de atención entre todos los pares de posiciones en la secuencia de entrada, permitiendo al modelo capturar dependencias de largo alcance y relaciones dentro de los datos.",
          de: "Self-Attention berechnet Attention-Gewichte zwischen allen Paaren von Positionen in der Eingabesequenz, ermöglicht dem Modell langreichweitige Abhängigkeiten und Beziehungen in den Daten zu erfassen.",
          nl: "Self-attention berekent attention gewichten tussen alle paren van posities in de input sequentie, stelt het model in staat om lange-afstand afhankelijkheden en relaties binnen de data vast te leggen."
        }
      },
      {
        question: {
          en: "What is multi-head attention and why is it beneficial in transformers?",
          es: "¿Qué es la atención multi-cabeza y por qué es beneficiosa en transformers?",
          de: "Was ist Multi-Head Attention und warum ist sie in Transformers vorteilhaft?",
          nl: "Wat is multi-head attention en waarom is het voordelig in transformers?"
        },
        options: [
          { en: "Runs multiple attention mechanisms in parallel with different learned projections, focusing on different relationship types simultaneously", es: "Ejecuta múltiples mecanismos de atención en paralelo con proyecciones aprendidas, enfocándose en diferentes tipos de relaciones", de: "Führt mehrere Attention-Mechanismen parallel mit gelernten Projektionen aus, fokussiert verschiedene Beziehungstypen gleichzeitig", nl: "Voert meerdere attention mechanismen parallel uit met geleerde projecties, richt zich op verschillende relatietypes tegelijkertijd" },
          { en: "Uses multiple transformer heads stacked on top of each other", es: "Usa múltiples cabezas de transformer apiladas una encima de otra", de: "Verwendet mehrere Transformer-Köpfe übereinander gestapelt", nl: "Gebruikt meerdere transformer heads gestapeld op elkaar" },
          { en: "Attention mechanism with multiple output heads for different tasks", es: "Mecanismo de atención con múltiples cabezas de salida para diferentes tareas", de: "Attention-Mechanismus mit mehreren Ausgabeköpfen für verschiedene Aufgaben", nl: "Attention mechanisme met meerdere output heads voor verschillende taken" },
          { en: "Multi-headed neural network architecture for attention", es: "Arquitectura de red neuronal multi-cabeza para atención", de: "Multi-Head Neuronale Netzwerkarchitektur für Attention", nl: "Multi-head neurale netwerkarchitectuur voor attention" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-head attention allows the model to attend to information from different representation subspaces at different positions, providing richer and more diverse attention patterns.",
          es: "La atención multi-cabeza permite al modelo atender información de diferentes subespacios de representación en diferentes posiciones, proporcionando patrones de atención más ricos y diversos.",
          de: "Multi-Head Attention ermöglicht dem Modell auf Informationen aus verschiedenen Repräsentations-Unterräumen an verschiedenen Positionen zu achten, bietet reichere und vielfältigere Attention-Muster.",
          nl: "Multi-head attention stelt het model in staat om te letten op informatie uit verschillende representatie subruimtes op verschillende posities, biedt rijkere en meer diverse attention patronen."
        }
      },
      {
        question: {
          en: "What is positional encoding in transformers and why is it necessary?",
          es: "¿Qué es la codificación posicional en transformers y por qué es necesaria?",
          de: "Was ist Positional Encoding in Transformers und warum ist es notwendig?",
          nl: "Wat is positional encoding in transformers en waarom is het nodig?"
        },
        options: [
          { en: "Adds position information to input embeddings since self-attention is permutation invariant and doesn't inherently understand sequence order", es: "Agrega información de posición a embeddings ya que auto-atención es permutación-invariante y no entiende orden de secuencia", de: "Fügt Positionsinformationen zu Embeddings hinzu da Self-Attention permutationsinvariant ist und Sequenzreihenfolge nicht versteht", nl: "Voegt positie-informatie toe aan input embeddings omdat self-attention permutatie-invariant is en sequentievolgorde niet inherent begrijpt" },
          { en: "Encodes the position of transformers in the network architecture", es: "Codifica la posición de transformers en la arquitectura de red", de: "Kodiert die Position von Transformers in der Netzwerkarchitektur", nl: "Codeert de positie van transformers in de netwerkarchitectuur" },
          { en: "Determines the optimal position for placing attention layers", es: "Determina la posición óptima para colocar capas de atención", de: "Bestimmt die optimale Position für Attention-Schichten", nl: "Bepaalt de optimale positie voor het plaatsen van attention lagen" },
          { en: "Encodes spatial positions for computer vision transformers", es: "Codifica posiciones espaciales para transformers de visión por computadora", de: "Kodiert räumliche Positionen für Computer Vision Transformers", nl: "Codeert ruimtelijke posities voor computer vision transformers" }
        ],
        correct: 0,
        explanation: {
          en: "Positional encoding injects sequence order information into transformer inputs using sinusoidal functions or learned embeddings, enabling the model to understand temporal relationships.",
          es: "La codificación posicional inyecta información de orden de secuencia en entradas de transformer usando funciones sinusoidales o embeddings aprendidos, permitiendo al modelo entender relaciones temporales.",
          de: "Positional Encoding injiziert Sequenzordnungsinformationen in Transformer-Eingaben mit sinusoidalen Funktionen oder gelernten Embeddings, ermöglicht dem Modell temporale Beziehungen zu verstehen.",
          nl: "Positional encoding injecteert sequentievolgorde informatie in transformer inputs met behulp van sinusoidale functies of geleerde embeddings, stelt het model in staat om temporele relaties te begrijpen."
        }
      },
      {
        question: {
          en: "What is the key-query-value mechanism in attention and how does it work?",
          es: "¿Qué es el mecanismo clave-consulta-valor en atención y cómo funciona?",
          de: "Was ist der Key-Query-Value-Mechanismus in Attention und wie funktioniert er?",
          nl: "Wat is het key-query-value mechanisme in attention en hoe werkt het?"
        },
        options: [
          { en: "Queries determine what to look for, keys are what can be attended to, values are retrieved information, with attention weights from query-key similarity", es: "Queries determinan qué buscar, keys son a lo que se atiende, values son información recuperada, con pesos de similitud query-key", de: "Queries bestimmen wonach gesucht wird, Keys sind was beachtet wird, Values sind Informationen, Gewichte aus Query-Key-Ähnlichkeit", nl: "Queries bepalen waarnaar te zoeken, keys zijn waar naar gekeken wordt, values zijn opgehaalde informatie, gewichten uit query-key gelijkenis" },
          { en: "Three separate neural networks that process different aspects of input", es: "Tres redes neuronales separadas que procesan diferentes aspectos de entrada", de: "Drei separate neuronale Netzwerke die verschiedene Aspekte der Eingabe verarbeiten", nl: "Drie aparte neurale netwerken die verschillende aspecten van input verwerken" },
          { en: "Database-like operations for storing and retrieving attention patterns", es: "Operaciones tipo base de datos para almacenar y recuperar patrones de atención", de: "Datenbankähnliche Operationen zum Speichern und Abrufen von Attention-Mustern", nl: "Database-achtige operaties voor het opslaan en ophalen van attention patronen" },
          { en: "Three types of attention: key attention, query attention, and value attention", es: "Tres tipos de atención: atención de clave, atención de consulta y atención de valor", de: "Drei Arten von Attention: Key-Attention, Query-Attention und Value-Attention", nl: "Drie soorten attention: key attention, query attention en value attention" }
        ],
        correct: 0,
        explanation: {
          en: "The QKV mechanism computes attention as Attention(Q,K,V) = softmax(QK^T/√d_k)V, where queries and keys determine attention weights, and values are the content that gets aggregated.",
          es: "El mecanismo QKV computa atención como Attention(Q,K,V) = softmax(QK^T/√d_k)V, donde consultas y claves determinan pesos de atención, y valores son el contenido que se agrega.",
          de: "Der QKV-Mechanismus berechnet Attention als Attention(Q,K,V) = softmax(QK^T/√d_k)V, wobei Queries und Keys Attention-Gewichte bestimmen, und Values der aggregierte Inhalt sind.",
          nl: "Het QKV mechanisme berekent attention als Attention(Q,K,V) = softmax(QK^T/√d_k)V, waarbij queries en keys attention gewichten bepalen, en values de content zijn die wordt geaggregeerd."
        }
      },
      {
        question: {
          en: "What is the difference between encoder-only, decoder-only, and encoder-decoder transformer architectures?",
          es: "¿Cuál es la diferencia entre arquitecturas transformer solo-codificador, solo-decodificador y codificador-decodificador?",
          de: "Was ist der Unterschied zwischen Encoder-only, Decoder-only und Encoder-Decoder Transformer-Architekturen?",
          nl: "Wat is het verschil tussen encoder-only, decoder-only en encoder-decoder transformer architecturen?"
        },
        options: [
          { en: "Encoder-only (BERT) for understanding, decoder-only (GPT) for generation, encoder-decoder (T5) for sequence-to-sequence tasks", es: "Encoder-only (BERT) para comprensión, decoder-only (GPT) para generación, encoder-decoder (T5) para secuencia-a-secuencia", de: "Encoder-only (BERT) für Verstehen, Decoder-only (GPT) für Generierung, Encoder-Decoder (T5) für Sequenz-zu-Sequenz-Aufgaben", nl: "Encoder-only (BERT) voor begrip, decoder-only (GPT) voor generatie, encoder-decoder (T5) voor sequentie-naar-sequentie taken" },
          { en: "Different numbers of transformer layers in each architecture", es: "Diferentes números de capas transformer en cada arquitectura", de: "Verschiedene Anzahlen von Transformer-Schichten in jeder Architektur", nl: "Verschillende aantallen transformer lagen in elke architectuur" },
          { en: "Different attention mechanisms used in each type", es: "Diferentes mecanismos de atención usados en cada tipo", de: "Verschiedene Attention-Mechanismen in jedem Typ verwendet", nl: "Verschillende attention mechanismen gebruikt in elk type" },
          { en: "Different training objectives for each architecture", es: "Diferentes objetivos de entrenamiento para cada arquitectura", de: "Verschiedene Trainingsziele für jede Architektur", nl: "Verschillende trainingsdoelstellingen voor elke architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Each architecture serves different purposes: encoder-only models excel at understanding tasks, decoder-only models at autoregressive generation, and encoder-decoder models at translation-like tasks.",
          es: "Cada arquitectura sirve diferentes propósitos: modelos solo-codificador sobresalen en tareas de comprensión, solo-decodificador en generación autoregresiva, y codificador-decodificador en tareas tipo traducción.",
          de: "Jede Architektur dient verschiedenen Zwecken: Encoder-only Modelle glänzen bei Verstehensaufgaben, Decoder-only Modelle bei autoregressiver Generierung, und Encoder-Decoder Modelle bei übersetzungsähnlichen Aufgaben.",
          nl: "Elke architectuur dient verschillende doelen: encoder-only modellen excelleren in begrip taken, decoder-only modellen in autoregressieve generatie, en encoder-decoder modellen in vertaling-achtige taken."
        }
      },
      {
        question: {
          en: "What is cross-attention and how is it used in transformer architectures?",
          es: "¿Qué es la atención cruzada y cómo se usa en arquitecturas transformer?",
          de: "Was ist Cross-Attention und wie wird sie in Transformer-Architekturen verwendet?",
          nl: "Wat is cross-attention en hoe wordt het gebruikt in transformer architecturen?"
        },
        options: [
          { en: "Attention mechanism where queries come from one sequence and keys/values from another, used in decoder layers to attend to encoder outputs", es: "Mecanismo donde queries vienen de una secuencia y keys/values de otra, usado en decoder para atender salidas del encoder", de: "Mechanismus wo Queries aus einer Sequenz und Keys/Values aus anderer kommen, in Decoder-Schichten für Encoder-Ausgaben", nl: "Mechanisme waarbij queries uit één sequentie komen en keys/values uit andere, gebruikt in decoder lagen voor encoder outputs" },
          { en: "Attention that crosses between different attention heads", es: "Atención que cruza entre diferentes cabezas de atención", de: "Attention die zwischen verschiedenen Attention-Heads kreuzt", nl: "Attention dat kruist tussen verschillende attention heads" },
          { en: "Attention mechanism that works across multiple layers", es: "Mecanismo de atención que funciona a través de múltiples capas", de: "Attention-Mechanismus der über mehrere Schichten funktioniert", nl: "Attention mechanisme dat werkt over meerdere lagen" },
          { en: "Cross-validation technique for attention weights", es: "Técnica de validación cruzada para pesos de atención", de: "Cross-Validation-Technik für Attention-Gewichte", nl: "Cross-validatie techniek voor attention gewichten" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-attention enables information flow between different sequences, crucial for tasks like machine translation where the decoder needs to attend to the entire source sequence.",
          es: "La atención cruzada permite flujo de información entre diferentes secuencias, crucial para tareas como traducción automática donde el decodificador necesita atender toda la secuencia fuente.",
          de: "Cross-Attention ermöglicht Informationsfluss zwischen verschiedenen Sequenzen, entscheidend für Aufgaben wie maschinelle Übersetzung wo der Decoder auf die gesamte Quellsequenz achten muss.",
          nl: "Cross-attention maakt informatiestroming tussen verschillende sequenties mogelijk, cruciaal voor taken zoals machinevertaling waarbij de decoder naar de gehele bronsequentie moet kijken."
        }
      },
      {
        question: {
          en: "What is the purpose of layer normalization in transformers and where is it typically applied?",
          es: "¿Cuál es el propósito de la normalización de capa en transformers y dónde se aplica típicamente?",
          de: "Was ist der Zweck der Layer Normalization in Transformers und wo wird sie typisch angewendet?",
          nl: "Wat is het doel van layer normalization in transformers en waar wordt het typisch toegepast?"
        },
        options: [
          { en: "Stabilizes training by normalizing activations across the feature dimension, typically applied before or after each sub-layer (attention, feed-forward)", es: "Estabiliza entrenamiento normalizando activaciones en dimensión de características, aplicada antes/después de sub-capas", de: "Stabilisiert Training durch Normalisierung von Aktivierungen über Feature-Dimension, vor/nach Unter-Schichten angewendet", nl: "Stabiliseert training door activaties te normaliseren over feature dimensie, toegepast voor/na elke sub-laag" },
          { en: "Normalizes the number of layers in the transformer", es: "Normaliza el número de capas en el transformer", de: "Normalisiert die Anzahl der Schichten im Transformer", nl: "Normaliseert het aantal lagen in de transformer" },
          { en: "Ensures all layers have the same computational complexity", es: "Asegura que todas las capas tengan la misma complejidad computacional", de: "Stellt sicher dass alle Schichten dieselbe rechnerische Komplexität haben", nl: "Zorgt ervoor dat alle lagen dezelfde computationele complexiteit hebben" },
          { en: "Normalizes layer weights to prevent overfitting", es: "Normaliza pesos de capa para prevenir sobreajuste", de: "Normalisiert Schichtgewichte um Overfitting zu verhindern", nl: "Normaliseert laaggewichten om overfitting te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization helps with gradient flow and training stability by normalizing inputs to each layer, often combined with residual connections in transformer architectures.",
          es: "La normalización de capa ayuda con flujo de gradientes y estabilidad de entrenamiento normalizando entradas a cada capa, a menudo combinada con conexiones residuales en arquitecturas transformer.",
          de: "Layer Normalization hilft mit Gradientenfluss und Trainingsstabilität durch Normalisierung von Eingaben zu jeder Schicht, oft kombiniert mit residualen Verbindungen in Transformer-Architekturen.",
          nl: "Layer normalization helpt met gradiëntenstroom en trainingsstabiliteit door inputs naar elke laag te normaliseren, vaak gecombineerd met residuele verbindingen in transformer architecturen."
        }
      },
      {
        question: {
          en: "What is masked self-attention and why is it used in decoder layers?",
          es: "¿Qué es la auto-atención enmascarada y por qué se usa en capas decodificador?",
          de: "Was ist Masked Self-Attention und warum wird sie in Decoder-Schichten verwendet?",
          nl: "Wat is masked self-attention en waarom wordt het gebruikt in decoder lagen?"
        },
        options: [
          { en: "Prevents positions from attending to future positions in the sequence, ensuring autoregressive generation during training and inference", es: "Previene que posiciones atiendan a posiciones futuras, asegurando generación autoregressiva", de: "Verhindert dass Positionen auf zukünftige Positionen achten, gewährleistet autoregressive Generierung", nl: "Voorkomt dat posities letten op toekomstige posities, zorgt voor autoregressieve generatie tijdens training en inferentie" },
          { en: "Uses masks to hide certain attention heads during training", es: "Usa máscaras para ocultar ciertas cabezas de atención durante entrenamiento", de: "Verwendet Masken um bestimmte Attention-Heads während des Trainings zu verbergen", nl: "Gebruikt maskers om bepaalde attention heads tijdens training te verbergen" },
          { en: "Applies attention only to masked portions of the input", es: "Aplica atención solo a porciones enmascaradas de la entrada", de: "Wendet Attention nur auf maskierte Teile der Eingabe an", nl: "Past attention alleen toe op gemaskeerde delen van de input" },
          { en: "Masks out low-attention weights to improve efficiency", es: "Enmascara pesos de atención bajos para mejorar eficiencia", de: "Maskiert niedrige Attention-Gewichte um Effizienz zu verbessern", nl: "Maskeert lage attention gewichten om efficiëntie te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Masked self-attention uses a causal mask to prevent information leakage from future tokens, maintaining the autoregressive property essential for language generation tasks.",
          es: "La auto-atención enmascarada usa una máscara causal para prevenir filtración de información de tokens futuros, manteniendo la propiedad autoregresiva esencial para tareas de generación de lenguaje.",
          de: "Masked Self-Attention verwendet eine kausale Maske um Informationsleckage von zukünftigen Tokens zu verhindern, erhält die autoregressive Eigenschaft die für Sprachgenerierungsaufgaben wesentlich ist.",
          nl: "Masked self-attention gebruikt een causaal masker om informatielekken van toekomstige tokens te voorkomen, houdt de autoregressieve eigenschap bij die essentieel is voor taalgeneratie taken."
        }
      },
      {
        question: {
          en: "What is the scaled dot-product attention formula and why is the scaling factor important?",
          es: "¿Cuál es la fórmula de atención producto punto escalado y por qué es importante el factor de escala?",
          de: "Was ist die Scaled Dot-Product Attention Formel und warum ist der Skalierungsfaktor wichtig?",
          nl: "Wat is de scaled dot-product attention formule en waarom is de schaalfactor belangrijk?"
        },
        options: [
          { en: "Attention(Q,K,V) = softmax(QK^T/√d_k)V, where √d_k scaling prevents dot products from becoming too large and softmax from saturating", es: "Attention(Q,K,V) = softmax(QK^T/√d_k)V, donde escalado √d_k previene que productos punto se vuelvan demasiado grandes y softmax se sature", de: "Attention(Q,K,V) = softmax(QK^T/√d_k)V, wobei √d_k Skalierung verhindert dass Skalarprodukte zu groß werden und Softmax sättigt", nl: "Attention(Q,K,V) = softmax(QK^T/√d_k)V, waarbij √d_k schaling voorkomt dat dot products te groot worden en softmax verzadigd raakt" },
          { en: "A formula that scales attention weights based on input size", es: "Una fórmula que escala pesos de atención basada en tamaño de entrada", de: "Eine Formel die Attention-Gewichte basierend auf Eingabegröße skaliert", nl: "Een formule die attention gewichten schaalt gebaseerd op input grootte" },
          { en: "Dot product attention with learnable scaling parameters", es: "Atención producto punto con parámetros de escala aprendibles", de: "Dot-Product Attention mit lernbaren Skalierungsparametern", nl: "Dot product attention met leerbare schalings parameters" },
          { en: "A scaling method to normalize attention across different layers", es: "Un método de escalado para normalizar atención entre diferentes capas", de: "Eine Skalierungsmethode um Attention über verschiedene Schichten zu normalisieren", nl: "Een schalings methode om attention te normaliseren over verschillende lagen" }
        ],
        correct: 0,
        explanation: {
          en: "The √d_k scaling factor prevents the variance of dot products from growing with the key dimension, ensuring stable gradients and preventing softmax from producing extremely peaked distributions.",
          es: "El factor de escala √d_k previene que la varianza de productos punto crezca con la dimensión de clave, asegurando gradientes estables y previniendo que softmax produzca distribuciones extremadamente puntiagudas.",
          de: "Der √d_k Skalierungsfaktor verhindert dass die Varianz von Skalarprodukten mit der Key-Dimension wächst, gewährleistet stabile Gradienten und verhindert dass Softmax extrem spitze Verteilungen produziert.",
          nl: "De √d_k schaalfactor voorkomt dat de variantie van dot products groeit met de key dimensie, zorgt voor stabiele gradiënten en voorkomt dat softmax extreem gepunte distributies produceert."
        }
      },
      {
        question: {
          en: "What is the feed-forward network component in transformers and what role does it play?",
          es: "¿Qué es el componente de red feed-forward en transformers y qué papel juega?",
          de: "Was ist die Feed-Forward Netzwerk-Komponente in Transformers und welche Rolle spielt sie?",
          nl: "Wat is het feed-forward netwerk component in transformers en welke rol speelt het?"
        },
        options: [
          { en: "A position-wise fully connected network with ReLU activation that processes each position independently, providing non-linear transformations", es: "Red completamente conectada por posición con ReLU que procesa cada posición independientemente, da transformaciones no lineales", de: "Positionsweises vollverbundenes Netzwerk mit ReLU das jede Position unabhängig verarbeitet, bietet nichtlineare Transformationen", nl: "Positie-gewijze volledig verbonden netwerk met ReLU dat elke positie onafhankelijk verwerkt, biedt niet-lineaire transformaties" },
          { en: "A network that feeds information forward to the next transformer layer", es: "Una red que alimenta información hacia adelante a la siguiente capa transformer", de: "Ein Netzwerk das Informationen zur nächsten Transformer-Schicht weiterleitet", nl: "Een netwerk dat informatie doorvoert naar de volgende transformer laag" },
          { en: "A recurrent network for processing sequential information", es: "Una red recurrente para procesar información secuencial", de: "Ein rekurrentes Netzwerk zur Verarbeitung sequenzieller Informationen", nl: "Een recurrent netwerk voor het verwerken van sequentiële informatie" },
          { en: "A forward propagation mechanism for gradient computation", es: "Un mecanismo de propagación hacia adelante para computación de gradientes", de: "Ein Vorwärtspropagationsmechanismus für Gradientenberechnung", nl: "Een voorwaartse propagatie mechanisme voor gradiënt berekening" }
        ],
        correct: 0,
        explanation: {
          en: "The feed-forward network applies two linear transformations with ReLU activation: FFN(x) = max(0, xW₁ + b₁)W₂ + b₂, adding computational capacity and non-linearity to each position.",
          es: "La red feed-forward aplica dos transformaciones lineales con activación ReLU: FFN(x) = max(0, xW₁ + b₁)W₂ + b₂, agregando capacidad computacional y no linealidad a cada posición.",
          de: "Das Feed-Forward Netzwerk wendet zwei lineare Transformationen mit ReLU-Aktivierung an: FFN(x) = max(0, xW₁ + b₁)W₂ + b₂, fügt rechnerische Kapazität und Nichtlinearität zu jeder Position hinzu.",
          nl: "Het feed-forward netwerk past twee lineaire transformaties toe met ReLU activatie: FFN(x) = max(0, xW₁ + b₁)W₂ + b₂, voegt computationele capaciteit en niet-lineariteit toe aan elke positie."
        }
      },
      {
        question: {
          en: "What are residual connections in transformers and why are they crucial for deep networks?",
          es: "¿Qué son las conexiones residuales en transformers y por qué son cruciales para redes profundas?",
          de: "Was sind residuale Verbindungen in Transformers und warum sind sie entscheidend für tiefe Netzwerke?",
          nl: "Wat zijn residuele verbindingen in transformers en waarom zijn ze cruciaal voor diepe netwerken?"
        },
        options: [
          { en: "Skip connections that add the input to the output of each sub-layer, enabling gradient flow and preventing vanishing gradients in deep networks", es: "Conexiones de salto que agregan entrada a salida de sub-capa, permiten flujo de gradientes y previenen gradientes desvanecientes", de: "Skip-Verbindungen die Eingabe zur Ausgabe jeder Unter-Schicht hinzufügen, ermöglichen Gradientenfluss und verhindern Gradienten-Verschwinden", nl: "Skip verbindingen die input toevoegen aan output van sub-laag, maken gradiëntenstroom mogelijk en voorkomen verdwijnende gradiënten" },
          { en: "Connections that store residual information for later use", es: "Conexiones que almacenan información residual para uso posterior", de: "Verbindungen die residuale Informationen für späteren Gebrauch speichern", nl: "Verbindingen die residuele informatie opslaan voor later gebruik" },
          { en: "Backup connections in case primary connections fail", es: "Conexiones de respaldo en caso de que fallen conexiones primarias", de: "Backup-Verbindungen falls primäre Verbindungen versagen", nl: "Backup verbindingen voor het geval primaire verbindingen falen" },
          { en: "Connections between residual blocks in the architecture", es: "Conexiones entre bloques residuales en la arquitectura", de: "Verbindungen zwischen residualen Blöcken in der Architektur", nl: "Verbindingen tussen residuele blokken in de architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Residual connections implement the pattern x + SubLayer(x), allowing gradients to flow directly through the network and enabling training of very deep transformer models.",
          es: "Las conexiones residuales implementan el patrón x + SubLayer(x), permitiendo que gradientes fluyan directamente a través de la red y permitiendo entrenamiento de modelos transformer muy profundos.",
          de: "Residuale Verbindungen implementieren das Muster x + SubLayer(x), ermöglichen Gradienten direkt durch das Netzwerk zu fließen und ermöglichen Training sehr tiefer Transformer-Modelle.",
          nl: "Residuele verbindingen implementeren het patroon x + SubLayer(x), maken het mogelijk dat gradiënten direct door het netwerk stromen en maken training van zeer diepe transformer modellen mogelijk."
        }
      },
      {
        question: {
          en: "What is the difference between absolute and relative positional encoding in transformers?",
          es: "¿Cuál es la diferencia entre codificación posicional absoluta y relativa en transformers?",
          de: "Was ist der Unterschied zwischen absoluter und relativer Positionskodierung in Transformers?",
          nl: "Wat is het verschil tussen absolute en relatieve positional encoding in transformers?"
        },
        options: [
          { en: "Absolute encoding assigns fixed positions to tokens, while relative encoding focuses on distances between tokens, often providing better generalization", es: "Codificación absoluta asigna posiciones fijas a tokens, relativa se enfoca en distancias, da mejor generalización", de: "Absolute Kodierung weist Tokens feste Positionen zu, relative fokussiert auf Abstände, bietet bessere Generalisierung", nl: "Absolute encoding wijst vaste posities toe, relatieve richt zich op afstanden tussen tokens, biedt vaak betere generalisatie" },
          { en: "Absolute encoding uses real numbers while relative uses integers", es: "Codificación absoluta usa números reales mientras relativa usa enteros", de: "Absolute Kodierung verwendet reelle Zahlen während relative ganze Zahlen verwendet", nl: "Absolute encoding gebruikt reële getallen terwijl relatieve gehele getallen gebruikt" },
          { en: "Absolute encoding is learned while relative is fixed", es: "Codificación absoluta se aprende mientras relativa es fija", de: "Absolute Kodierung wird gelernt während relative fest ist", nl: "Absolute encoding wordt geleerd terwijl relatieve vast is" },
          { en: "Absolute encoding works for any sequence length while relative is limited", es: "Codificación absoluta funciona para cualquier longitud de secuencia mientras relativa está limitada", de: "Absolute Kodierung funktioniert für jede Sequenzlänge während relative begrenzt ist", nl: "Absolute encoding werkt voor elke sequentielengte terwijl relatieve beperkt is" }
        ],
        correct: 0,
        explanation: {
          en: "Relative positional encoding often generalizes better to sequence lengths not seen during training and captures the intuition that relative distances matter more than absolute positions.",
          es: "La codificación posicional relativa a menudo generaliza mejor a longitudes de secuencia no vistas durante entrenamiento y captura la intuición de que distancias relativas importan más que posiciones absolutas.",
          de: "Relative Positionskodierung generalisiert oft besser zu Sequenzlängen die während des Trainings nicht gesehen wurden und erfasst die Intuition dass relative Abstände wichtiger sind als absolute Positionen.",
          nl: "Relatieve positional encoding generaliseert vaak beter naar sequentielengtes die niet gezien zijn tijdens training en vangt de intuïtie dat relatieve afstanden belangrijker zijn dan absolute posities."
        }
      },
      {
        question: {
          en: "What is the attention weight computation process in transformers?",
          es: "¿Cuál es el proceso de computación de pesos de atención en transformers?",
          de: "Was ist der Attention-Gewichts-Berechnungsprozess in Transformers?",
          nl: "Wat is het attention gewicht berekeningsproces in transformers?"
        },
        options: [
          { en: "Compute dot products between queries and keys, scale by √d_k, apply softmax to get probabilities, then use these to weight the values", es: "Computar productos punto entre queries y keys, escalar por √d_k, aplicar softmax, usar para ponderar valores", de: "Skalarprodukte zwischen Queries und Keys berechnen, durch √d_k skalieren, Softmax anwenden, verwenden um Values zu gewichten", nl: "Bereken dot products tussen queries en keys, schaal door √d_k, pas softmax toe, gebruik deze om values te wegen" },
          { en: "Train a separate network to learn attention weights", es: "Entrenar una red separada para aprender pesos de atención", de: "Ein separates Netzwerk trainieren um Attention-Gewichte zu lernen", nl: "Train een apart netwerk om attention gewichten te leren" },
          { en: "Use predetermined attention patterns based on position", es: "Usar patrones de atención predeterminados basados en posición", de: "Vorbestimmte Attention-Muster basierend auf Position verwenden", nl: "Gebruik vooraf bepaalde attention patronen gebaseerd op positie" },
          { en: "Randomly sample attention weights during training", es: "Muestrear aleatoriamente pesos de atención durante entrenamiento", de: "Attention-Gewichte während des Trainings zufällig sampeln", nl: "Willekeurig attention gewichten samplen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "The attention mechanism computes similarity scores between queries and keys, normalizes them into a probability distribution, and uses these probabilities to create weighted combinations of values.",
          es: "El mecanismo de atención computa puntuaciones de similitud entre consultas y claves, las normaliza en una distribución de probabilidad, y usa estas probabilidades para crear combinaciones ponderadas de valores.",
          de: "Der Attention-Mechanismus berechnet Ähnlichkeits-Scores zwischen Queries und Keys, normalisiert sie zu einer Wahrscheinlichkeitsverteilung, und verwendet diese Wahrscheinlichkeiten um gewichtete Kombinationen von Values zu erstellen.",
          nl: "Het attention mechanisme berekent gelijkenisscores tussen queries en keys, normaliseert ze tot een kansverdeling, en gebruikt deze kansen om gewogen combinaties van values te maken."
        }
      },
      {
        question: {
          en: "What is sparse attention and how does it address computational complexity in transformers?",
          es: "¿Qué es la atención dispersa y cómo aborda la complejidad computacional en transformers?",
          de: "Was ist Sparse Attention und wie adressiert sie rechnerische Komplexität in Transformers?",
          nl: "Wat is sparse attention en hoe pakt het computationele complexiteit aan in transformers?"
        },
        options: [
          { en: "Limits attention to a subset of positions rather than all pairs, reducing complexity from O(n²) to O(n√n) or O(n log n) while maintaining performance", es: "Limita atención a subconjunto de posiciones no todos los pares, reduce complejidad de O(n²) a O(n√n) o O(n log n)", de: "Begrenzt Attention auf Teilmenge von Positionen nicht alle Paare, reduziert Komplexität von O(n²) zu O(n√n) oder O(n log n)", nl: "Beperkt attention tot subset van posities niet alle paren, vermindert complexiteit van O(n²) naar O(n√n) of O(n log n)" },
          { en: "Uses fewer attention heads to reduce computation", es: "Usa menos cabezas de atención para reducir computación", de: "Verwendet weniger Attention-Heads um Berechnung zu reduzieren", nl: "Gebruikt minder attention heads om berekening te verminderen" },
          { en: "Applies attention only to sparse representations of input", es: "Aplica atención solo a representaciones dispersas de entrada", de: "Wendet Attention nur auf spärliche Repräsentationen der Eingabe an", nl: "Past attention alleen toe op dunne representaties van input" },
          { en: "Randomly drops attention connections during training", es: "Elimina aleatoriamente conexiones de atención durante entrenamiento", de: "Lässt zufällig Attention-Verbindungen während des Trainings fallen", nl: "Laat willekeurig attention verbindingen vallen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Sparse attention patterns like local windows, strided patterns, or learned sparsity enable transformers to process much longer sequences efficiently while maintaining the benefits of attention.",
          es: "Patrones de atención dispersa como ventanas locales, patrones de zancada, o dispersión aprendida permiten a transformers procesar secuencias mucho más largas eficientemente mientras mantienen beneficios de atención.",
          de: "Sparse Attention-Muster wie lokale Fenster, gestaffelte Muster oder gelernte Spärlichkeit ermöglichen Transformers viel längere Sequenzen effizient zu verarbeiten während Vorteile von Attention beibehalten werden.",
          nl: "Sparse attention patronen zoals lokale vensters, gestapelde patronen, of geleerde dunheid maken het mogelijk dat transformers veel langere sequenties efficiënt verwerken terwijl voordelen van attention behouden blijven."
        }
      },
      {
        question: {
          en: "What is the role of the softmax function in attention mechanisms?",
          es: "¿Cuál es el papel de la función softmax en mecanismos de atención?",
          de: "Was ist die Rolle der Softmax-Funktion in Attention-Mechanismen?",
          nl: "Wat is de rol van de softmax functie in attention mechanismen?"
        },
        options: [
          { en: "Converts attention scores into a probability distribution that sums to 1, ensuring proper weighting and enabling gradient flow through attention weights", es: "Convierte scores de atención en distribución de probabilidad que suma 1, asegura ponderación y flujo de gradientes", de: "Konvertiert Attention-Scores in Wahrscheinlichkeitsverteilung die sich zu 1 summiert, gewährleistet Gewichtung und Gradientenfluss", nl: "Converteert attention scores naar kansverdeling die optelt tot 1, zorgt voor weging en maakt gradiëntenstroom mogelijk" },
          { en: "Amplifies the strongest attention signals while suppressing others", es: "Amplifica las señales de atención más fuertes mientras suprime otras", de: "Verstärkt die stärksten Attention-Signale während andere unterdrückt werden", nl: "Versterkt de sterkste attention signalen terwijl andere onderdrukt worden" },
          { en: "Applies non-linear activation to attention computations", es: "Aplica activación no lineal a computaciones de atención", de: "Wendet nichtlineare Aktivierung auf Attention-Berechnungen an", nl: "Past niet-lineaire activatie toe op attention berekeningen" },
          { en: "Normalizes attention weights to prevent overflow", es: "Normaliza pesos de atención para prevenir desbordamiento", de: "Normalisiert Attention-Gewichte um Überlauf zu verhindern", nl: "Normaliseert attention gewichten om overflow te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax ensures attention weights form a valid probability distribution, enabling meaningful weighted combinations of values and providing stable gradients for learning attention patterns.",
          es: "Softmax asegura que pesos de atención formen una distribución de probabilidad válida, permitiendo combinaciones ponderadas significativas de valores y proporcionando gradientes estables para aprender patrones de atención.",
          de: "Softmax stellt sicher dass Attention-Gewichte eine gültige Wahrscheinlichkeitsverteilung bilden, ermöglicht bedeutungsvolle gewichtete Kombinationen von Values und bietet stabile Gradienten zum Lernen von Attention-Mustern.",
          nl: "Softmax zorgt ervoor dat attention gewichten een geldige kansverdeling vormen, maakt betekenisvolle gewogen combinaties van values mogelijk en biedt stabiele gradiënten voor het leren van attention patronen."
        }
      },
      {
        question: {
          en: "What is model distillation and how does it enable efficient deployment?",
          es: "¿Qué es la destilación de modelos y cómo permite despliegue eficiente?",
          de: "Was ist Modelldistillation und wie ermöglicht sie effizientes Deployment?",
          nl: "Wat is modeldistillatie en hoe maakt het efficiënte deployment mogelijk?"
        },
        options: [
          { en: "Transferring knowledge from large teacher models to smaller student models by training on soft probability distributions", es: "Transferir conocimiento de modelos maestros grandes a modelos estudiantes más pequeños entrenando en distribuciones de probabilidad suaves", de: "Wissen von großen Lehrer-Modellen auf kleinere Schüler-Modelle übertragen durch Training auf weichen Wahrscheinlichkeitsverteilungen", nl: "Kennis overdragen van grote leraar modellen naar kleinere student modellen door te trainen op zachte waarschijnlijkheidsverdelingen" },
          { en: "Extracting essential features from models", es: "Extraer características esenciales de modelos", de: "Wesentliche Merkmale aus Modellen extrahieren", nl: "Essentiële kenmerken extraheren uit modellen" },
          { en: "Purifying model parameters through filtering", es: "Purificar parámetros de modelo a través de filtrado", de: "Modellparameter durch Filterung reinigen", nl: "Modelparameters zuiveren door filteren" },
          { en: "Compressing models by removing duplicate weights", es: "Comprimir modelos removiendo pesos duplicados", de: "Modelle durch Entfernen doppelter Gewichte komprimieren", nl: "Modellen comprimeren door dubbele gewichten te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers the generalization ability of large models to compact models by using teacher outputs as soft targets, achieving comparable performance with significantly fewer parameters.",
          es: "La destilación de conocimiento transfiere la capacidad de generalización de modelos grandes a modelos compactos usando salidas del maestro como objetivos suaves, logrando rendimiento comparable con significativamente menos parámetros.",
          de: "Knowledge Distillation überträgt die Generalisierungsfähigkeit großer Modelle auf kompakte Modelle durch Verwendung von Lehrer-Ausgaben als weiche Ziele, erreicht vergleichbare Leistung mit signifikant weniger Parametern.",
          nl: "Knowledge distillation draagt het generalisatie vermogen van grote modellen over naar compacte modellen door leraar outputs te gebruiken als zachte targets, bereikt vergelijkbare prestaties met significant minder parameters."
        }
      },
      {
        question: {
          en: "What are graph attention networks (GATs) and how do they improve upon standard GNNs?",
          es: "¿Qué son las redes de atención de grafos (GAT) y cómo mejoran sobre GNNs estándar?",
          de: "Was sind Graph Attention Networks (GATs) und wie verbessern sie Standard-GNNs?",
          nl: "Wat zijn graph attention networks (GATs) en hoe verbeteren ze standaard GNNs?"
        },
        options: [
          { en: "Apply attention mechanisms to weigh neighbor importance dynamically rather than using fixed aggregation", es: "Aplican mecanismos de atención para ponderar importancia de vecinos dinámicamente en lugar de usar agregación fija", de: "Wenden Attention-Mechanismen an um Nachbar-Wichtigkeit dynamisch zu gewichten anstatt feste Aggregation zu verwenden", nl: "Passen attention mechanismen toe om belang van buren dynamisch te wegen in plaats van vaste aggregatie te gebruiken" },
          { en: "Use gating mechanisms to filter graph information", es: "Usan mecanismos de compuerta para filtrar información de grafos", de: "Verwenden Gating-Mechanismen um Graph-Informationen zu filtern", nl: "Gebruiken gating mechanismen om graaf informatie te filteren" },
          { en: "Apply transformers directly to graph structures", es: "Aplican transformers directamente a estructuras de grafos", de: "Wenden Transformers direkt auf Graphstrukturen an", nl: "Passen transformers direct toe op graafstructuren" },
          { en: "Attend to multiple graph layers simultaneously", es: "Atienden a múltiples capas de grafos simultáneamente", de: "Beachten mehrere Graph-Schichten gleichzeitig", nl: "Letten op meerdere graaflagen tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "GATs learn to assign different importance to different neighbors through attention coefficients, enabling more flexible and expressive aggregation compared to fixed neighborhood pooling.",
          es: "GATs aprenden a asignar diferente importancia a diferentes vecinos a través de coeficientes de atención, permitiendo agregación más flexible y expresiva comparado con pooling de vecindario fijo.",
          de: "GATs lernen verschiedenen Nachbarn unterschiedliche Wichtigkeit zuzuweisen durch Attention-Koeffizienten, ermöglichen flexiblere und ausdrucksstärkere Aggregation verglichen mit festem Nachbarschafts-Pooling.",
          nl: "GATs leren om verschillende belangrijkheid toe te kennen aan verschillende buren door attention coëfficiënten, maken meer flexibele en expressieve aggregatie mogelijk vergeleken met vaste buurt pooling."
        }
      },
      {
        question: {
          en: "What is neural machine translation (NMT) and how has it evolved with transformers?",
          es: "¿Qué es la traducción automática neuronal (NMT) y cómo ha evolucionado con transformers?",
          de: "Was ist neuronale maschinelle Übersetzung (NMT) und wie hat sie sich mit Transformern entwickelt?",
          nl: "Wat is neural machine translation (NMT) en hoe is het geëvolueerd met transformers?"
        },
        options: [
          { en: "Evolved from RNN seq2seq models to transformer-based architectures achieving near-human translation quality", es: "Evolucionó de modelos seq2seq RNN a arquitecturas basadas en transformer logrando calidad de traducción casi humana", de: "Entwickelte sich von RNN seq2seq Modellen zu Transformer-basierten Architekturen die nahezu menschliche Übersetzungsqualität erreichen", nl: "Evolueerde van RNN seq2seq modellen naar transformer-gebaseerde architecturen die bijna menselijke vertaalkwaliteit bereiken" },
          { en: "Uses neural networks to translate between programming languages", es: "Usa redes neuronales para traducir entre lenguajes de programación", de: "Verwendet neuronale Netzwerke um zwischen Programmiersprachen zu übersetzen", nl: "Gebruikt neurale netwerken om te vertalen tussen programmeertalen" },
          { en: "Translates neural signals to text output", es: "Traduce señales neuronales a salida de texto", de: "Übersetzt neuronale Signale in Textausgabe", nl: "Vertaalt neurale signalen naar tekstoutput" },
          { en: "Machines that learn to translate autonomously", es: "Máquinas que aprenden a traducir autónomamente", de: "Maschinen die autonom übersetzen lernen", nl: "Machines die autonoom leren vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Transformer-based NMT models like mT5 and mBART handle parallel attention across sequences, enabling better handling of long-range dependencies and context compared to sequential RNN models.",
          es: "Modelos NMT basados en transformer como mT5 y mBART manejan atención paralela a través de secuencias, permitiendo mejor manejo de dependencias de largo alcance y contexto comparado con modelos RNN secuenciales.",
          de: "Transformer-basierte NMT-Modelle wie mT5 und mBART handhaben parallele Attention über Sequenzen, ermöglichen besseres Handling von langreichweitigen Abhängigkeiten und Kontext verglichen mit sequenziellen RNN-Modellen.",
          nl: "Transformer-gebaseerde NMT modellen zoals mT5 en mBART behandelen parallelle attention over sequenties, maken betere behandeling mogelijk van lange-afstand afhankelijkheden en context vergeleken met sequentiële RNN modellen."
        }
      },
      {
        question: {
          en: "What is zero-shot transfer and how do foundation models enable it?",
          es: "¿Qué es la transferencia de cero ejemplos y cómo la habilitan los modelos de fundación?",
          de: "Was ist Zero-Shot Transfer und wie ermöglichen Foundation Models ihn?",
          nl: "Wat is zero-shot transfer en hoe maken foundation models het mogelijk?"
        },
        options: [
          { en: "Performing tasks without task-specific training by leveraging knowledge learned during pre-training on diverse data", es: "Realizar tareas sin entrenamiento específico aprovechando conocimiento de pre-entrenamiento en datos diversos", de: "Aufgaben ohne spezifisches Training durch Nutzung von Wissen aus Vortraining auf vielfältigen Daten", nl: "Taken uitvoeren zonder taak-specifieke training door kennis te benutten die geleerd is tijdens pre-training op diverse data" },
          { en: "Transferring models without any examples at all", es: "Transferir modelos sin ejemplos en absoluto", de: "Modelle ohne Beispiele überhaupt übertragen", nl: "Modellen overdragen zonder enige voorbeelden" },
          { en: "Zero-cost transfer learning techniques", es: "Técnicas de aprendizaje por transferencia de costo cero", de: "Null-Kosten Transfer Learning Techniken", nl: "Nul-kosten transfer learning technieken" },
          { en: "Instantaneous transfer without processing time", es: "Transferencia instantánea sin tiempo de procesamiento", de: "Sofortige Übertragung ohne Verarbeitungszeit", nl: "Onmiddellijke overdracht zonder verwerkingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models' broad pre-training enables them to generalize to unseen tasks through appropriate prompting, demonstrating sophisticated internal representations that capture general patterns.",
          es: "El pre-entrenamiento amplio de modelos de fundación les permite generalizar a tareas no vistas a través de prompting apropiado, demostrando representaciones internas sofisticadas que capturan patrones generales.",
          de: "Das breite Vortraining von Foundation Models ermöglicht ihnen zu ungesehenen Aufgaben zu generalisieren durch angemessenes Prompting, demonstriert ausgeklügelte interne Repräsentationen die allgemeine Muster erfassen.",
          nl: "De brede pre-training van foundation models stelt hen in staat om te generaliseren naar ongeziene taken door gepast prompting, toont geavanceerde interne representaties die algemene patronen vastleggen."
        }
      },
      {
        question: {
          en: "What is prompt engineering and why has it become crucial for working with LLMs?",
          es: "¿Qué es la ingeniería de prompts y por qué se ha vuelto crucial para trabajar con LLMs?",
          de: "Was ist Prompt Engineering und warum ist es entscheidend für die Arbeit mit LLMs geworden?",
          nl: "Wat is prompt engineering en waarom is het cruciaal geworden voor het werken met LLMs?"
        },
        options: [
          { en: "Designing effective input prompts to elicit desired behaviors from models without modifying parameters", es: "Diseñar prompts de entrada efectivos para provocar comportamientos deseados de modelos sin modificar parámetros", de: "Effektive Eingabe-Prompts entwerfen um gewünschte Verhaltensweisen von Modellen hervorzurufen ohne Parameter zu modifizieren", nl: "Effectieve input prompts ontwerpen om gewenst gedrag van modellen op te roepen zonder parameters te wijzigen" },
          { en: "Engineering systems that generate prompts automatically", es: "Ingeniar sistemas que generan prompts automáticamente", de: "Systeme konstruieren die Prompts automatisch generieren", nl: "Systemen ontwerpen die prompts automatisch genereren" },
          { en: "Building infrastructure for prompt processing", es: "Construir infraestructura para procesamiento de prompts", de: "Infrastruktur für Prompt-Verarbeitung aufbauen", nl: "Infrastructuur bouwen voor prompt verwerking" },
          { en: "Optimizing prompt delivery speed", es: "Optimizar velocidad de entrega de prompts", de: "Prompt-Liefergeschwindigkeit optimieren", nl: "Prompt leverings snelheid optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt engineering leverages the in-context learning capabilities of LLMs, using techniques like few-shot examples, chain-of-thought reasoning, and instruction formatting to guide model behavior.",
          es: "La ingeniería de prompts aprovecha las capacidades de aprendizaje en contexto de LLMs, usando técnicas como ejemplos de pocos shots, razonamiento en cadena de pensamiento y formato de instrucciones para guiar comportamiento del modelo.",
          de: "Prompt Engineering nutzt die In-Context Learning Fähigkeiten von LLMs, verwendet Techniken wie Few-Shot Beispiele, Chain-of-Thought Reasoning und Instruktionsformatierung um Modellverhalten zu leiten.",
          nl: "Prompt engineering benut de in-context learning capaciteiten van LLMs, gebruikt technieken zoals few-shot voorbeelden, chain-of-thought redeneren en instructie formattering om modelgedrag te sturen."
        }
      },
      {
        question: {
          en: "What are adversarial examples and how do they challenge neural network robustness?",
          es: "¿Qué son los ejemplos adversarios y cómo desafían la robustez de redes neuronales?",
          de: "Was sind adversarielle Beispiele und wie fordern sie die Robustheit neuronaler Netzwerke heraus?",
          nl: "Wat zijn adversariële voorbeelden en hoe dagen ze de robuustheid van neurale netwerken uit?"
        },
        options: [
          { en: "Carefully crafted inputs with imperceptible perturbations that cause models to make incorrect predictions", es: "Entradas cuidadosamente elaboradas con perturbaciones imperceptibles que causan que modelos hagan predicciones incorrectas", de: "Sorgfältig gestaltete Eingaben mit unmerklichen Störungen die Modelle falsche Vorhersagen machen lassen", nl: "Zorgvuldig geconstrueerde inputs met onmerkbare verstoringen die modellen verkeerde voorspellingen laten maken" },
          { en: "Examples from adversarial domains used for testing", es: "Ejemplos de dominios adversarios usados para pruebas", de: "Beispiele aus adversariellen Bereichen für Tests verwendet", nl: "Voorbeelden uit adversariële domeinen gebruikt voor testen" },
          { en: "Training examples that oppose each other", es: "Ejemplos de entrenamiento que se oponen entre sí", de: "Trainingsbeispiele die sich gegenseitig entgegenstehen", nl: "Trainingsvoorbeelden die tegenover elkaar staan" },
          { en: "Examples of adversarial network architectures", es: "Ejemplos de arquitecturas de red adversarias", de: "Beispiele für adversarielle Netzwerkarchitekturen", nl: "Voorbeelden van adversariële netwerkarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial examples reveal that neural networks can be fooled by tiny perturbations invisible to humans, highlighting vulnerabilities and spurring research into robust training methods and certified defenses.",
          es: "Los ejemplos adversarios revelan que redes neuronales pueden ser engañadas por perturbaciones minúsculas invisibles a humanos, destacando vulnerabilidades y estimulando investigación en métodos de entrenamiento robustos y defensas certificadas.",
          de: "Adversarielle Beispiele zeigen dass neuronale Netzwerke durch winzige für Menschen unsichtbare Störungen getäuscht werden können, heben Schwachstellen hervor und stimulieren Forschung in robusten Trainingsmethoden und zertifizierten Verteidigungen.",
          nl: "Adversariële voorbeelden onthullen dat neurale netwerken misleid kunnen worden door kleine verstoringen onzichtbaar voor mensen, benadrukken kwetsbaarheden en stimuleren onderzoek naar robuuste trainingsmethoden en gecertificeerde verdedigingen."
        }
      },
      {
        question: {
          en: "What is the attention mechanism's computational complexity and how do efficient attention variants address it?",
          es: "¿Cuál es la complejidad computacional del mecanismo de atención y cómo las variantes de atención eficientes la abordan?",
          de: "Was ist die rechnerische Komplexität des Attention-Mechanismus und wie adressieren effiziente Attention-Varianten sie?",
          nl: "Wat is de computationele complexiteit van het attention mechanisme en hoe pakken efficiënte attention varianten het aan?"
        },
        options: [
          { en: "Standard attention is O(n²) in sequence length, addressed by linear attention, sparse patterns, and low-rank approximations", es: "Atención estándar es O(n²) en longitud de secuencia, abordada por atención lineal, patrones dispersos y aproximaciones de bajo rango", de: "Standard-Attention ist O(n²) in Sequenzlänge, adressiert durch lineare Attention, spärliche Muster und niedrig-Rang Approximationen", nl: "Standaard attention is O(n²) in sequentielengte, aangepakt door lineaire attention, dunne patronen en lage-rang benaderingen" },
          { en: "Attention complexity grows logarithmically with input size", es: "Complejidad de atención crece logarítmicamente con tamaño de entrada", de: "Attention-Komplexität wächst logarithmisch mit Eingabegröße", nl: "Attention complexiteit groeit logaritmisch met input grootte" },
          { en: "Computational cost is constant regardless of sequence length", es: "Costo computacional es constante independiente de longitud de secuencia", de: "Rechnerische Kosten sind konstant unabhängig von Sequenzlänge", nl: "Computationele kosten zijn constant ongeacht sequentielengte" },
          { en: "Attention complexity depends only on model depth", es: "Complejidad de atención depende solo de profundidad de modelo", de: "Attention-Komplexität hängt nur von Modelltiefe ab", nl: "Attention complexiteit hangt alleen af van model diepte" }
        ],
        correct: 0,
        explanation: {
          en: "Efficient attention methods like Linformer, Performer, and FlashAttention reduce quadratic complexity through approximations or algorithmic optimizations, enabling processing of much longer sequences.",
          es: "Métodos de atención eficientes como Linformer, Performer y FlashAttention reducen complejidad cuadrática a través de aproximaciones u optimizaciones algorítmicas, permitiendo procesamiento de secuencias mucho más largas.",
          de: "Effiziente Attention-Methoden wie Linformer, Performer und FlashAttention reduzieren quadratische Komplexität durch Approximationen oder algorithmische Optimierungen, ermöglichen Verarbeitung viel längerer Sequenzen.",
          nl: "Efficiënte attention methoden zoals Linformer, Performer en FlashAttention verminderen kwadratische complexiteit door benaderingen of algoritmische optimalisaties, maken verwerking van veel langere sequenties mogelijk."
        }
      },
      {
        question: {
          en: "What is curriculum learning and how does it improve training efficiency?",
          es: "¿Qué es el aprendizaje curricular y cómo mejora la eficiencia de entrenamiento?",
          de: "Was ist Curriculum Learning und wie verbessert es Trainingseffizienz?",
          nl: "Wat is curriculum learning en hoe verbetert het trainingsefficiëntie?"
        },
        options: [
          { en: "Training on progressively harder examples, starting from easy tasks to build foundational knowledge before tackling complex ones", es: "Entrenar en ejemplos progresivamente más difíciles, de tareas fáciles a complejas construyendo conocimiento fundamental", de: "Training auf progressiv schwereren Beispielen, von einfachen zu komplexen Aufgaben um Wissen aufzubauen", nl: "Trainen op progressief moeilijkere voorbeelden, van gemakkelijke naar complexe taken om fundamentele kennis op te bouwen" },
          { en: "Following a curriculum of different neural architectures", es: "Seguir un currículo de diferentes arquitecturas neuronales", de: "Einem Curriculum verschiedener neuronaler Architekturen folgen", nl: "Een curriculum volgen van verschillende neurale architecturen" },
          { en: "Teaching models according to academic curricula", es: "Enseñar modelos según currículos académicos", de: "Modelle nach akademischen Curricula lehren", nl: "Modellen onderwijzen volgens academische curricula" },
          { en: "Rotating through different training datasets", es: "Rotar a través de diferentes conjuntos de datos de entrenamiento", de: "Durch verschiedene Trainingsdatensätze rotieren", nl: "Rouleren door verschillende trainingsdatasets" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning mimics human education by presenting examples in meaningful orders, leading to faster convergence, better generalization, and reduced sensitivity to hyperparameters.",
          es: "El aprendizaje curricular imita educación humana presentando ejemplos en órdenes significativos, llevando a convergencia más rápida, mejor generalización y sensibilidad reducida a hiperparámetros.",
          de: "Curriculum Learning ahmt menschliche Bildung nach durch Präsentation von Beispielen in sinnvollen Reihenfolgen, führt zu schnellerer Konvergenz, besserer Generalisierung und reduzierter Empfindlichkeit gegenüber Hyperparametern.",
          nl: "Curriculum learning bootst menselijk onderwijs na door voorbeelden in betekenisvolle volgordes te presenteren, leidt tot snellere convergentie, betere generalisatie en verminderde gevoeligheid voor hyperparameters."
        }
      },
      {
        question: {
          en: "What is neural architecture differentiability and how does DARTS enable architecture search?",
          es: "¿Qué es la diferenciabilidad de arquitectura neuronal y cómo DARTS habilita búsqueda de arquitectura?",
          de: "Was ist neuronale Architekturdifferenzierbarkeit und wie ermöglicht DARTS Architektursuche?",
          nl: "Wat is neurale architectuur differentieerbaarheid en hoe maakt DARTS architectuur zoeken mogelijk?"
        },
        options: [
          { en: "Makes architecture choices continuous and differentiable, enabling gradient-based optimization of network structures", es: "Hace elecciones de arquitectura continuas y diferenciables, permitiendo optimización basada en gradientes de estructuras de red", de: "Macht Architekturwahlen kontinuierlich und differenzierbar, ermöglicht gradientenbasierte Optimierung von Netzwerkstrukturen", nl: "Maakt architectuur keuzes continu en differentieerbaar, maakt gradiënt-gebaseerde optimalisatie van netwerkstructuren mogelijk" },
          { en: "Differentiates between different architecture types", es: "Diferencia entre diferentes tipos de arquitectura", de: "Unterscheidet zwischen verschiedenen Architekturtypen", nl: "Onderscheidt tussen verschillende architectuurtypen" },
          { en: "Computes derivatives of architecture parameters", es: "Calcula derivadas de parámetros de arquitectura", de: "Berechnet Ableitungen von Architekturparametern", nl: "Berekent afgeleiden van architectuurparameters" },
          { en: "Makes architectures adaptable during training", es: "Hace arquitecturas adaptables durante entrenamiento", de: "Macht Architekturen während des Trainings anpassbar", nl: "Maakt architecturen aanpasbaar tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "DARTS (Differentiable Architecture Search) represents discrete architecture choices as continuous relaxations, using gradient descent to search for optimal architectures orders of magnitude faster than evolutionary or RL methods.",
          es: "DARTS (Differentiable Architecture Search) representa elecciones discretas de arquitectura como relajaciones continuas, usando descenso de gradiente para buscar arquitecturas óptimas órdenes de magnitud más rápido que métodos evolutivos o RL.",
          de: "DARTS (Differentiable Architecture Search) repräsentiert diskrete Architekturwahlen als kontinuierliche Relaxationen, verwendet Gradientenabstieg um optimale Architekturen Größenordnungen schneller zu suchen als evolutionäre oder RL-Methoden.",
          nl: "DARTS (Differentiable Architecture Search) vertegenwoordigt discrete architectuur keuzes als continue relaxaties, gebruikt gradient descent om optimale architecturen ordes van grootte sneller te zoeken dan evolutionaire of RL methoden."
        }
      },
      {
        question: {
          en: "What is the lottery ticket hypothesis's impact on understanding neural network training?",
          es: "¿Cuál es el impacto de la hipótesis del boleto de lotería en entender entrenamiento de redes neuronales?",
          de: "Was ist der Einfluss der Lottery Ticket Hypothesis auf das Verstehen des neuronalen Netzwerktrainings?",
          nl: "Wat is de impact van de lottery ticket hypothesis op het begrijpen van neurale netwerktraining?"
        },
        options: [
          { en: "Suggests initialization matters more than architecture, sparse subnetworks can match full network performance when properly initialized", es: "Sugiere que inicialización importa más que arquitectura, subredes dispersas igualan rendimiento cuando bien inicializadas", de: "Initialisierung wichtiger als Architektur, spärliche Teilnetzwerke erreichen volle Leistung wenn korrekt initialisiert", nl: "Initialisatie belangrijker dan architectuur, dunne subnetwerken evenaren volledige prestaties wanneer correct geïnitialiseerd" },
          { en: "Networks learn through random chance", es: "Redes aprenden por azar", de: "Netzwerke lernen durch Zufall", nl: "Netwerken leren door toeval" },
          { en: "Only lucky networks achieve high performance", es: "Solo redes afortunadas logran alto rendimiento", de: "Nur glückliche Netzwerke erreichen hohe Leistung", nl: "Alleen gelukkige netwerken behalen hoge prestaties" },
          { en: "Training outcomes depend on lottery-like randomness", es: "Resultados de entrenamiento dependen de aleatoriedad tipo lotería", de: "Trainingsergebnisse hängen von lotterieähnlicher Zufälligkeit ab", nl: "Trainingsresultaten hangen af van loterij-achtige willekeur" }
        ],
        correct: 0,
        explanation: {
          en: "The hypothesis reveals that dense networks contain sparse 'winning tickets' that, when found and trained from their original initialization, can match full network performance, providing insights into pruning and initialization.",
          es: "La hipótesis revela que redes densas contienen 'boletos ganadores' dispersos que, cuando se encuentran y entrenan desde su inicialización original, pueden igualar rendimiento de red completa, proporcionando perspectivas sobre poda e inicialización.",
          de: "Die Hypothesis zeigt dass dichte Netzwerke spärliche 'Gewinntickets' enthalten die, wenn gefunden und von ihrer ursprünglichen Initialisierung trainiert, vollständige Netzwerkleistung erreichen können, bietet Einsichten in Pruning und Initialisierung.",
          nl: "De hypothesis onthult dat dichte netwerken dunne 'winnende tickets' bevatten die, wanneer gevonden en getraind vanaf hun originele initialisatie, volledige netwerkprestaties kunnen evenaren, biedt inzichten in pruning en initialisatie."
        }
      },
      {
        question: {
          en: "What is domain adaptation and how does it address distribution shift?",
          es: "¿Qué es la adaptación de dominio y cómo aborda el cambio de distribución?",
          de: "Was ist Domain Adaptation und wie adressiert sie Verteilungsverschiebung?",
          nl: "Wat is domain adaptation en hoe pakt het distributie verschuiving aan?"
        },
        options: [
          { en: "Techniques to transfer knowledge from source domain to target domain when data distributions differ", es: "Técnicas para transferir conocimiento de dominio fuente a dominio objetivo cuando distribuciones de datos difieren", de: "Techniken um Wissen von Quell-Domain zu Ziel-Domain zu übertragen wenn Datenverteilungen unterschiedlich sind", nl: "Technieken om kennis over te dragen van bron domein naar doel domein wanneer data distributies verschillen" },
          { en: "Adapting models to work in different application domains", es: "Adaptar modelos para trabajar en diferentes dominios de aplicación", de: "Modelle anpassen um in verschiedenen Anwendungsbereichen zu funktionieren", nl: "Modellen aanpassen om te werken in verschillende toepassingsdomeinen" },
          { en: "Changing network architectures for new domains", es: "Cambiar arquitecturas de red para nuevos dominios", de: "Netzwerkarchitekturen für neue Domains ändern", nl: "Netwerkarchitecturen veranderen voor nieuwe domeinen" },
          { en: "Domain-specific customization of hyperparameters", es: "Personalización específica de dominio de hiperparámetros", de: "Domain-spezifische Anpassung von Hyperparametern", nl: "Domein-specifieke aanpassing van hyperparameters" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation methods like adversarial training, feature alignment, and self-training help models generalize across different data distributions, crucial for real-world deployment where training and test conditions differ.",
          es: "Métodos de adaptación de dominio como entrenamiento adversario, alineación de características y auto-entrenamiento ayudan a modelos generalizar a través de diferentes distribuciones de datos, crucial para despliegue del mundo real donde condiciones de entrenamiento y prueba difieren.",
          de: "Domain Adaptation Methoden wie adversariales Training, Feature-Ausrichtung und Self-Training helfen Modellen über verschiedene Datenverteilungen zu generalisieren, entscheidend für reale Deployments wo Trainings- und Testbedingungen unterschiedlich sind.",
          nl: "Domain adaptation methoden zoals adversariële training, feature uitlijning en zelf-training helpen modellen generaliseren over verschillende data distributies, cruciaal voor real-world deployment waar trainings- en test condities verschillen."
        }
      },
      {
        question: {
          en: "What are energy-based models and how do they differ from likelihood-based models?",
          es: "¿Qué son los modelos basados en energía y cómo difieren de modelos basados en verosimilitud?",
          de: "Was sind energiebasierte Modelle und wie unterscheiden sie sich von Likelihood-basierten Modellen?",
          nl: "Wat zijn energie-gebaseerde modellen en hoe verschillen ze van likelihood-gebaseerde modellen?"
        },
        options: [
          { en: "Learn to assign energy values to data configurations, with low energy for plausible configurations, without explicit normalization", es: "Asignan valores de energía a configuraciones, con baja energía para configuraciones plausibles, sin normalización explícita", de: "Weisen Energiewerte zu Konfigurationen zu, niedrige Energie für plausible Konfigurationen, ohne Normalisierung", nl: "Kennen energie waarden toe aan configuraties, lage energie voor plausibele configuraties, zonder expliciete normalisatie" },
          { en: "Models optimized for energy efficiency", es: "Modelos optimizados para eficiencia energética", de: "Modelle optimiert für Energieeffizienz", nl: "Modellen geoptimaliseerd voor energie-efficiëntie" },
          { en: "Neural networks powered by energy minimization", es: "Redes neuronales impulsadas por minimización de energía", de: "Neuronale Netzwerke angetrieben durch Energieminimierung", nl: "Neurale netwerken aangedreven door energie minimalisatie" },
          { en: "Models that predict energy consumption", es: "Modelos que predicen consumo de energía", de: "Modelle die Energieverbrauch vorhersagen", nl: "Modellen die energieverbruik voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Energy-based models avoid costly normalization by learning energy functions, with inference and generation through energy minimization, offering flexibility in modeling complex distributions.",
          es: "Modelos basados en energía evitan normalización costosa aprendiendo funciones de energía, con inferencia y generación a través de minimización de energía, ofreciendo flexibilidad en modelado de distribuciones complejas.",
          de: "Energiebasierte Modelle vermeiden kostspielige Normalisierung durch Lernen von Energiefunktionen, mit Inferenz und Generierung durch Energieminimierung, bieten Flexibilität beim Modellieren komplexer Verteilungen.",
          nl: "Energie-gebaseerde modellen vermijden kostbare normalisatie door energie functies te leren, met inferentie en generatie door energie minimalisatie, bieden flexibiliteit in het modelleren van complexe distributies."
        }
      },
      {
        question: {
          en: "What is model calibration and why is it important for reliable predictions?",
          es: "¿Qué es la calibración de modelos y por qué es importante para predicciones confiables?",
          de: "Was ist Modellkalibrierung und warum ist sie wichtig für zuverlässige Vorhersagen?",
          nl: "Wat is modelkalibratie en waarom is het belangrijk voor betrouwbare voorspellingen?"
        },
        options: [
          { en: "Ensuring predicted probabilities match actual outcome frequencies, making confidence estimates trustworthy", es: "Asegurar que probabilidades predichas coincidan con frecuencias reales, haciendo estimaciones de confianza confiables", de: "Sicherstellen dass Wahrscheinlichkeiten mit tatsächlichen Frequenzen übereinstimmen, macht Schätzungen vertrauenswürdig", nl: "Ervoor zorgen dat voorspelde waarschijnlijkheden overeenkomen met werkelijke frequenties, maakt schattingen betrouwbaar" },
          { en: "Calibrating model weights to standard values", es: "Calibrar pesos de modelo a valores estándar", de: "Modellgewichte auf Standardwerte kalibrieren", nl: "Modelgewichten kalibreren naar standaardwaarden" },
          { en: "Adjusting models to work on calibration datasets", es: "Ajustar modelos para trabajar en conjuntos de datos de calibración", de: "Modelle anpassen um auf Kalibrierungsdatensätzen zu funktionieren", nl: "Modellen aanpassen om te werken op kalibratiedatasets" },
          { en: "Setting hyperparameters to calibrated settings", es: "Establecer hiperparámetros a configuraciones calibradas", de: "Hyperparameter auf kalibrierte Einstellungen setzen", nl: "Hyperparameters instellen op gekalibreerde instellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Well-calibrated models produce probabilities that accurately reflect true likelihoods, essential for decision-making in high-stakes applications like medical diagnosis and autonomous systems.",
          es: "Modelos bien calibrados producen probabilidades que reflejan con precisión verosimilitudes verdaderas, esencial para toma de decisiones en aplicaciones de alto riesgo como diagnóstico médico y sistemas autónomos.",
          de: "Gut kalibrierte Modelle produzieren Wahrscheinlichkeiten die wahre Likelihoods genau widerspiegeln, wesentlich für Entscheidungsfindung in hochriskanten Anwendungen wie medizinischer Diagnose und autonomen Systemen.",
          nl: "Goed gekalibreerde modellen produceren waarschijnlijkheden die nauwkeurig ware likelihoods weerspiegelen, essentieel voor besluitvorming in hoge-inzet toepassingen zoals medische diagnose en autonome systemen."
        }
      },
      {
        question: {
          en: "What is the double descent phenomenon in deep learning?",
          es: "¿Qué es el fenómeno de doble descenso en aprendizaje profundo?",
          de: "Was ist das Double Descent Phänomen in Deep Learning?",
          nl: "Wat is het double descent fenomeen in deep learning?"
        },
        options: [
          { en: "Test error decreases, increases past interpolation threshold, then decreases again as model capacity grows", es: "Error de prueba disminuye, aumenta pasado umbral de interpolación, luego disminuye nuevamente mientras capacidad de modelo crece", de: "Testfehler sinkt, steigt nach Interpolationsschwelle, sinkt dann wieder während Modellkapazität wächst", nl: "Testfout daalt, stijgt na interpolatie drempel, daalt dan weer naarmate modelcapaciteit groeit" },
          { en: "Training loss descends twice during optimization", es: "Pérdida de entrenamiento desciende dos veces durante optimización", de: "Trainingsverlust sinkt zweimal während Optimierung", nl: "Trainingsloss daalt twee keer tijdens optimalisatie" },
          { en: "Models need two descent phases for convergence", es: "Modelos necesitan dos fases de descenso para convergencia", de: "Modelle benötigen zwei Abstiegsphasen für Konvergenz", nl: "Modellen hebben twee descent fases nodig voor convergentie" },
          { en: "Error descends faster in second training epoch", es: "Error desciende más rápido en segunda época de entrenamiento", de: "Fehler sinkt schneller in zweiter Trainingsepoche", nl: "Fout daalt sneller in tweede trainingsepoch" }
        ],
        correct: 0,
        explanation: {
          en: "Double descent challenges classical bias-variance tradeoff, showing that overparameterized models can achieve better generalization, reconciling theory with modern deep learning practice.",
          es: "El doble descenso desafía el compromiso clásico sesgo-varianza, mostrando que modelos sobreparametrizados pueden lograr mejor generalización, reconciliando teoría con práctica moderna de aprendizaje profundo.",
          de: "Double Descent fordert den klassischen Bias-Varianz-Kompromiss heraus, zeigt dass überparametrisierte Modelle bessere Generalisierung erreichen können, versöhnt Theorie mit moderner Deep Learning Praxis.",
          nl: "Double descent daagt de klassieke bias-variantie afweging uit, toont dat overparameterized modellen betere generalisatie kunnen bereiken, verzoent theorie met moderne deep learning praktijk."
        }
      },
      {
        question: {
          en: "What is neural tangent kernel theory and what insights does it provide?",
          es: "¿Qué es la teoría del kernel tangente neuronal y qué percepciones proporciona?",
          de: "Was ist Neural Tangent Kernel Theorie und welche Einsichten bietet sie?",
          nl: "Wat is neural tangent kernel theorie en welke inzichten biedt het?"
        },
        options: [
          { en: "Describes infinite-width neural networks as kernel methods, providing theoretical understanding of training dynamics and generalization", es: "Describe redes de ancho infinito como métodos kernel, da entendimiento teórico de dinámicas de entrenamiento", de: "Beschreibt unendlich-breite Netzwerke als Kernel-Methoden, bietet Verständnis von Trainingsdynamik", nl: "Beschrijft oneindig-brede netwerken als kernel methoden, biedt begrip van trainingsdynamiek en generalisatie" },
          { en: "A kernel for computing tangent vectors in neural networks", es: "Un kernel para computar vectores tangentes en redes neuronales", de: "Ein Kernel zur Berechnung von Tangentvektoren in neuronalen Netzwerken", nl: "Een kernel voor het berekenen van raakvectoren in neurale netwerken" },
          { en: "Theory of neural network curvature", es: "Teoría de curvatura de redes neuronales", de: "Theorie der neuronalen Netzwerkkrümmung", nl: "Theorie van neurale netwerk kromming" },
          { en: "Tangential connections between neural layers", es: "Conexiones tangenciales entre capas neuronales", de: "Tangentiale Verbindungen zwischen neuronalen Schichten", nl: "Tangentiële verbindingen tussen neurale lagen" }
        ],
        correct: 0,
        explanation: {
          en: "NTK theory reveals that in the infinite-width limit, neural networks behave as linear models in a fixed feature space, offering rigorous analysis of convergence and generalization properties.",
          es: "La teoría NTK revela que en el límite de ancho infinito, redes neuronales se comportan como modelos lineales en un espacio de características fijo, ofreciendo análisis riguroso de propiedades de convergencia y generalización.",
          de: "NTK-Theorie zeigt dass im unendlichen-Breite-Limit neuronale Netzwerke sich wie lineare Modelle in einem festen Feature-Raum verhalten, bietet rigorose Analyse von Konvergenz- und Generalisierungseigenschaften.",
          nl: "NTK theorie onthult dat in de oneindige-breedte limiet, neurale netwerken zich gedragen als lineaire modellen in een vaste feature ruimte, biedt rigoureuze analyse van convergentie en generalisatie eigenschappen."
        }
      },
      {
        question: {
          en: "What is test-time augmentation and how does it improve model performance?",
          es: "¿Qué es la aumentación en tiempo de prueba y cómo mejora el rendimiento del modelo?",
          de: "Was ist Test-Time Augmentation und wie verbessert sie Modellleistung?",
          nl: "Wat is test-time augmentation en hoe verbetert het modelprestaties?"
        },
        options: [
          { en: "Applies transformations to test inputs and averages predictions across augmented versions for more robust outputs", es: "Aplica transformaciones a entradas de prueba y promedia predicciones a través de versiones aumentadas para salidas más robustas", de: "Wendet Transformationen auf Testeingaben an und mittelt Vorhersagen über augmentierte Versionen für robustere Ausgaben", nl: "Past transformaties toe op test inputs en gemiddelt voorspellingen over geaugmenteerde versies voor robuustere outputs" },
          { en: "Augments the test dataset with synthetic examples", es: "Aumenta el conjunto de datos de prueba con ejemplos sintéticos", de: "Erweitert den Testdatensatz mit synthetischen Beispielen", nl: "Vergroot de testdataset met synthetische voorbeelden" },
          { en: "Increases test time to allow better predictions", es: "Aumenta tiempo de prueba para permitir mejores predicciones", de: "Erhöht Testzeit um bessere Vorhersagen zu ermöglichen", nl: "Verhoogt testtijd om betere voorspellingen mogelijk te maken" },
          { en: "Tests model with augmented architectures", es: "Prueba modelo con arquitecturas aumentadas", de: "Testet Modell mit augmentierten Architekturen", nl: "Test model met geaugmenteerde architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Test-time augmentation creates an ensemble of predictions from different views of the same input, reducing variance and improving robustness without requiring additional training.",
          es: "La aumentación en tiempo de prueba crea un conjunto de predicciones de diferentes vistas de la misma entrada, reduciendo varianza y mejorando robustez sin requerir entrenamiento adicional.",
          de: "Test-Time Augmentation erstellt ein Ensemble von Vorhersagen aus verschiedenen Ansichten derselben Eingabe, reduziert Varianz und verbessert Robustheit ohne zusätzliches Training zu erfordern.",
          nl: "Test-time augmentation creëert een ensemble van voorspellingen uit verschillende weergaven van dezelfde input, vermindert variantie en verbetert robuustheid zonder aanvullende training te vereisen."
        }
      },
      {
        question: {
          en: "What is neural ordinary differential equations (Neural ODEs) contribution to deep learning?",
          es: "¿Cuál es la contribución de ecuaciones diferenciales ordinarias neuronales (Neural ODEs) al aprendizaje profundo?",
          de: "Was ist der Beitrag neuronaler gewöhnlicher Differentialgleichungen (Neural ODEs) zum Deep Learning?",
          nl: "Wat is de bijdrage van neural ordinary differential equations (Neural ODEs) aan deep learning?"
        },
        options: [
          { en: "Models continuous-depth networks as differential equations, enabling memory-efficient training and adaptive computation", es: "Modela redes de profundidad continua como ecuaciones diferenciales, permitiendo entrenamiento eficiente en memoria y computación adaptiva", de: "Modelliert kontinuierliche-Tiefe Netzwerke als Differentialgleichungen, ermöglicht speichereffizientes Training und adaptive Berechnung", nl: "Modelleert continue-diepte netwerken als differentiaalvergelijkingen, maakt geheugenefficiënte training en adaptieve berekening mogelijk" },
          { en: "Solves ordinary differential equations using neural networks", es: "Resuelve ecuaciones diferenciales ordinarias usando redes neuronales", de: "Löst gewöhnliche Differentialgleichungen mit neuronalen Netzwerken", nl: "Lost gewone differentiaalvergelijkingen op met neurale netwerken" },
          { en: "Ordinary differential equations for neural activation", es: "Ecuaciones diferenciales ordinarias para activación neuronal", de: "Gewöhnliche Differentialgleichungen für neuronale Aktivierung", nl: "Gewone differentiaalvergelijkingen voor neurale activatie" },
          { en: "Neural networks with differential learning rates", es: "Redes neuronales con tasas de aprendizaje diferenciales", de: "Neuronale Netzwerke mit differentiellen Lernraten", nl: "Neurale netwerken met differentiële leersnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs treat hidden layers as continuous transformations parameterized by ODEs, using ODE solvers for forward and adjoint methods for backpropagation, offering new perspectives on network depth and computation.",
          es: "Neural ODEs tratan capas ocultas como transformaciones continuas parametrizadas por ODEs, usando solucionadores ODE para adelante y métodos adjuntos para retropropagación, ofreciendo nuevas perspectivas sobre profundidad de red y computación.",
          de: "Neural ODEs behandeln versteckte Schichten als kontinuierliche Transformationen parametrisiert durch ODEs, verwenden ODE-Löser für vorwärts und adjungierte Methoden für Backpropagation, bieten neue Perspektiven auf Netzwerktiefe und Berechnung.",
          nl: "Neural ODEs behandelen verborgen lagen als continue transformaties geparametriseerd door ODEs, gebruiken ODE solvers voor voorwaarts en adjoint methoden voor backpropagation, bieden nieuwe perspectieven op netwerkdiepte en berekening."
        }
      },
      {
        question: {
          en: "What is the semantic gap in computer vision and how are modern models addressing it?",
          es: "¿Qué es la brecha semántica en visión por computadora y cómo la abordan los modelos modernos?",
          de: "Was ist die semantische Lücke in Computer Vision und wie adressieren moderne Modelle sie?",
          nl: "Wat is de semantische kloof in computer vision en hoe pakken moderne modellen het aan?"
        },
        options: [
          { en: "Gap between low-level visual features and high-level semantic understanding, bridged by deep hierarchical representations", es: "Brecha entre características visuales de bajo nivel y comprensión semántica, puenteada por representaciones profundas", de: "Lücke zwischen niedrig-Level Features und hoch-Level Verstehen, überbrückt durch hierarchische Repräsentationen", nl: "Kloof tussen laag-niveau kenmerken en hoog-niveau begrip, overbrugd door diepe hiërarchische representaties" },
          { en: "Gap in semantic segmentation accuracy", es: "Brecha en precisión de segmentación semántica", de: "Lücke in semantischer Segmentierungsgenauigkeit", nl: "Kloof in semantische segmentatie nauwkeurigheid" },
          { en: "Missing semantic annotations in datasets", es: "Anotaciones semánticas faltantes en conjuntos de datos", de: "Fehlende semantische Annotationen in Datensätzen", nl: "Ontbrekende semantische annotaties in datasets" },
          { en: "Difference between predicted and actual semantics", es: "Diferencia entre semántica predicha y real", de: "Unterschied zwischen vorhergesagter und tatsächlicher Semantik", nl: "Verschil tussen voorspelde en werkelijke semantiek" }
        ],
        correct: 0,
        explanation: {
          en: "Deep CNNs and vision transformers build hierarchical features from edges to objects to scenes, progressively narrowing the semantic gap through multiple abstraction layers.",
          es: "CNNs profundas y transformers de visión construyen características jerárquicas desde bordes a objetos a escenas, estrechando progresivamente la brecha semántica a través de múltiples capas de abstracción.",
          de: "Tiefe CNNs und Vision Transformers bauen hierarchische Features von Kanten zu Objekten zu Szenen auf, verengen progressiv die semantische Lücke durch mehrere Abstraktionsschichten.",
          nl: "Diepe CNNs en vision transformers bouwen hiërarchische features van randen naar objecten naar scènes, versmallen progressief de semantische kloof door meerdere abstractielagen."
        }
      },
      {
        question: {
          en: "What is the attention visualization challenge and what techniques help interpret attention patterns?",
          es: "¿Cuál es el desafío de visualización de atención y qué técnicas ayudan a interpretar patrones de atención?",
          de: "Was ist die Herausforderung der Attention-Visualisierung und welche Techniken helfen Attention-Muster zu interpretieren?",
          nl: "Wat is de attention visualisatie uitdaging en welke technieken helpen attention patronen te interpreteren?"
        },
        options: [
          { en: "Understanding what models attend to using heatmaps, rollout methods, and attention flow analysis", es: "Entender a qué atienden modelos usando mapas de calor, métodos de rollout y análisis de flujo de atención", de: "Verstehen worauf Modelle achten mit Heatmaps, Rollout-Methoden und Attention-Flow-Analyse", nl: "Begrijpen waar modellen naar kijken met heatmaps, rollout methoden en attention flow analyse" },
          { en: "Visualizing attention mechanisms in network diagrams", es: "Visualizar mecanismos de atención en diagramas de red", de: "Attention-Mechanismen in Netzwerkdiagrammen visualisieren", nl: "Attention mechanismen visualiseren in netwerkdiagrammen" },
          { en: "Creating visual representations of attention weights", es: "Crear representaciones visuales de pesos de atención", de: "Visuelle Darstellungen von Attention-Gewichten erstellen", nl: "Visuele representaties maken van attention gewichten" },
          { en: "Displaying attention computation processes", es: "Mostrar procesos de computación de atención", de: "Attention-Berechnungsprozesse anzeigen", nl: "Attention berekeningsprocessen weergeven" }
        ],
        correct: 0,
        explanation: {
          en: "Attention visualization techniques reveal linguistic patterns, syntactic structures, and semantic relationships learned by transformers, providing insights into model behavior and potential improvements.",
          es: "Técnicas de visualización de atención revelan patrones lingüísticos, estructuras sintácticas y relaciones semánticas aprendidas por transformers, proporcionando perspectivas sobre comportamiento de modelo y mejoras potenciales.",
          de: "Attention-Visualisierungstechniken enthüllen linguistische Muster, syntaktische Strukturen und semantische Beziehungen die von Transformers gelernt wurden, bieten Einsichten in Modellverhalten und potenzielle Verbesserungen.",
          nl: "Attention visualisatie technieken onthullen linguïstische patronen, syntactische structuren en semantische relaties geleerd door transformers, bieden inzichten in modelgedrag en potentiële verbeteringen."
        }
      },
      {
        question: {
          en: "What is model compression through pruning and how does it maintain performance?",
          es: "¿Qué es la compresión de modelos a través de poda y cómo mantiene rendimiento?",
          de: "Was ist Modellkompression durch Pruning und wie erhält sie Leistung?",
          nl: "Wat is modelcompressie door pruning en hoe behoudt het prestaties?"
        },
        options: [
          { en: "Systematically removes unimportant weights or neurons based on magnitude, gradient, or second-order information while fine-tuning", es: "Remueve sistemáticamente pesos o neuronas no importantes basado en magnitud, gradiente o información de segundo orden mientras afina", de: "Entfernt systematisch unwichtige Gewichte oder Neuronen basierend auf Magnitude, Gradient oder zweiter Ordnung während Fine-Tuning", nl: "Verwijdert systematisch onbelangrijke gewichten of neuronen gebaseerd op magnitude, gradiënt of tweede-orde informatie tijdens fine-tuning" },
          { en: "Compresses model files for efficient storage", es: "Comprime archivos de modelo para almacenamiento eficiente", de: "Komprimiert Modelldateien für effiziente Speicherung", nl: "Comprimeert modelbestanden voor efficiënte opslag" },
          { en: "Reduces model complexity by removing layers", es: "Reduce complejidad de modelo removiendo capas", de: "Reduziert Modellkomplexität durch Entfernen von Schichten", nl: "Vermindert modelcomplexiteit door lagen te verwijderen" },
          { en: "Pruning training data to speed up learning", es: "Podar datos de entrenamiento para acelerar aprendizaje", de: "Trainingsdaten beschneiden um Lernen zu beschleunigen", nl: "Trainingsdata snoeien om leren te versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Structured and unstructured pruning can reduce model size by 90%+ with minimal accuracy loss, especially when combined with lottery ticket initialization or iterative magnitude pruning.",
          es: "Poda estructurada y no estructurada puede reducir tamaño de modelo en 90%+ con pérdida mínima de precisión, especialmente cuando se combina con inicialización de boleto de lotería o poda iterativa de magnitud.",
          de: "Strukturiertes und unstrukturiertes Pruning kann Modellgröße um 90%+ mit minimalem Genauigkeitsverlust reduzieren, besonders wenn kombiniert mit Lottery Ticket Initialisierung oder iterativem Magnitude Pruning.",
          nl: "Gestructureerde en ongestructureerde pruning kan modelgrootte met 90%+ verminderen met minimaal nauwkeurigheidsverlies, vooral wanneer gecombineerd met lottery ticket initialisatie of iteratieve magnitude pruning."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();