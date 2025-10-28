// Computer Vision Quiz - Level 9: Cutting-Edge Research and Future Directions
(function() {
  const level9 = {
    name: {
      en: "Computer Vision Level 9",
      es: "Visión por Computadora Nivel 9",
      de: "Computer Vision Stufe 9",
      nl: "Computer Vision Level 9"
    },
    questions: [
      {
        question: {
          en: "What is neural architecture search (NAS) achieving in computer vision?",
          es: "¿Qué está logrando la búsqueda de arquitectura neuronal (NAS) en visión por computadora?",
          de: "Was erreicht Neural Architecture Search (NAS) in Computer Vision?",
          nl: "Wat bereikt neural architecture search (NAS) in computer vision?"
        },
        options: [
          { en: "Automatically discovering optimal network architectures for specific vision tasks", es: "Descubrir automáticamente arquitecturas de red óptimas para tareas específicas de visión", de: "Automatische Entdeckung optimaler Netzwerkarchitekturen für spezifische Vision-Aufgaben", nl: "Automatisch ontdekken van optimale netwerkarchitecturen voor specifieke vision taken" },
          { en: "Searching for neural networks on the internet", es: "Buscar redes neuronales en internet", de: "Nach neuronalen Netzwerken im Internet suchen", nl: "Zoeken naar neurale netwerken op internet" },
          { en: "Finding the fastest neural processing units", es: "Encontrar las unidades de procesamiento neuronal más rápidas", de: "Die schnellsten neuronalen Verarbeitungseinheiten finden", nl: "De snelste neurale verwerkingseenheden vinden" },
          { en: "Searching neural pathways in the brain", es: "Buscar vías neuronales en el cerebro", de: "Neuronale Bahnen im Gehirn suchen", nl: "Neurale banen in de hersenen zoeken" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses algorithms to automatically design neural network architectures, often finding novel structures that outperform hand-crafted designs for specific computer vision tasks.",
          es: "NAS usa algoritmos para diseñar automáticamente arquitecturas de redes neuronales, a menudo encontrando estructuras novedosas que superan diseños hechos a mano para tareas específicas de visión por computadora.",
          de: "NAS verwendet Algorithmen um automatisch neuronale Netzwerkarchitekturen zu entwerfen, findet oft neuartige Strukturen die handgemachte Designs für spezifische Computer Vision Aufgaben übertreffen.",
          nl: "NAS gebruikt algoritmes om automatisch neurale netwerkarchitecturen te ontwerpen, vindt vaak nieuwe structuren die handgemaakte ontwerpen overtreffen voor specifieke computer vision taken."
        }
      },
      {
        question: {
          en: "What is few-shot learning addressing in computer vision applications?",
          es: "¿Qué está abordando el aprendizaje de pocos ejemplos en aplicaciones de visión por computadora?",
          de: "Was adressiert Few-Shot Learning in Computer Vision Anwendungen?",
          nl: "Wat pakt few-shot learning aan in computer vision toepassingen?"
        },
        options: [
          { en: "Learning new visual concepts from very limited training examples", es: "Aprender nuevos conceptos visuales de ejemplos de entrenamiento muy limitados", de: "Neue visuelle Konzepte aus sehr begrenzten Trainingsbeispielen lernen", nl: "Nieuwe visuele concepten leren uit zeer beperkte trainingsvoorbeelden" },
          { en: "Taking only a few shots with cameras", es: "Tomar solo unas pocas fotos con cámaras", de: "Nur wenige Aufnahmen mit Kameras machen", nl: "Slechts een paar opnames maken met camera's" },
          { en: "Learning photography techniques quickly", es: "Aprender técnicas de fotografía rápidamente", de: "Fotografietechniken schnell lernen", nl: "Fotografietechnieken snel leren" },
          { en: "Short training sessions for models", es: "Sesiones de entrenamiento cortas para modelos", de: "Kurze Trainingssitzungen für Modelle", nl: "Korte trainingssessies voor modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to recognize new object classes or perform new tasks with minimal training data, crucial for scenarios where labeled data is scarce or expensive.",
          es: "El aprendizaje de pocos ejemplos permite a modelos reconocer nuevas clases de objetos o realizar nuevas tareas con datos de entrenamiento mínimos, crucial para escenarios donde datos etiquetados son escasos o costosos.",
          de: "Few-Shot Learning ermöglicht Modellen neue Objektklassen zu erkennen oder neue Aufgaben mit minimalen Trainingsdaten durchzuführen, entscheidend für Szenarien wo beschriftete Daten knapp oder teuer sind.",
          nl: "Few-shot learning stelt modellen in staat nieuwe objectklassen te herkennen of nieuwe taken uit te voeren met minimale trainingsdata, cruciaal voor scenario's waar gelabelde data schaars of duur is."
        }
      },
      {
        question: {
          en: "What is self-supervised learning revolutionizing in computer vision?",
          es: "¿Qué está revolucionando el aprendizaje auto-supervisado en visión por computadora?",
          de: "Was revolutioniert selbstüberwachtes Lernen in Computer Vision?",
          nl: "Wat revolutioneert zelf-gesuperviseerd leren in computer vision?"
        },
        options: [
          { en: "Learning visual representations from unlabeled data by predicting image properties", es: "Aprender representaciones visuales de datos no etiquetados prediciendo propiedades de imagen", de: "Visuelle Repräsentationen aus unbeschrifteten Daten lernen durch Vorhersage von Bildeigenschaften", nl: "Visuele representaties leren uit ongelabelde data door beeldeigenschappen te voorspellen" },
          { en: "Teaching models to supervise themselves", es: "Enseñar a modelos a supervisarse a sí mismos", de: "Modelle lehren sich selbst zu überwachen", nl: "Modellen leren zichzelf te superviseren" },
          { en: "Reducing human supervision requirements", es: "Reducir requisitos de supervisión humana", de: "Menschliche Überwachungsanforderungen reduzieren", nl: "Menselijke supervisievevereisten verminderen" },
          { en: "Automatically labeling training data", es: "Etiquetar automáticamente datos de entrenamiento", de: "Trainingsdaten automatisch beschriften", nl: "Trainingsdata automatisch labelen" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates supervision signals from the data itself, such as predicting rotations, colorizations, or masked regions, eliminating the need for manual labeling.",
          es: "El aprendizaje auto-supervisado crea señales de supervisión de los datos mismos, como predecir rotaciones, colorizaciones o regiones enmascaradas, eliminando la necesidad de etiquetado manual.",
          de: "Selbstüberwachtes Lernen erstellt Überwachungssignale aus den Daten selbst, wie Vorhersage von Rotationen, Kolorierungen oder maskierten Bereichen, eliminiert Bedarf für manuelle Beschriftung.",
          nl: "Zelf-gesuperviseerd leren creëert supervisiesignalen uit de data zelf, zoals het voorspellen van rotaties, kleuring of gemaskeerde regio's, elimineert de behoefte aan handmatige labeling."
        }
      },
      {
        question: {
          en: "What challenge does adversarial robustness address in computer vision systems?",
          es: "¿Qué desafío aborda la robustez adversaria en sistemas de visión por computadora?",
          de: "Welche Herausforderung adressiert adversarielle Robustheit in Computer Vision Systemen?",
          nl: "Welke uitdaging pakt adversariële robuustheid aan in computer vision systemen?"
        },
        options: [
          { en: "Defending against imperceptible input perturbations designed to fool AI models", es: "Defender contra perturbaciones de entrada imperceptibles diseñadas para engañar modelos IA", de: "Verteidigung gegen unmerkliche Eingabestörungen die KI-Modelle täuschen sollen", nl: "Verdedigen tegen onmerkbare input verstoringen ontworpen om AI modellen te misleiden" },
          { en: "Making models more competitive", es: "Hacer modelos más competitivos", de: "Modelle wettbewerbsfähiger machen", nl: "Modellen competitiever maken" },
          { en: "Handling adversarial training conditions", es: "Manejar condiciones de entrenamiento adversarias", de: "Adversarielle Trainingsbedingungen handhaben", nl: "Adversariële trainingsomstandigheden hanteren" },
          { en: "Robustness against hardware failures", es: "Robustez contra fallas de hardware", de: "Robustheit gegen Hardware-Ausfälle", nl: "Robuustheid tegen hardware storingen" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial attacks add carefully crafted noise to images that humans can't see but cause models to make incorrect predictions, requiring specialized defenses for safety-critical applications.",
          es: "Los ataques adversarios agregan ruido cuidadosamente diseñado a imágenes que humanos no pueden ver pero causan que modelos hagan predicciones incorrectas, requiriendo defensas especializadas para aplicaciones críticas de seguridad.",
          de: "Adversarielle Angriffe fügen sorgfältig gestaltetes Rauschen zu Bildern hinzu das Menschen nicht sehen können aber Modelle veranlasst falsche Vorhersagen zu machen, erfordert spezialisierte Verteidigungen für sicherheitskritische Anwendungen.",
          nl: "Adversariële aanvallen voegen zorgvuldig ontwikkelde ruis toe aan afbeeldingen die mensen niet kunnen zien maar modellen verkeerde voorspellingen laten maken, vereist gespecialiseerde verdedigingen voor veiligheidskritieke toepassingen."
        }
      },
      {
        question: {
          en: "What is multimodal learning enabling in advanced computer vision systems?",
          es: "¿Qué está permitiendo el aprendizaje multimodal en sistemas avanzados de visión por computadora?",
          de: "Was ermöglicht multimodales Lernen in fortgeschrittenen Computer Vision Systemen?",
          nl: "Wat maakt multimodaal leren mogelijk in geavanceerde computer vision systemen?"
        },
        options: [
          { en: "Combining visual information with text, audio, and other data types for richer understanding", es: "Combinar información visual con texto, audio y otros tipos de datos para comprensión más rica", de: "Visuelle Informationen mit Text, Audio und anderen Datentypen für reicheres Verständnis kombinieren", nl: "Visuele informatie combineren met tekst, audio en andere datatypes voor rijker begrip" },
          { en: "Using multiple camera modes simultaneously", es: "Usar múltiples modos de cámara simultáneamente", de: "Mehrere Kameramodi gleichzeitig verwenden", nl: "Meerdere cameramodi tegelijkertijd gebruiken" },
          { en: "Learning different visual styles", es: "Aprender diferentes estilos visuales", de: "Verschiedene visuelle Stile lernen", nl: "Verschillende visuele stijlen leren" },
          { en: "Processing multiple image formats", es: "Procesar múltiples formatos de imagen", de: "Mehrere Bildformate verarbeiten", nl: "Meerdere beeldformaten verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Multimodal learning integrates vision with language, speech, and other modalities, enabling applications like visual question answering, image captioning, and cross-modal retrieval.",
          es: "El aprendizaje multimodal integra visión con lenguaje, habla y otras modalidades, permitiendo aplicaciones como respuesta a preguntas visuales, subtitulado de imágenes y recuperación cross-modal.",
          de: "Multimodales Lernen integriert Vision mit Sprache, Rede und anderen Modalitäten, ermöglicht Anwendungen wie visuelle Fragenbeantwortung, Bildunterschriften und cross-modale Suche.",
          nl: "Multimodaal leren integreert visie met taal, spraak en andere modaliteiten, maakt toepassingen mogelijk zoals visuele vraagbeantwoording, beeldondertiteling en cross-modale opvraging."
        }
      },
      {
        question: {
          en: "What innovation does the Inception architecture (GoogLeNet) introduce to CNN design?",
          es: "¿Qué innovación introduce la arquitectura Inception (GoogLeNet) al diseño de CNN?",
          de: "Welche Innovation führt die Inception-Architektur (GoogLeNet) in das CNN-Design ein?",
          nl: "Welke innovatie introduceert de Inception architectuur (GoogLeNet) in CNN ontwerp?"
        },
        options: [
          { en: "Multi-scale feature extraction through parallel convolutions of different kernel sizes", es: "Extracción de características multi-escala a través de convoluciones paralelas de diferentes tamaños de kernel", de: "Multi-Skalen Feature-Extraktion durch parallele Faltungen verschiedener Kernel-Größen", nl: "Multi-schaal feature extractie door parallelle convoluties van verschillende kernel groottes" },
          { en: "Only using 1x1 convolutions", es: "Solo usar convoluciones 1x1", de: "Nur 1x1-Faltungen verwenden", nl: "Alleen 1x1 convoluties gebruiken" },
          { en: "Inception refers to dream-like image generation", es: "Inception se refiere a generación de imágenes oníricas", de: "Inception bezieht sich auf traumartige Bildgenerierung", nl: "Inception verwijst naar droomachtige beeldgeneratie" },
          { en: "Using only inception layers without pooling", es: "Usar solo capas inception sin pooling", de: "Nur Inception-Schichten ohne Pooling verwenden", nl: "Alleen inception lagen gebruiken zonder pooling" }
        ],
        correct: 0,
        explanation: {
          en: "Inception modules apply 1x1, 3x3, and 5x5 convolutions in parallel, capturing features at multiple scales simultaneously while using 1x1 convolutions for dimension reduction to maintain efficiency.",
          es: "Los módulos Inception aplican convoluciones 1x1, 3x3 y 5x5 en paralelo, capturando características en múltiples escalas simultáneamente mientras usan convoluciones 1x1 para reducción de dimensiones para mantener eficiencia.",
          de: "Inception-Module wenden 1x1-, 3x3- und 5x5-Faltungen parallel an, erfassen Features in mehreren Skalen gleichzeitig während 1x1-Faltungen für Dimensionsreduktion verwendet werden um Effizienz zu erhalten.",
          nl: "Inception modules passen 1x1, 3x3 en 5x5 convoluties parallel toe, vangen features op meerdere schalen tegelijkertijd terwijl 1x1 convoluties worden gebruikt voor dimensiereductie om efficiëntie te behouden."
        }
      },
      {
        question: {
          en: "What is the key innovation of DenseNet compared to ResNet?",
          es: "¿Cuál es la innovación clave de DenseNet comparada con ResNet?",
          de: "Was ist die Schlüsselinnovation von DenseNet im Vergleich zu ResNet?",
          nl: "Wat is de sleutelinnovatie van DenseNet vergeleken met ResNet?"
        },
        options: [
          { en: "Dense connectivity where each layer connects to all subsequent layers", es: "Conectividad densa donde cada capa se conecta a todas las capas subsiguientes", de: "Dichte Konnektivität wo jede Schicht sich mit allen nachfolgenden Schichten verbindet", nl: "Dichte connectiviteit waar elke laag verbindt met alle volgende lagen" },
          { en: "Using denser computational units only", es: "Usar solo unidades computacionales más densas", de: "Nur dichtere Recheneinheiten verwenden", nl: "Alleen dichtere computationele eenheden gebruiken" },
          { en: "Packing more layers in less space", es: "Empacar más capas en menos espacio", de: "Mehr Schichten auf weniger Raum packen", nl: "Meer lagen inpakken in minder ruimte" },
          { en: "Increasing network density physically", es: "Aumentar densidad de red físicamente", de: "Netzwerkdichte physisch erhöhen", nl: "Netwerkdichtheid fysiek verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "DenseNet connects each layer to every layer ahead of it, creating dense connectivity that encourages feature reuse, reduces parameters, and alleviates vanishing gradient problems more effectively than ResNet's skip connections.",
          es: "DenseNet conecta cada capa a cada capa adelante de ella, creando conectividad densa que fomenta reutilización de características, reduce parámetros y alivia problemas de gradiente desvaneciente más efectivamente que las conexiones de salto de ResNet.",
          de: "DenseNet verbindet jede Schicht mit jeder Schicht vor ihr, erstellt dichte Konnektivität die Feature-Wiederverwendung fördert, Parameter reduziert und Vanishing Gradient Probleme effektiver lindert als ResNets Skip-Verbindungen.",
          nl: "DenseNet verbindt elke laag met elke laag ervoor, creëert dichte connectiviteit die feature hergebruik aanmoedigt, parameters vermindert en vanishing gradient problemen effectiever verlicht dan ResNet's skip verbindingen."
        }
      },
      {
        question: {
          en: "What is spatial attention in computer vision models?",
          es: "¿Qué es la atención espacial en modelos de visión por computadora?",
          de: "Was ist räumliche Aufmerksamkeit in Computer Vision Modellen?",
          nl: "Wat is ruimtelijke aandacht in computer vision modellen?"
        },
        options: [
          { en: "Mechanism that weights different spatial locations in feature maps based on relevance", es: "Mecanismo que pondera diferentes ubicaciones espaciales en mapas de características basado en relevancia", de: "Mechanismus der verschiedene räumliche Positionen in Feature Maps basierend auf Relevanz gewichtet", nl: "Mechanisme dat verschillende ruimtelijke locaties in feature maps weegt op basis van relevantie" },
          { en: "Attention only to spatial dimensions of images", es: "Atención solo a dimensiones espaciales de imágenes", de: "Aufmerksamkeit nur auf räumliche Dimensionen von Bildern", nl: "Aandacht alleen voor ruimtelijke dimensies van afbeeldingen" },
          { en: "Focusing on space-related objects only", es: "Enfocarse solo en objetos relacionados con espacio", de: "Nur auf raumbezogene Objekte fokussieren", nl: "Alleen focussen op ruimte-gerelateerde objecten" },
          { en: "Spatial arrangement of attention layers", es: "Arreglo espacial de capas de atención", de: "Räumliche Anordnung von Aufmerksamkeitsschichten", nl: "Ruimtelijke regeling van aandachtslagen" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial attention generates attention maps that highlight important regions in feature maps, allowing models to focus on relevant spatial locations while suppressing irrelevant areas, improving discrimination and localization.",
          es: "La atención espacial genera mapas de atención que resaltan regiones importantes en mapas de características, permitiendo a modelos enfocarse en ubicaciones espaciales relevantes mientras suprimen áreas irrelevantes, mejorando discriminación y localización.",
          de: "Räumliche Aufmerksamkeit generiert Aufmerksamkeitskarten die wichtige Regionen in Feature Maps hervorheben, ermöglicht Modellen sich auf relevante räumliche Positionen zu konzentrieren während irrelevante Bereiche unterdrückt werden, verbessert Diskriminierung und Lokalisierung.",
          nl: "Ruimtelijke aandacht genereert aandachtskaarten die belangrijke regio's in feature maps benadrukken, stelt modellen in staat zich te concentreren op relevante ruimtelijke locaties terwijl irrelevante gebieden worden onderdrukt, verbetert discriminatie en lokalisatie."
        }
      },
      {
        question: {
          en: "What is channel attention and how does it complement spatial attention?",
          es: "¿Qué es la atención de canal y cómo complementa la atención espacial?",
          de: "Was ist Kanal-Aufmerksamkeit und wie ergänzt sie räumliche Aufmerksamkeit?",
          nl: "Wat is kanaal aandacht en hoe vult het ruimtelijke aandacht aan?"
        },
        options: [
          { en: "Reweighting feature channels based on importance while spatial attention focuses on locations", es: "Reponderar canales de características basado en importancia mientras atención espacial se enfoca en ubicaciones", de: "Feature-Kanäle basierend auf Wichtigkeit neu gewichten während räumliche Aufmerksamkeit sich auf Positionen konzentriert", nl: "Feature kanalen herwegen op basis van belang terwijl ruimtelijke aandacht zich richt op locaties" },
          { en: "Attention to communication channels only", es: "Atención solo a canales de comunicación", de: "Aufmerksamkeit nur auf Kommunikationskanäle", nl: "Aandacht alleen voor communicatiekanalen" },
          { en: "Choosing optimal TV channels", es: "Elegir canales de TV óptimos", de: "Optimale TV-Kanäle auswählen", nl: "Optimale TV-kanalen kiezen" },
          { en: "Channel attention replaces spatial attention", es: "La atención de canal reemplaza la atención espacial", de: "Kanal-Aufmerksamkeit ersetzt räumliche Aufmerksamkeit", nl: "Kanaal aandacht vervangt ruimtelijke aandacht" }
        ],
        correct: 0,
        explanation: {
          en: "Channel attention learns to emphasize informative feature channels while suppressing less useful ones. Combined with spatial attention, it creates powerful attention mechanisms that focus on both 'what' (channels) and 'where' (spatial locations).",
          es: "La atención de canal aprende a enfatizar canales de características informativos mientras suprime los menos útiles. Combinada con atención espacial, crea mecanismos de atención poderosos que se enfocan tanto en 'qué' (canales) como 'dónde' (ubicaciones espaciales).",
          de: "Kanal-Aufmerksamkeit lernt informative Feature-Kanäle zu betonen während weniger nützliche unterdrückt werden. Kombiniert mit räumlicher Aufmerksamkeit erstellt es mächtige Aufmerksamkeitsmechanismen die sich sowohl auf 'was' (Kanäle) als auch 'wo' (räumliche Positionen) konzentrieren.",
          nl: "Kanaal aandacht leert informatieve feature kanalen te benadrukken terwijl minder nuttige worden onderdrukt. Gecombineerd met ruimtelijke aandacht creëert het krachtige aandachtsmechanismen die zich richten op zowel 'wat' (kanalen) als 'waar' (ruimtelijke locaties)."
        }
      },
      {
        question: {
          en: "What is the Squeeze-and-Excitation (SE) block's main contribution to CNN architectures?",
          es: "¿Cuál es la principal contribución del bloque Squeeze-and-Excitation (SE) a las arquitecturas CNN?",
          de: "Was ist der Hauptbeitrag des Squeeze-and-Excitation (SE) Blocks zu CNN-Architekturen?",
          nl: "Wat is de hoofdbijdrage van het Squeeze-and-Excitation (SE) blok aan CNN architecturen?"
        },
        options: [
          { en: "Adaptive channel-wise feature recalibration through global context modeling", es: "Recalibración adaptativa de características por canal a través de modelado de contexto global", de: "Adaptive kanalweise Feature-Rekalibrierung durch globale Kontextmodellierung", nl: "Adaptieve kanaalgewijze feature herkalibratie door globale contextmodellering" },
          { en: "Squeezing images to smaller sizes", es: "Comprimir imágenes a tamaños más pequeños", de: "Bilder auf kleinere Größen komprimieren", nl: "Afbeeldingen samendrukken tot kleinere maten" },
          { en: "Exciting neurons for better performance", es: "Excitar neuronas para mejor rendimiento", de: "Neuronen für bessere Leistung anregen", nl: "Neuronen opwinden voor betere prestaties" },
          { en: "Only reducing computational complexity", es: "Solo reducir complejidad computacional", de: "Nur rechnerische Komplexität reduzieren", nl: "Alleen computationele complexiteit verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "SE blocks use global average pooling to squeeze spatial information, then apply fully connected layers to learn channel dependencies, producing scaling factors that recalibrate feature maps based on global context.",
          es: "Los bloques SE usan pooling promedio global para comprimir información espacial, luego aplican capas completamente conectadas para aprender dependencias de canal, produciendo factores de escala que recalibran mapas de características basados en contexto global.",
          de: "SE-Blöcke verwenden globales Average Pooling um räumliche Informationen zu komprimieren, wenden dann vollständig verbundene Schichten an um Kanal-Abhängigkeiten zu lernen, produzieren Skalierungsfaktoren die Feature Maps basierend auf globalem Kontext rekalibrieren.",
          nl: "SE blokken gebruiken global average pooling om ruimtelijke informatie samen te drukken, passen dan fully connected lagen toe om kanaalafhankelijkheden te leren, produceren schaalfactoren die feature maps herkalibreren op basis van globale context."
        }
      },
      {
        question: {
          en: "What is progressive growing in GAN training and why is it effective?",
          es: "¿Qué es el crecimiento progresivo en entrenamiento de GAN y por qué es efectivo?",
          de: "Was ist progressives Wachstum im GAN-Training und warum ist es effektiv?",
          nl: "Wat is progressieve groei in GAN training en waarom is het effectief?"
        },
        options: [
          { en: "Starting with low resolution and gradually increasing to higher resolutions for stable training", es: "Comenzar con baja resolución y aumentar gradualmente a resoluciones más altas para entrenamiento estable", de: "Mit niedriger Auflösung beginnen und allmählich zu höheren Auflösungen erhöhen für stabiles Training", nl: "Beginnen met lage resolutie en geleidelijk verhogen naar hogere resoluties voor stabiele training" },
          { en: "Growing GANs physically larger over time", es: "Hacer crecer GANs físicamente más grandes con el tiempo", de: "GANs physisch über Zeit größer wachsen lassen", nl: "GANs fysiek groter laten groeien over tijd" },
          { en: "Progressively adding more training data", es: "Agregar progresivamente más datos de entrenamiento", de: "Progressiv mehr Trainingsdaten hinzufügen", nl: "Progressief meer trainingsdata toevoegen" },
          { en: "Growing computational resources gradually", es: "Hacer crecer recursos computacionales gradualmente", de: "Rechenressourcen allmählich wachsen lassen", nl: "Computationele bronnen geleidelijk laten groeien" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive growing stabilizes GAN training by starting with 4x4 images and doubling resolution incrementally. This allows models to first learn basic structures before adding finer details, reducing training instability.",
          es: "El crecimiento progresivo estabiliza el entrenamiento de GAN comenzando con imágenes 4x4 y duplicando resolución incrementalmente. Esto permite a modelos primero aprender estructuras básicas antes de agregar detalles más finos, reduciendo inestabilidad de entrenamiento.",
          de: "Progressives Wachstum stabilisiert GAN-Training durch Beginnen mit 4x4-Bildern und schrittweises Verdoppeln der Auflösung. Dies ermöglicht Modellen zuerst grundlegende Strukturen zu lernen bevor feinere Details hinzugefügt werden, reduziert Trainingsinstabilität.",
          nl: "Progressieve groei stabiliseert GAN training door te beginnen met 4x4 afbeeldingen en resolutie incrementeel te verdubbelen. Dit stelt modellen in staat eerst basisstructuren te leren voordat fijnere details worden toegevoegd, vermindert trainingsinstabiliteit."
        }
      },
      {
        question: {
          en: "What is the main advantage of MobileNet architectures for mobile deployment?",
          es: "¿Cuál es la principal ventaja de las arquitecturas MobileNet para despliegue móvil?",
          de: "Was ist der Hauptvorteil von MobileNet-Architekturen für mobile Bereitstellung?",
          nl: "Wat is het hoofdvoordeel van MobileNet architecturen voor mobiele inzet?"
        },
        options: [
          { en: "Depthwise separable convolutions that dramatically reduce parameters and computations", es: "Convoluciones separables en profundidad que reducen dramáticamente parámetros y computaciones", de: "Tiefenweise trennbare Faltungen die Parameter und Berechnungen dramatisch reduzieren", nl: "Dieptegewijze scheidbare convoluties die parameters en berekeningen dramatisch verminderen" },
          { en: "Only working on mobile phones", es: "Solo trabajar en teléfonos móviles", de: "Nur auf Mobiltelefonen funktionieren", nl: "Alleen werken op mobiele telefoons" },
          { en: "Mobile connectivity for networks", es: "Conectividad móvil para redes", de: "Mobile Konnektivität für Netzwerke", nl: "Mobiele connectiviteit voor netwerken" },
          { en: "Faster mobile processors only", es: "Solo procesadores móviles más rápidos", de: "Nur schnellere mobile Prozessoren", nl: "Alleen snellere mobiele processors" }
        ],
        correct: 0,
        explanation: {
          en: "MobileNet uses depthwise separable convolutions that factorize standard convolutions into depthwise and pointwise operations, reducing computational cost by 8-9x while maintaining reasonable accuracy for mobile applications.",
          es: "MobileNet usa convoluciones separables en profundidad que factorizan convoluciones estándar en operaciones en profundidad y puntuales, reduciendo costo computacional por 8-9x mientras mantiene precisión razonable para aplicaciones móviles.",
          de: "MobileNet verwendet tiefenweise trennbare Faltungen die Standard-Faltungen in tiefenweise und punktweise Operationen faktorisieren, reduzieren Rechenkosten um 8-9x während angemessene Genauigkeit für mobile Anwendungen beibehalten wird.",
          nl: "MobileNet gebruikt dieptegewijze scheidbare convoluties die standaard convoluties factorizeren in dieptegerichte en puntgewijze operaties, verminderen computationele kosten met 8-9x terwijl redelijke nauwkeurigheid voor mobiele toepassingen behouden blijft."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS) trying to automate in CNN design?",
          es: "¿Qué está tratando de automatizar la búsqueda de arquitectura neuronal (NAS) en diseño de CNN?",
          de: "Was versucht Neural Architecture Search (NAS) im CNN-Design zu automatisieren?",
          nl: "Wat probeert neural architecture search (NAS) te automatiseren in CNN ontwerp?"
        },
        options: [
          { en: "Finding optimal network architectures through algorithmic search rather than manual design", es: "Encontrar arquitecturas de red óptimas a través de búsqueda algorítmica en lugar de diseño manual", de: "Optimale Netzwerkarchitekturen durch algorithmische Suche anstatt manuelles Design finden", nl: "Optimale netwerkarchitecturen vinden door algoritmische zoektocht in plaats van handmatig ontwerp" },
          { en: "Searching for neural networks on the internet", es: "Buscar redes neuronales en internet", de: "Nach neuronalen Netzwerken im Internet suchen", nl: "Zoeken naar neurale netwerken op internet" },
          { en: "NASA space applications only", es: "Solo aplicaciones espaciales de NASA", de: "Nur NASA-Weltraumanwendungen", nl: "Alleen NASA ruimtetoepassingen" },
          { en: "Finding existing architectures in literature", es: "Encontrar arquitecturas existentes en literatura", de: "Bestehende Architekturen in Literatur finden", nl: "Bestaande architecturen vinden in literatuur" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses algorithms like reinforcement learning or evolutionary methods to automatically discover network architectures, potentially finding novel designs that outperform human-designed architectures for specific tasks or constraints.",
          es: "NAS usa algoritmos como aprendizaje por refuerzo o métodos evolutivos para descubrir automáticamente arquitecturas de red, potencialmente encontrando diseños novedosos que superen arquitecturas diseñadas por humanos para tareas o restricciones específicas.",
          de: "NAS verwendet Algorithmen wie Reinforcement Learning oder evolutionäre Methoden um automatisch Netzwerkarchitekturen zu entdecken, findet potentiell neuartige Designs die menschlich designte Architekturen für spezifische Aufgaben oder Beschränkungen übertreffen.",
          nl: "NAS gebruikt algoritmes zoals reinforcement learning of evolutionaire methoden om automatisch netwerkarchitecturen te ontdekken, vindt potentieel nieuwe ontwerpen die menselijk ontworpen architecturen overtreffen voor specifieke taken of beperkingen."
        }
      },
      {
        question: {
          en: "What is capsule networks' main theoretical advantage over traditional CNNs?",
          es: "¿Cuál es la principal ventaja teórica de las redes de cápsulas sobre las CNN tradicionales?",
          de: "Was ist der theoretische Hauptvorteil von Capsule Networks gegenüber traditionellen CNNs?",
          nl: "Wat is het hoofdtheoretische voordeel van capsule networks ten opzichte van traditionele CNNs?"
        },
        options: [
          { en: "Preserving spatial hierarchies and pose information through vector representations", es: "Preservar jerarquías espaciales e información de pose a través de representaciones vectoriales", de: "Räumliche Hierarchien und Pose-Informationen durch Vektorrepräsentationen bewahren", nl: "Ruimtelijke hiërarchieën en pose-informatie behouden door vectorrepresentaties" },
          { en: "Using capsule-shaped processing units", es: "Usar unidades de procesamiento en forma de cápsula", de: "Kapselförmige Verarbeitungseinheiten verwenden", nl: "Capsule-vormige verwerkingseenheden gebruiken" },
          { en: "Encapsulating networks in containers", es: "Encapsular redes en contenedores", de: "Netzwerke in Container einkapseln", nl: "Netwerken inkapselen in containers" },
          { en: "Only working with medical capsule images", es: "Solo trabajar con imágenes de cápsulas médicas", de: "Nur mit medizinischen Kapselbildern arbeiten", nl: "Alleen werken met medische capsule afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule networks use vector outputs instead of scalar activations to encode pose and instantiation parameters, theoretically better representing spatial relationships and enabling more robust recognition under viewpoint changes.",
          es: "Las redes de cápsulas usan salidas vectoriales en lugar de activaciones escalares para codificar parámetros de pose e instanciación, teóricamente representando mejor relaciones espaciales y permitiendo reconocimiento más robusto bajo cambios de punto de vista.",
          de: "Capsule Networks verwenden Vektorausgaben anstatt skalarer Aktivierungen um Pose- und Instanziierungsparameter zu kodieren, repräsentieren theoretisch räumliche Beziehungen besser und ermöglichen robustere Erkennung unter Sichtpunktänderungen.",
          nl: "Capsule networks gebruiken vectoruitgangen in plaats van scalaire activaties om pose- en instantiatieparameters te coderen, vertegenwoordigen theoretisch ruimtelijke relaties beter en maken robuustere herkenning mogelijk onder gezichtspuntveranderingen."
        }
      },
      {
        question: {
          en: "What is the key insight behind EfficientNet's compound scaling approach?",
          es: "¿Cuál es la idea clave detrás del enfoque de escalado compuesto de EfficientNet?",
          de: "Was ist die Schlüsselerkenntnis hinter EfficientNets Compound Scaling Ansatz?",
          nl: "Wat is het belangrijkste inzicht achter EfficientNet's compound scaling benadering?"
        },
        options: [
          { en: "Uniformly scaling network depth, width, and resolution together for optimal efficiency", es: "Escalar uniformemente profundidad, ancho y resolución de red juntos para eficiencia óptima", de: "Netzwerktiefe, -breite und -auflösung gleichmäßig zusammen skalieren für optimale Effizienz", nl: "Uniform schalen van netwerkdiepte, -breedte en -resolutie samen voor optimale efficiëntie" },
          { en: "Using compound chemical processes", es: "Usar procesos químicos compuestos", de: "Zusammengesetzte chemische Prozesse verwenden", nl: "Samengestelde chemische processen gebruiken" },
          { en: "Scaling only network depth", es: "Escalar solo profundidad de red", de: "Nur Netzwerktiefe skalieren", nl: "Alleen netwerkdiepte schalen" },
          { en: "Compound interest calculations", es: "Cálculos de interés compuesto", de: "Zinseszinsberechnungen", nl: "Samengestelde renteberekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "EfficientNet discovered that scaling depth, width, and input resolution simultaneously with carefully balanced ratios achieves better accuracy-efficiency trade-offs than scaling any single dimension independently.",
          es: "EfficientNet descubrió que escalar profundidad, ancho y resolución de entrada simultáneamente con proporciones cuidadosamente equilibradas logra mejores compensaciones precisión-eficiencia que escalar cualquier dimensión única independientemente.",
          de: "EfficientNet entdeckte dass gleichzeitiges Skalieren von Tiefe, Breite und Eingabeauflösung mit sorgfältig ausbalancierten Verhältnissen bessere Genauigkeits-Effizienz-Trade-offs erreicht als unabhängiges Skalieren einzelner Dimensionen.",
          nl: "EfficientNet ontdekte dat gelijktijdig schalen van diepte, breedte en invoerresolutie met zorgvuldig gebalanceerde verhoudingen betere nauwkeurigheid-efficiëntie afwegingen bereikt dan onafhankelijk schalen van elke enkele dimensie."
        }
      },
      {
        question: {
          en: "What is the main advantage of grouped convolutions in modern CNN architectures?",
          es: "¿Cuál es la principal ventaja de las convoluciones agrupadas en arquitecturas CNN modernas?",
          de: "Was ist der Hauptvorteil von gruppierten Faltungen in modernen CNN-Architekturen?",
          nl: "Wat is het hoofdvoordeel van gegroepeerde convoluties in moderne CNN architecturen?"
        },
        options: [
          { en: "Reducing computational cost while maintaining representational capacity through parallel processing", es: "Reducir costo computacional mientras mantiene capacidad representacional a través de procesamiento paralelo", de: "Rechenkosten reduzieren während Repräsentationskapazität durch parallele Verarbeitung beibehalten wird", nl: "Computationele kosten verminderen terwijl representatiecapaciteit behouden blijft door parallelle verwerking" },
          { en: "Grouping similar images together", es: "Agrupar imágenes similares juntas", de: "Ähnliche Bilder zusammengruppieren", nl: "Vergelijkbare afbeeldingen groeperen" },
          { en: "Creating social groups of neurons", es: "Crear grupos sociales de neuronas", de: "Soziale Gruppen von Neuronen erstellen", nl: "Sociale groepen van neuronen maken" },
          { en: "Only organizing network layers", es: "Solo organizar capas de red", de: "Nur Netzwerkschichten organisieren", nl: "Alleen netwerklagen organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Grouped convolutions divide input channels into groups, applying separate convolutions to each group, reducing parameters and computations while enabling diverse feature learning within each group, as used in ResNeXt and Xception.",
          es: "Las convoluciones agrupadas dividen canales de entrada en grupos, aplicando convoluciones separadas a cada grupo, reduciendo parámetros y computaciones mientras permiten aprendizaje diverso de características dentro de cada grupo, como se usa en ResNeXt y Xception.",
          de: "Gruppierte Faltungen teilen Eingabekanäle in Gruppen, wenden separate Faltungen auf jede Gruppe an, reduzieren Parameter und Berechnungen während vielfältiges Feature-Lernen innerhalb jeder Gruppe ermöglicht wird, wie in ResNeXt und Xception verwendet.",
          nl: "Gegroepeerde convoluties verdelen invoerkanalen in groepen, passen aparte convoluties toe op elke groep, verminderen parameters en berekeningen terwijl diverse feature learning binnen elke groep wordt mogelijk gemaakt, zoals gebruikt in ResNeXt en Xception."
        }
      },
      {
        question: {
          en: "What is the role of attention gates in medical image segmentation networks?",
          es: "¿Cuál es el papel de las puertas de atención en redes de segmentación de imágenes médicas?",
          de: "Welche Rolle spielen Attention Gates in medizinischen Bildsegmentierungs-Netzwerken?",
          nl: "Wat is de rol van attention gates in medische beeldsegmentatienetwerken?"
        },
        options: [
          { en: "Suppressing irrelevant background regions while highlighting target anatomical structures", es: "Suprimir regiones de fondo irrelevantes mientras resalta estructuras anatómicas objetivo", de: "Irrelevante Hintergrundregionen unterdrücken während Ziel-anatomische Strukturen hervorgehoben werden", nl: "Irrelevante achtergrondregio's onderdrukken terwijl doel anatomische structuren worden benadrukt" },
          { en: "Gating access to medical databases", es: "Controlar acceso a bases de datos médicas", de: "Zugang zu medizinischen Datenbanken kontrollieren", nl: "Toegang tot medische databases controleren" },
          { en: "Creating security gates for hospitals", es: "Crear puertas de seguridad para hospitales", de: "Sicherheitstore für Krankenhäuser erstellen", nl: "Beveiligingspoorten maken voor ziekenhuizen" },
          { en: "Only filtering medical images", es: "Solo filtrar imágenes médicas", de: "Nur medizinische Bilder filtern", nl: "Alleen medische afbeeldingen filteren" }
        ],
        correct: 0,
        explanation: {
          en: "Attention gates automatically learn to focus on salient features relevant to the segmentation task, suppressing feature activations in irrelevant regions, particularly useful for organs with unclear boundaries in medical images.",
          es: "Las puertas de atención aprenden automáticamente a enfocarse en características salientes relevantes para la tarea de segmentación, suprimiendo activaciones de características en regiones irrelevantes, particularmente útil para órganos con límites poco claros en imágenes médicas.",
          de: "Attention Gates lernen automatisch sich auf saliente Features zu konzentrieren die für die Segmentierungsaufgabe relevant sind, unterdrücken Feature-Aktivierungen in irrelevanten Regionen, besonders nützlich für Organe mit unklaren Grenzen in medizinischen Bildern.",
          nl: "Attention gates leren automatisch zich te concentreren op opvallende kenmerken relevant voor de segmentatietaak, onderdrukken feature activaties in irrelevante regio's, bijzonder nuttig voor organen met onduidelijke grenzen in medische afbeeldingen."
        }
      },
      {
        question: {
          en: "What innovation does ShuffleNet introduce for efficient mobile CNN architectures?",
          es: "¿Qué innovación introduce ShuffleNet para arquitecturas CNN móviles eficientes?",
          de: "Welche Innovation führt ShuffleNet für effiziente mobile CNN-Architekturen ein?",
          nl: "Welke innovatie introduceert ShuffleNet voor efficiënte mobiele CNN architecturen?"
        },
        options: [
          { en: "Channel shuffle operation to enable information flow between groups in grouped convolutions", es: "Operación de mezcla de canales para permitir flujo de información entre grupos en convoluciones agrupadas", de: "Channel Shuffle Operation um Informationsfluss zwischen Gruppen in gruppierten Faltungen zu ermöglichen", nl: "Channel shuffle operatie om informatiestroom tussen groepen in gegroepeerde convoluties mogelijk te maken" },
          { en: "Shuffling training data randomly", es: "Mezclar datos de entrenamiento aleatoriamente", de: "Trainingsdaten zufällig mischen", nl: "Trainingsdata willekeurig schudden" },
          { en: "Randomly shuffling network layers", es: "Mezclar aleatoriamente capas de red", de: "Netzwerkschichten zufällig mischen", nl: "Netwerklagen willekeurig schudden" },
          { en: "Shuffling between different networks", es: "Mezclar entre diferentes redes", de: "Zwischen verschiedenen Netzwerken mischen", nl: "Schudden tussen verschillende netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "ShuffleNet uses channel shuffle to rearrange channels from different groups, allowing information exchange between groups in grouped convolutions, maintaining efficiency while improving feature learning capacity.",
          es: "ShuffleNet usa mezcla de canales para reorganizar canales de diferentes grupos, permitiendo intercambio de información entre grupos en convoluciones agrupadas, manteniendo eficiencia mientras mejora capacidad de aprendizaje de características.",
          de: "ShuffleNet verwendet Channel Shuffle um Kanäle aus verschiedenen Gruppen neu anzuordnen, ermöglicht Informationsaustausch zwischen Gruppen in gruppierten Faltungen, erhält Effizienz während Feature-Lernkapazität verbessert wird.",
          nl: "ShuffleNet gebruikt channel shuffle om kanalen uit verschillende groepen te herrangschikken, maakt informatie-uitwisseling tussen groepen in gegroepeerde convoluties mogelijk, behoudt efficiëntie terwijl feature leercapaciteit wordt verbeterd."
        }
      },
      {
        question: {
          en: "What is the primary challenge that normalization layers address in very deep networks?",
          es: "¿Cuál es el desafío principal que las capas de normalización abordan en redes muy profundas?",
          de: "Was ist die Hauptherausforderung die Normalisierungsschichten in sehr tiefen Netzwerken adressieren?",
          nl: "Wat is de primaire uitdaging die normalisatielagen aanpakken in zeer diepe netwerken?"
        },
        options: [
          { en: "Internal covariate shift that causes activation distributions to change during training", es: "Cambio de covariables internas que causa que las distribuciones de activación cambien durante entrenamiento", de: "Interne Kovariatenverschiebung die Aktivierungsverteilungen während Training verändert", nl: "Interne covariate shift die activatiedistributies doet veranderen tijdens training" },
          { en: "Normalizing input images only", es: "Normalizar solo imágenes de entrada", de: "Nur Eingabebilder normalisieren", nl: "Alleen invoer afbeeldingen normaliseren" },
          { en: "Making networks appear normal", es: "Hacer que las redes parezcan normales", de: "Netzwerke normal erscheinen lassen", nl: "Netwerken normaal laten lijken" },
          { en: "Standardizing network naming conventions", es: "Estandarizar convenciones de nomenclatura de red", de: "Netzwerk-Benennungskonventionen standardisieren", nl: "Netwerk naamgevingsconventies standaardiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Normalization layers like BatchNorm, LayerNorm, and GroupNorm address internal covariate shift by stabilizing activation distributions, enabling higher learning rates, faster convergence, and training of deeper networks.",
          es: "Las capas de normalización como BatchNorm, LayerNorm y GroupNorm abordan el cambio de covariables internas estabilizando distribuciones de activación, permitiendo tasas de aprendizaje más altas, convergencia más rápida y entrenamiento de redes más profundas.",
          de: "Normalisierungsschichten wie BatchNorm, LayerNorm und GroupNorm adressieren interne Kovariatenverschiebung durch Stabilisierung von Aktivierungsverteilungen, ermöglichen höhere Lernraten, schnellere Konvergenz und Training tieferer Netzwerke.",
          nl: "Normalisatielagen zoals BatchNorm, LayerNorm en GroupNorm pakken interne covariate shift aan door activatiedistributies te stabiliseren, maken hogere leesnelheden, snellere convergentie en training van diepere netwerken mogelijk."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind diffusion models in computer vision?",
          es: "¿Cuál es el principio fundamental detrás de los modelos de difusión en visión por computadora?",
          de: "Was ist das grundlegende Prinzip hinter Diffusion-Modellen in Computer Vision?",
          nl: "Wat is het fundamentele principe achter diffusiemodellen in computer vision?"
        },
        options: [
          { en: "Learning to reverse a noise-adding process to generate high-quality images", es: "Aprender a revertir un proceso de añadir ruido para generar imágenes de alta calidad", de: "Lernen einen Rausch-hinzufügenden Prozess umzukehren um hochwertige Bilder zu generieren", nl: "Leren om een ruis-toevoegend proces om te keren om hoogwaardige afbeeldingen te genereren" },
          { en: "Diffusing light through optical filters", es: "Difundir luz a través de filtros ópticos", de: "Licht durch optische Filter diffundieren", nl: "Licht diffunderen door optische filters" },
          { en: "Spreading image features across multiple layers", es: "Esparcir características de imagen a través de múltiples capas", de: "Bildfeatures über mehrere Schichten verteilen", nl: "Beeldkenmerken verspreiden over meerdere lagen" },
          { en: "Creating blurred versions of images", es: "Crear versiones borrosas de imágenes", de: "Verschwommene Versionen von Bildern erstellen", nl: "Wazige versies van afbeeldingen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models work by gradually adding noise to images during training, then learning to reverse this process. During generation, they start with pure noise and iteratively denoise it to create realistic images.",
          es: "Los modelos de difusión funcionan añadiendo gradualmente ruido a imágenes durante entrenamiento, luego aprenden a revertir este proceso. Durante generación, comienzan con ruido puro y lo desnuidizan iterativamente para crear imágenes realistas.",
          de: "Diffusion-Modelle funktionieren durch allmähliches Hinzufügen von Rauschen zu Bildern während des Trainings, dann lernen sie diesen Prozess umzukehren. Während der Generierung beginnen sie mit reinem Rauschen und entrauschen es iterativ um realistische Bilder zu erstellen.",
          nl: "Diffusiemodellen werken door geleidelijk ruis toe te voegen aan afbeeldingen tijdens training, dan leren ze dit proces om te keren. Tijdens generatie beginnen ze met pure ruis en maken het iteratief schoon om realistische afbeeldingen te creëren."
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