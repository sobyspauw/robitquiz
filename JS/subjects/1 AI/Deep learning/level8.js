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
          { en: "Allows each position in a sequence to attend to all positions in the same sequence, computing relationships within the input itself", es: "Permite que cada posición en una secuencia atienda a todas las posiciones en la misma secuencia, computando relaciones dentro de la entrada misma", de: "Ermöglicht jeder Position in einer Sequenz auf alle Positionen in derselben Sequenz zu achten, berechnet Beziehungen innerhalb der Eingabe selbst", nl: "Stelt elke positie in een sequentie in staat om te letten op alle posities in dezelfde sequentie, berekent relaties binnen de input zelf" },
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
          { en: "Runs multiple attention mechanisms in parallel with different learned projections, allowing the model to focus on different types of relationships simultaneously", es: "Ejecuta múltiples mecanismos de atención en paralelo con diferentes proyecciones aprendidas, permitiendo al modelo enfocarse en diferentes tipos de relaciones simultáneamente", de: "Führt mehrere Attention-Mechanismen parallel mit verschiedenen gelernten Projektionen aus, ermöglicht dem Modell sich gleichzeitig auf verschiedene Arten von Beziehungen zu fokussieren", nl: "Voert meerdere attention mechanismen parallel uit met verschillende geleerde projecties, stelt het model in staat om zich tegelijkertijd te richten op verschillende soorten relaties" },
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
          { en: "Adds position information to input embeddings since self-attention is permutation invariant and doesn't inherently understand sequence order", es: "Agrega información de posición a embeddings de entrada ya que auto-atención es invariante a permutación y no entiende inherentemente orden de secuencia", de: "Fügt Positionsinformationen zu Input-Embeddings hinzu da Self-Attention permutationsinvariant ist und Sequenzreihenfolge nicht inhärent versteht", nl: "Voegt positie-informatie toe aan input embeddings omdat self-attention permutatie-invariant is en sequentievolgorde niet inherent begrijpt" },
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
          { en: "Queries determine what to look for, keys are what can be attended to, and values are the information retrieved, with attention weights computed as query-key similarity", es: "Consultas determinan qué buscar, claves son a lo que se puede atender, y valores son la información recuperada, con pesos de atención computados como similitud consulta-clave", de: "Queries bestimmen wonach gesucht wird, Keys sind was beachtet werden kann, und Values sind die abgerufenen Informationen, mit Attention-Gewichten berechnet als Query-Key-Ähnlichkeit", nl: "Queries bepalen waarnaar te zoeken, keys zijn waar naar gekeken kan worden, en values zijn de opgehaalde informatie, met attention gewichten berekend als query-key gelijkenis" },
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
          { en: "Encoder-only (BERT) for understanding, decoder-only (GPT) for generation, encoder-decoder (T5) for sequence-to-sequence tasks", es: "Solo-codificador (BERT) para comprensión, solo-decodificador (GPT) para generación, codificador-decodificador (T5) para tareas secuencia-a-secuencia", de: "Encoder-only (BERT) für Verstehen, Decoder-only (GPT) für Generierung, Encoder-Decoder (T5) für Sequenz-zu-Sequenz-Aufgaben", nl: "Encoder-only (BERT) voor begrip, decoder-only (GPT) voor generatie, encoder-decoder (T5) voor sequentie-naar-sequentie taken" },
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
          { en: "Attention mechanism where queries come from one sequence and keys/values from another, used in decoder layers to attend to encoder outputs", es: "Mecanismo de atención donde consultas vienen de una secuencia y claves/valores de otra, usado en capas decodificador para atender salidas del codificador", de: "Attention-Mechanismus wo Queries aus einer Sequenz und Keys/Values aus einer anderen kommen, verwendet in Decoder-Schichten um auf Encoder-Ausgaben zu achten", nl: "Attention mechanisme waarbij queries uit één sequentie komen en keys/values uit een andere, gebruikt in decoder lagen om te letten op encoder outputs" },
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
          { en: "Stabilizes training by normalizing activations across the feature dimension, typically applied before or after each sub-layer (attention, feed-forward)", es: "Estabiliza entrenamiento normalizando activaciones a través de la dimensión de características, típicamente aplicada antes o después de cada sub-capa (atención, feed-forward)", de: "Stabilisiert Training durch Normalisierung von Aktivierungen über die Feature-Dimension, typisch vor oder nach jeder Unter-Schicht angewendet (Attention, Feed-Forward)", nl: "Stabiliseert training door activaties te normaliseren over de feature dimensie, typisch toegepast voor of na elke sub-laag (attention, feed-forward)" },
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
          { en: "Prevents positions from attending to future positions in the sequence, ensuring autoregressive generation during training and inference", es: "Previene que posiciones atiendan a posiciones futuras en la secuencia, asegurando generación autoregresiva durante entrenamiento e inferencia", de: "Verhindert dass Positionen auf zukünftige Positionen in der Sequenz achten, gewährleistet autoregressive Generierung während Training und Inferenz", nl: "Voorkomt dat posities letten op toekomstige posities in de sequentie, zorgt voor autoregressieve generatie tijdens training en inferentie" },
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
          { en: "A position-wise fully connected network with ReLU activation that processes each position independently, providing non-linear transformations", es: "Una red completamente conectada por posición con activación ReLU que procesa cada posición independientemente, proporcionando transformaciones no lineales", de: "Ein positionsweises vollständig verbundenes Netzwerk mit ReLU-Aktivierung das jede Position unabhängig verarbeitet, bietet nichtlineare Transformationen", nl: "Een positie-gewijze volledig verbonden netwerk met ReLU activatie dat elke positie onafhankelijk verwerkt, biedt niet-lineaire transformaties" },
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
          { en: "Skip connections that add the input to the output of each sub-layer, enabling gradient flow and preventing vanishing gradients in deep networks", es: "Conexiones de salto que agregan la entrada a la salida de cada sub-capa, permitiendo flujo de gradientes y previniendo gradientes desvanecientes en redes profundas", de: "Skip-Verbindungen die die Eingabe zur Ausgabe jeder Unter-Schicht hinzufügen, ermöglichen Gradientenfluss und verhindern verschwindende Gradienten in tiefen Netzwerken", nl: "Skip verbindingen die de input toevoegen aan de output van elke sub-laag, maken gradiëntenstroom mogelijk en voorkomen verdwijnende gradiënten in diepe netwerken" },
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
          { en: "Absolute encoding assigns fixed positions to tokens, while relative encoding focuses on distances between tokens, often providing better generalization", es: "Codificación absoluta asigna posiciones fijas a tokens, mientras codificación relativa se enfoca en distancias entre tokens, a menudo proporcionando mejor generalización", de: "Absolute Kodierung weist Tokens feste Positionen zu, während relative Kodierung sich auf Abstände zwischen Tokens fokussiert, bietet oft bessere Generalisierung", nl: "Absolute encoding wijst vaste posities toe aan tokens, terwijl relatieve encoding zich richt op afstanden tussen tokens, biedt vaak betere generalisatie" },
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
          { en: "Compute dot products between queries and keys, scale by √d_k, apply softmax to get probabilities, then use these to weight the values", es: "Computar productos punto entre consultas y claves, escalar por √d_k, aplicar softmax para obtener probabilidades, luego usar estas para ponderar los valores", de: "Skalarprodukte zwischen Queries und Keys berechnen, durch √d_k skalieren, Softmax anwenden um Wahrscheinlichkeiten zu erhalten, dann diese verwenden um Values zu gewichten", nl: "Bereken dot products tussen queries en keys, schaal door √d_k, pas softmax toe om kansen te krijgen, gebruik deze dan om de values te wegen" },
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
          { en: "Limits attention to a subset of positions rather than all pairs, reducing complexity from O(n²) to O(n√n) or O(n log n) while maintaining performance", es: "Limita atención a un subconjunto de posiciones en lugar de todos los pares, reduciendo complejidad de O(n²) a O(n√n) o O(n log n) mientras mantiene rendimiento", de: "Begrenzt Attention auf eine Teilmenge von Positionen anstatt alle Paare, reduziert Komplexität von O(n²) zu O(n√n) oder O(n log n) während Leistung beibehalten wird", nl: "Beperkt attention tot een subset van posities in plaats van alle paren, vermindert complexiteit van O(n²) naar O(n√n) of O(n log n) terwijl prestaties behouden blijven" },
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
          { en: "Converts attention scores into a probability distribution that sums to 1, ensuring proper weighting and enabling gradient flow through attention weights", es: "Convierte puntuaciones de atención en una distribución de probabilidad que suma 1, asegurando ponderación apropiada y permitiendo flujo de gradientes a través de pesos de atención", de: "Konvertiert Attention-Scores in eine Wahrscheinlichkeitsverteilung die sich zu 1 summiert, gewährleistet ordnungsgemäße Gewichtung und ermöglicht Gradientenfluss durch Attention-Gewichte", nl: "Converteert attention scores naar een kansverdeling die optelt tot 1, zorgt voor juiste weging en maakt gradiëntenstroom mogelijk door attention gewichten" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();