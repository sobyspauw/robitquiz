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
      },
      {
        question: {
          en: "What is instant-NGP and how does it improve NeRF rendering efficiency?",
          es: "¿Qué es instant-NGP y cómo mejora la eficiencia de renderizado de NeRF?",
          de: "Was ist Instant-NGP und wie verbessert es NeRF-Rendering-Effizienz?",
          nl: "Wat is instant-NGP en hoe verbetert het NeRF rendering efficiëntie?"
        },
        options: [
          { en: "Multi-resolution hash encoding that accelerates NeRF training from hours to seconds", es: "Codificación hash multi-resolución que acelera entrenamiento de NeRF de horas a segundos", de: "Multi-Auflösungs-Hash-Kodierung die NeRF-Training von Stunden auf Sekunden beschleunigt", nl: "Multi-resolutie hash encoding die NeRF training versnelt van uren naar seconden" },
          { en: "Instant neural graphics processor hardware", es: "Hardware de procesador gráfico neuronal instantáneo", de: "Instant Neural Graphics Prozessor Hardware", nl: "Instant neurale grafische processor hardware" },
          { en: "Next-generation programming for graphics", es: "Programación de próxima generación para gráficos", de: "Next-Generation Programmierung für Grafiken", nl: "Next-generatie programmering voor graphics" },
          { en: "Neural generation protocol for images", es: "Protocolo de generación neuronal para imágenes", de: "Neurales Generierungsprotokoll für Bilder", nl: "Neuraal generatieprotocol voor afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Instant-NGP uses a compact multi-resolution hash table to encode spatial coordinates, replacing slow MLPs with efficient hash lookups, reducing NeRF training time from hours/days to seconds while maintaining quality.",
          es: "Instant-NGP usa una tabla hash compacta multi-resolución para codificar coordenadas espaciales, reemplazando MLPs lentos con búsquedas hash eficientes, reduciendo tiempo de entrenamiento NeRF de horas/días a segundos mientras mantiene calidad.",
          de: "Instant-NGP verwendet eine kompakte Multi-Auflösungs-Hash-Tabelle um räumliche Koordinaten zu kodieren, ersetzt langsame MLPs durch effiziente Hash-Lookups, reduziert NeRF-Trainingszeit von Stunden/Tagen auf Sekunden bei Qualitätserhaltung.",
          nl: "Instant-NGP gebruikt een compacte multi-resolutie hash tabel om ruimtelijke coördinaten te coderen, vervangt trage MLPs met efficiënte hash lookups, vermindert NeRF trainingstijd van uren/dagen naar seconden terwijl kwaliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is 3D Gaussian Splatting and how does it differ from NeRF?",
          es: "¿Qué es 3D Gaussian Splatting y cómo difiere de NeRF?",
          de: "Was ist 3D Gaussian Splatting und wie unterscheidet es sich von NeRF?",
          nl: "Wat is 3D Gaussian Splatting en hoe verschilt het van NeRF?"
        },
        options: [
          { en: "Explicit 3D point representation with Gaussian primitives enabling real-time rendering speeds", es: "Representación de puntos 3D explícita con primitivas Gaussianas permitiendo velocidades de renderizado en tiempo real", de: "Explizite 3D-Punkt-Repräsentation mit Gaußschen Primitiven ermöglicht Echtzeit-Rendering-Geschwindigkeiten", nl: "Expliciete 3D punt representatie met Gaussische primitieven maakt real-time rendering snelheden mogelijk" },
          { en: "Splattering Gaussian noise on images", es: "Salpicar ruido Gaussiano en imágenes", de: "Gaußsches Rauschen auf Bilder spritzen", nl: "Gaussische ruis spatten op afbeeldingen" },
          { en: "3D version of normal distribution plots", es: "Versión 3D de gráficos de distribución normal", de: "3D-Version von Normalverteilungsplots", nl: "3D versie van normale distributie plots" },
          { en: "Statistical method for image analysis", es: "Método estadístico para análisis de imágenes", de: "Statistische Methode für Bildanalyse", nl: "Statistische methode voor beeldanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "3D Gaussian Splatting represents scenes as millions of 3D Gaussians rather than implicit neural fields, achieving faster training and real-time rendering (100+ fps) while maintaining or exceeding NeRF quality through differentiable rasterization.",
          es: "3D Gaussian Splatting representa escenas como millones de Gaussianas 3D en lugar de campos neuronales implícitos, logrando entrenamiento más rápido y renderizado en tiempo real (100+ fps) mientras mantiene o excede calidad NeRF a través de rasterización diferenciable.",
          de: "3D Gaussian Splatting repräsentiert Szenen als Millionen 3D-Gaussians anstatt impliziter neuronaler Felder, erreicht schnelleres Training und Echtzeit-Rendering (100+ fps) bei Erhaltung oder Übertreffen von NeRF-Qualität durch differenzierbare Rasterisierung.",
          nl: "3D Gaussian Splatting vertegenwoordigt scènes als miljoenen 3D Gaussians in plaats van impliciete neurale velden, bereikt snellere training en real-time rendering (100+ fps) terwijl NeRF kwaliteit wordt behouden of overtroffen door differentieerbare rasterisatie."
        }
      },
      {
        question: {
          en: "What is the significance of semantic SLAM for autonomous navigation?",
          es: "¿Cuál es la importancia de SLAM semántico para navegación autónoma?",
          de: "Was ist die Bedeutung von semantischem SLAM für autonome Navigation?",
          nl: "Wat is de betekenis van semantische SLAM voor autonome navigatie?"
        },
        options: [
          { en: "Combining geometric mapping with semantic understanding of objects for robust localization", es: "Combinar mapeo geométrico con comprensión semántica de objetos para localización robusta", de: "Geometrisches Mapping mit semantischem Objektverständnis kombinieren für robuste Lokalisierung", nl: "Geometrische mapping combineren met semantisch begrip van objecten voor robuuste lokalisatie" },
          { en: "Semantic analysis of slam poetry", es: "Análisis semántico de poesía slam", de: "Semantische Analyse von Slam-Poesie", nl: "Semantische analyse van slam poëzie" },
          { en: "Slamming objects based on semantics", es: "Golpear objetos basado en semántica", de: "Objekte basierend auf Semantik schlagen", nl: "Objecten slaan op basis van semantiek" },
          { en: "Simultaneous language and motion tracking", es: "Seguimiento simultáneo de lenguaje y movimiento", de: "Simultanes Sprach- und Bewegungstracking", nl: "Gelijktijdige taal en beweging tracking" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic SLAM integrates object detection and scene understanding with traditional geometric SLAM, creating maps that include object categories and relationships, enabling higher-level reasoning for autonomous systems beyond pure geometry.",
          es: "SLAM semántico integra detección de objetos y comprensión de escena con SLAM geométrico tradicional, creando mapas que incluyen categorías de objetos y relaciones, permitiendo razonamiento de nivel superior para sistemas autónomos más allá de geometría pura.",
          de: "Semantisches SLAM integriert Objekterkennung und Szenenverständnis mit traditionellem geometrischem SLAM, erstellt Karten die Objektkategorien und Beziehungen enthalten, ermöglicht höheres Denken für autonome Systeme jenseits reiner Geometrie.",
          nl: "Semantische SLAM integreert objectdetectie en scènebegrip met traditionele geometrische SLAM, creëert kaarten die objectcategorieën en relaties bevatten, maakt hogere redenering mogelijk voor autonome systemen voorbij pure geometrie."
        }
      },
      {
        question: {
          en: "What is occupancy networks' contribution to 3D shape representation?",
          es: "¿Cuál es la contribución de las redes de ocupación a la representación de formas 3D?",
          de: "Was ist der Beitrag von Occupancy Networks zur 3D-Formrepräsentation?",
          nl: "Wat is de bijdrage van occupancy networks aan 3D vorm representatie?"
        },
        options: [
          { en: "Learning continuous implicit functions that predict occupancy probabilities at any 3D point", es: "Aprender funciones implícitas continuas que predicen probabilidades de ocupación en cualquier punto 3D", de: "Kontinuierliche implizite Funktionen lernen die Belegungswahrscheinlichkeiten an jedem 3D-Punkt vorhersagen", nl: "Continue impliciete functies leren die bezettingswaarschijnlijkheden voorspellen op elk 3D punt" },
          { en: "Networks for room occupancy detection", es: "Redes para detección de ocupación de habitaciones", de: "Netzwerke für Raumbelegungserkennung", nl: "Netwerken voor kamer bezettingsdetectie" },
          { en: "Occupying network bandwidth efficiently", es: "Ocupar ancho de banda de red eficientemente", de: "Netzwerkbandbreite effizient belegen", nl: "Netwerkbandbreedte efficiënt bezetten" },
          { en: "Tracking how occupied spaces are", es: "Rastrear qué tan ocupados están los espacios", de: "Verfolgen wie belegt Räume sind", nl: "Bijhouden hoe bezet ruimtes zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Occupancy networks represent 3D shapes as continuous decision boundaries learned by neural networks, predicting whether arbitrary query points lie inside or outside objects, enabling high-resolution shape reconstruction without voxel grids.",
          es: "Las redes de ocupación representan formas 3D como límites de decisión continuos aprendidos por redes neuronales, prediciendo si puntos de consulta arbitrarios están dentro o fuera de objetos, permitiendo reconstrucción de forma de alta resolución sin cuadrículas de vóxeles.",
          de: "Occupancy Networks repräsentieren 3D-Formen als kontinuierliche Entscheidungsgrenzen gelernt von neuronalen Netzwerken, sagen vorher ob beliebige Abfragepunkte innerhalb oder außerhalb von Objekten liegen, ermöglichen hochauflösende Formrekonstruktion ohne Voxel-Gitter.",
          nl: "Occupancy networks vertegenwoordigen 3D vormen als continue beslissingsgrenzen geleerd door neurale netwerken, voorspellen of willekeurige vraagpunten binnen of buiten objecten liggen, maken hoge resolutie vorm reconstructie mogelijk zonder voxel grids."
        }
      },
      {
        question: {
          en: "What is visual grounding and why is it important for vision-language models?",
          es: "¿Qué es el anclaje visual y por qué es importante para modelos visión-lenguaje?",
          de: "Was ist Visual Grounding und warum ist es wichtig für Vision-Sprache-Modelle?",
          nl: "Wat is visual grounding en waarom is het belangrijk voor visie-taal modellen?"
        },
        options: [
          { en: "Localizing objects or regions in images that correspond to textual descriptions or queries", es: "Localizar objetos o regiones en imágenes que corresponden a descripciones o consultas textuales", de: "Objekte oder Regionen in Bildern lokalisieren die Textbeschreibungen oder Abfragen entsprechen", nl: "Objecten of regio's in afbeeldingen lokaliseren die overeenkomen met tekstuele beschrijvingen of queries" },
          { en: "Grounding electrical circuits in vision systems", es: "Conectar a tierra circuitos eléctricos en sistemas de visión", de: "Elektrische Schaltkreise in Vision-Systemen erden", nl: "Elektrische circuits aarden in visiesystemen" },
          { en: "Visual foundation training only", es: "Solo entrenamiento de fundación visual", de: "Nur visuelles Grundlagentraining", nl: "Alleen visuele basis training" },
          { en: "Ground-level image capture", es: "Captura de imagen a nivel del suelo", de: "Bildaufnahme auf Bodenhöhe", nl: "Beeld vastleggen op grondniveau" }
        ],
        correct: 0,
        explanation: {
          en: "Visual grounding bridges language and vision by connecting textual phrases to spatial regions in images, enabling tasks like referring expression comprehension, visual question answering, and image-text alignment in multimodal models.",
          es: "El anclaje visual conecta lenguaje y visión conectando frases textuales a regiones espaciales en imágenes, permitiendo tareas como comprensión de expresión referente, respuesta a preguntas visuales y alineación imagen-texto en modelos multimodales.",
          de: "Visual Grounding überbrückt Sprache und Vision durch Verbindung textueller Phrasen mit räumlichen Regionen in Bildern, ermöglicht Aufgaben wie Referring Expression Comprehension, visuelle Fragenbeantwortung und Bild-Text-Ausrichtung in multimodalen Modellen.",
          nl: "Visual grounding overbrugt taal en visie door tekstuele zinnen te verbinden met ruimtelijke regio's in afbeeldingen, maakt taken mogelijk zoals referring expression comprehension, visuele vraagbeantwoording en beeld-tekst afstemming in multimodale modellen."
        }
      },
      {
        question: {
          en: "What is the core principle behind Score-based Generative Models (Score Matching)?",
          es: "¿Cuál es el principio central detrás de los Modelos Generativos basados en Puntuación (Score Matching)?",
          de: "Was ist das Kernprinzip hinter Score-basierten Generativen Modellen (Score Matching)?",
          nl: "Wat is het kernprincipe achter Score-gebaseerde Generatieve Modellen (Score Matching)?"
        },
        options: [
          { en: "Learning gradient of log-probability density to enable sampling through Langevin dynamics", es: "Aprender gradiente de densidad de log-probabilidad para permitir muestreo a través de dinámica de Langevin", de: "Gradient der Log-Wahrscheinlichkeitsdichte lernen um Sampling durch Langevin-Dynamik zu ermöglichen", nl: "Gradiënt van log-waarschijnlijkheidsdichtheid leren om sampling mogelijk te maken door Langevin dynamiek" },
          { en: "Scoring generated images based on quality", es: "Puntuar imágenes generadas basado en calidad", de: "Generierte Bilder basierend auf Qualität bewerten", nl: "Gegenereerde afbeeldingen scoren op kwaliteit" },
          { en: "Matching scores between different models", es: "Coincidir puntuaciones entre diferentes modelos", de: "Scores zwischen verschiedenen Modellen abgleichen", nl: "Scores matchen tussen verschillende modellen" },
          { en: "Scoring visual similarity only", es: "Solo puntuar similitud visual", de: "Nur visuelle Ähnlichkeit bewerten", nl: "Alleen visuele gelijkenis scoren" }
        ],
        correct: 0,
        explanation: {
          en: "Score-based models learn the score function (gradient of log probability) at different noise levels, enabling generation through annealed Langevin dynamics. This forms the theoretical foundation for diffusion models like DDPM and Score SDE.",
          es: "Los modelos basados en puntuación aprenden la función de puntuación (gradiente de log probabilidad) en diferentes niveles de ruido, permitiendo generación a través de dinámica de Langevin recocida. Esto forma la base teórica para modelos de difusión como DDPM y Score SDE.",
          de: "Score-basierte Modelle lernen die Score-Funktion (Gradient der Log-Wahrscheinlichkeit) bei verschiedenen Rauschpegeln, ermöglichen Generierung durch annealed Langevin-Dynamik. Dies bildet theoretische Grundlage für Diffusionsmodelle wie DDPM und Score SDE.",
          nl: "Score-gebaseerde modellen leren de score functie (gradiënt van log waarschijnlijkheid) bij verschillende ruis niveaus, maken generatie mogelijk door annealed Langevin dynamiek. Dit vormt de theoretische basis voor diffusiemodellen zoals DDPM en Score SDE."
        }
      },
      {
        question: {
          en: "What is BEV (Bird's Eye View) representation revolutionizing in autonomous driving perception?",
          es: "¿Qué está revolucionando la representación BEV (Vista de Ojo de Pájaro) en percepción de conducción autónoma?",
          de: "Was revolutioniert BEV (Bird's Eye View) Repräsentation in autonomer Fahrwahrnehmung?",
          nl: "Wat revolutioneert BEV (Bird's Eye View) representatie in autonome rij perceptie?"
        },
        options: [
          { en: "Unified 3D spatial representation from multi-camera inputs for consistent object detection and mapping", es: "Representación espacial 3D unificada de entradas multi-cámara para detección y mapeo consistente de objetos", de: "Einheitliche 3D-Raum-Repräsentation aus Multi-Kamera-Eingaben für konsistente Objekterkennung und Kartierung", nl: "Uniforme 3D ruimtelijke representatie van multi-camera inputs voor consistente objectdetectie en mapping" },
          { en: "Using beverage containers as reference points", es: "Usar contenedores de bebidas como puntos de referencia", de: "Getränkebehälter als Referenzpunkte verwenden", nl: "Drank containers gebruiken als referentiepunten" },
          { en: "Bird detection for environmental awareness", es: "Detección de aves para conciencia ambiental", de: "Vogelerkennung für Umweltbewusstsein", nl: "Vogeldetectie voor milieubewustzijn" },
          { en: "Top-down image transformation only", es: "Solo transformación de imagen de arriba hacia abajo", de: "Nur Top-Down-Bildtransformation", nl: "Alleen top-down beeldtransformatie" }
        ],
        correct: 0,
        explanation: {
          en: "BEV representation transforms multi-camera surround views into a unified bird's-eye perspective, enabling better 3D object detection, trajectory prediction, and spatial reasoning by resolving occlusions and providing metric 3D understanding from camera data.",
          es: "La representación BEV transforma vistas envolventes multi-cámara en una perspectiva unificada de ojo de pájaro, permitiendo mejor detección de objetos 3D, predicción de trayectoria y razonamiento espacial resolviendo oclusiones y proporcionando comprensión métrica 3D de datos de cámara.",
          de: "BEV-Repräsentation transformiert Multi-Kamera-Rundumsichten in eine einheitliche Vogelperspektive, ermöglicht bessere 3D-Objekterkennung, Trajektorienvorhersage und räumliches Denken durch Auflösung von Verdeckungen und metrisches 3D-Verständnis aus Kameradaten.",
          nl: "BEV representatie transformeert multi-camera surround weergaven in een uniform vogelperspectief, maakt betere 3D objectdetectie, traject voorspelling en ruimtelijk redeneren mogelijk door occlusies op te lossen en metrisch 3D begrip te bieden van cameradata."
        }
      },
      {
        question: {
          en: "What is query-based detection and how do models like DETR use it?",
          es: "¿Qué es la detección basada en consultas y cómo la usan modelos como DETR?",
          de: "Was ist Query-basierte Erkennung und wie verwenden Modelle wie DETR sie?",
          nl: "Wat is query-gebaseerde detectie en hoe gebruiken modellen zoals DETR het?"
        },
        options: [
          { en: "Learnable object queries that directly predict object sets without anchors or proposals", es: "Consultas de objetos aprendibles que predicen directamente conjuntos de objetos sin anclas o propuestas", de: "Lernbare Objekt-Queries die direkt Objektmengen ohne Anker oder Vorschläge vorhersagen", nl: "Leerbare object queries die direct objectsets voorspellen zonder ankers of voorstellen" },
          { en: "Querying databases for object information", es: "Consultar bases de datos para información de objetos", de: "Datenbanken nach Objektinformationen abfragen", nl: "Databases bevragen voor objectinformatie" },
          { en: "User queries for what to detect", es: "Consultas de usuario sobre qué detectar", de: "Benutzeranfragen was zu erkennen ist", nl: "Gebruikersvragen over wat te detecteren" },
          { en: "SQL queries for image databases", es: "Consultas SQL para bases de datos de imágenes", de: "SQL-Abfragen für Bilddatenbanken", nl: "SQL queries voor afbeeldingsdatabases" }
        ],
        correct: 0,
        explanation: {
          en: "Query-based detection uses a fixed set of learnable embeddings (queries) that attend to image features via cross-attention, each query learning to detect specific objects. This eliminates hand-designed anchors and NMS through set prediction with bipartite matching.",
          es: "La detección basada en consultas usa un conjunto fijo de incrustaciones aprendibles (consultas) que atienden a características de imagen vía atención cruzada, cada consulta aprende a detectar objetos específicos. Esto elimina anclas diseñadas a mano y NMS a través de predicción de conjunto con emparejamiento bipartito.",
          de: "Query-basierte Erkennung verwendet einen festen Satz lernbarer Embeddings (Queries) die über Cross-Attention auf Bild-Features achten, jede Query lernt spezifische Objekte zu erkennen. Dies eliminiert handdesignte Anker und NMS durch Set-Vorhersage mit bipartitem Matching.",
          nl: "Query-gebaseerde detectie gebruikt een vaste set leerbare embeddings (queries) die via cross-attention naar beeldkenmerken kijken, elke query leert specifieke objecten te detecteren. Dit elimineert handontworpen ankers en NMS door set voorspelling met bipartite matching."
        }
      },
      {
        question: {
          en: "What is the significance of ConvNeXt in the CNN vs Transformer debate?",
          es: "¿Cuál es la importancia de ConvNeXt en el debate CNN vs Transformer?",
          de: "Was ist die Bedeutung von ConvNeXt in der CNN vs Transformer Debatte?",
          nl: "Wat is de betekenis van ConvNeXt in het CNN vs Transformer debat?"
        },
        options: [
          { en: "Modernized CNN architecture matching Vision Transformers performance using pure convolutions", es: "Arquitectura CNN modernizada igualando rendimiento de Vision Transformers usando convoluciones puras", de: "Modernisierte CNN-Architektur die Vision Transformers Leistung mit reinen Faltungen erreicht", nl: "Gemoderniseerde CNN architectuur die Vision Transformers prestaties evenaart met pure convoluties" },
          { en: "Next generation of convolution operations", es: "Próxima generación de operaciones de convolución", de: "Nächste Generation von Faltungsoperationen", nl: "Volgende generatie convolutie operaties" },
          { en: "Converting transformers to CNNs only", es: "Solo convertir transformers a CNNs", de: "Nur Transformer zu CNNs konvertieren", nl: "Alleen transformers converteren naar CNNs" },
          { en: "Convolution extensions for existing models", es: "Extensiones de convolución para modelos existentes", de: "Faltungserweiterungen für bestehende Modelle", nl: "Convolutie extensies voor bestaande modellen" }
        ],
        correct: 0,
        explanation: {
          en: "ConvNeXt systematically modernizes ResNet design by adopting transformer-like training strategies and architectural choices (depthwise convolutions, layer normalization, GELU), demonstrating that well-designed CNNs can compete with or exceed transformer performance while being more efficient.",
          es: "ConvNeXt moderniza sistemáticamente diseño ResNet adoptando estrategias de entrenamiento tipo transformer y elecciones arquitectónicas (convoluciones depthwise, normalización de capa, GELU), demostrando que CNNs bien diseñadas pueden competir con o exceder rendimiento transformer siendo más eficientes.",
          de: "ConvNeXt modernisiert systematisch ResNet-Design durch Übernahme Transformer-ähnlicher Trainingsstrategien und architektonischer Entscheidungen (depthwise Faltungen, Layer Normalization, GELU), zeigt dass gut designte CNNs mit Transformer-Leistung konkurrieren oder diese übertreffen können bei höherer Effizienz.",
          nl: "ConvNeXt moderniseert systematisch ResNet ontwerp door transformer-achtige trainingsstrategieën en architectonische keuzes te adopteren (depthwise convoluties, layer normalization, GELU), toont aan dat goed ontworpen CNNs kunnen concurreren met of transformer prestaties overtreffen terwijl ze efficiënter zijn."
        }
      },
      {
        question: {
          en: "What is prompt engineering's role in large vision-language models?",
          es: "¿Cuál es el papel de la ingeniería de prompts en modelos grandes visión-lenguaje?",
          de: "Was ist die Rolle von Prompt Engineering in großen Vision-Sprache-Modellen?",
          nl: "Wat is de rol van prompt engineering in grote visie-taal modellen?"
        },
        options: [
          { en: "Crafting textual inputs to steer model behavior and extract capabilities without retraining", es: "Elaborar entradas textuales para dirigir comportamiento del modelo y extraer capacidades sin reentrenar", de: "Textuelle Eingaben gestalten um Modellverhalten zu steuern und Fähigkeiten ohne Neutraining zu extrahieren", nl: "Tekstuele inputs maken om modelgedrag te sturen en capaciteiten te extraheren zonder hertraining" },
          { en: "Engineering better prompts for user interfaces", es: "Ingeniería de mejores avisos para interfaces de usuario", de: "Bessere Eingabeaufforderungen für Benutzeroberflächen entwickeln", nl: "Betere prompts ontwikkelen voor gebruikersinterfaces" },
          { en: "Prompt responses from vision systems", es: "Respuestas rápidas de sistemas de visión", de: "Schnelle Antworten von Vision-Systemen", nl: "Snelle reacties van visiesystemen" },
          { en: "Only for text generation models", es: "Solo para modelos de generación de texto", de: "Nur für Textgenerierungsmodelle", nl: "Alleen voor tekstgeneratie modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt engineering in vision-language models involves designing textual queries, instructions, or context that guide the model to perform specific tasks (classification, captioning, VQA) effectively, leveraging in-context learning and instruction following without fine-tuning.",
          es: "La ingeniería de prompts en modelos visión-lenguaje involucra diseñar consultas textuales, instrucciones o contexto que guían al modelo a realizar tareas específicas (clasificación, subtitulado, VQA) efectivamente, aprovechando aprendizaje en contexto y seguimiento de instrucciones sin ajuste fino.",
          de: "Prompt Engineering in Vision-Sprache-Modellen umfasst Gestaltung textueller Abfragen, Anweisungen oder Kontext die das Modell anleiten spezifische Aufgaben (Klassifikation, Bildunterschriften, VQA) effektiv durchzuführen, nutzt In-Context Learning und Anweisungsbefolgung ohne Finetuning.",
          nl: "Prompt engineering in visie-taal modellen omvat het ontwerpen van tekstuele queries, instructies of context die het model leiden om specifieke taken (classificatie, ondertiteling, VQA) effectief uit te voeren, maakt gebruik van in-context learning en instructie volgen zonder fine-tuning."
        }
      },
      {
        question: {
          en: "What breakthrough does Segment Anything Model (SAM) represent?",
          es: "¿Qué avance representa el Modelo Segment Anything (SAM)?",
          de: "Welchen Durchbruch stellt das Segment Anything Model (SAM) dar?",
          nl: "Welke doorbraak vertegenwoordigt het Segment Anything Model (SAM)?"
        },
        options: [
          { en: "Promptable segmentation foundation model trained on 1B+ masks enabling zero-shot segmentation", es: "Modelo fundacional de segmentación con prompts entrenado en 1B+ máscaras permitiendo segmentación de cero disparos", de: "Promptbares Segmentierungs-Foundation-Model trainiert auf 1B+ Masken ermöglicht Zero-Shot-Segmentierung", nl: "Promptbaar segmentatie foundation model getraind op 1B+ maskers maakt zero-shot segmentatie mogelijk" },
          { en: "Segmenting anything using traditional methods", es: "Segmentar cualquier cosa usando métodos tradicionales", de: "Alles mit traditionellen Methoden segmentieren", nl: "Alles segmenteren met traditionele methoden" },
          { en: "SAM file format for images", es: "Formato de archivo SAM para imágenes", de: "SAM-Dateiformat für Bilder", nl: "SAM bestandsformaat voor afbeeldingen" },
          { en: "Sampling anything in images", es: "Muestrear cualquier cosa en imágenes", de: "Alles in Bildern sampeln", nl: "Alles samplen in afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "SAM is a foundation model for image segmentation trained on 11M images with 1.1B masks, accepting prompts (points, boxes, text) to segment any object in any image zero-shot, democratizing segmentation through flexible prompting without dataset-specific training.",
          es: "SAM es un modelo fundacional para segmentación de imágenes entrenado en 11M imágenes con 1.1B máscaras, aceptando prompts (puntos, cajas, texto) para segmentar cualquier objeto en cualquier imagen de cero disparos, democratizando segmentación a través de prompting flexible sin entrenamiento específico de conjunto de datos.",
          de: "SAM ist ein Foundation-Model für Bildsegmentierung trainiert auf 11M Bildern mit 1.1B Masken, akzeptiert Prompts (Punkte, Boxen, Text) um jedes Objekt in jedem Bild zero-shot zu segmentieren, demokratisiert Segmentierung durch flexibles Prompting ohne datensatzspezifisches Training.",
          nl: "SAM is een foundation model voor beeldsegmentatie getraind op 11M afbeeldingen met 1.1B maskers, accepteert prompts (punten, boxen, tekst) om elk object in elke afbeelding zero-shot te segmenteren, democratiseert segmentatie door flexibel prompten zonder dataset-specifieke training."
        }
      },
      {
        question: {
          en: "What is neural rendering and how is it transforming graphics?",
          es: "¿Qué es el renderizado neuronal y cómo está transformando los gráficos?",
          de: "Was ist neurales Rendering und wie transformiert es Grafiken?",
          nl: "Wat is neurale rendering en hoe transformeert het graphics?"
        },
        options: [
          { en: "Using neural networks to synthesize images from 3D scene representations with photorealistic quality", es: "Usar redes neuronales para sintetizar imágenes de representaciones de escena 3D con calidad fotorrealista", de: "Neuronale Netzwerke verwenden um Bilder aus 3D-Szenenrepräsentationen mit fotorealistischer Qualität zu synthetisieren", nl: "Neurale netwerken gebruiken om afbeeldingen te synthetiseren uit 3D scène representaties met fotorealistische kwaliteit" },
          { en: "Rendering neural network architectures visually", es: "Renderizar arquitecturas de redes neuronales visualmente", de: "Neuronale Netzwerkarchitekturen visuell rendern", nl: "Neurale netwerkarchitecturen visueel renderen" },
          { en: "Neural processing for faster rendering", es: "Procesamiento neuronal para renderizado más rápido", de: "Neuronale Verarbeitung für schnelleres Rendering", nl: "Neurale verwerking voor snellere rendering" },
          { en: "Rendering brain scans only", es: "Solo renderizar escaneos cerebrales", de: "Nur Gehirnscans rendern", nl: "Alleen hersenscanners renderen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural rendering combines classical graphics with deep learning, using networks to learn light transport, material properties, and rendering from data. NeRF, Neural Textures, and differentiable rendering enable photorealistic synthesis, relighting, and novel view generation.",
          es: "El renderizado neuronal combina gráficos clásicos con aprendizaje profundo, usando redes para aprender transporte de luz, propiedades de material y renderizado de datos. NeRF, Texturas Neuronales y renderizado diferenciable permiten síntesis fotorrealista, re-iluminación y generación de vista novedosa.",
          de: "Neurales Rendering kombiniert klassische Grafiken mit Deep Learning, verwendet Netzwerke um Lichttransport, Materialeigenschaften und Rendering aus Daten zu lernen. NeRF, Neural Textures und differenzierbares Rendering ermöglichen fotorealistische Synthese, Relighting und neuartige Ansichtsgenerierung.",
          nl: "Neurale rendering combineert klassieke graphics met deep learning, gebruikt netwerken om lichttransport, materiaaleigenschappen en rendering uit data te leren. NeRF, Neural Textures en differentieerbare rendering maken fotorealistische synthese, relighting en nieuwe weergave generatie mogelijk."
        }
      },
      {
        question: {
          en: "What is test-time training (TTT) and how does it differ from traditional inference?",
          es: "¿Qué es el entrenamiento en tiempo de prueba (TTT) y cómo difiere de la inferencia tradicional?",
          de: "Was ist Test-Time Training (TTT) und wie unterscheidet es sich von traditioneller Inferenz?",
          nl: "Wat is test-time training (TTT) en hoe verschilt het van traditionele inferentie?"
        },
        options: [
          { en: "Updating model parameters during inference using self-supervised objectives from test data", es: "Actualizar parámetros del modelo durante inferencia usando objetivos auto-supervisados de datos de prueba", de: "Modellparameter während Inferenz aktualisieren mit selbstüberwachten Zielen aus Testdaten", nl: "Modelparameters bijwerken tijdens inferentie met zelf-gesuperviseerde doelstellingen uit testdata" },
          { en: "Training models only during testing phase", es: "Entrenar modelos solo durante fase de prueba", de: "Modelle nur während Testphase trainieren", nl: "Modellen alleen tijdens testfase trainen" },
          { en: "Testing while training simultaneously", es: "Probar mientras entrena simultáneamente", de: "Testen während gleichzeitigem Training", nl: "Testen tijdens gelijktijdig trainen" },
          { en: "Training on test datasets", es: "Entrenar en conjuntos de datos de prueba", de: "Auf Testdatensätzen trainieren", nl: "Trainen op test datasets" }
        ],
        correct: 0,
        explanation: {
          en: "TTT adapts models at test time by optimizing auxiliary self-supervised tasks (rotation prediction, contrastive learning) on incoming test samples, enabling online adaptation to distribution shifts, domain changes, or individual sample characteristics without labels.",
          es: "TTT adapta modelos en tiempo de prueba optimizando tareas auto-supervisadas auxiliares (predicción de rotación, aprendizaje contrastivo) en muestras de prueba entrantes, permitiendo adaptación en línea a cambios de distribución, cambios de dominio o características de muestra individual sin etiquetas.",
          de: "TTT passt Modelle zur Testzeit an durch Optimierung auxiliärer selbstüberwachter Aufgaben (Rotationsvorhersage, kontrastives Lernen) auf eingehenden Testproben, ermöglicht Online-Anpassung an Verteilungsverschiebungen, Domänenwechsel oder individuelle Probencharakteristiken ohne Labels.",
          nl: "TTT past modellen aan tijdens testtime door hulp zelf-gesuperviseerde taken (rotatie voorspelling, contrastief leren) te optimaliseren op binnenkomende testmonsters, maakt online aanpassing mogelijk aan distributieverschuivingen, domein veranderingen of individuele monster kenmerken zonder labels."
        }
      },
      {
        question: {
          en: "What is the significance of compositionality in vision-language understanding?",
          es: "¿Cuál es la importancia de la composicionalidad en comprensión visión-lenguaje?",
          de: "Was ist die Bedeutung von Kompositionalität in Vision-Sprache-Verständnis?",
          nl: "Wat is de betekenis van compositionaliteit in visie-taal begrip?"
        },
        options: [
          { en: "Understanding complex concepts by combining simpler visual and linguistic primitives systematically", es: "Entender conceptos complejos combinando primitivas visuales y lingüísticas más simples sistemáticamente", de: "Komplexe Konzepte verstehen durch systematische Kombination einfacherer visueller und linguistischer Primitive", nl: "Complexe concepten begrijpen door eenvoudigere visuele en linguïstische primitieven systematisch te combineren" },
          { en: "Compositing visual elements in images", es: "Componer elementos visuales en imágenes", de: "Visuelle Elemente in Bildern zusammensetzen", nl: "Visuele elementen samenstellen in afbeeldingen" },
          { en: "Compositional music for vision tasks", es: "Música compositiva para tareas de visión", de: "Kompositorische Musik für Vision-Aufgaben", nl: "Compositorische muziek voor visietaken" },
          { en: "Creating composite images only", es: "Solo crear imágenes compuestas", de: "Nur zusammengesetzte Bilder erstellen", nl: "Alleen samengestelde afbeeldingen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Compositional understanding enables models to generalize to novel combinations of objects, attributes, and relations (e.g., 'blue car on left of red truck') by learning reusable concepts, addressing a key challenge where models memorize training combinations but fail on new ones.",
          es: "La comprensión compositiva permite a modelos generalizar a combinaciones novedosas de objetos, atributos y relaciones (por ejemplo, 'auto azul a la izquierda de camión rojo') aprendiendo conceptos reutilizables, abordando un desafío clave donde modelos memorizan combinaciones de entrenamiento pero fallan en nuevas.",
          de: "Kompositionelles Verständnis ermöglicht Modellen auf neuartige Kombinationen von Objekten, Attributen und Beziehungen zu generalisieren (z.B. 'blaues Auto links von rotem Lastwagen') durch Lernen wiederverwendbarer Konzepte, adressiert Schlüsselherausforderung wo Modelle Trainingskombinationen auswendig lernen aber bei neuen versagen.",
          nl: "Compositioneel begrip stelt modellen in staat te generaliseren naar nieuwe combinaties van objecten, attributen en relaties (bijv. 'blauwe auto links van rode vrachtwagen') door herbruikbare concepten te leren, pakt belangrijke uitdaging aan waar modellen trainingscombinaties memoriseren maar falen op nieuwe."
        }
      },
      {
        question: {
          en: "What is open-vocabulary detection and how does it differ from closed-set detection?",
          es: "¿Qué es la detección de vocabulario abierto y cómo difiere de la detección de conjunto cerrado?",
          de: "Was ist Open-Vocabulary-Erkennung und wie unterscheidet sie sich von Closed-Set-Erkennung?",
          nl: "Wat is open-vocabulary detectie en hoe verschilt het van closed-set detectie?"
        },
        options: [
          { en: "Detecting arbitrary object categories described in text, not limited to predefined training classes", es: "Detectar categorías de objetos arbitrarias descritas en texto, no limitadas a clases de entrenamiento predefinidas", de: "Beliebige Objektkategorien erkennen die in Text beschrieben sind, nicht auf vordefinierte Trainingsklassen begrenzt", nl: "Willekeurige objectcategorieën detecteren beschreven in tekst, niet beperkt tot voorgedefinieerde trainingsklassen" },
          { en: "Vocabulary detection in text documents", es: "Detección de vocabulario en documentos de texto", de: "Vokabularerkennung in Textdokumenten", nl: "Vocabulaire detectie in tekstdocumenten" },
          { en: "Open-ended question answering only", es: "Solo respuesta a preguntas de final abierto", de: "Nur offene Fragenbeantwortung", nl: "Alleen open-einde vraagbeantwoording" },
          { en: "Detecting whether vocabulary is open or closed", es: "Detectar si el vocabulario es abierto o cerrado", de: "Erkennen ob Vokabular offen oder geschlossen ist", nl: "Detecteren of vocabulaire open of gesloten is" }
        ],
        correct: 0,
        explanation: {
          en: "Open-vocabulary detection leverages vision-language models like CLIP to detect objects from arbitrary textual descriptions, going beyond fixed training categories. Models like ViLD, Detic, and GLIP enable detecting 'giraffe wearing hat' without training on that specific combination.",
          es: "La detección de vocabulario abierto aprovecha modelos visión-lenguaje como CLIP para detectar objetos de descripciones textuales arbitrarias, yendo más allá de categorías de entrenamiento fijas. Modelos como ViLD, Detic y GLIP permiten detectar 'jirafa usando sombrero' sin entrenar en esa combinación específica.",
          de: "Open-Vocabulary-Erkennung nutzt Vision-Sprache-Modelle wie CLIP um Objekte aus beliebigen Textbeschreibungen zu erkennen, geht über feste Trainingskategorien hinaus. Modelle wie ViLD, Detic und GLIP ermöglichen Erkennung von 'Giraffe mit Hut' ohne Training auf dieser spezifischen Kombination.",
          nl: "Open-vocabulary detectie maakt gebruik van visie-taal modellen zoals CLIP om objecten te detecteren uit willekeurige tekstuele beschrijvingen, gaat voorbij vaste trainingscategorieën. Modellen zoals ViLD, Detic en GLIP maken detectie mogelijk van 'giraffe met hoed dragen' zonder training op die specifieke combinatie."
        }
      },
      {
        question: {
          en: "What is mesh neural rendering and how does it combine traditional graphics with deep learning?",
          es: "¿Qué es el renderizado neuronal de mallas y cómo combina gráficos tradicionales con aprendizaje profundo?",
          de: "Was ist Mesh Neural Rendering und wie kombiniert es traditionelle Grafiken mit Deep Learning?",
          nl: "Wat is mesh neurale rendering en hoe combineert het traditionele graphics met deep learning?"
        },
        options: [
          { en: "Learning neural textures and materials on mesh surfaces for differentiable rendering pipelines", es: "Aprender texturas y materiales neuronales en superficies de malla para pipelines de renderizado diferenciable", de: "Neuronale Texturen und Materialien auf Mesh-Oberflächen lernen für differenzierbare Rendering-Pipelines", nl: "Neurale texturen en materialen leren op mesh oppervlakken voor differentieerbare rendering pipelines" },
          { en: "Rendering mesh networks visually", es: "Renderizar redes de malla visualmente", de: "Mesh-Netzwerke visuell rendern", nl: "Mesh netwerken visueel renderen" },
          { en: "Creating mesh structures with neural networks", es: "Crear estructuras de malla con redes neuronales", de: "Mesh-Strukturen mit neuronalen Netzwerken erstellen", nl: "Mesh structuren maken met neurale netwerken" },
          { en: "Neural analysis of mesh quality", es: "Análisis neuronal de calidad de malla", de: "Neuronale Analyse von Mesh-Qualität", nl: "Neurale analyse van mesh kwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Mesh neural rendering attaches learned neural features to traditional mesh vertices, enabling photorealistic rendering with learned appearance while maintaining mesh benefits (editing, animation, physics). Differentiable rasterization allows end-to-end optimization from images.",
          es: "El renderizado neuronal de mallas adjunta características neuronales aprendidas a vértices de malla tradicionales, permitiendo renderizado fotorrealista con apariencia aprendida mientras mantiene beneficios de malla (edición, animación, física). La rasterización diferenciable permite optimización de extremo a extremo de imágenes.",
          de: "Mesh Neural Rendering befestigt gelernte neuronale Features an traditionellen Mesh-Vertices, ermöglicht fotorealistisches Rendering mit gelerntem Aussehen bei Erhaltung von Mesh-Vorteilen (Bearbeitung, Animation, Physik). Differenzierbare Rasterisierung ermöglicht End-to-End-Optimierung aus Bildern.",
          nl: "Mesh neurale rendering hecht geleerde neurale features aan traditionele mesh vertices, maakt fotorealistische rendering mogelijk met geleerd uiterlijk terwijl mesh voordelen behouden blijven (bewerking, animatie, fysica). Differentieerbare rasterisatie maakt end-to-end optimalisatie mogelijk uit afbeeldingen."
        }
      },
      {
        question: {
          en: "What is dynamic scene reconstruction and why is it more challenging than static NeRF?",
          es: "¿Qué es la reconstrucción de escena dinámica y por qué es más desafiante que NeRF estático?",
          de: "Was ist dynamische Szenenrekonstruktion und warum ist sie herausfordernder als statisches NeRF?",
          nl: "Wat is dynamische scène reconstructie en waarom is het uitdagender dan statische NeRF?"
        },
        options: [
          { en: "Modeling time-varying geometry, appearance, and motion from video requiring spatio-temporal consistency", es: "Modelar geometría, apariencia y movimiento variables en tiempo de video requiriendo consistencia espacio-temporal", de: "Zeitvariable Geometrie, Aussehen und Bewegung aus Video modellieren erfordert raum-zeitliche Konsistenz", nl: "Tijd-variërende geometrie, uiterlijk en beweging modelleren uit video vereist ruimte-tijdelijke consistentie" },
          { en: "Reconstructing scenes that change dynamically", es: "Reconstruir escenas que cambian dinámicamente", de: "Szenen rekonstruieren die sich dynamisch ändern", nl: "Scènes reconstrueren die dynamisch veranderen" },
          { en: "Dynamic memory allocation for reconstruction", es: "Asignación dinámica de memoria para reconstrucción", de: "Dynamische Speicherzuweisung für Rekonstruktion", nl: "Dynamische geheugen toewijzing voor reconstructie" },
          { en: "Real-time scene updates only", es: "Solo actualizaciones de escena en tiempo real", de: "Nur Echtzeit-Szenenaktualisierungen", nl: "Alleen real-time scène updates" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic scene reconstruction extends NeRF to model moving objects, deforming geometry, and changing appearance over time. Methods like D-NeRF, Neural Scene Flow, and 4D Gaussian Splatting decompose space-time into deformation fields and canonical representations.",
          es: "La reconstrucción de escena dinámica extiende NeRF para modelar objetos en movimiento, geometría deformante y apariencia cambiante a lo largo del tiempo. Métodos como D-NeRF, Neural Scene Flow y 4D Gaussian Splatting descomponen espacio-tiempo en campos de deformación y representaciones canónicas.",
          de: "Dynamische Szenenrekonstruktion erweitert NeRF um bewegte Objekte, verformende Geometrie und sich änderndes Aussehen über Zeit zu modellieren. Methoden wie D-NeRF, Neural Scene Flow und 4D Gaussian Splatting zerlegen Raum-Zeit in Deformationsfelder und kanonische Repräsentationen.",
          nl: "Dynamische scène reconstructie breidt NeRF uit om bewegende objecten, vervormende geometrie en veranderend uiterlijk over tijd te modelleren. Methoden zoals D-NeRF, Neural Scene Flow en 4D Gaussian Splatting ontleden ruimte-tijd in vervormingsvelden en canonieke representaties."
        }
      },
      {
        question: {
          en: "What is world models' vision for embodied AI and autonomous agents?",
          es: "¿Cuál es la visión de los modelos del mundo para IA encarnada y agentes autónomos?",
          de: "Was ist die Vision von World Models für verkörperte KI und autonome Agenten?",
          nl: "Wat is de visie van world models voor belichaamde AI en autonome agenten?"
        },
        options: [
          { en: "Learning predictive models of visual environment dynamics for planning and simulation-based reasoning", es: "Aprender modelos predictivos de dinámicas de entorno visual para planificación y razonamiento basado en simulación", de: "Prädiktive Modelle visueller Umgebungsdynamiken für Planung und simulationsbasiertes Denken lernen", nl: "Predictieve modellen leren van visuele omgevingsdynamiek voor planning en simulatie-gebaseerd redeneren" },
          { en: "3D models of the entire world", es: "Modelos 3D del mundo entero", de: "3D-Modelle der gesamten Welt", nl: "3D modellen van de hele wereld" },
          { en: "Global positioning for AI agents", es: "Posicionamiento global para agentes IA", de: "Globale Positionierung für KI-Agenten", nl: "Wereldwijde positionering voor AI agenten" },
          { en: "Modeling world geography only", es: "Solo modelar geografía mundial", de: "Nur Weltgeographie modellieren", nl: "Alleen wereldgeografie modelleren" }
        ],
        correct: 0,
        explanation: {
          en: "World models learn to predict future visual observations from actions, enabling agents to mentally simulate outcomes before acting. This supports model-based reinforcement learning, planning in imagination space, and understanding physical causality from visual experience.",
          es: "Los modelos del mundo aprenden a predecir observaciones visuales futuras de acciones, permitiendo a agentes simular mentalmente resultados antes de actuar. Esto soporta aprendizaje por refuerzo basado en modelo, planificación en espacio de imaginación y comprensión de causalidad física de experiencia visual.",
          de: "World Models lernen zukünftige visuelle Beobachtungen aus Aktionen vorherzusagen, ermöglichen Agenten Ergebnisse mental zu simulieren bevor sie handeln. Dies unterstützt modellbasiertes Reinforcement Learning, Planung im Vorstellungsraum und Verständnis physikalischer Kausalität aus visueller Erfahrung.",
          nl: "World models leren toekomstige visuele observaties te voorspellen uit acties, maken agenten mogelijk mentaal uitkomsten te simuleren voor ze handelen. Dit ondersteunt model-gebaseerd reinforcement learning, planning in imaginatie ruimte en begrip van fysieke causaliteit uit visuele ervaring."
        }
      },
      {
        question: {
          en: "What is the future potential of neuromorphic vision sensors for computer vision?",
          es: "¿Cuál es el potencial futuro de sensores de visión neuromórficos para visión por computadora?",
          de: "Was ist das zukünftige Potenzial neuromorpher Vision-Sensoren für Computer Vision?",
          nl: "Wat is het toekomstige potentieel van neuromorfische visie sensoren voor computer vision?"
        },
        options: [
          { en: "Event-based cameras with microsecond temporal resolution and ultra-low power for dynamic scenes", es: "Cámaras basadas en eventos con resolución temporal de microsegundos y ultra-bajo consumo para escenas dinámicas", de: "Ereignisbasierte Kameras mit Mikrosekunden-Zeitauflösung und ultra-niedrigem Stromverbrauch für dynamische Szenen", nl: "Event-gebaseerde camera's met microseconde temporele resolutie en ultra-laag vermogen voor dynamische scènes" },
          { en: "Sensors shaped like neurons", es: "Sensores con forma de neuronas", de: "Wie Neuronen geformte Sensoren", nl: "Sensoren gevormd als neuronen" },
          { en: "Neurological analysis of vision only", es: "Solo análisis neurológico de visión", de: "Nur neurologische Analyse von Vision", nl: "Alleen neurologische analyse van visie" },
          { en: "Morphing sensor shapes dynamically", es: "Transformar formas de sensor dinámicamente", de: "Sensorformen dynamisch morphen", nl: "Sensor vormen dynamisch morfen" }
        ],
        correct: 0,
        explanation: {
          en: "Event cameras (Dynamic Vision Sensors) asynchronously capture pixel-level brightness changes with microsecond precision and 120dB dynamic range, avoiding motion blur and enabling vision in extreme lighting. Combined with spiking neural networks, they promise energy-efficient real-time vision.",
          es: "Las cámaras de eventos (Sensores de Visión Dinámica) capturan asincrónicamente cambios de brillo a nivel de píxel con precisión de microsegundos y rango dinámico de 120dB, evitando desenfoque de movimiento y permitiendo visión en iluminación extrema. Combinadas con redes neuronales de picos, prometen visión en tiempo real eficiente en energía.",
          de: "Event-Kameras (Dynamic Vision Sensors) erfassen asynchron Helligkeitsänderungen auf Pixelebene mit Mikrosekunden-Präzision und 120dB Dynamikbereich, vermeiden Bewegungsunschärfe und ermöglichen Vision bei extremer Beleuchtung. Kombiniert mit Spiking Neural Networks versprechen sie energieeffiziente Echtzeit-Vision.",
          nl: "Event camera's (Dynamic Vision Sensors) vangen asynchroon pixel-niveau helderheidsveranderingen met microseconde precisie en 120dB dynamisch bereik, vermijden bewegingsonscherpte en maken visie mogelijk bij extreme verlichting. Gecombineerd met spiking neurale netwerken beloven ze energie-efficiënte real-time visie."
        }
      },
      {
        question: {
          en: "What is implicit neural representation's paradigm shift for signal processing?",
          es: "¿Cuál es el cambio de paradigma de la representación neuronal implícita para procesamiento de señales?",
          de: "Was ist der Paradigmenwechsel impliziter neuronaler Repräsentation für Signalverarbeitung?",
          nl: "Wat is de paradigmaverschuiving van impliciete neurale representatie voor signaalverwerking?"
        },
        options: [
          { en: "Representing signals as continuous functions parameterized by neural networks instead of discrete samples", es: "Representar señales como funciones continuas parametrizadas por redes neuronales en lugar de muestras discretas", de: "Signale als kontinuierliche durch neuronale Netzwerke parametrisierte Funktionen anstatt diskrete Samples repräsentieren", nl: "Signalen representeren als continue functies geparametriseerd door neurale netwerken in plaats van discrete samples" },
          { en: "Implicit rather than explicit neural connections", es: "Conexiones neuronales implícitas en lugar de explícitas", de: "Implizite statt explizite neuronale Verbindungen", nl: "Impliciete in plaats van expliciete neurale verbindingen" },
          { en: "Neural networks that work implicitly", es: "Redes neuronales que trabajan implícitamente", de: "Neuronale Netzwerke die implizit arbeiten", nl: "Neurale netwerken die impliciet werken" },
          { en: "Representing neurons implicitly only", es: "Solo representar neuronas implícitamente", de: "Nur Neuronen implizit repräsentieren", nl: "Alleen neuronen impliciet representeren" }
        ],
        correct: 0,
        explanation: {
          en: "Implicit neural representations (INRs) use MLPs to map coordinates to signal values (pixels, voxels, audio samples), enabling resolution-independent storage, continuous differentiation, and compact representation. Applied in NeRF, SIREN, and neural compression.",
          es: "Las representaciones neuronales implícitas (INRs) usan MLPs para mapear coordenadas a valores de señal (píxeles, vóxeles, muestras de audio), permitiendo almacenamiento independiente de resolución, diferenciación continua y representación compacta. Aplicadas en NeRF, SIREN y compresión neuronal.",
          de: "Implizite neuronale Repräsentationen (INRs) verwenden MLPs um Koordinaten auf Signalwerte (Pixel, Voxel, Audio-Samples) zu mappen, ermöglichen auflösungsunabhängige Speicherung, kontinuierliche Differentiation und kompakte Repräsentation. Angewendet in NeRF, SIREN und neuronaler Kompression.",
          nl: "Impliciete neurale representaties (INRs) gebruiken MLPs om coördinaten te mappen naar signaalwaarden (pixels, voxels, audio samples), maken resolutie-onafhankelijke opslag, continue differentiatie en compacte representatie mogelijk. Toegepast in NeRF, SIREN en neurale compressie."
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