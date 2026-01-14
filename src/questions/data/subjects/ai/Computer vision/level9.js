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
      },
      {
        question: {
          en: "What is dynamic routing in capsule networks?",
          es: "¿Qué es el enrutamiento dinámico en redes de cápsulas?",
          de: "Was ist dynamisches Routing in Capsule Networks?",
          nl: "Wat is dynamische routing in capsule networks?"
        },
        options: [
          { en: "Iterative agreement process between capsules to determine part-whole relationships", es: "Proceso iterativo de acuerdo entre cápsulas para determinar relaciones parte-todo", de: "Iterativer Zustimmungsprozess zwischen Kapseln um Teil-Ganzes-Beziehungen zu bestimmen", nl: "Iteratief overeenkomstproces tussen capsules om deel-geheel relaties te bepalen" },
          { en: "Changing network routing paths dynamically", es: "Cambiar rutas de enrutamiento de red dinámicamente", de: "Netzwerk-Routing-Pfade dynamisch ändern", nl: "Netwerk routing paden dynamisch wijzigen" },
          { en: "Dynamic traffic routing for data", es: "Enrutamiento dinámico de tráfico para datos", de: "Dynamisches Verkehrsrouting für Daten", nl: "Dynamische verkeer routing voor data" },
          { en: "Routing capsules through different layers", es: "Enrutar cápsulas a través de diferentes capas", de: "Kapseln durch verschiedene Schichten routen", nl: "Capsules door verschillende lagen routeren" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic routing uses agreement between lower-level and higher-level capsules to route information. If a lower capsule's prediction matches a higher capsule's output, the coupling coefficient increases, strengthening that connection.",
          es: "El enrutamiento dinámico usa acuerdo entre cápsulas de nivel inferior y superior para enrutar información. Si la predicción de una cápsula inferior coincide con la salida de una cápsula superior, el coeficiente de acoplamiento aumenta, fortaleciendo esa conexión.",
          de: "Dynamisches Routing verwendet Übereinstimmung zwischen niedrigeren und höheren Kapseln um Informationen zu routen. Wenn eine niedrigere Kapsel-Vorhersage mit einer höheren Kapsel-Ausgabe übereinstimmt, erhöht sich der Kopplungskoeffizient und stärkt diese Verbindung.",
          nl: "Dynamische routing gebruikt overeenstemming tussen lagere en hogere capsules om informatie te routeren. Als een lagere capsule voorspelling overeenkomt met een hogere capsule uitgang, neemt de koppelingscoëfficiënt toe en versterkt die verbinding."
        }
      },
      {
        question: {
          en: "What is test-time augmentation (TTA) and how does it improve predictions?",
          es: "¿Qué es el aumento en tiempo de prueba (TTA) y cómo mejora las predicciones?",
          de: "Was ist Test-Time Augmentation (TTA) und wie verbessert es Vorhersagen?",
          nl: "Wat is test-time augmentation (TTA) en hoe verbetert het voorspellingen?"
        },
        options: [
          { en: "Applying multiple augmented versions of test images and averaging predictions for robustness", es: "Aplicar múltiples versiones aumentadas de imágenes de prueba y promediar predicciones para robustez", de: "Mehrere erweiterte Versionen von Testbildern anwenden und Vorhersagen für Robustheit mitteln", nl: "Meerdere geaugmenteerde versies van testafbeeldingen toepassen en voorspellingen middelen voor robuustheid" },
          { en: "Testing augmentation strategies only", es: "Solo probar estrategias de aumento", de: "Nur Augmentationsstrategien testen", nl: "Alleen augmentatie strategieën testen" },
          { en: "Augmenting during training time", es: "Aumentar durante tiempo de entrenamiento", de: "Während Trainingszeit erweitern", nl: "Augmenteren tijdens trainingstijd" },
          { en: "Timing how long augmentation takes", es: "Cronometrar cuánto tarda el aumento", de: "Zeit messen wie lange Augmentation dauert", nl: "Tijd meten hoe lang augmentatie duurt" }
        ],
        correct: 0,
        explanation: {
          en: "TTA creates multiple augmented versions (flips, rotations, crops) of each test image, runs predictions on all versions, then averages or ensembles the results, reducing variance and improving accuracy at the cost of inference time.",
          es: "TTA crea múltiples versiones aumentadas (volteos, rotaciones, recortes) de cada imagen de prueba, ejecuta predicciones en todas las versiones, luego promedia o ensambla los resultados, reduciendo varianza y mejorando precisión a costa de tiempo de inferencia.",
          de: "TTA erstellt mehrere erweiterte Versionen (Spiegelungen, Rotationen, Zuschnitte) jedes Testbildes, führt Vorhersagen auf allen Versionen aus, dann mittelt oder ensembled die Ergebnisse, reduziert Varianz und verbessert Genauigkeit auf Kosten der Inferenzzeit.",
          nl: "TTA creëert meerdere geaugmenteerde versies (flips, rotaties, crops) van elke testafbeelding, voert voorspellingen uit op alle versies, middelt of ensemblet dan de resultaten, vermindert variantie en verbetert nauwkeurigheid ten koste van inferentietijd."
        }
      },
      {
        question: {
          en: "What is knowledge distillation in computer vision and why is it valuable?",
          es: "¿Qué es la destilación de conocimiento en visión por computadora y por qué es valiosa?",
          de: "Was ist Knowledge Distillation in Computer Vision und warum ist es wertvoll?",
          nl: "Wat is knowledge distillation in computer vision en waarom is het waardevol?"
        },
        options: [
          { en: "Transferring knowledge from large teacher networks to smaller student networks for deployment", es: "Transferir conocimiento de redes maestras grandes a redes estudiantes más pequeñas para despliegue", de: "Wissen von großen Lehrer-Netzwerken auf kleinere Schüler-Netzwerke für Bereitstellung übertragen", nl: "Kennis overdragen van grote leraar netwerken naar kleinere student netwerken voor implementatie" },
          { en: "Distilling images to their essence", es: "Destilar imágenes a su esencia", de: "Bilder zu ihrer Essenz destillieren", nl: "Afbeeldingen destilleren tot hun essentie" },
          { en: "Extracting pure knowledge from data", es: "Extraer conocimiento puro de datos", de: "Reines Wissen aus Daten extrahieren", nl: "Zuivere kennis uit data halen" },
          { en: "Removing unnecessary knowledge only", es: "Eliminar solo conocimiento innecesario", de: "Nur unnötiges Wissen entfernen", nl: "Alleen onnodige kennis verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation trains a compact student model to mimic a larger teacher model's outputs (soft targets), capturing the teacher's learned relationships between classes, producing smaller models with performance closer to large models.",
          es: "La destilación de conocimiento entrena un modelo estudiante compacto para imitar las salidas de un modelo maestro más grande (objetivos suaves), capturando las relaciones aprendidas del maestro entre clases, produciendo modelos más pequeños con rendimiento más cercano a modelos grandes.",
          de: "Knowledge Distillation trainiert ein kompaktes Schüler-Modell um die Ausgaben eines größeren Lehrer-Modells (weiche Ziele) nachzuahmen, erfasst die gelernten Beziehungen des Lehrers zwischen Klassen, produziert kleinere Modelle mit Leistung näher an großen Modellen.",
          nl: "Knowledge distillation traint een compact student model om de uitgangen van een groter leraar model (zachte doelen) na te bootsen, vangt de geleerde relaties van de leraar tussen klassen, produceert kleinere modellen met prestaties dichter bij grote modellen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of Vision Transformers (ViT) over CNNs?",
          es: "¿Cuál es la principal ventaja de los Transformadores de Visión (ViT) sobre las CNN?",
          de: "Was ist der Hauptvorteil von Vision Transformers (ViT) gegenüber CNNs?",
          nl: "Wat is het hoofdvoordeel van Vision Transformers (ViT) ten opzichte van CNNs?"
        },
        options: [
          { en: "Global receptive field from first layer enabling long-range dependencies without convolutions", es: "Campo receptivo global desde primera capa permitiendo dependencias de largo alcance sin convoluciones", de: "Globales rezeptives Feld von erster Schicht ermöglicht langreichende Abhängigkeiten ohne Faltungen", nl: "Globaal receptief veld vanaf eerste laag maakt langetermijn afhankelijkheden mogelijk zonder convoluties" },
          { en: "Transforming images into different formats", es: "Transformar imágenes a diferentes formatos", de: "Bilder in verschiedene Formate transformieren", nl: "Afbeeldingen transformeren naar verschillende formaten" },
          { en: "Using transformers from electrical engineering", es: "Usar transformadores de ingeniería eléctrica", de: "Transformatoren aus Elektrotechnik verwenden", nl: "Transformatoren uit elektrotechniek gebruiken" },
          { en: "Only working with vision tasks", es: "Solo trabajar con tareas de visión", de: "Nur mit Vision-Aufgaben arbeiten", nl: "Alleen werken met visie taken" }
        ],
        correct: 0,
        explanation: {
          en: "ViT divides images into patches and processes them with self-attention, allowing every patch to attend to every other patch from the start, capturing global context without the local bias of convolutions, though requiring more data to train.",
          es: "ViT divide imágenes en parches y los procesa con auto-atención, permitiendo que cada parche atienda a cada otro parche desde el inicio, capturando contexto global sin el sesgo local de convoluciones, aunque requiere más datos para entrenar.",
          de: "ViT teilt Bilder in Patches und verarbeitet sie mit Selbstaufmerksamkeit, ermöglicht jedem Patch von Anfang an auf jeden anderen Patch zu achten, erfasst globalen Kontext ohne lokale Voreingenommenheit von Faltungen, benötigt aber mehr Daten zum Trainieren.",
          nl: "ViT verdeelt afbeeldingen in patches en verwerkt ze met zelfaandacht, maakt elke patch mogelijk vanaf het begin naar elke andere patch te kijken, vangt globale context zonder lokale bias van convoluties, vereist echter meer data om te trainen."
        }
      },
      {
        question: {
          en: "What is the Swin Transformer's key innovation over standard Vision Transformers?",
          es: "¿Cuál es la innovación clave del Swin Transformer sobre los Transformadores de Visión estándar?",
          de: "Was ist die Schlüsselinnovation des Swin Transformers gegenüber Standard Vision Transformers?",
          nl: "Wat is de sleutelinnovatie van de Swin Transformer ten opzichte van standaard Vision Transformers?"
        },
        options: [
          { en: "Hierarchical feature maps with shifted windows for efficient multi-scale representation", es: "Mapas de características jerárquicos con ventanas desplazadas para representación multi-escala eficiente", de: "Hierarchische Feature Maps mit verschobenen Fenstern für effiziente Multi-Skalen-Repräsentation", nl: "Hiërarchische feature maps met verschoven vensters voor efficiënte multi-schaal representatie" },
          { en: "Swinging window mechanisms for images", es: "Mecanismos de ventana oscilante para imágenes", de: "Schwingende Fenstermechanismen für Bilder", nl: "Swingende venstermechanismen voor afbeeldingen" },
          { en: "Using windows operating system only", es: "Usar solo sistema operativo Windows", de: "Nur Windows Betriebssystem verwenden", nl: "Alleen Windows besturingssysteem gebruiken" },
          { en: "Transforming images through windows", es: "Transformar imágenes a través de ventanas", de: "Bilder durch Fenster transformieren", nl: "Afbeeldingen door vensters transformeren" }
        ],
        correct: 0,
        explanation: {
          en: "Swin Transformer uses shifted window-based attention instead of global attention, computing self-attention within local windows and shifting these windows between layers, achieving linear complexity while building hierarchical representations suitable for dense prediction tasks.",
          es: "Swin Transformer usa atención basada en ventanas desplazadas en lugar de atención global, computando auto-atención dentro de ventanas locales y desplazando estas ventanas entre capas, logrando complejidad lineal mientras construye representaciones jerárquicas adecuadas para tareas de predicción densa.",
          de: "Swin Transformer verwendet verschobene fensterbasierte Aufmerksamkeit anstatt globaler Aufmerksamkeit, berechnet Selbstaufmerksamkeit innerhalb lokaler Fenster und verschiebt diese Fenster zwischen Schichten, erreicht lineare Komplexität während hierarchische Repräsentationen für dichte Vorhersageaufgaben aufgebaut werden.",
          nl: "Swin Transformer gebruikt verschoven venster-gebaseerde aandacht in plaats van globale aandacht, berekent zelfaandacht binnen lokale vensters en verschuift deze vensters tussen lagen, bereikt lineaire complexiteit terwijl hiërarchische representaties worden gebouwd geschikt voor dichte voorspellingstaken."
        }
      },
      {
        question: {
          en: "What is the purpose of feature pyramid networks (FPN) in object detection?",
          es: "¿Cuál es el propósito de las redes de pirámide de características (FPN) en detección de objetos?",
          de: "Was ist der Zweck von Feature Pyramid Networks (FPN) in Objekterkennung?",
          nl: "Wat is het doel van feature pyramid networks (FPN) in objectdetectie?"
        },
        options: [
          { en: "Building multi-scale feature representations by combining high-resolution and semantically strong features", es: "Construir representaciones de características multi-escala combinando características de alta resolución y semánticamente fuertes", de: "Multi-Skalen-Feature-Repräsentationen durch Kombination hochauflösender und semantisch starker Features aufbauen", nl: "Multi-schaal feature representaties bouwen door hoge resolutie en semantisch sterke features te combineren" },
          { en: "Creating pyramid-shaped network architectures", es: "Crear arquitecturas de red en forma de pirámide", de: "Pyramidenförmige Netzwerkarchitekturen erstellen", nl: "Piramide-vormige netwerkarchitecturen maken" },
          { en: "Detecting pyramids in images only", es: "Detectar solo pirámides en imágenes", de: "Nur Pyramiden in Bildern erkennen", nl: "Alleen piramides in afbeeldingen detecteren" },
          { en: "Using Egyptian pyramid knowledge", es: "Usar conocimiento de pirámides egipcias", de: "Wissen über ägyptische Pyramiden verwenden", nl: "Egyptische piramide kennis gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "FPN creates a top-down pathway with lateral connections to build high-level semantic feature maps at all scales, enabling effective detection of objects across different sizes by combining coarse semantic features with fine spatial features.",
          es: "FPN crea un camino de arriba hacia abajo con conexiones laterales para construir mapas de características semánticas de alto nivel en todas las escalas, permitiendo detección efectiva de objetos a través de diferentes tamaños combinando características semánticas gruesas con características espaciales finas.",
          de: "FPN erstellt einen Top-Down-Pfad mit lateralen Verbindungen um hochrangige semantische Feature Maps in allen Skalen aufzubauen, ermöglicht effektive Erkennung von Objekten über verschiedene Größen durch Kombination grober semantischer Features mit feinen räumlichen Features.",
          nl: "FPN creëert een top-down pad met laterale verbindingen om hoog-niveau semantische feature maps op alle schalen te bouwen, maakt effectieve detectie van objecten over verschillende groottes mogelijk door grove semantische features te combineren met fijne ruimtelijke features."
        }
      },
      {
        question: {
          en: "What is deformable convolution and how does it improve CNNs?",
          es: "¿Qué es la convolución deformable y cómo mejora las CNN?",
          de: "Was ist deformierbare Faltung und wie verbessert sie CNNs?",
          nl: "Wat is vervormbare convolutie en hoe verbetert het CNNs?"
        },
        options: [
          { en: "Learnable offsets for sampling locations allowing adaptive receptive field shapes", es: "Desplazamientos aprendibles para ubicaciones de muestreo permitiendo formas adaptativas de campo receptivo", de: "Lernbare Verschiebungen für Sampling-Positionen ermöglichen adaptive rezeptive Feldformen", nl: "Leerbare verschuivingen voor sampling locaties maken adaptieve receptieve veldvormen mogelijk" },
          { en: "Deforming images before convolution", es: "Deformar imágenes antes de convolución", de: "Bilder vor Faltung deformieren", nl: "Afbeeldingen vervormen voor convolutie" },
          { en: "Convolutions that deform the network structure", es: "Convoluciones que deforman la estructura de red", de: "Faltungen die Netzwerkstruktur deformieren", nl: "Convoluties die netwerkstructuur vervormen" },
          { en: "Only handling deformed objects in images", es: "Solo manejar objetos deformados en imágenes", de: "Nur deformierte Objekte in Bildern handhaben", nl: "Alleen vervormde objecten in afbeeldingen hanteren" }
        ],
        correct: 0,
        explanation: {
          en: "Deformable convolutions add learnable 2D offsets to regular grid sampling locations in convolutions, allowing the receptive field to adapt to object geometry and scale, improving modeling of geometric transformations without explicit transformations.",
          es: "Las convoluciones deformables añaden desplazamientos 2D aprendibles a ubicaciones de muestreo de cuadrícula regular en convoluciones, permitiendo que el campo receptivo se adapte a la geometría y escala del objeto, mejorando el modelado de transformaciones geométricas sin transformaciones explícitas.",
          de: "Deformierbare Faltungen fügen lernbare 2D-Verschiebungen zu regulären Gitter-Sampling-Positionen in Faltungen hinzu, ermöglichen rezeptivem Feld sich an Objektgeometrie und Skala anzupassen, verbessern Modellierung geometrischer Transformationen ohne explizite Transformationen.",
          nl: "Vervormbare convoluties voegen leerbare 2D verschuivingen toe aan reguliere raster sampling locaties in convoluties, maken receptief veld mogelijk zich aan te passen aan objectgeometrie en schaal, verbeteren modellering van geometrische transformaties zonder expliciete transformaties."
        }
      },
      {
        question: {
          en: "What is continual learning addressing in computer vision systems?",
          es: "¿Qué está abordando el aprendizaje continuo en sistemas de visión por computadora?",
          de: "Was adressiert kontinuierliches Lernen in Computer Vision Systemen?",
          nl: "Wat pakt voortdurend leren aan in computer vision systemen?"
        },
        options: [
          { en: "Learning new tasks sequentially without forgetting previously learned knowledge (catastrophic forgetting)", es: "Aprender nuevas tareas secuencialmente sin olvidar conocimiento previamente aprendido (olvido catastrófico)", de: "Neue Aufgaben sequenziell lernen ohne zuvor gelerntes Wissen zu vergessen (katastrophales Vergessen)", nl: "Nieuwe taken sequentieel leren zonder eerder geleerde kennis te vergeten (catastrofaal vergeten)" },
          { en: "Continuous training without stopping", es: "Entrenamiento continuo sin parar", de: "Kontinuierliches Training ohne Stoppen", nl: "Continue training zonder stoppen" },
          { en: "Learning continuously from video streams", es: "Aprender continuamente de flujos de video", de: "Kontinuierlich aus Videostreams lernen", nl: "Continu leren van videostreams" },
          { en: "Never finishing the learning process", es: "Nunca terminar el proceso de aprendizaje", de: "Den Lernprozess nie beenden", nl: "Het leerproces nooit voltooien" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning tackles catastrophic forgetting where neural networks forget old tasks when learning new ones. Techniques like elastic weight consolidation, replay buffers, and progressive neural networks help retain old knowledge while acquiring new capabilities.",
          es: "El aprendizaje continuo aborda el olvido catastrófico donde las redes neuronales olvidan tareas antiguas al aprender nuevas. Técnicas como consolidación de peso elástica, búferes de repetición y redes neuronales progresivas ayudan a retener conocimiento antiguo mientras adquieren nuevas capacidades.",
          de: "Kontinuierliches Lernen tackelt katastrophales Vergessen wo neuronale Netzwerke alte Aufgaben vergessen beim Lernen neuer. Techniken wie elastische Gewichtskonsolidierung, Replay-Puffer und progressive neuronale Netzwerke helfen altes Wissen zu behalten während neue Fähigkeiten erworben werden.",
          nl: "Voortdurend leren pakt catastrofaal vergeten aan waar neurale netwerken oude taken vergeten bij het leren van nieuwe. Technieken zoals elastische gewichtsconsolidatie, replay buffers en progressieve neurale netwerken helpen oude kennis te behouden terwijl nieuwe capaciteiten worden verworven."
        }
      },
      {
        question: {
          en: "What is the main advantage of anchor-free object detection methods like CenterNet?",
          es: "¿Cuál es la principal ventaja de los métodos de detección de objetos sin anclas como CenterNet?",
          de: "Was ist der Hauptvorteil von ankerfreien Objekterkennungsmethoden wie CenterNet?",
          nl: "Wat is het hoofdvoordeel van ankervrije objectdetectie methoden zoals CenterNet?"
        },
        options: [
          { en: "Detecting objects as points (centers) eliminating need for anchor box design and NMS", es: "Detectar objetos como puntos (centros) eliminando necesidad de diseño de caja de ancla y NMS", de: "Objekte als Punkte (Zentren) erkennen eliminiert Bedarf für Anker-Box-Design und NMS", nl: "Objecten detecteren als punten (centra) elimineert behoefte aan ankerbox ontwerp en NMS" },
          { en: "Not needing anchors to stabilize networks", es: "No necesitar anclas para estabilizar redes", de: "Keine Anker zum Stabilisieren von Netzwerken benötigen", nl: "Geen ankers nodig om netwerken te stabiliseren" },
          { en: "Working without being anchored to hardware", es: "Trabajar sin estar anclado a hardware", de: "Ohne an Hardware verankert zu sein arbeiten", nl: "Werken zonder verankerd te zijn aan hardware" },
          { en: "Free from anchor bias only", es: "Libre solo de sesgo de ancla", de: "Nur frei von Anker-Bias", nl: "Alleen vrij van anker bias" }
        ],
        correct: 0,
        explanation: {
          en: "Anchor-free methods predict object centers as keypoints and regress other properties (size, offset) from the center, avoiding hyperparameter tuning for anchors, reducing memory, and eliminating post-processing like NMS, achieving simpler and often faster detection.",
          es: "Los métodos sin anclas predicen centros de objetos como puntos clave y regresan otras propiedades (tamaño, desplazamiento) desde el centro, evitando ajuste de hiperparámetros para anclas, reduciendo memoria y eliminando post-procesamiento como NMS, logrando detección más simple y a menudo más rápida.",
          de: "Ankerfreie Methoden sagen Objektzentren als Keypoints vorher und regressieren andere Eigenschaften (Größe, Versatz) vom Zentrum, vermeiden Hyperparameter-Tuning für Anker, reduzieren Speicher und eliminieren Nachbearbeitung wie NMS, erreichen einfachere und oft schnellere Erkennung.",
          nl: "Ankervrije methoden voorspellen objectcentra als keypoints en regresseren andere eigenschappen (grootte, offset) vanaf het centrum, vermijden hyperparameter tuning voor ankers, verminderen geheugen en elimineren nabewerking zoals NMS, bereiken eenvoudigere en vaak snellere detectie."
        }
      },
      {
        question: {
          en: "What is the core idea behind contrastive learning methods like SimCLR and MoCo?",
          es: "¿Cuál es la idea central detrás de los métodos de aprendizaje contrastivo como SimCLR y MoCo?",
          de: "Was ist die Kernidee hinter kontrastiven Lernmethoden wie SimCLR und MoCo?",
          nl: "Wat is het kernidee achter contrastieve leermethoden zoals SimCLR en MoCo?"
        },
        options: [
          { en: "Learning representations by pulling augmented views of same image together while pushing different images apart", es: "Aprender representaciones acercando vistas aumentadas de la misma imagen mientras alejan imágenes diferentes", de: "Repräsentationen lernen durch Zusammenziehen erweiterter Ansichten desselben Bildes während verschiedene Bilder auseinander gedrückt werden", nl: "Representaties leren door geaugmenteerde weergaven van dezelfde afbeelding samen te trekken terwijl verschillende afbeeldingen uit elkaar worden geduwd" },
          { en: "Contrasting different image styles only", es: "Contrastar solo diferentes estilos de imagen", de: "Nur verschiedene Bildstile kontrastieren", nl: "Alleen verschillende beeldstijlen contrasteren" },
          { en: "Learning from image contrast adjustments", es: "Aprender de ajustes de contraste de imagen", de: "Von Bildkontrastanpassungen lernen", nl: "Leren van beeldcontrastaanpassingen" },
          { en: "Creating contrasts between network layers", es: "Crear contrastes entre capas de red", de: "Kontraste zwischen Netzwerkschichten erstellen", nl: "Contrasten maken tussen netwerklagen" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning creates multiple augmented views of each image (positive pairs) and trains networks to maximize agreement between positive pairs while minimizing agreement with other images (negatives), learning powerful representations without labels.",
          es: "El aprendizaje contrastivo crea múltiples vistas aumentadas de cada imagen (pares positivos) y entrena redes para maximizar acuerdo entre pares positivos mientras minimiza acuerdo con otras imágenes (negativos), aprendiendo representaciones poderosas sin etiquetas.",
          de: "Kontrastives Lernen erstellt mehrere erweiterte Ansichten jedes Bildes (positive Paare) und trainiert Netzwerke um Übereinstimmung zwischen positiven Paaren zu maximieren während Übereinstimmung mit anderen Bildern (Negative) minimiert wird, lernt mächtige Repräsentationen ohne Labels.",
          nl: "Contrastief leren creëert meerdere geaugmenteerde weergaven van elke afbeelding (positieve paren) en traint netwerken om overeenstemming tussen positieve paren te maximaliseren terwijl overeenstemming met andere afbeeldingen (negatieven) wordt geminimaliseerd, leert krachtige representaties zonder labels."
        }
      },
      {
        question: {
          en: "What is neural radiance fields (NeRF) achieving in 3D scene representation?",
          es: "¿Qué están logrando los campos de radiancia neurales (NeRF) en representación de escenas 3D?",
          de: "Was erreichen Neural Radiance Fields (NeRF) in 3D-Szenen-Repräsentation?",
          nl: "Wat bereiken neural radiance fields (NeRF) in 3D scène representatie?"
        },
        options: [
          { en: "Synthesizing photorealistic novel views by encoding volumetric scene in neural network weights", es: "Sintetizar vistas novedosas fotorrealistas codificando escena volumétrica en pesos de red neuronal", de: "Fotorealistische neuartige Ansichten synthetisieren durch Kodierung volumetrischer Szene in neuronalen Netzwerkgewichten", nl: "Fotorealistische nieuwe weergaven synthetiseren door volumetrische scène te coderen in neurale netwerkgewichten" },
          { en: "Creating radiation fields for images", es: "Crear campos de radiación para imágenes", de: "Strahlungsfelder für Bilder erstellen", nl: "Stralingsvelden maken voor afbeeldingen" },
          { en: "Neural networks for radiant lighting only", es: "Redes neuronales solo para iluminación radiante", de: "Neuronale Netzwerke nur für strahlende Beleuchtung", nl: "Neurale netwerken alleen voor stralende verlichting" },
          { en: "Radiating neural signals through fields", es: "Radiar señales neuronales a través de campos", de: "Neuronale Signale durch Felder strahlen", nl: "Neurale signalen uitstralen door velden" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF represents scenes as continuous 5D functions (spatial location + viewing direction → color + density) learned by MLPs, enabling rendering of photorealistic novel views from arbitrary viewpoints by volume rendering through this neural representation.",
          es: "NeRF representa escenas como funciones 5D continuas (ubicación espacial + dirección de vista → color + densidad) aprendidas por MLPs, permitiendo renderizado de vistas novedosas fotorrealistas desde puntos de vista arbitrarios mediante renderizado volumétrico a través de esta representación neuronal.",
          de: "NeRF repräsentiert Szenen als kontinuierliche 5D-Funktionen (räumliche Position + Blickrichtung → Farbe + Dichte) gelernt von MLPs, ermöglicht Rendering fotorealistischer neuartiger Ansichten von beliebigen Blickpunkten durch Volumen-Rendering durch diese neuronale Repräsentation.",
          nl: "NeRF vertegenwoordigt scènes als continue 5D functies (ruimtelijke locatie + kijkrichting → kleur + dichtheid) geleerd door MLPs, maakt rendering mogelijk van fotorealistische nieuwe weergaven vanuit willekeurige gezichtspunten door volume rendering door deze neurale representatie."
        }
      },
      {
        question: {
          en: "What is the main contribution of DETR (Detection Transformer) to object detection?",
          es: "¿Cuál es la principal contribución de DETR (Detection Transformer) a la detección de objetos?",
          de: "Was ist der Hauptbeitrag von DETR (Detection Transformer) zur Objekterkennung?",
          nl: "Wat is de hoofdbijdrage van DETR (Detection Transformer) aan objectdetectie?"
        },
        options: [
          { en: "End-to-end detection using transformers and bipartite matching, eliminating hand-crafted components", es: "Detección de extremo a extremo usando transformadores y emparejamiento bipartito, eliminando componentes hechos a mano", de: "End-to-End-Erkennung mit Transformern und bipartitem Matching, eliminiert handgemachte Komponenten", nl: "End-to-end detectie met transformers en bipartite matching, elimineert handgemaakte componenten" },
          { en: "Detecting transformers in images", es: "Detectar transformadores en imágenes", de: "Transformatoren in Bildern erkennen", nl: "Transformers detecteren in afbeeldingen" },
          { en: "Transforming detection into classification", es: "Transformar detección en clasificación", de: "Erkennung in Klassifikation transformieren", nl: "Detectie transformeren naar classificatie" },
          { en: "Using electrical transformers for detection", es: "Usar transformadores eléctricos para detección", de: "Elektrische Transformatoren für Erkennung verwenden", nl: "Elektrische transformatoren gebruiken voor detectie" }
        ],
        correct: 0,
        explanation: {
          en: "DETR treats object detection as a set prediction problem using Transformers with learnable object queries and Hungarian matching for assignment, eliminating need for anchors, NMS, and other hand-designed components, achieving truly end-to-end trainable detection.",
          es: "DETR trata la detección de objetos como un problema de predicción de conjuntos usando Transformers con consultas de objetos aprendibles y emparejamiento húngaro para asignación, eliminando necesidad de anclas, NMS y otros componentes diseñados a mano, logrando detección verdaderamente entrenable de extremo a extremo.",
          de: "DETR behandelt Objekterkennung als Set-Vorhersageproblem mit Transformern mit lernbaren Objekt-Queries und ungarischem Matching für Zuordnung, eliminiert Bedarf für Anker, NMS und andere handdesignte Komponenten, erreicht wirklich end-to-end trainierbare Erkennung.",
          nl: "DETR behandelt objectdetectie als een set voorspellingsprobleem met Transformers met leerbare object queries en Hongaarse matching voor toewijzing, elimineert behoefte aan ankers, NMS en andere handontworpen componenten, bereikt echt end-to-end trainbare detectie."
        }
      },
      {
        question: {
          en: "What is domain randomization and why is it valuable for sim-to-real transfer?",
          es: "¿Qué es la aleatorización de dominio y por qué es valiosa para transferencia sim-a-real?",
          de: "Was ist Domänen-Randomisierung und warum ist sie wertvoll für Sim-zu-Real Transfer?",
          nl: "Wat is domein randomisatie en waarom is het waardevol voor sim-naar-real overdracht?"
        },
        options: [
          { en: "Randomizing simulation parameters to create diverse training data bridging reality gap", es: "Aleatorizar parámetros de simulación para crear datos de entrenamiento diversos cerrando brecha de realidad", de: "Simulationsparameter randomisieren um vielfältige Trainingsdaten zu erstellen die Realitätslücke überbrücken", nl: "Simulatieparameters randomiseren om diverse trainingsdata te creëren die realiteitskloof overbruggen" },
          { en: "Randomly selecting training domains", es: "Seleccionar aleatoriamente dominios de entrenamiento", de: "Trainingsbereiche zufällig auswählen", nl: "Willekeurig trainingsdomeinen selecteren" },
          { en: "Creating random domain names", es: "Crear nombres de dominio aleatorios", de: "Zufällige Domainnamen erstellen", nl: "Willekeurige domeinnamen maken" },
          { en: "Randomizing only network domains", es: "Aleatorizar solo dominios de red", de: "Nur Netzwerkdomänen randomisieren", nl: "Alleen netwerkdomeinen randomiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Domain randomization varies textures, lighting, object positions, and other parameters in simulation so widely that reality appears as just another variation, enabling models trained purely in simulation to generalize to real-world scenarios without real-world training data.",
          es: "La aleatorización de dominio varía texturas, iluminación, posiciones de objetos y otros parámetros en simulación tan ampliamente que la realidad aparece como solo otra variación, permitiendo que modelos entrenados puramente en simulación se generalicen a escenarios del mundo real sin datos de entrenamiento del mundo real.",
          de: "Domänen-Randomisierung variiert Texturen, Beleuchtung, Objektpositionen und andere Parameter in Simulation so weit dass Realität als nur eine weitere Variation erscheint, ermöglicht rein in Simulation trainierten Modellen auf reale Szenarien zu generalisieren ohne reale Trainingsdaten.",
          nl: "Domein randomisatie varieert texturen, verlichting, objectposities en andere parameters in simulatie zo breed dat realiteit verschijnt als slechts een andere variatie, maakt modellen getraind puur in simulatie mogelijk te generaliseren naar real-world scenario's zonder real-world trainingsdata."
        }
      },
      {
        question: {
          en: "What is the purpose of mixup and CutMix data augmentation techniques?",
          es: "¿Cuál es el propósito de las técnicas de aumento de datos mixup y CutMix?",
          de: "Was ist der Zweck von Mixup- und CutMix-Datenaugmentationstechniken?",
          nl: "Wat is het doel van mixup en CutMix data augmentatie technieken?"
        },
        options: [
          { en: "Creating synthetic training samples by mixing images and labels to improve generalization and calibration", es: "Crear muestras de entrenamiento sintéticas mezclando imágenes y etiquetas para mejorar generalización y calibración", de: "Synthetische Trainingsproben durch Mischen von Bildern und Labels erstellen um Generalisierung und Kalibrierung zu verbessern", nl: "Synthetische trainingsmonsters creëren door afbeeldingen en labels te mixen om generalisatie en kalibratie te verbeteren" },
          { en: "Mixing different datasets together only", es: "Solo mezclar diferentes conjuntos de datos juntos", de: "Nur verschiedene Datensätze zusammenmischen", nl: "Alleen verschillende datasets samen mixen" },
          { en: "Creating music mixes from images", es: "Crear mezclas musicales de imágenes", de: "Musikmixe aus Bildern erstellen", nl: "Muziek mixen maken van afbeeldingen" },
          { en: "Cutting and mixing network architectures", es: "Cortar y mezclar arquitecturas de red", de: "Netzwerkarchitekturen schneiden und mischen", nl: "Netwerkarchitecturen knippen en mixen" }
        ],
        correct: 0,
        explanation: {
          en: "Mixup blends two images and their labels linearly, while CutMix pastes a cut patch from one image onto another and mixes labels proportionally to patch area, both encouraging models to learn more robust features and produce better-calibrated confidence scores.",
          es: "Mixup mezcla dos imágenes y sus etiquetas linealmente, mientras CutMix pega un parche cortado de una imagen sobre otra y mezcla etiquetas proporcionalmente al área del parche, ambos alentando modelos a aprender características más robustas y producir puntuaciones de confianza mejor calibradas.",
          de: "Mixup mischt zwei Bilder und ihre Labels linear, während CutMix einen geschnittenen Patch von einem Bild auf ein anderes einfügt und Labels proportional zur Patch-Fläche mischt, beide ermutigen Modelle robustere Features zu lernen und besser kalibrierte Konfidenz-Scores zu produzieren.",
          nl: "Mixup mengt twee afbeeldingen en hun labels lineair, terwijl CutMix een gesneden patch van één afbeelding op een andere plakt en labels proportioneel aan patch gebied mixt, beide moedigen modellen aan robuustere features te leren en beter gekalibreerde vertrouwensscores te produceren."
        }
      },
      {
        question: {
          en: "What is cross-attention and how is it used in vision-language models?",
          es: "¿Qué es la atención cruzada y cómo se usa en modelos visión-lenguaje?",
          de: "Was ist Cross-Attention und wie wird sie in Vision-Sprache-Modellen verwendet?",
          nl: "Wat is cross-attention en hoe wordt het gebruikt in visie-taal modellen?"
        },
        options: [
          { en: "Attention mechanism allowing one modality (text) to attend to another (vision) for alignment", es: "Mecanismo de atención permitiendo que una modalidad (texto) atienda a otra (visión) para alineación", de: "Aufmerksamkeitsmechanismus der einer Modalität (Text) ermöglicht auf eine andere (Vision) zu achten für Ausrichtung", nl: "Aandachtsmechanisme dat één modaliteit (tekst) naar een andere (visie) laat kijken voor afstemming" },
          { en: "Crossing attention between different network layers", es: "Cruzar atención entre diferentes capas de red", de: "Aufmerksamkeit zwischen verschiedenen Netzwerkschichten kreuzen", nl: "Aandacht kruisen tussen verschillende netwerklagen" },
          { en: "Paying cross attention to multiple tasks", es: "Prestar atención cruzada a múltiples tareas", de: "Kreuzaufmerksamkeit auf mehrere Aufgaben richten", nl: "Kruisaandacht besteden aan meerdere taken" },
          { en: "Attention that crosses image boundaries", es: "Atención que cruza límites de imagen", de: "Aufmerksamkeit die Bildgrenzen überschreitet", nl: "Aandacht die beeldgrenzen overschrijdt" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-attention allows queries from one modality (e.g., text tokens) to attend to keys and values from another modality (e.g., image patches), enabling models like CLIP, DALL-E, and Flamingo to align and fuse information across vision and language.",
          es: "La atención cruzada permite que consultas de una modalidad (por ejemplo, tokens de texto) atiendan a claves y valores de otra modalidad (por ejemplo, parches de imagen), permitiendo a modelos como CLIP, DALL-E y Flamingo alinear y fusionar información a través de visión y lenguaje.",
          de: "Cross-Attention ermöglicht Queries aus einer Modalität (z.B. Text-Tokens) auf Keys und Values aus einer anderen Modalität (z.B. Bild-Patches) zu achten, ermöglicht Modellen wie CLIP, DALL-E und Flamingo Informationen über Vision und Sprache auszurichten und zu fusionieren.",
          nl: "Cross-attention maakt queries van één modaliteit (bijv. tekst tokens) mogelijk naar keys en values van een andere modaliteit (bijv. afbeelding patches) te kijken, maakt modellen zoals CLIP, DALL-E en Flamingo mogelijk informatie over visie en taal af te stemmen en te fuseren."
        }
      },
      {
        question: {
          en: "What is label smoothing and why does it improve model training?",
          es: "¿Qué es el suavizado de etiquetas y por qué mejora el entrenamiento del modelo?",
          de: "Was ist Label Smoothing und warum verbessert es Modelltraining?",
          nl: "Wat is label smoothing en waarom verbetert het modeltraining?"
        },
        options: [
          { en: "Softening hard targets by assigning small probabilities to incorrect classes preventing overconfidence", es: "Suavizar objetivos duros asignando pequeñas probabilidades a clases incorrectas previniendo exceso de confianza", de: "Harte Ziele weicher machen durch Zuweisen kleiner Wahrscheinlichkeiten zu falschen Klassen verhindert Übervertrauen", nl: "Harde doelen verzachten door kleine waarschijnlijkheden toe te wijzen aan incorrecte klassen voorkomt oververtrouwen" },
          { en: "Smoothing labels to make them more readable", es: "Suavizar etiquetas para hacerlas más legibles", de: "Labels glätten um sie lesbarer zu machen", nl: "Labels gladmaken om ze leesbaarder te maken" },
          { en: "Making label text smoother visually", es: "Hacer texto de etiqueta visualmente más suave", de: "Labeltext visuell glatter machen", nl: "Labeltekst visueel gladder maken" },
          { en: "Smoothing only incorrect labels", es: "Suavizar solo etiquetas incorrectas", de: "Nur falsche Labels glätten", nl: "Alleen incorrecte labels gladmaken" }
        ],
        correct: 0,
        explanation: {
          en: "Label smoothing replaces hard one-hot targets (e.g., [0,1,0,0]) with smoothed distributions (e.g., [0.025,0.925,0.025,0.025]), preventing models from becoming overconfident, improving calibration, and acting as a regularizer that enhances generalization.",
          es: "El suavizado de etiquetas reemplaza objetivos one-hot duros (por ejemplo, [0,1,0,0]) con distribuciones suavizadas (por ejemplo, [0.025,0.925,0.025,0.025]), previniendo que modelos se vuelvan demasiado confiados, mejorando calibración y actuando como regularizador que mejora generalización.",
          de: "Label Smoothing ersetzt harte One-Hot-Ziele (z.B. [0,1,0,0]) durch geglättete Verteilungen (z.B. [0.025,0.925,0.025,0.025]), verhindert dass Modelle übervertraut werden, verbessert Kalibrierung und wirkt als Regularisierer der Generalisierung verbessert.",
          nl: "Label smoothing vervangt harde one-hot doelen (bijv. [0,1,0,0]) met gladgemaakte distributies (bijv. [0.025,0.925,0.025,0.025]), voorkomt dat modellen overmoedig worden, verbetert kalibratie en fungeert als regularizer die generalisatie verbetert."
        }
      },
      {
        question: {
          en: "What is metric learning and how is it applied in face verification systems?",
          es: "¿Qué es el aprendizaje métrico y cómo se aplica en sistemas de verificación facial?",
          de: "Was ist Metric Learning und wie wird es in Gesichtsverifizierungssystemen angewendet?",
          nl: "Wat is metric learning en hoe wordt het toegepast in gezichtsverificatiesystemen?"
        },
        options: [
          { en: "Learning embedding spaces where similar faces are close and different faces are far apart", es: "Aprender espacios de incrustación donde caras similares están cerca y caras diferentes están lejos", de: "Embedding-Räume lernen wo ähnliche Gesichter nah und verschiedene Gesichter weit entfernt sind", nl: "Embedding ruimtes leren waar vergelijkbare gezichten dichtbij en verschillende gezichten ver weg zijn" },
          { en: "Learning to measure image metrics only", es: "Aprender a medir solo métricas de imagen", de: "Nur Bildmetriken messen lernen", nl: "Alleen beeldmetrieken leren meten" },
          { en: "Metric system conversions for images", es: "Conversiones de sistema métrico para imágenes", de: "Metrische Systemumwandlungen für Bilder", nl: "Metrische systeemconversies voor afbeeldingen" },
          { en: "Measuring learning progress only", es: "Medir solo progreso de aprendizaje", de: "Nur Lernfortschritt messen", nl: "Alleen leervoortgang meten" }
        ],
        correct: 0,
        explanation: {
          en: "Metric learning trains networks using losses like triplet loss or contrastive loss to create embedding spaces where distance reflects similarity, enabling face verification by comparing embeddings with a threshold rather than classification.",
          es: "El aprendizaje métrico entrena redes usando pérdidas como pérdida triplete o pérdida contrastiva para crear espacios de incrustación donde distancia refleja similitud, permitiendo verificación facial comparando incrustaciones con un umbral en lugar de clasificación.",
          de: "Metric Learning trainiert Netzwerke mit Verlusten wie Triplet Loss oder Contrastive Loss um Embedding-Räume zu erstellen wo Distanz Ähnlichkeit reflektiert, ermöglicht Gesichtsverifizierung durch Vergleich von Embeddings mit Schwellwert anstatt Klassifikation.",
          nl: "Metric learning traint netwerken met verliezen zoals triplet loss of contrastive loss om embedding ruimtes te creëren waar afstand gelijkenis reflecteert, maakt gezichtsverificatie mogelijk door embeddings te vergelijken met een drempel in plaats van classificatie."
        }
      },
      {
        question: {
          en: "What is the main challenge that StyleGAN addresses in image generation?",
          es: "¿Cuál es el principal desafío que StyleGAN aborda en generación de imágenes?",
          de: "Was ist die Hauptherausforderung die StyleGAN in Bildgenerierung adressiert?",
          nl: "Wat is de belangrijkste uitdaging die StyleGAN aanpakt in beeldgeneratie?"
        },
        options: [
          { en: "Controlling specific attributes at different scales through style-based generator architecture", es: "Controlar atributos específicos a diferentes escalas a través de arquitectura generadora basada en estilo", de: "Spezifische Attribute in verschiedenen Skalen durch stilbasierte Generator-Architektur steuern", nl: "Specifieke attributen op verschillende schalen controleren door stijl-gebaseerde generator architectuur" },
          { en: "Generating images in different artistic styles only", es: "Generar imágenes solo en diferentes estilos artísticos", de: "Nur Bilder in verschiedenen künstlerischen Stilen generieren", nl: "Alleen afbeeldingen genereren in verschillende artistieke stijlen" },
          { en: "Creating stylish-looking networks", es: "Crear redes de aspecto elegante", de: "Stylish aussehende Netzwerke erstellen", nl: "Stijlvol uitziende netwerken maken" },
          { en: "Styling images after generation", es: "Estilizar imágenes después de generación", de: "Bilder nach Generierung stylen", nl: "Afbeeldingen na generatie stylen" }
        ],
        correct: 0,
        explanation: {
          en: "StyleGAN introduces adaptive instance normalization (AdaIN) to inject style information at each layer, allowing independent control over coarse features (pose, face shape) to fine details (hair, skin texture), enabling unprecedented control and quality in face generation.",
          es: "StyleGAN introduce normalización de instancia adaptativa (AdaIN) para inyectar información de estilo en cada capa, permitiendo control independiente sobre características gruesas (pose, forma de cara) a detalles finos (cabello, textura de piel), permitiendo control y calidad sin precedentes en generación de caras.",
          de: "StyleGAN führt adaptive Instanznormalisierung (AdaIN) ein um Stil-Informationen in jeder Schicht zu injizieren, ermöglicht unabhängige Kontrolle über grobe Features (Pose, Gesichtsform) bis feine Details (Haare, Hauttextur), ermöglicht beispiellose Kontrolle und Qualität in Gesichtsgenerierung.",
          nl: "StyleGAN introduceert adaptive instance normalization (AdaIN) om stijlinformatie in elke laag te injecteren, maakt onafhankelijke controle mogelijk over grove kenmerken (pose, gezichtsvorm) tot fijne details (haar, huidtextuur), maakt ongekende controle en kwaliteit mogelijk in gezichtsgeneratie."
        }
      },
      {
        question: {
          en: "What is the purpose of feature alignment in domain adaptation for computer vision?",
          es: "¿Cuál es el propósito de la alineación de características en adaptación de dominio para visión por computadora?",
          de: "Was ist der Zweck von Feature-Ausrichtung in Domänenanpassung für Computer Vision?",
          nl: "Wat is het doel van feature afstemming in domein aanpassing voor computer vision?"
        },
        options: [
          { en: "Minimizing distribution discrepancy between source and target domain features for transfer", es: "Minimizar discrepancia de distribución entre características de dominio fuente y objetivo para transferencia", de: "Verteilungsdiskrepanz zwischen Quell- und Ziel-Domänen-Features für Transfer minimieren", nl: "Distributieverschil tussen bron en doel domein features minimaliseren voor overdracht" },
          { en: "Aligning features in straight lines only", es: "Alinear características solo en líneas rectas", de: "Features nur in geraden Linien ausrichten", nl: "Features alleen in rechte lijnen uitlijnen" },
          { en: "Matching feature dimensions only", es: "Coincidir solo dimensiones de características", de: "Nur Feature-Dimensionen anpassen", nl: "Alleen feature dimensies matchen" },
          { en: "Aligning network architectures between domains", es: "Alinear arquitecturas de red entre dominios", de: "Netzwerkarchitekturen zwischen Domänen ausrichten", nl: "Netwerkarchitecturen tussen domeinen uitlijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature alignment uses techniques like adversarial training or maximum mean discrepancy to make feature distributions from source and target domains indistinguishable, enabling models trained on labeled source data to work on unlabeled target data.",
          es: "La alineación de características usa técnicas como entrenamiento adversario o discrepancia de media máxima para hacer distribuciones de características de dominios fuente y objetivo indistinguibles, permitiendo que modelos entrenados en datos fuente etiquetados funcionen en datos objetivo no etiquetados.",
          de: "Feature-Ausrichtung verwendet Techniken wie adversariales Training oder Maximum Mean Discrepancy um Feature-Verteilungen von Quell- und Ziel-Domänen ununterscheidbar zu machen, ermöglicht auf beschrifteten Quelldaten trainierten Modellen auf unbeschrifteten Zieldaten zu arbeiten.",
          nl: "Feature afstemming gebruikt technieken zoals adversariële training of maximum mean discrepancy om feature distributies van bron en doel domeinen ononderscheidbaar te maken, maakt modellen getraind op gelabelde brondata mogelijk te werken op ongelabelde doeldata."
        }
      },
      {
        question: {
          en: "What is the fundamental difference between instance segmentation and panoptic segmentation?",
          es: "¿Cuál es la diferencia fundamental entre segmentación de instancia y segmentación panóptica?",
          de: "Was ist der grundlegende Unterschied zwischen Instanzsegmentierung und panoptischer Segmentierung?",
          nl: "Wat is het fundamentele verschil tussen instantie segmentatie en panoptische segmentatie?"
        },
        options: [
          { en: "Panoptic combines instance segmentation (things) with semantic segmentation (stuff) for complete scene parsing", es: "Panóptico combina segmentación de instancia (cosas) con segmentación semántica (material) para análisis completo de escena", de: "Panoptisch kombiniert Instanzsegmentierung (Dinge) mit semantischer Segmentierung (Zeug) für vollständige Szenenanalyse", nl: "Panoptisch combineert instantie segmentatie (dingen) met semantische segmentatie (spul) voor complete scène analyse" },
          { en: "Panoptic provides panoramic views only", es: "Panóptico proporciona solo vistas panorámicas", de: "Panoptisch bietet nur Panoramaansichten", nl: "Panoptisch biedt alleen panoramische weergaven" },
          { en: "Instance is faster than panoptic", es: "Instancia es más rápida que panóptico", de: "Instanz ist schneller als panoptisch", nl: "Instantie is sneller dan panoptisch" },
          { en: "Panoptic only segments backgrounds", es: "Panóptico solo segmenta fondos", de: "Panoptisch segmentiert nur Hintergründe", nl: "Panoptisch segmenteert alleen achtergronden" }
        ],
        correct: 0,
        explanation: {
          en: "Instance segmentation identifies individual countable objects (cars, people), while panoptic segmentation unifies this with semantic segmentation of amorphous regions (sky, road), assigning every pixel a class label and instance ID where applicable for holistic scene understanding.",
          es: "La segmentación de instancia identifica objetos contables individuales (autos, personas), mientras la segmentación panóptica unifica esto con segmentación semántica de regiones amorfas (cielo, carretera), asignando a cada píxel una etiqueta de clase e ID de instancia donde aplica para comprensión holística de escena.",
          de: "Instanzsegmentierung identifiziert einzelne zählbare Objekte (Autos, Menschen), während panoptische Segmentierung dies mit semantischer Segmentierung amorpher Regionen (Himmel, Straße) vereint, weist jedem Pixel ein Klassen-Label und Instanz-ID wo zutreffend zu für ganzheitliches Szenenverständnis.",
          nl: "Instantie segmentatie identificeert individuele telbare objecten (auto's, mensen), terwijl panoptische segmentatie dit verenigt met semantische segmentatie van amorfe regio's (lucht, weg), wijst elk pixel een klasselabel en instantie ID toe waar van toepassing voor holistisch scènebegrip."
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