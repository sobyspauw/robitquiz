// Computer Vision Quiz - Level 10: Expert-Level Computer Vision Mastery
(function() {
  const level10 = {
    name: {
      en: "Computer Vision Level 10",
      es: "Visión por Computadora Nivel 10",
      de: "Computer Vision Stufe 10",
      nl: "Computer Vision Level 10"
    },
    questions: [
      {
        question: {
          en: "What is neural radiance fields (NeRF) revolutionizing in 3D computer vision?",
          es: "¿Qué están revolucionando los campos de radiancia neuronal (NeRF) en visión por computadora 3D?",
          de: "Was revolutionieren Neural Radiance Fields (NeRF) in 3D Computer Vision?",
          nl: "Wat revolutioneren neural radiance fields (NeRF) in 3D computer vision?"
        },
        options: [
          { en: "Synthesizing photorealistic novel views of 3D scenes from sparse 2D observations", es: "Sintetizar vistas novedosas fotorrealistas de escenas 3D a partir de observaciones 2D dispersas", de: "Photorealistische neue Ansichten von 3D-Szenen aus spärlichen 2D-Beobachtungen synthetisieren", nl: "Fotorealistische nieuwe weergaven van 3D scènes synthetiseren uit schaarse 2D observaties" },
          { en: "Creating neural networks shaped like fields", es: "Crear redes neuronales con forma de campos", de: "Neuronale Netzwerke in Feldform erstellen", nl: "Neurale netwerken maken die gevormd zijn als velden" },
          { en: "Generating radiation patterns for medical imaging", es: "Generar patrones de radiación para imágenes médicas", de: "Strahlungsmuster für medizinische Bildgebung generieren", nl: "Stralingspatronen genereren voor medische beeldvorming" },
          { en: "Radiating neural signals across networks", es: "Irradiar señales neuronales a través de redes", de: "Neuronale Signale über Netzwerke ausstrahlen", nl: "Neurale signalen uitstralen over netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF learns implicit 3D scene representations that can render photorealistic images from any viewpoint, enabling applications like virtual reality, robotics, and content creation.",
          es: "NeRF aprende representaciones implícitas de escenas 3D que pueden renderizar imágenes fotorrealistas desde cualquier punto de vista, permitiendo aplicaciones como realidad virtual, robótica y creación de contenido.",
          de: "NeRF lernt implizite 3D-Szenenrepräsentationen die photorealistische Bilder aus jedem Blickwinkel rendern können, ermöglicht Anwendungen wie Virtual Reality, Robotik und Content-Erstellung.",
          nl: "NeRF leert impliciete 3D scène representaties die fotorealistische beelden kunnen renderen vanuit elk gezichtspunt, maakt toepassingen mogelijk zoals virtual reality, robotica en contentcreatie."
        }
      },
      {
        question: {
          en: "What is the significance of transformer-based models like DETR in object detection?",
          es: "¿Cuál es la importancia de modelos basados en transformer como DETR en detección de objetos?",
          de: "Was ist die Bedeutung von Transformer-basierten Modellen wie DETR in der Objekterkennung?",
          nl: "Wat is de betekenis van transformer-gebaseerde modellen zoals DETR in objectdetectie?"
        },
        options: [
          { en: "Eliminating hand-crafted components like non-maximum suppression through end-to-end learning", es: "Eliminar componentes hechos a mano como supresión no máxima a través de aprendizaje de extremo a extremo", de: "Handgemachte Komponenten wie Non-Maximum Suppression durch End-to-End-Lernen eliminieren", nl: "Handgemaakte componenten zoals non-maximum suppression elimineren door end-to-end leren" },
          { en: "Only detecting transformers in images", es: "Solo detectar transformadores en imágenes", de: "Nur Transformatoren in Bildern erkennen", nl: "Alleen transformatoren detecteren in afbeeldingen" },
          { en: "Transforming detected objects into different shapes", es: "Transformar objetos detectados en diferentes formas", de: "Erkannte Objekte in verschiedene Formen transformieren", nl: "Gedetecteerde objecten transformeren naar verschillende vormen" },
          { en: "Detecting electrical transformers specifically", es: "Detectar transformadores eléctricos específicamente", de: "Spezifisch elektrische Transformatoren erkennen", nl: "Specifiek elektrische transformatoren detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "DETR treats object detection as a direct set prediction problem using transformers, removing the need for anchor generation, NMS, and other heuristic post-processing steps.",
          es: "DETR trata la detección de objetos como un problema de predicción de conjunto directo usando transformers, eliminando la necesidad de generación de anclas, NMS y otros pasos de post-procesamiento heurístico.",
          de: "DETR behandelt Objekterkennung als direktes Set-Vorhersageproblem mit Transformern, eliminiert Bedarf für Anker-Generierung, NMS und andere heuristische Nachverarbeitungsschritte.",
          nl: "DETR behandelt objectdetectie als een direct set voorspellingsprobleem met transformers, elimineert de behoefte aan anchor generatie, NMS en andere heuristische naverwerking stappen."
        }
      },
      {
        question: {
          en: "What breakthrough does diffusion models represent in generative computer vision?",
          es: "¿Qué avance representan los modelos de difusión en visión por computadora generativa?",
          de: "Welchen Durchbruch stellen Diffusionsmodelle in der generativen Computer Vision dar?",
          nl: "Welke doorbraak vertegenwoordigen diffusiemodellen in generatieve computer vision?"
        },
        options: [
          { en: "Learning to reverse a gradual noise corruption process to generate high-quality images", es: "Aprender a revertir un proceso gradual de corrupción de ruido para generar imágenes de alta calidad", de: "Lernen einen graduellen Rauschkorruptionsprozess umzukehren um hochqualitative Bilder zu generieren", nl: "Leren een geleidelijk ruiscorruptieproces om te keren om hoogwaardige afbeeldingen te genereren" },
          { en: "Diffusing light through optical systems", es: "Difundir luz a través de sistemas ópticos", de: "Licht durch optische Systeme diffundieren", nl: "Licht verspreiden door optische systemen" },
          { en: "Spreading model parameters across networks", es: "Distribuir parámetros de modelo a través de redes", de: "Modellparameter über Netzwerke verteilen", nl: "Modelparameters verspreiden over netwerken" },
          { en: "Diffusing images across multiple displays", es: "Difundir imágenes a través de múltiples pantallas", de: "Bilder über mehrere Displays diffundieren", nl: "Afbeeldingen verspreiden over meerdere displays" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models like DALL-E 2 and Stable Diffusion achieve state-of-the-art image generation by learning to iteratively denoise images, producing remarkably realistic and controllable outputs.",
          es: "Los modelos de difusión como DALL-E 2 y Stable Diffusion logran generación de imágenes de vanguardia aprendiendo a reducir ruido iterativamente en imágenes, produciendo salidas notablemente realistas y controlables.",
          de: "Diffusionsmodelle wie DALL-E 2 und Stable Diffusion erreichen modernste Bildgenerierung durch iteratives Entrauschen von Bildern, produzieren bemerkenswert realistische und kontrollierbare Ausgaben.",
          nl: "Diffusiemodellen zoals DALL-E 2 en Stable Diffusion bereiken state-of-the-art beeldgeneratie door iteratief afbeeldingen te ontstoren, produceren opmerkelijk realistische en controleerbare outputs."
        }
      },
      {
        question: {
          en: "What challenge does domain adaptation address in real-world computer vision deployment?",
          es: "¿Qué desafío aborda la adaptación de dominio en el despliegue de visión por computadora del mundo real?",
          de: "Welche Herausforderung adressiert Domänenanpassung in Real-World Computer Vision Deployment?",
          nl: "Welke uitdaging pakt domeinaanpassing aan bij real-world computer vision implementatie?"
        },
        options: [
          { en: "Transferring models trained on one dataset to perform well on different visual domains", es: "Transferir modelos entrenados en un conjunto de datos para funcionar bien en diferentes dominios visuales", de: "Modelle die auf einem Datensatz trainiert wurden auf verschiedene visuelle Domänen übertragen", nl: "Modellen getraind op één dataset overdragen om goed te presteren op verschillende visuele domeinen" },
          { en: "Adapting models to different computer domains", es: "Adaptar modelos a diferentes dominios de computadora", de: "Modelle an verschiedene Computer-Domänen anpassen", nl: "Modellen aanpassen aan verschillende computerdomeinen" },
          { en: "Managing web domain names for vision systems", es: "Gestionar nombres de dominio web para sistemas de visión", de: "Web-Domain-Namen für Vision-Systeme verwalten", nl: "Webdomeinnamen beheren voor visiesystemen" },
          { en: "Adapting hardware to software requirements", es: "Adaptar hardware a requisitos de software", de: "Hardware an Software-Anforderungen anpassen", nl: "Hardware aanpassen aan softwarevereisten" }
        ],
        correct: 0,
        explanation: {
          en: "Domain shift occurs when models trained on lab data fail in real environments due to differences in lighting, weather, cameras, or scene characteristics, requiring adaptation techniques.",
          es: "El cambio de dominio ocurre cuando modelos entrenados en datos de laboratorio fallan en entornos reales debido a diferencias en iluminación, clima, cámaras o características de escena, requiriendo técnicas de adaptación.",
          de: "Domain Shift tritt auf wenn Modelle die auf Labordaten trainiert wurden in realen Umgebungen versagen aufgrund von Unterschieden in Beleuchtung, Wetter, Kameras oder Szeneneigenschaften, erfordert Anpassungstechniken.",
          nl: "Domain shift treedt op wanneer modellen getraind op labdata falen in echte omgevingen door verschillen in verlichting, weer, camera's of scènekenmerken, vereist aanpassingstechnieken."
        }
      },
      {
        question: {
          en: "What does embodied AI represent for the future integration of computer vision and robotics?",
          es: "¿Qué representa la IA encarnada para la futura integración de visión por computadora y robótica?",
          de: "Was repräsentiert verkörperte KI für die zukünftige Integration von Computer Vision und Robotik?",
          nl: "Wat vertegenwoordigt belichaamde AI voor de toekomstige integratie van computer vision en robotica?"
        },
        options: [
          { en: "AI systems that learn to interact with the physical world through visual understanding and motor control", es: "Sistemas IA que aprenden a interactuar con el mundo físico a través de comprensión visual y control motor", de: "KI-Systeme die lernen mit der physischen Welt durch visuelles Verständnis und Motorsteuerung zu interagieren", nl: "AI-systemen die leren te interacteren met de fysieke wereld door visueel begrip en motorische controle" },
          { en: "AI systems with physical robot bodies only", es: "Sistemas IA solo con cuerpos de robot físicos", de: "KI-Systeme nur mit physischen Roboterkörpern", nl: "AI-systemen alleen met fysieke robotlichamen" },
          { en: "Embodying human consciousness in machines", es: "Encarnar conciencia humana en máquinas", de: "Menschliches Bewusstsein in Maschinen verkörpern", nl: "Menselijk bewustzijn belichamen in machines" },
          { en: "Physical containers for computer vision algorithms", es: "Contenedores físicos para algoritmos de visión por computadora", de: "Physische Container für Computer Vision Algorithmen", nl: "Fysieke containers voor computer vision algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Embodied AI combines computer vision with physical interaction, enabling robots to learn from visual feedback, manipulate objects, navigate environments, and develop sensorimotor intelligence.",
          es: "La IA encarnada combina visión por computadora con interacción física, permitiendo a robots aprender de retroalimentación visual, manipular objetos, navegar entornos y desarrollar inteligencia sensoriomotora.",
          de: "Verkörperte KI kombiniert Computer Vision mit physischer Interaktion, ermöglicht Robotern aus visuellem Feedback zu lernen, Objekte zu manipulieren, Umgebungen zu navigieren und sensomotorische Intelligenz zu entwickeln.",
          nl: "Belichaamde AI combineert computer vision met fysieke interactie, stelt robots in staat te leren van visuele feedback, objecten te manipuleren, omgevingen te navigeren en sensomotorische intelligentie te ontwikkelen."
        }
      },
      {
        question: {
          en: "What is the key advantage of Vision Transformers (ViTs) over convolutional architectures?",
          es: "¿Cuál es la ventaja clave de los Vision Transformers (ViTs) sobre las arquitecturas convolucionales?",
          de: "Was ist der Schlüsselvorteil von Vision Transformers (ViTs) gegenüber Faltungsarchitekturen?",
          nl: "Wat is het belangrijkste voordeel van Vision Transformers (ViTs) ten opzichte van convolutionele architecturen?"
        },
        options: [
          { en: "Global self-attention enables modeling long-range dependencies without hierarchical inductive biases", es: "La auto-atención global permite modelar dependencias de largo alcance sin sesgos inductivos jerárquicos", de: "Globale Selbstaufmerksamkeit ermöglicht Modellierung weitreichender Abhängigkeiten ohne hierarchische induktive Verzerrungen", nl: "Globale self-attention maakt het modelleren van lange-afstand afhankelijkheden mogelijk zonder hiërarchische inductieve vertekeningen" },
          { en: "ViTs always require less computational resources", es: "Los ViTs siempre requieren menos recursos computacionales", de: "ViTs benötigen immer weniger Rechenressourcen", nl: "ViTs vereisen altijd minder computationele bronnen" },
          { en: "Vision transformers only work with images", es: "Los transformers de visión solo funcionan con imágenes", de: "Vision Transformer funktionieren nur mit Bildern", nl: "Vision transformers werken alleen met afbeeldingen" },
          { en: "They eliminate the need for training data", es: "Eliminan la necesidad de datos de entrenamiento", de: "Sie eliminieren den Bedarf für Trainingsdaten", nl: "Ze elimineren de behoefte aan trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs treat images as sequences of patches and apply self-attention globally, allowing each patch to attend to all others simultaneously, capturing long-range spatial relationships more effectively than CNNs' local receptive fields.",
          es: "Los ViTs tratan imágenes como secuencias de parches y aplican auto-atención globalmente, permitiendo que cada parche atienda a todos los otros simultáneamente, capturando relaciones espaciales de largo alcance más efectivamente que los campos receptivos locales de las CNN.",
          de: "ViTs behandeln Bilder als Sequenzen von Patches und wenden Selbstaufmerksamkeit global an, ermöglichen jedem Patch auf alle anderen gleichzeitig zu achten, erfassen weitreichende räumliche Beziehungen effektiver als CNNs lokale rezeptive Felder.",
          nl: "ViTs behandelen afbeeldingen als sequenties van patches en passen self-attention globaal toe, waardoor elke patch tegelijkertijd kan letten op alle anderen, lange-afstand ruimtelijke relaties effectiever vastleggen dan CNNs' lokale receptieve velden."
        }
      },
      {
        question: {
          en: "What is CLIP's main contribution to vision-language understanding?",
          es: "¿Cuál es la principal contribución de CLIP a la comprensión visión-lenguaje?",
          de: "Was ist CLIPs Hauptbeitrag zum Vision-Sprache-Verständnis?",
          nl: "Wat is CLIP's hoofdbijdrage aan vision-taal begrip?"
        },
        options: [
          { en: "Learning visual concepts from natural language supervision without manual annotation", es: "Aprender conceptos visuales de supervisión de lenguaje natural sin anotación manual", de: "Visuelle Konzepte aus natürlichsprachlicher Supervision ohne manuelle Annotation lernen", nl: "Visuele concepten leren uit natuurlijke taalsupervisie zonder handmatige annotatie" },
          { en: "Clipping images to standard sizes", es: "Recortar imágenes a tamaños estándar", de: "Bilder auf Standardgrößen zuschneiden", nl: "Afbeeldingen bijsnijden tot standaardformaten" },
          { en: "Creating clips from video sequences", es: "Crear clips de secuencias de video", de: "Clips aus Videosequenzen erstellen", nl: "Clips maken van videoreeksen" },
          { en: "Only improving image classification accuracy", es: "Solo mejorar precisión de clasificación de imágenes", de: "Nur Bildklassifizierungsgenauigkeit verbessern", nl: "Alleen beeldclassificatie nauwkeurigheid verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "CLIP learns joint representations of images and text by training on 400M image-text pairs from the internet, enabling zero-shot classification and bridging the gap between vision and language understanding.",
          es: "CLIP aprende representaciones conjuntas de imágenes y texto entrenando en 400M pares imagen-texto de internet, permitiendo clasificación de cero disparos y cerrando la brecha entre comprensión de visión y lenguaje.",
          de: "CLIP lernt gemeinsame Repräsentationen von Bildern und Text durch Training auf 400M Bild-Text-Paaren aus dem Internet, ermöglicht Zero-Shot-Klassifizierung und überbrückt die Lücke zwischen Vision- und Sprachverständnis.",
          nl: "CLIP leert gezamenlijke representaties van afbeeldingen en tekst door training op 400M beeld-tekst paren van het internet, maakt zero-shot classificatie mogelijk en overbrugt de kloof tussen visie en taalbegrip."
        }
      },
      {
        question: {
          en: "What innovation does DALL-E represent in generative computer vision?",
          es: "¿Qué innovación representa DALL-E en visión por computadora generativa?",
          de: "Welche Innovation stellt DALL-E in der generativen Computer Vision dar?",
          nl: "Welke innovatie vertegenwoordigt DALL-E in generatieve computer vision?"
        },
        options: [
          { en: "Text-to-image generation using transformer architectures and discrete variational autoencoders", es: "Generación de texto-a-imagen usando arquitecturas transformer y autoencoders variacionales discretos", de: "Text-zu-Bild-Generierung mit Transformer-Architekturen und diskreten Variational Autoencodern", nl: "Tekst-naar-beeld generatie met transformer architecturen en discrete variationele autoencoders" },
          { en: "Creating Salvador Dalí-style surreal images only", es: "Crear solo imágenes surrealistas estilo Salvador Dalí", de: "Nur surrealistische Bilder im Salvador Dalí-Stil erstellen", nl: "Alleen surrealistische afbeeldingen in Salvador Dalí-stijl maken" },
          { en: "Generating random artistic images", es: "Generar imágenes artísticas aleatorias", de: "Zufällige künstlerische Bilder generieren", nl: "Willekeurige artistieke afbeeldingen genereren" },
          { en: "Only improving existing image editing tools", es: "Solo mejorar herramientas de edición de imágenes existentes", de: "Nur bestehende Bildbearbeitungstools verbessern", nl: "Alleen bestaande beeldbewerkingstools verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "DALL-E uses a two-stage approach: a discrete VAE tokenizes images, then a transformer generates image tokens conditioned on text, enabling creative text-to-image synthesis with unprecedented control.",
          es: "DALL-E usa un enfoque de dos etapas: un VAE discreto tokeniza imágenes, luego un transformer genera tokens de imagen condicionados en texto, permitiendo síntesis creativa texto-a-imagen con control sin precedentes.",
          de: "DALL-E verwendet einen zweistufigen Ansatz: ein diskreter VAE tokenisiert Bilder, dann generiert ein Transformer Bild-Token konditioniert auf Text, ermöglicht kreative Text-zu-Bild-Synthese mit beispielloser Kontrolle.",
          nl: "DALL-E gebruikt een tweefasige benadering: een discrete VAE tokeniseert afbeeldingen, vervolgens genereert een transformer beeldtokens geconditioneerd op tekst, maakt creatieve tekst-naar-beeld synthese mogelijk met ongekende controle."
        }
      },
      {
        question: {
          en: "What is the Swin Transformer's key innovation for handling high-resolution images efficiently?",
          es: "¿Cuál es la innovación clave del Swin Transformer para manejar imágenes de alta resolución eficientemente?",
          de: "Was ist die Schlüsselinnovation des Swin Transformers für effiziente Verarbeitung hochauflösender Bilder?",
          nl: "Wat is de sleutelinnovatie van de Swin Transformer voor het efficiënt verwerken van hoogresolutie afbeeldingen?"
        },
        options: [
          { en: "Hierarchical structure with shifted windows that limits self-attention to local regions", es: "Estructura jerárquica con ventanas desplazadas que limita auto-atención a regiones locales", de: "Hierarchische Struktur mit verschobenen Fenstern die Selbstaufmerksamkeit auf lokale Bereiche begrenzt", nl: "Hiërarchische structuur met verschoven vensters die self-attention beperkt tot lokale regio's" },
          { en: "Using only small input images", es: "Usar solo imágenes de entrada pequeñas", de: "Nur kleine Eingabebilder verwenden", nl: "Alleen kleine invoer afbeeldingen gebruiken" },
          { en: "Swinging the attention mechanism", es: "Balancear el mecanismo de atención", de: "Den Aufmerksamkeitsmechanismus schwingen", nl: "Het aandachtsmechanisme laten zwaaien" },
          { en: "Eliminating transformer blocks entirely", es: "Eliminar bloques transformer completamente", de: "Transformer-Blöcke vollständig eliminieren", nl: "Transformer blokken volledig elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Swin Transformer introduces shifted window-based attention that restricts computation to non-overlapping local windows, then shifts windows in subsequent layers, achieving linear complexity while maintaining cross-window connections.",
          es: "Swin Transformer introduce atención basada en ventanas desplazadas que restringe computación a ventanas locales no superpuestas, luego desplaza ventanas en capas subsiguientes, logrando complejidad lineal mientras mantiene conexiones entre ventanas.",
          de: "Swin Transformer führt verschobene fensterbasierte Aufmerksamkeit ein die Berechnung auf nicht-überlappende lokale Fenster beschränkt, verschiebt dann Fenster in nachfolgenden Schichten, erreicht lineare Komplexität bei Erhaltung von Cross-Window-Verbindungen.",
          nl: "Swin Transformer introduceert verschoven venster-gebaseerde aandacht die berekening beperkt tot niet-overlappende lokale vensters, verschuift vervolgens vensters in volgende lagen, bereikt lineaire complexiteit terwijl cross-venster verbindingen behouden blijven."
        }
      },
      {
        question: {
          en: "What is self-supervised learning's promise for computer vision?",
          es: "¿Cuál es la promesa del aprendizaje auto-supervisado para visión por computadora?",
          de: "Was ist das Versprechen von selbstüberwachtem Lernen für Computer Vision?",
          nl: "Wat is de belofte van zelf-gesuperviseerd leren voor computer vision?"
        },
        options: [
          { en: "Learning rich visual representations from unlabeled data by solving pretext tasks", es: "Aprender representaciones visuales ricas de datos no etiquetados resolviendo tareas de pretexto", de: "Reiche visuelle Repräsentationen aus unbeschrifteten Daten durch Lösen von Pretext-Aufgaben lernen", nl: "Rijke visuele representaties leren uit ongelabelde data door pretext taken op te lossen" },
          { en: "Teaching models to supervise themselves", es: "Enseñar a modelos a supervisarse a sí mismos", de: "Modelle lehren sich selbst zu überwachen", nl: "Modellen leren zichzelf te superviseren" },
          { en: "Reducing need for human researchers", es: "Reducir necesidad de investigadores humanos", de: "Bedarf an menschlichen Forschern reduzieren", nl: "Behoefte aan menselijke onderzoekers verminderen" },
          { en: "Creating autonomous visual systems", es: "Crear sistemas visuales autónomos", de: "Autonome visuelle Systeme erstellen", nl: "Autonome visuele systemen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning leverages inherent structure in visual data through tasks like contrastive learning, masked image modeling, and temporal consistency, potentially reducing dependence on expensive manual annotation.",
          es: "El aprendizaje auto-supervisado aprovecha estructura inherente en datos visuales a través de tareas como aprendizaje contrastivo, modelado de imagen enmascarada y consistencia temporal, potencialmente reduciendo dependencia en anotación manual costosa.",
          de: "Selbstüberwachtes Lernen nutzt inhärente Struktur in visuellen Daten durch Aufgaben wie kontrastives Lernen, maskierte Bildmodellierung und zeitliche Konsistenz, reduziert potentiell Abhängigkeit von teurer manueller Annotation.",
          nl: "Zelf-gesuperviseerd leren benut inherente structuur in visuele data door taken zoals contrastief leren, gemaskeerde beeldmodellering en temporele consistentie, vermindert potentieel afhankelijkheid van dure handmatige annotatie."
        }
      },
      {
        question: {
          en: "What is the main challenge addressed by foundation models in computer vision?",
          es: "¿Cuál es el principal desafío abordado por los modelos fundacionales en visión por computadora?",
          de: "Was ist die Hauptherausforderung die Foundation Models in Computer Vision adressieren?",
          nl: "Wat is de hoofduitdaging die foundation models in computer vision aanpakken?"
        },
        options: [
          { en: "Creating general-purpose visual representations that can adapt to diverse downstream tasks", es: "Crear representaciones visuales de propósito general que puedan adaptarse a diversas tareas posteriores", de: "Allzweck-visuelle Repräsentationen erstellen die sich an diverse nachgelagerte Aufgaben anpassen können", nl: "Algemene visuele representaties creëren die zich kunnen aanpassen aan diverse downstream taken" },
          { en: "Building fundamental mathematical foundations", es: "Construir fundamentos matemáticos fundamentales", de: "Grundlegende mathematische Fundamente aufbauen", nl: "Fundamentele wiskundige fundamenten bouwen" },
          { en: "Creating foundation stones for buildings", es: "Crear piedras fundacionales para edificios", de: "Grundsteine für Gebäude erstellen", nl: "Funderingsstenen maken voor gebouwen" },
          { en: "Only improving existing specific models", es: "Solo mejorar modelos específicos existentes", de: "Nur bestehende spezifische Modelle verbessern", nl: "Alleen bestaande specifieke modellen verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models like CLIP, DALL-E, and large vision transformers are trained on massive diverse datasets to learn general visual understanding that can be efficiently adapted to specific applications with minimal additional training.",
          es: "Los modelos fundacionales como CLIP, DALL-E y transformers de visión grandes son entrenados en conjuntos de datos masivos diversos para aprender comprensión visual general que puede adaptarse eficientemente a aplicaciones específicas con entrenamiento adicional mínimo.",
          de: "Foundation Models wie CLIP, DALL-E und große Vision Transformer werden auf massiven vielfältigen Datensätzen trainiert um allgemeines visuelles Verständnis zu lernen das effizient an spezifische Anwendungen mit minimalem zusätzlichem Training angepasst werden kann.",
          nl: "Foundation models zoals CLIP, DALL-E en grote vision transformers worden getraind op massieve diverse datasets om algemeen visueel begrip te leren dat efficiënt kan worden aangepast aan specifieke toepassingen met minimale aanvullende training."
        }
      },
      {
        question: {
          en: "What is the significance of masked image modeling (MIM) in vision transformers?",
          es: "¿Cuál es la importancia del modelado de imagen enmascarada (MIM) en transformers de visión?",
          de: "Was ist die Bedeutung von Masked Image Modeling (MIM) in Vision Transformers?",
          nl: "Wat is de betekenis van masked image modeling (MIM) in vision transformers?"
        },
        options: [
          { en: "Self-supervised pre-training by reconstructing randomly masked image patches", es: "Pre-entrenamiento auto-supervisado reconstruyendo parches de imagen enmascarados aleatoriamente", de: "Selbstüberwachtes Vor-Training durch Rekonstruktion zufällig maskierter Bild-Patches", nl: "Zelf-gesuperviseerde pre-training door willekeurig gemaskeerde beeldpatches te reconstrueren" },
          { en: "Hiding faces in images for privacy", es: "Ocultar caras en imágenes por privacidad", de: "Gesichter in Bildern für Privatsphäre verstecken", nl: "Gezichten verbergen in afbeeldingen voor privacy" },
          { en: "Creating masks for image editing", es: "Crear máscaras para edición de imágenes", de: "Masken für Bildbearbeitung erstellen", nl: "Maskers maken voor beeldbewerking" },
          { en: "Only for medical image analysis", es: "Solo para análisis de imágenes médicas", de: "Nur für medizinische Bildanalyse", nl: "Alleen voor medische beeldanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "MIM, popularized by MAE (Masked Autoencoders), trains vision transformers to reconstruct masked patches, learning rich visual representations through self-supervision similar to BERT's masked language modeling.",
          es: "MIM, popularizado por MAE (Masked Autoencoders), entrena transformers de visión para reconstruir parches enmascarados, aprendiendo representaciones visuales ricas a través de auto-supervisión similar al modelado de lenguaje enmascarado de BERT.",
          de: "MIM, popularisiert durch MAE (Masked Autoencoders), trainiert Vision Transformer um maskierte Patches zu rekonstruieren, lernt reiche visuelle Repräsentationen durch Selbstüberwachung ähnlich zu BERTs maskierter Sprachmodellierung.",
          nl: "MIM, gepopulariseerd door MAE (Masked Autoencoders), traint vision transformers om gemaskeerde patches te reconstrueren, leert rijke visuele representaties door zelf-supervisie vergelijkbaar met BERT's masked language modeling."
        }
      },
      {
        question: {
          en: "What breakthrough does GPT-4V represent in multimodal AI?",
          es: "¿Qué avance representa GPT-4V en IA multimodal?",
          de: "Welchen Durchbruch stellt GPT-4V in multimodaler KI dar?",
          nl: "Welke doorbraak vertegenwoordigt GPT-4V in multimodale AI?"
        },
        options: [
          { en: "Seamless integration of vision and language understanding in large language models", es: "Integración perfecta de comprensión de visión y lenguaje en modelos de lenguaje grandes", de: "Nahtlose Integration von Vision- und Sprachverständnis in großen Sprachmodellen", nl: "Naadloze integratie van visie en taalbegrip in grote taalmodellen" },
          { en: "Fourth version of generative pre-training", es: "Cuarta versión de pre-entrenamiento generativo", de: "Vierte Version von generativem Vor-Training", nl: "Vierde versie van generatieve pre-training" },
          { en: "Virtual reality applications only", es: "Solo aplicaciones de realidad virtual", de: "Nur Virtual Reality Anwendungen", nl: "Alleen virtual reality toepassingen" },
          { en: "Version control for AI models", es: "Control de versiones para modelos IA", de: "Versionskontrolle für KI-Modelle", nl: "Versiebeheer voor AI modellen" }
        ],
        correct: 0,
        explanation: {
          en: "GPT-4V extends large language model capabilities to visual understanding, enabling complex reasoning about images, visual question answering, and multimodal dialogue with unprecedented sophistication.",
          es: "GPT-4V extiende capacidades de modelos de lenguaje grandes a comprensión visual, permitiendo razonamiento complejo sobre imágenes, respuesta a preguntas visuales y diálogo multimodal con sofisticación sin precedentes.",
          de: "GPT-4V erweitert Fähigkeiten großer Sprachmodelle auf visuelles Verständnis, ermöglicht komplexes Schlussfolgern über Bilder, visuelle Fragenbeantwortung und multimodalen Dialog mit beispielloser Sophistikation.",
          nl: "GPT-4V breidt grote taalmodel capaciteiten uit naar visueel begrip, maakt complex redeneren over afbeeldingen, visuele vraagbeantwoording en multimodale dialoog mogelijk met ongekende verfijning."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS) achieving in automated model design?",
          es: "¿Qué está logrando la búsqueda de arquitectura neuronal (NAS) en diseño automatizado de modelos?",
          de: "Was erreicht Neural Architecture Search (NAS) in automatisiertem Modelldesign?",
          nl: "Wat bereikt neural architecture search (NAS) in geautomatiseerd modelontwerp?"
        },
        options: [
          { en: "Discovering novel architectures that outperform human-designed networks for specific constraints", es: "Descubrir arquitecturas novedosas que superan redes diseñadas por humanos para restricciones específicas", de: "Neuartige Architekturen entdecken die menschlich designte Netzwerke für spezifische Beschränkungen übertreffen", nl: "Nieuwe architecturen ontdekken die menselijk ontworpen netwerken overtreffen voor specifieke beperkingen" },
          { en: "Searching existing architectures in databases", es: "Buscar arquitecturas existentes en bases de datos", de: "Bestehende Architekturen in Datenbanken suchen", nl: "Bestaande architecturen zoeken in databases" },
          { en: "NASA's space exploration programs", es: "Programas de exploración espacial de NASA", de: "NASAs Weltraumerkundungsprogramme", nl: "NASA's ruimteverkenningsprogramma's" },
          { en: "Only optimizing hyperparameters", es: "Solo optimizar hiperparámetros", de: "Nur Hyperparameter optimieren", nl: "Alleen hyperparameters optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses reinforcement learning, evolutionary algorithms, or differentiable search to automatically explore architecture space, finding designs optimized for accuracy, efficiency, or specific hardware constraints beyond human intuition.",
          es: "NAS usa aprendizaje por refuerzo, algoritmos evolutivos o búsqueda diferenciable para explorar automáticamente espacio de arquitectura, encontrando diseños optimizados para precisión, eficiencia o restricciones específicas de hardware más allá de intuición humana.",
          de: "NAS verwendet Reinforcement Learning, evolutionäre Algorithmen oder differenzierbare Suche um automatisch Architekturraum zu erkunden, findet Designs optimiert für Genauigkeit, Effizienz oder spezifische Hardware-Beschränkungen jenseits menschlicher Intuition.",
          nl: "NAS gebruikt reinforcement learning, evolutionaire algoritmes of differentieerbare zoektocht om automatisch architectuurruimte te verkennen, vindt ontwerpen geoptimaliseerd voor nauwkeurigheid, efficiëntie of specifieke hardware beperkingen voorbij menselijke intuïtie."
        }
      },
      {
        question: {
          en: "What is the significance of diffusion models in modern generative computer vision?",
          es: "¿Cuál es la importancia de los modelos de difusión en visión por computadora generativa moderna?",
          de: "Was ist die Bedeutung von Diffusionsmodellen in moderner generativer Computer Vision?",
          nl: "Wat is de betekenis van diffusiemodellen in moderne generatieve computer vision?"
        },
        options: [
          { en: "Achieving state-of-the-art image generation through iterative denoising processes", es: "Lograr generación de imágenes de vanguardia a través de procesos iterativos de reducción de ruido", de: "State-of-the-Art Bildgenerierung durch iterative Entrauschungsprozesse erreichen", nl: "State-of-the-art beeldgeneratie bereiken door iteratieve ontruis processen" },
          { en: "Diffusing light through optical systems", es: "Difundir luz a través de sistemas ópticos", de: "Licht durch optische Systeme diffundieren", nl: "Licht verspreiden door optische systemen" },
          { en: "Spreading model parameters across networks", es: "Distribuir parámetros de modelo a través de redes", de: "Modellparameter über Netzwerke verteilen", nl: "Modelparameters verspreiden over netwerken" },
          { en: "Only for data augmentation purposes", es: "Solo para propósitos de aumento de datos", de: "Nur für Datenaugmentationszwecke", nl: "Alleen voor data augmentatie doeleinden" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models like DALL-E 2, Midjourney, and Stable Diffusion learn to reverse noise corruption, generating high-quality images with remarkable diversity and controllability, revolutionizing creative AI applications.",
          es: "Los modelos de difusión como DALL-E 2, Midjourney y Stable Diffusion aprenden a revertir corrupción de ruido, generando imágenes de alta calidad con diversidad y controlabilidad notables, revolucionando aplicaciones IA creativas.",
          de: "Diffusionsmodelle wie DALL-E 2, Midjourney und Stable Diffusion lernen Rauschkorruption umzukehren, generieren hochqualitative Bilder mit bemerkenswerter Vielfalt und Kontrollierbarkeit, revolutionieren kreative KI-Anwendungen.",
          nl: "Diffusiemodellen zoals DALL-E 2, Midjourney en Stable Diffusion leren ruiscorruptie om te keren, genereren hoogwaardige afbeeldingen met opmerkelijke diversiteit en controleerbaarheid, revolutioneren creatieve AI toepassingen."
        }
      },
      {
        question: {
          en: "What challenge does test-time adaptation address in computer vision deployment?",
          es: "¿Qué desafío aborda la adaptación en tiempo de prueba en despliegue de visión por computadora?",
          de: "Welche Herausforderung adressiert Test-Time Adaptation in Computer Vision Deployment?",
          nl: "Welke uitdaging pakt test-time adaptatie aan bij computer vision implementatie?"
        },
        options: [
          { en: "Adapting models to distribution shifts encountered during inference without labels", es: "Adaptar modelos a cambios de distribución encontrados durante inferencia sin etiquetas", de: "Modelle an Verteilungsverschiebungen anpassen die während Inferenz ohne Labels auftreten", nl: "Modellen aanpassen aan distributieveranderingen ondervonden tijdens inferentie zonder labels" },
          { en: "Testing models at specific times only", es: "Probar modelos solo en momentos específicos", de: "Modelle nur zu bestimmten Zeiten testen", nl: "Modellen alleen op specifieke tijden testen" },
          { en: "Adapting test procedures to model capabilities", es: "Adaptar procedimientos de prueba a capacidades del modelo", de: "Testverfahren an Modellfähigkeiten anpassen", nl: "Testprocedures aanpassen aan modelcapaciteiten" },
          { en: "Time-based model scheduling", es: "Programación de modelos basada en tiempo", de: "Zeitbasierte Modellplanung", nl: "Tijdgebaseerde modelplanning" }
        ],
        correct: 0,
        explanation: {
          en: "Test-time adaptation enables models to continuously adapt to changing environments, weather conditions, or data shifts during deployment by updating parameters using self-supervised objectives or consistency constraints.",
          es: "La adaptación en tiempo de prueba permite a modelos adaptarse continuamente a entornos cambiantes, condiciones climáticas o cambios de datos durante despliegue actualizando parámetros usando objetivos auto-supervisados o restricciones de consistencia.",
          de: "Test-Time Adaptation ermöglicht Modellen sich kontinuierlich an verändernde Umgebungen, Wetterbedingungen oder Datenverschiebungen während Deployment anzupassen durch Parameteraktualisierung mit selbstüberwachten Zielen oder Konsistenzbeschränkungen.",
          nl: "Test-time adaptatie stelt modellen in staat zich continu aan te passen aan veranderende omgevingen, weersomstandigheden of dataverschuivingen tijdens implementatie door parameters bij te werken met zelf-gesuperviseerde doelstellingen of consistentiebeperkingen."
        }
      },
      {
        question: {
          en: "What is the potential of neuromorphic computing for computer vision applications?",
          es: "¿Cuál es el potencial de la computación neuromórfica para aplicaciones de visión por computadora?",
          de: "Was ist das Potenzial von neuromorphem Computing für Computer Vision Anwendungen?",
          nl: "Wat is het potentieel van neuromorfisch computergebruik voor computer vision toepassingen?"
        },
        options: [
          { en: "Event-driven processing that mimics biological vision for ultra-low power consumption", es: "Procesamiento dirigido por eventos que imita visión biológica para consumo de energía ultra-bajo", de: "Ereignisgesteuerte Verarbeitung die biologische Vision nachahmt für ultra-niedrigen Energieverbrauch", nl: "Event-gedreven verwerking die biologische visie nabootst voor ultra-laag energieverbruik" },
          { en: "Making computers look like neurons", es: "Hacer que las computadoras parezcan neuronas", de: "Computer wie Neuronen aussehen lassen", nl: "Computers eruit laten zien als neuronen" },
          { en: "Neurological analysis of computer users", es: "Análisis neurológico de usuarios de computadora", de: "Neurologische Analyse von Computerbenutzern", nl: "Neurologische analyse van computergebruikers" },
          { en: "Only improving processor architecture", es: "Solo mejorar arquitectura de procesador", de: "Nur Prozessorarchitektur verbessern", nl: "Alleen processorarchitectuur verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Neuromorphic chips process visual information asynchronously using spiking neural networks, enabling real-time processing with orders of magnitude lower power consumption than traditional GPUs, ideal for mobile and edge applications.",
          es: "Los chips neuromórficos procesan información visual asincrónicamente usando redes neuronales de picos, permitiendo procesamiento en tiempo real con órdenes de magnitud menor consumo de energía que GPUs tradicionales, ideal para aplicaciones móviles y de borde.",
          de: "Neuromorphe Chips verarbeiten visuelle Informationen asynchron mit Spiking Neural Networks, ermöglichen Echtzeit-Verarbeitung mit um Größenordnungen niedrigerem Energieverbrauch als traditionelle GPUs, ideal für mobile und Edge-Anwendungen.",
          nl: "Neuromorfische chips verwerken visuele informatie asynchroon met spiking neurale netwerken, maken real-time verwerking mogelijk met ordes van grootte lager energieverbruik dan traditionele GPU's, ideaal voor mobiele en edge toepassingen."
        }
      },
      {
        question: {
          en: "What role does causality play in advancing computer vision towards human-level understanding?",
          es: "¿Qué papel juega la causalidad en avanzar visión por computadora hacia comprensión a nivel humano?",
          de: "Welche Rolle spielt Kausalität beim Vorantreiben von Computer Vision zu menschlichem Verständnis?",
          nl: "Welke rol speelt causaliteit bij het vooruitbrengen van computer vision naar menselijk begrip?"
        },
        options: [
          { en: "Enabling models to understand cause-effect relationships rather than just correlations in visual data", es: "Permitir a modelos entender relaciones causa-efecto en lugar de solo correlaciones en datos visuales", de: "Modellen ermöglichen Ursache-Wirkungs-Beziehungen zu verstehen anstatt nur Korrelationen in visuellen Daten", nl: "Modellen in staat stellen oorzaak-gevolg relaties te begrijpen in plaats van alleen correlaties in visuele data" },
          { en: "Causing computers to see better", es: "Hacer que las computadoras vean mejor", de: "Computer dazu bringen besser zu sehen", nl: "Computers beter laten zien" },
          { en: "Finding root causes of computer errors", es: "Encontrar causas raíz de errores de computadora", de: "Grundursachen von Computerfehlern finden", nl: "Hoofdoorzaken van computerfouten vinden" },
          { en: "Only for medical diagnosis applications", es: "Solo para aplicaciones de diagnóstico médico", de: "Nur für medizinische Diagnoseanwendungen", nl: "Alleen voor medische diagnose toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Causal reasoning in computer vision moves beyond pattern recognition to understanding why events occur, enabling better counterfactual reasoning, robustness to distribution shifts, and more interpretable AI systems.",
          es: "El razonamiento causal en visión por computadora va más allá del reconocimiento de patrones para entender por qué ocurren eventos, permitiendo mejor razonamiento contrafáctico, robustez a cambios de distribución y sistemas IA más interpretables.",
          de: "Kausales Schlussfolgern in Computer Vision geht über Mustererkennung hinaus um zu verstehen warum Ereignisse auftreten, ermöglicht besseres kontrafaktisches Denken, Robustheit gegenüber Verteilungsverschiebungen und interpretierbarere KI-Systeme.",
          nl: "Causaal redeneren in computer vision gaat voorbij patroonherkenning om te begrijpen waarom gebeurtenissen plaatsvinden, maakt beter contrafeitelijk redeneren mogelijk, robuustheid tegen distributieveranderingen en meer interpreteerbare AI systemen."
        }
      },
      {
        question: {
          en: "What is the future promise of quantum computing for computer vision algorithms?",
          es: "¿Cuál es la promesa futura de la computación cuántica para algoritmos de visión por computadora?",
          de: "Was ist das zukünftige Versprechen von Quantencomputing für Computer Vision Algorithmen?",
          nl: "Wat is de toekomstige belofte van quantum computing voor computer vision algoritmes?"
        },
        options: [
          { en: "Exponential speedup for certain optimization and pattern recognition problems", es: "Aceleración exponencial para ciertos problemas de optimización y reconocimiento de patrones", de: "Exponentieller Speedup für bestimmte Optimierungs- und Mustererkennungsprobleme", nl: "Exponentiële versnelling voor bepaalde optimalisatie en patroonherkenningsproblemen" },
          { en: "Making computers quantum mechanical", es: "Hacer computadoras cuántico-mecánicas", de: "Computer quantenmechanisch machen", nl: "Computers kwantummechanisch maken" },
          { en: "Only for quantum physics applications", es: "Solo para aplicaciones de física cuántica", de: "Nur für Quantenphysik-Anwendungen", nl: "Alleen voor kwantumfysica toepassingen" },
          { en: "Quantum entanglement of images", es: "Entrelazamiento cuántico de imágenes", de: "Quantenverschränkung von Bildern", nl: "Kwantumverstrengeling van afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum algorithms could potentially provide quadratic or exponential speedups for specific computer vision tasks like optimization in neural networks, similarity search, and certain mathematical operations underlying image processing.",
          es: "Los algoritmos cuánticos podrían potencialmente proporcionar aceleraciones cuadráticas o exponenciales para tareas específicas de visión por computadora como optimización en redes neuronales, búsqueda de similitud y ciertas operaciones matemáticas subyacentes al procesamiento de imágenes.",
          de: "Quantenalgorithmen könnten potentiell quadratische oder exponentielle Speedups für spezifische Computer Vision Aufgaben wie Optimierung in neuronalen Netzwerken, Ähnlichkeitssuche und bestimmte mathematische Operationen der Bildverarbeitung bieten.",
          nl: "Quantum algoritmes zouden potentieel kwadratische of exponentiële versnellingen kunnen bieden voor specifieke computer vision taken zoals optimalisatie in neurale netwerken, gelijkenis zoektocht en bepaalde wiskundige operaties onderliggend aan beeldverwerking."
        }
      },
      {
        question: {
          en: "What breakthrough does Neural Radiance Fields (NeRF) represent in 3D computer vision?",
          es: "¿Qué avance representan los Neural Radiance Fields (NeRF) en visión por computadora 3D?",
          de: "Welchen Durchbruch repräsentieren Neural Radiance Fields (NeRF) in 3D Computer Vision?",
          nl: "Welke doorbraak vertegenwoordigen Neural Radiance Fields (NeRF) in 3D computer vision?"
        },
        options: [
          { en: "Synthesizing photorealistic novel views of 3D scenes from sparse input images", es: "Sintetizar vistas novedosas fotorrealistas de escenas 3D de imágenes de entrada dispersas", de: "Fotorealistische neue Ansichten von 3D-Szenen aus spärlichen Eingabebildern synthetisieren", nl: "Fotorealistische nieuwe weergaven van 3D scènes synthetiseren uit schaarse invoer afbeeldingen" },
          { en: "Creating neural networks that emit radiation", es: "Crear redes neuronales que emiten radiación", de: "Neuronale Netzwerke erstellen die Strahlung emittieren", nl: "Neurale netwerken maken die straling uitzenden" },
          { en: "Measuring radiation fields in space", es: "Medir campos de radiación en el espacio", de: "Strahlungsfelder im Weltraum messen", nl: "Stralingsvelden in de ruimte meten" },
          { en: "Analyzing neural pathway radiations", es: "Analizar radiaciones de vías neuronales", de: "Neuronale Bahnstrahlungen analysieren", nl: "Neurale baan stralingen analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF uses neural networks to implicitly represent 3D scenes as continuous volumetric radiance fields, enabling rendering of photorealistic novel viewpoints from just a few input photographs with accurate lighting and occlusion effects.",
          es: "NeRF usa redes neuronales para representar implícitamente escenas 3D como campos de radiancia volumétrica continuos, permitiendo renderizado de puntos de vista novedosos fotorrealistas de solo unas pocas fotografías de entrada con efectos precisos de iluminación y oclusión.",
          de: "NeRF verwendet neuronale Netzwerke um 3D-Szenen implizit als kontinuierliche volumetrische Strahlungsfelder zu repräsentieren, ermöglicht Rendering fotorealistischer neuer Blickwinkel aus nur wenigen Eingabefotografien mit genauen Beleuchtungs- und Verdeckungseffekten.",
          nl: "NeRF gebruikt neurale netwerken om 3D scènes impliciet te representeren als continue volumetrische stralingsvelden, maakt rendering mogelijk van fotorealistische nieuwe gezichtspunten uit slechts enkele invoer foto's met nauwkeurige verlichting en occlusie effecten."
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