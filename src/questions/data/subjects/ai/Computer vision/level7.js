// Computer Vision Quiz - Level 7: Advanced CNN Architectures and Medical Imaging
(function() {
  const level7 = {
    name: {
      en: "Computer Vision Level 7",
      es: "Visión por Computadora Nivel 7",
      de: "Computer Vision Stufe 7",
      nl: "Computer Vision Level 7"
    },
    questions: [
      {
        question: {
          en: "What is semantic segmentation in computer vision?",
          es: "¿Qué es la segmentación semántica en visión por computadora?",
          de: "Was ist semantische Segmentierung in Computer Vision?",
          nl: "Wat is semantische segmentatie in computer vision?"
        },
        options: [
          { en: "Classifying every pixel in an image to understand scene structure", es: "Clasificar cada píxel en una imagen para entender la estructura de la escena", de: "Jeden Pixel in einem Bild klassifizieren um Szenenstruktur zu verstehen", nl: "Elke pixel in een afbeelding classificeren om scènestructuur te begrijpen" },
          { en: "Segmenting images by semantic meaning only", es: "Segmentar imágenes solo por significado semántico", de: "Bilder nur nach semantischer Bedeutung segmentieren", nl: "Afbeeldingen alleen segmenteren op semantische betekenis" },
          { en: "Creating semantic labels for images", es: "Crear etiquetas semánticas para imágenes", de: "Semantische Labels für Bilder erstellen", nl: "Semantische labels voor afbeeldingen maken" },
          { en: "Segmenting text within images", es: "Segmentar texto dentro de imágenes", de: "Text in Bildern segmentieren", nl: "Tekst in afbeeldingen segmenteren" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic segmentation assigns a class label to every pixel, creating dense predictions that show exactly which parts of an image belong to objects like cars, roads, sky, etc.",
          es: "La segmentación semántica asigna una etiqueta de clase a cada píxel, creando predicciones densas que muestran exactamente qué partes de una imagen pertenecen a objetos como autos, carreteras, cielo, etc.",
          de: "Semantische Segmentierung weist jedem Pixel eine Klassenlabel zu, erstellt dichte Vorhersagen die genau zeigen welche Teile eines Bildes zu Objekten wie Autos, Straßen, Himmel, etc. gehören.",
          nl: "Semantische segmentatie wijst een klasselabel toe aan elke pixel, creëert dichte voorspellingen die precies tonen welke delen van een afbeelding behoren tot objecten zoals auto's, wegen, lucht, etc."
        }
      },
      {
        question: {
          en: "What is the key innovation of the U-Net architecture for medical image segmentation?",
          es: "¿Cuál es la innovación clave de la arquitectura U-Net para segmentación de imágenes médicas?",
          de: "Was ist die Schlüsselinnovation der U-Net-Architektur für medizinische Bildsegmentierung?",
          nl: "Wat is de belangrijkste innovatie van de U-Net architectuur voor medische beeldsegmentatie?"
        },
        options: [
          { en: "Skip connections that combine low-level and high-level features for precise localization", es: "Conexiones de salto que combinan características de bajo y alto nivel para localización precisa", de: "Skip-Verbindungen die Low-Level und High-Level Features für präzise Lokalisierung kombinieren", nl: "Skip verbindingen die low-level en high-level features combineren voor precieze lokalisatie" },
          { en: "Using only medical datasets for training", es: "Usar solo conjuntos de datos médicos para entrenamiento", de: "Nur medizinische Datensätze für Training verwenden", nl: "Alleen medische datasets gebruiken voor training" },
          { en: "U-shaped physical design of the network", es: "Diseño físico en forma de U de la red", de: "U-förmiges physisches Design des Netzwerks", nl: "U-vormig fysiek ontwerp van het netwerk" },
          { en: "Using only grayscale medical images", es: "Usar solo imágenes médicas en escala de grises", de: "Nur Graustufenbilder medizinischer Bilder verwenden", nl: "Alleen grijstinten medische afbeeldingen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "U-Net's encoder-decoder architecture with skip connections preserves spatial information from early layers, enabling precise pixel-level segmentation crucial for medical applications.",
          es: "La arquitectura encoder-decoder de U-Net con conexiones de salto preserva información espacial de capas tempranas, permitiendo segmentación precisa a nivel de píxel crucial para aplicaciones médicas.",
          de: "U-Nets Encoder-Decoder-Architektur mit Skip-Verbindungen bewahrt räumliche Informationen aus frühen Schichten, ermöglicht präzise Pixel-Level-Segmentierung entscheidend für medizinische Anwendungen.",
          nl: "U-Net's encoder-decoder architectuur met skip verbindingen behoudt ruimtelijke informatie van vroege lagen, maakt precieze pixel-niveau segmentatie mogelijk cruciaal voor medische toepassingen."
        }
      },
      {
        question: {
          en: "What is attention mechanism's role in modern computer vision models?",
          es: "¿Cuál es el papel del mecanismo de atención en modelos modernos de visión por computadora?",
          de: "Welche Rolle spielt der Aufmerksamkeitsmechanismus in modernen Computer Vision Modellen?",
          nl: "Wat is de rol van het aandachtsmechanisme in moderne computer vision modellen?"
        },
        options: [
          { en: "Focusing computational resources on the most relevant parts of an image", es: "Enfocar recursos computacionales en las partes más relevantes de una imagen", de: "Rechenressourcen auf die relevantesten Teile eines Bildes fokussieren", nl: "Computationele bronnen focussen op de meest relevante delen van een afbeelding" },
          { en: "Making models pay attention to training", es: "Hacer que los modelos presten atención al entrenamiento", de: "Modelle dazu bringen dem Training Aufmerksamkeit zu schenken", nl: "Modellen aandacht laten besteden aan training" },
          { en: "Alerting users when objects are detected", es: "Alertar a usuarios cuando se detectan objetos", de: "Benutzer alarmieren wenn Objekte erkannt werden", nl: "Gebruikers waarschuwen wanneer objecten worden gedetecteerd" },
          { en: "Attending to image quality issues", es: "Atender problemas de calidad de imagen", de: "Bildqualitätsprobleme beachten", nl: "Aandacht besteden aan beeldkwaliteitsproblemen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow models to dynamically weight different spatial locations or feature channels, improving performance by concentrating on informative regions while suppressing irrelevant areas.",
          es: "Los mecanismos de atención permiten a los modelos ponderar dinámicamente diferentes ubicaciones espaciales o canales de características, mejorando el rendimiento concentrándose en regiones informativas mientras suprimen áreas irrelevantes.",
          de: "Aufmerksamkeitsmechanismen ermöglichen Modellen verschiedene räumliche Positionen oder Feature-Kanäle dynamisch zu gewichten, verbessern Leistung durch Konzentration auf informative Regionen während irrelevante Bereiche unterdrückt werden.",
          nl: "Aandachtsmechanismen stellen modellen in staat verschillende ruimtelijke locaties of feature kanalen dynamisch te wegen, verbeteren prestaties door zich te concentreren op informatieve regio's terwijl irrelevante gebieden worden onderdrukt."
        }
      },
      {
        question: {
          en: "What advantage do Vision Transformers (ViTs) offer over traditional CNNs?",
          es: "¿Qué ventaja ofrecen los Vision Transformers (ViTs) sobre las CNN tradicionales?",
          de: "Welchen Vorteil bieten Vision Transformers (ViTs) gegenüber traditionellen CNNs?",
          nl: "Welk voordeel bieden Vision Transformers (ViTs) ten opzichte van traditionele CNNs?"
        },
        options: [
          { en: "Global self-attention captures long-range dependencies better than local convolutions", es: "La auto-atención global captura dependencias de largo alcance mejor que las convoluciones locales", de: "Globale Selbstaufmerksamkeit erfasst weitreichende Abhängigkeiten besser als lokale Faltungen", nl: "Globale self-attention vangt lange-afstand afhankelijkheden beter dan lokale convoluties" },
          { en: "They transform vision into text", es: "Transforman visión en texto", de: "Sie transformieren Vision in Text", nl: "Ze transformeren visie naar tekst" },
          { en: "They work only with transformer hardware", es: "Solo funcionan con hardware transformer", de: "Sie funktionieren nur mit Transformer-Hardware", nl: "Ze werken alleen met transformer hardware" },
          { en: "They are faster than all CNN architectures", es: "Son más rápidos que todas las arquitecturas CNN", de: "Sie sind schneller als alle CNN-Architekturen", nl: "Ze zijn sneller dan alle CNN architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs process images as sequences of patches with self-attention, enabling each patch to attend to all others simultaneously, capturing global context more effectively than CNNs' hierarchical local processing.",
          es: "Los ViTs procesan imágenes como secuencias de parches con auto-atención, permitiendo que cada parche atienda a todos los otros simultáneamente, capturando contexto global más efectivamente que el procesamiento local jerárquico de las CNN.",
          de: "ViTs verarbeiten Bilder als Sequenzen von Patches mit Selbstaufmerksamkeit, ermöglichen jedem Patch auf alle anderen gleichzeitig zu achten, erfassen globalen Kontext effektiver als CNNs hierarchische lokale Verarbeitung.",
          nl: "ViTs verwerken afbeeldingen als sequenties van patches met self-attention, waardoor elke patch tegelijkertijd kan letten op alle anderen, globale context effectiever vastleggen dan CNNs' hiërarchische lokale verwerking."
        }
      },
      {
        question: {
          en: "What is the primary challenge in medical image analysis using deep learning?",
          es: "¿Cuál es el desafío principal en análisis de imágenes médicas usando aprendizaje profundo?",
          de: "Was ist die Hauptherausforderung in der medizinischen Bildanalyse mit Deep Learning?",
          nl: "Wat is de primaire uitdaging in medische beeldanalyse met deep learning?"
        },
        options: [
          { en: "Limited labeled datasets and need for high precision to avoid misdiagnosis", es: "Conjuntos de datos etiquetados limitados y necesidad de alta precisión para evitar diagnósticos erróneos", de: "Begrenzte beschriftete Datensätze und Bedarf an hoher Präzision um Fehldiagnosen zu vermeiden", nl: "Beperkte gelabelde datasets en behoefte aan hoge precisie om verkeerde diagnoses te voorkomen" },
          { en: "Medical images are always in black and white", es: "Las imágenes médicas siempre están en blanco y negro", de: "Medizinische Bilder sind immer schwarz-weiß", nl: "Medische afbeeldingen zijn altijd zwart-wit" },
          { en: "Doctors don't understand AI technology", es: "Los doctores no entienden la tecnología IA", de: "Ärzte verstehen KI-Technologie nicht", nl: "Artsen begrijpen AI-technologie niet" },
          { en: "Medical equipment is incompatible with AI", es: "El equipo médico es incompatible con IA", de: "Medizinische Geräte sind inkompatibel mit KI", nl: "Medische apparatuur is incompatibel met AI" }
        ],
        correct: 0,
        explanation: {
          en: "Medical AI requires extremely high accuracy due to life-critical decisions, but medical datasets are often small and require expert annotation, making robust model development challenging.",
          es: "La IA médica requiere extrema precisión debido a decisiones críticas para la vida, pero los conjuntos de datos médicos son a menudo pequeños y requieren anotación experta, haciendo el desarrollo de modelos robustos desafiante.",
          de: "Medizinische KI erfordert extrem hohe Genauigkeit aufgrund lebenswichtiger Entscheidungen, aber medizinische Datensätze sind oft klein und erfordern Expertenannotation, was robuste Modellentwicklung herausfordernd macht.",
          nl: "Medische AI vereist extreem hoge nauwkeurigheid vanwege levenskritieke beslissingen, maar medische datasets zijn vaak klein en vereisen expert annotatie, wat robuuste modelontwikkeling uitdagend maakt."
        }
      },
      {
        question: {
          en: "What is the main advantage of R-CNN over traditional sliding window approaches?",
          es: "¿Cuál es la principal ventaja de R-CNN sobre enfoques tradicionales de ventana deslizante?",
          de: "Was ist der Hauptvorteil von R-CNN gegenüber traditionellen Sliding-Window-Ansätzen?",
          nl: "Wat is het hoofdvoordeel van R-CNN ten opzichte van traditionele sliding window benaderingen?"
        },
        options: [
          { en: "Selective search for region proposals reduces computational cost and improves accuracy", es: "Búsqueda selectiva para propuestas de región reduce costo computacional y mejora precisión", de: "Selektive Suche für Regionsvorschläge reduziert Rechenkosten und verbessert Genauigkeit", nl: "Selectieve zoektocht voor regiovoorstellen vermindert computationele kosten en verbetert nauwkeurigheid" },
          { en: "R-CNN only uses rectangular windows", es: "R-CNN solo usa ventanas rectangulares", de: "R-CNN verwendet nur rechteckige Fenster", nl: "R-CNN gebruikt alleen rechthoekige vensters" },
          { en: "R-CNN processes images faster", es: "R-CNN procesa imágenes más rápido", de: "R-CNN verarbeitet Bilder schneller", nl: "R-CNN verwerkt afbeeldingen sneller" },
          { en: "R-CNN requires less training data", es: "R-CNN requiere menos datos de entrenamiento", de: "R-CNN benötigt weniger Trainingsdaten", nl: "R-CNN vereist minder trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "R-CNN uses selective search to generate around 2000 region proposals instead of exhaustively scanning all possible windows, significantly reducing computation while focusing on likely object locations.",
          es: "R-CNN usa búsqueda selectiva para generar alrededor de 2000 propuestas de región en lugar de escanear exhaustivamente todas las ventanas posibles, reduciendo significativamente la computación mientras se enfoca en ubicaciones probables de objetos.",
          de: "R-CNN verwendet selektive Suche um etwa 2000 Regionsvorschläge zu generieren anstatt alle möglichen Fenster erschöpfend zu scannen, reduziert Berechnung signifikant während es sich auf wahrscheinliche Objektpositionen konzentriert.",
          nl: "R-CNN gebruikt selectieve zoektocht om ongeveer 2000 regiovoorstellen te genereren in plaats van uitputtend alle mogelijke vensters te scannen, vermindert berekening significant terwijl het zich concentreert op waarschijnlijke objectlocaties."
        }
      },
      {
        question: {
          en: "What innovation does Fast R-CNN introduce over the original R-CNN?",
          es: "¿Qué innovación introduce Fast R-CNN sobre el R-CNN original?",
          de: "Welche Innovation führt Fast R-CNN gegenüber dem ursprünglichen R-CNN ein?",
          nl: "Welke innovatie introduceert Fast R-CNN ten opzichte van de originele R-CNN?"
        },
        options: [
          { en: "Sharing convolutional computations across region proposals using ROI pooling", es: "Compartir computaciones convolucionales entre propuestas de región usando pooling ROI", de: "Teilen von Faltungsberechnungen zwischen Regionsvorschlägen mittels ROI-Pooling", nl: "Convolutionele berekeningen delen tussen regiovoorstellen met behulp van ROI pooling" },
          { en: "Using faster processors only", es: "Usar solo procesadores más rápidos", de: "Nur schnellere Prozessoren verwenden", nl: "Alleen snellere processors gebruiken" },
          { en: "Reducing image resolution", es: "Reducir resolución de imagen", de: "Bildauflösung reduzieren", nl: "Beeldresolutie verminderen" },
          { en: "Simplifying the CNN architecture", es: "Simplificar la arquitectura CNN", de: "CNN-Architektur vereinfachen", nl: "CNN architectuur vereenvoudigen" }
        ],
        correct: 0,
        explanation: {
          en: "Fast R-CNN computes the full-image convolutional feature map once and then extracts fixed-size features for each region proposal using ROI pooling, eliminating redundant CNN computations.",
          es: "Fast R-CNN calcula el mapa de características convolucional de imagen completa una vez y luego extrae características de tamaño fijo para cada propuesta de región usando pooling ROI, eliminando computaciones CNN redundantes.",
          de: "Fast R-CNN berechnet die Vollbild-Faltungsfeature-Map einmal und extrahiert dann Features fester Größe für jeden Regionsvorschlag mittels ROI-Pooling, eliminiert redundante CNN-Berechnungen.",
          nl: "Fast R-CNN berekent de volledige-beeld convolutionele feature map eenmaal en extraheert vervolgens features van vaste grootte voor elk regiovoorstel met ROI pooling, elimineert redundante CNN berekeningen."
        }
      },
      {
        question: {
          en: "What is the key innovation of Faster R-CNN that makes it truly end-to-end?",
          es: "¿Cuál es la innovación clave de Faster R-CNN que lo hace verdaderamente de extremo a extremo?",
          de: "Was ist die Schlüsselinnovation von Faster R-CNN die es wirklich End-to-End macht?",
          nl: "Wat is de sleutelinnovatie van Faster R-CNN die het echt end-to-end maakt?"
        },
        options: [
          { en: "Region Proposal Network (RPN) that generates object proposals within the CNN", es: "Red de Propuesta de Región (RPN) que genera propuestas de objetos dentro de la CNN", de: "Region Proposal Network (RPN) das Objektvorschläge innerhalb der CNN generiert", nl: "Region Proposal Network (RPN) die objectvoorstellen genereert binnen de CNN" },
          { en: "Faster GPU processing", es: "Procesamiento GPU más rápido", de: "Schnellere GPU-Verarbeitung", nl: "Snellere GPU verwerking" },
          { en: "Smaller network architecture", es: "Arquitectura de red más pequeña", de: "Kleinere Netzwerkarchitektur", nl: "Kleinere netwerkarchitectuur" },
          { en: "Reduced training time only", es: "Solo tiempo de entrenamiento reducido", de: "Nur reduzierte Trainingszeit", nl: "Alleen verminderde trainingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Faster R-CNN integrates region proposal generation into the CNN itself through RPN, eliminating the need for external selective search and enabling fully differentiable end-to-end training.",
          es: "Faster R-CNN integra generación de propuestas de región en la CNN misma a través de RPN, eliminando la necesidad de búsqueda selectiva externa y permitiendo entrenamiento de extremo a extremo completamente diferenciable.",
          de: "Faster R-CNN integriert Regionsvorschlag-Generierung in die CNN selbst durch RPN, eliminiert Bedarf für externe selektive Suche und ermöglicht vollständig differenzierbares End-to-End-Training.",
          nl: "Faster R-CNN integreert regiovoorstel generatie in de CNN zelf door RPN, elimineert de behoefte aan externe selectieve zoektocht en maakt volledig differentieerbare end-to-end training mogelijk."
        }
      },
      {
        question: {
          en: "What is the Lucas-Kanade method used for in optical flow estimation?",
          es: "¿Para qué se usa el método Lucas-Kanade en estimación de flujo óptico?",
          de: "Wofür wird die Lucas-Kanade-Methode in der Optical Flow Estimation verwendet?",
          nl: "Waarvoor wordt de Lucas-Kanade methode gebruikt bij optische flow schatting?"
        },
        options: [
          { en: "Computing sparse optical flow by tracking good features across frames", es: "Computar flujo óptico disperso rastreando buenas características a través de fotogramas", de: "Spärlichen Optical Flow berechnen durch Verfolgung guter Features über Frames", nl: "Schaarse optische flow berekenen door goede kenmerken te volgen over frames" },
          { en: "Dense optical flow computation only", es: "Solo computación de flujo óptico denso", de: "Nur dichte Optical Flow Berechnung", nl: "Alleen dichte optische flow berekening" },
          { en: "Camera calibration procedures", es: "Procedimientos de calibración de cámara", de: "Kamerakalibrierungsverfahren", nl: "Camera calibratieprocedures" },
          { en: "Image enhancement techniques", es: "Técnicas de mejora de imagen", de: "Bildverbesserungstechniken", nl: "Beeldverbeteringstechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "Lucas-Kanade tracks sparse feature points by assuming local brightness constancy and solving for displacement vectors that minimize intensity differences between frames.",
          es: "Lucas-Kanade rastrea puntos de características dispersos asumiendo constancia de brillo local y resolviendo vectores de desplazamiento que minimizan diferencias de intensidad entre fotogramas.",
          de: "Lucas-Kanade verfolgt spärliche Feature-Punkte durch Annahme lokaler Helligkeitskonstanz und Lösung für Verschiebungsvektoren die Intensitätsunterschiede zwischen Frames minimieren.",
          nl: "Lucas-Kanade volgt schaarse kenmerkpunten door lokale helderheidsconstantie aan te nemen en op te lossen voor verplaatsingsvectoren die intensiteitsverschillen tussen frames minimaliseren."
        }
      },
      {
        question: {
          en: "What is the fundamental assumption behind optical flow algorithms?",
          es: "¿Cuál es la suposición fundamental detrás de algoritmos de flujo óptico?",
          de: "Was ist die grundlegende Annahme hinter Optical Flow Algorithmen?",
          nl: "Wat is de fundamentele aanname achter optische flow algoritmes?"
        },
        options: [
          { en: "Brightness constancy constraint - pixel intensities remain constant as they move", es: "Restricción de constancia de brillo - intensidades de píxel permanecen constantes mientras se mueven", de: "Helligkeitskonstanz-Beschränkung - Pixelintensitäten bleiben konstant während sie sich bewegen", nl: "Helderheidsconstantie beperking - pixelintensiteiten blijven constant terwijl ze bewegen" },
          { en: "Objects always move in straight lines", es: "Los objetos siempre se mueven en líneas rectas", de: "Objekte bewegen sich immer in geraden Linien", nl: "Objecten bewegen altijd in rechte lijnen" },
          { en: "Camera position never changes", es: "La posición de la cámara nunca cambia", de: "Kameraposition ändert sich nie", nl: "Camerapositie verandert nooit" },
          { en: "All motion is horizontal only", es: "Todo movimiento es solo horizontal", de: "Alle Bewegung ist nur horizontal", nl: "Alle beweging is alleen horizontaal" }
        ],
        correct: 0,
        explanation: {
          en: "Optical flow relies on the brightness constancy assumption that the same physical point maintains constant intensity as it moves between frames, allowing motion estimation through intensity matching.",
          es: "El flujo óptico se basa en la suposición de constancia de brillo que el mismo punto físico mantiene intensidad constante mientras se mueve entre fotogramas, permitiendo estimación de movimiento a través de coincidencia de intensidad.",
          de: "Optical Flow basiert auf der Helligkeitskonstanz-Annahme dass derselbe physische Punkt konstante Intensität beibehält während er sich zwischen Frames bewegt, ermöglicht Bewegungsschätzung durch Intensitätsabgleich.",
          nl: "Optische flow berust op de helderheidsconstantie aanname dat hetzelfde fysieke punt constante intensiteit behoudt terwijl het beweegt tussen frames, maakt bewegingsschatting mogelijk door intensiteitsmatching."
        }
      },
      {
        question: {
          en: "What is the aperture problem in optical flow estimation?",
          es: "¿Qué es el problema de apertura en estimación de flujo óptico?",
          de: "Was ist das Apertur-Problem in der Optical Flow Estimation?",
          nl: "Wat is het apertuurprobleem bij optische flow schatting?"
        },
        options: [
          { en: "Ambiguity in motion direction when observing motion through a small aperture", es: "Ambigüedad en dirección de movimiento al observar movimiento a través de una apertura pequeña", de: "Mehrdeutigkeit in Bewegungsrichtung beim Beobachten von Bewegung durch kleine Öffnung", nl: "Dubbelzinnigheid in bewegingsrichting bij het observeren van beweging door een kleine opening" },
          { en: "Camera aperture settings affecting image quality", es: "Configuraciones de apertura de cámara afectando calidad de imagen", de: "Kameraapertur-Einstellungen beeinflussen Bildqualität", nl: "Camera apertuurinstellingen die beeldkwaliteit beïnvloeden" },
          { en: "Problems with wide-angle lenses", es: "Problemas con lentes gran angular", de: "Probleme mit Weitwinkelobjektiven", nl: "Problemen met groothoeklenzen" },
          { en: "Difficulties in low-light conditions", es: "Dificultades en condiciones de poca luz", de: "Schwierigkeiten bei schlechten Lichtverhältnissen", nl: "Moeilijkheden bij weinig licht" }
        ],
        correct: 0,
        explanation: {
          en: "The aperture problem occurs when viewing motion through a small window - only the motion component perpendicular to edges is observable, making motion direction ambiguous for straight edges.",
          es: "El problema de apertura ocurre al ver movimiento a través de una ventana pequeña - solo el componente de movimiento perpendicular a los bordes es observable, haciendo ambigua la dirección de movimiento para bordes rectos.",
          de: "Das Apertur-Problem tritt auf beim Betrachten von Bewegung durch ein kleines Fenster - nur die Bewegungskomponente senkrecht zu Kanten ist beobachtbar, macht Bewegungsrichtung für gerade Kanten mehrdeutig.",
          nl: "Het apertuurprobleem treedt op bij het bekijken van beweging door een klein venster - alleen de bewegingscomponent loodrecht op randen is waarneembaar, waardoor bewegingsrichting dubbelzinnig wordt voor rechte randen."
        }
      },
      {
        question: {
          en: "What is mean-shift tracking used for in computer vision?",
          es: "¿Para qué se usa el seguimiento mean-shift en visión por computadora?",
          de: "Wofür wird Mean-Shift Tracking in Computer Vision verwendet?",
          nl: "Waarvoor wordt mean-shift tracking gebruikt in computer vision?"
        },
        options: [
          { en: "Tracking objects by iteratively finding the mode of a probability distribution", es: "Rastrear objetos encontrando iterativamente el modo de una distribución de probabilidad", de: "Objekte verfolgen durch iteratives Finden des Modus einer Wahrscheinlichkeitsverteilung", nl: "Objecten volgen door iteratief de modus van een waarschijnlijkheidsverdeling te vinden" },
          { en: "Calculating average pixel values", es: "Calcular valores promedio de píxeles", de: "Durchschnittliche Pixelwerte berechnen", nl: "Gemiddelde pixelwaarden berekenen" },
          { en: "Measuring camera shake", es: "Medir vibración de cámara", de: "Kamerawackeln messen", nl: "Cameratrillingen meten" },
          { en: "Shifting image brightness levels", es: "Cambiar niveles de brillo de imagen", de: "Bildhelligkeit-Level verschieben", nl: "Beeldhelderheidsniveaus verschuiven" }
        ],
        correct: 0,
        explanation: {
          en: "Mean-shift tracking models the target using color histograms and iteratively moves the tracking window toward the region with highest probability density, converging to the object's new location.",
          es: "El seguimiento mean-shift modela el objetivo usando histogramas de color y mueve iterativamente la ventana de seguimiento hacia la región con mayor densidad de probabilidad, convergiendo a la nueva ubicación del objeto.",
          de: "Mean-Shift Tracking modelliert das Ziel mittels Farbhistogrammen und bewegt iterativ das Tracking-Fenster zur Region mit höchster Wahrscheinlichkeitsdichte, konvergiert zur neuen Objektposition.",
          nl: "Mean-shift tracking modelleert het doel met kleurhistogrammen en beweegt iteratief het tracking venster naar de regio met hoogste waarschijnlijkheidsdichtheid, convergeert naar de nieuwe objectlocatie."
        }
      },
      {
        question: {
          en: "What is the Kalman filter's role in object tracking?",
          es: "¿Cuál es el papel del filtro de Kalman en seguimiento de objetos?",
          de: "Welche Rolle spielt der Kalman-Filter im Object Tracking?",
          nl: "Wat is de rol van het Kalman filter bij object tracking?"
        },
        options: [
          { en: "Predicting future object states and handling uncertainty in measurements", es: "Predecir estados futuros de objetos y manejar incertidumbre en mediciones", de: "Zukünftige Objektzustände vorhersagen und Unsicherheit in Messungen handhaben", nl: "Toekomstige objecttoestanden voorspellen en onzekerheid in metingen hanteren" },
          { en: "Filtering out noise from images", es: "Filtrar ruido de imágenes", de: "Rauschen aus Bildern filtern", nl: "Ruis uit afbeeldingen filteren" },
          { en: "Smoothing object trajectories only", es: "Solo suavizar trayectorias de objetos", de: "Nur Objektbahnen glätten", nl: "Alleen objecttrajecten gladstrijken" },
          { en: "Detecting object boundaries", es: "Detectar límites de objetos", de: "Objektgrenzen erkennen", nl: "Objectgrenzen detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Kalman filter provides optimal state estimation by combining predictions based on motion models with noisy observations, enabling robust tracking even when objects are temporarily occluded.",
          es: "El filtro de Kalman proporciona estimación óptima de estado combinando predicciones basadas en modelos de movimiento con observaciones ruidosas, permitiendo seguimiento robusto incluso cuando objetos están temporalmente ocluidos.",
          de: "Kalman-Filter bietet optimale Zustandsschätzung durch Kombination von Vorhersagen basierend auf Bewegungsmodellen mit rauschenden Beobachtungen, ermöglicht robustes Tracking auch wenn Objekte temporär verdeckt sind.",
          nl: "Kalman filter biedt optimale toestandschatting door voorspellingen gebaseerd op bewegingsmodellen te combineren met ruizige observaties, maakt robuust tracking mogelijk zelfs wanneer objecten tijdelijk verborgen zijn."
        }
      },
      {
        question: {
          en: "What is multi-object tracking (MOT) trying to solve?",
          es: "¿Qué está tratando de resolver el seguimiento multi-objeto (MOT)?",
          de: "Was versucht Multi-Object Tracking (MOT) zu lösen?",
          nl: "Wat probeert multi-object tracking (MOT) op te lossen?"
        },
        options: [
          { en: "Maintaining consistent identities for multiple objects while tracking their movements", es: "Mantener identidades consistentes para múltiples objetos mientras rastrea sus movimientos", de: "Konsistente Identitäten für mehrere Objekte beibehalten während ihrer Bewegungsverfolgung", nl: "Consistente identiteiten behouden voor meerdere objecten terwijl hun bewegingen worden gevolgd" },
          { en: "Tracking only the largest objects", es: "Rastrear solo los objetos más grandes", de: "Nur die größten Objekte verfolgen", nl: "Alleen de grootste objecten volgen" },
          { en: "Detecting multiple object types", es: "Detectar múltiples tipos de objetos", de: "Mehrere Objekttypen erkennen", nl: "Meerdere objecttypes detecteren" },
          { en: "Counting total number of objects", es: "Contar número total de objetos", de: "Gesamtzahl der Objekte zählen", nl: "Totaal aantal objecten tellen" }
        ],
        correct: 0,
        explanation: {
          en: "MOT addresses the data association problem of linking detections across frames while handling object interactions, occlusions, and maintaining unique IDs for each tracked object throughout the sequence.",
          es: "MOT aborda el problema de asociación de datos de vincular detecciones a través de fotogramas mientras maneja interacciones de objetos, oclusiones y mantiene IDs únicos para cada objeto rastreado durante la secuencia.",
          de: "MOT adressiert das Datenassoziationsproblem der Verknüpfung von Erkennungen über Frames während es Objektinteraktionen, Verdeckungen handhabt und eindeutige IDs für jedes verfolgte Objekt während der Sequenz beibehält.",
          nl: "MOT pakt het data-associatieprobleem aan van het koppelen van detecties over frames terwijl het objectinteracties, occlusies hanteert en unieke IDs behoudt voor elk gevolgd object gedurende de sequentie."
        }
      },
      {
        question: {
          en: "What is the Hungarian algorithm used for in multi-object tracking?",
          es: "¿Para qué se usa el algoritmo húngaro en seguimiento multi-objeto?",
          de: "Wofür wird der Ungarische Algorithmus im Multi-Object Tracking verwendet?",
          nl: "Waarvoor wordt het Hongaarse algoritme gebruikt bij multi-object tracking?"
        },
        options: [
          { en: "Solving the assignment problem to optimally match detections with existing tracks", es: "Resolver el problema de asignación para coincidir óptimamente detecciones con pistas existentes", de: "Das Zuordnungsproblem lösen um Erkennungen optimal mit bestehenden Spuren zu verknüpfen", nl: "Het toewijzingsprobleem oplossen om detecties optimaal te matchen met bestaande sporen" },
          { en: "Hungarian language processing", es: "Procesamiento de idioma húngaro", de: "Ungarische Sprachverarbeitung", nl: "Hongaarse taalverwerking" },
          { en: "Geographic tracking applications", es: "Aplicaciones de seguimiento geográfico", de: "Geografische Tracking-Anwendungen", nl: "Geografische tracking applicaties" },
          { en: "Cultural analysis of tracking patterns", es: "Análisis cultural de patrones de seguimiento", de: "Kulturelle Analyse von Tracking-Mustern", nl: "Culturele analyse van tracking patronen" }
        ],
        correct: 0,
        explanation: {
          en: "The Hungarian algorithm finds the optimal assignment between detections and tracks by minimizing the total cost matrix, ensuring each detection is matched to at most one track with minimum overall cost.",
          es: "El algoritmo húngaro encuentra la asignación óptima entre detecciones y pistas minimizando la matriz de costo total, asegurando que cada detección coincida con como máximo una pista con costo total mínimo.",
          de: "Der Ungarische Algorithmus findet die optimale Zuordnung zwischen Erkennungen und Spuren durch Minimierung der Gesamtkostenmatrix, stellt sicher dass jede Erkennung mit höchstens einer Spur mit minimalen Gesamtkosten verknüpft wird.",
          nl: "Het Hongaarse algoritme vindt de optimale toewijzing tussen detecties en sporen door de totale kostenmatrix te minimaliseren, zorgt ervoor dat elke detectie gematcht wordt met hoogstens één spoor met minimale totale kosten."
        }
      },
      {
        question: {
          en: "What is DeepSORT's main improvement over SORT tracking?",
          es: "¿Cuál es la principal mejora de DeepSORT sobre el seguimiento SORT?",
          de: "Was ist DeepSORTs Hauptverbesserung gegenüber SORT Tracking?",
          nl: "Wat is DeepSORT's hoofdverbetering ten opzichte van SORT tracking?"
        },
        options: [
          { en: "Adding deep appearance features to reduce identity switches during occlusions", es: "Agregar características de apariencia profunda para reducir cambios de identidad durante oclusiones", de: "Tiefe Erscheinungsmerkmale hinzufügen um Identitätswechsel während Verdeckungen zu reduzieren", nl: "Diepe verschijningskenmerken toevoegen om identiteitswisselingen tijdens occlusies te verminderen" },
          { en: "Deeper neural network architectures only", es: "Solo arquitecturas de redes neuronales más profundas", de: "Nur tiefere neuronale Netzwerkarchitekturen", nl: "Alleen diepere neurale netwerkarchitecturen" },
          { en: "Faster processing speed", es: "Velocidad de procesamiento más rápida", de: "Schnellere Verarbeitungsgeschwindigkeit", nl: "Snellere verwerkingssnelheid" },
          { en: "Better bounding box regression", es: "Mejor regresión de caja delimitadora", de: "Bessere Bounding Box Regression", nl: "Betere bounding box regressie" }
        ],
        correct: 0,
        explanation: {
          en: "DeepSORT enhances SORT by integrating CNN-based appearance descriptors with motion information, helping maintain object identities when motion-based tracking fails due to occlusions or rapid movements.",
          es: "DeepSORT mejora SORT integrando descriptores de apariencia basados en CNN con información de movimiento, ayudando a mantener identidades de objetos cuando el seguimiento basado en movimiento falla debido a oclusiones o movimientos rápidos.",
          de: "DeepSORT verbessert SORT durch Integration CNN-basierter Erscheinungsdeskriptoren mit Bewegungsinformationen, hilft Objektidentitäten zu erhalten wenn bewegungsbasiertes Tracking aufgrund von Verdeckungen oder schnellen Bewegungen versagt.",
          nl: "DeepSORT verbetert SORT door CNN-gebaseerde verschijningsdescriptors te integreren met bewegingsinformatie, helpt objectidentiteiten te behouden wanneer beweging-gebaseerd tracking faalt door occlusies of snelle bewegingen."
        }
      },
      {
        question: {
          en: "What is the main challenge in real-time object tracking?",
          es: "¿Cuál es el principal desafío en seguimiento de objetos en tiempo real?",
          de: "Was ist die Hauptherausforderung im Echtzeit-Object Tracking?",
          nl: "Wat is de hoofduitdaging bij real-time object tracking?"
        },
        options: [
          { en: "Balancing tracking accuracy with computational efficiency for real-time performance", es: "Equilibrar precisión de seguimiento con eficiencia computacional para rendimiento en tiempo real", de: "Tracking-Genauigkeit mit rechnerischer Effizienz für Echtzeit-Performance ausbalancieren", nl: "Tracking nauwkeurigheid balanceren met computationele efficiëntie voor real-time prestaties" },
          { en: "Only processing high-resolution images", es: "Solo procesar imágenes de alta resolución", de: "Nur hochauflösende Bilder verarbeiten", nl: "Alleen hoogresolutie afbeeldingen verwerken" },
          { en: "Tracking multiple object types", es: "Rastrear múltiples tipos de objetos", de: "Mehrere Objekttypen verfolgen", nl: "Meerdere objecttypes volgen" },
          { en: "Working with poor lighting conditions", es: "Trabajar con condiciones de iluminación pobres", de: "Arbeiten bei schlechten Lichtverhältnissen", nl: "Werken met slechte verlichtingsomstandigheden" }
        ],
        correct: 0,
        explanation: {
          en: "Real-time tracking requires maintaining sufficient accuracy while meeting strict latency constraints, often necessitating trade-offs between sophisticated algorithms and computational simplicity.",
          es: "El seguimiento en tiempo real requiere mantener suficiente precisión mientras cumple restricciones estrictas de latencia, a menudo necesitando compromisos entre algoritmos sofisticados y simplicidad computacional.",
          de: "Echtzeit-Tracking erfordert ausreichende Genauigkeit bei strikten Latenz-Beschränkungen, oft notwendige Trade-offs zwischen sophistizierten Algorithmen und rechnerischer Einfachheit.",
          nl: "Real-time tracking vereist voldoende nauwkeurigheid behouden terwijl strikte latentie beperkingen worden nagekomen, vereist vaak afwegingen tussen geavanceerde algoritmes en computationele eenvoud."
        }
      },
      {
        question: {
          en: "What is Intersection over Union (IoU) commonly used for in object detection evaluation?",
          es: "¿Para qué se usa comúnmente Intersección sobre Unión (IoU) en evaluación de detección de objetos?",
          de: "Wofür wird Intersection over Union (IoU) häufig in der Objekterkennungs-Evaluation verwendet?",
          nl: "Waarvoor wordt Intersection over Union (IoU) vaak gebruikt bij objectdetectie evaluatie?"
        },
        options: [
          { en: "Measuring the overlap between predicted and ground truth bounding boxes", es: "Medir la superposición entre cajas delimitadoras predichas y de verdad fundamental", de: "Überlappung zwischen vorhergesagten und Ground Truth Bounding Boxes messen", nl: "Overlap meten tussen voorspelde en ground truth bounding boxes" },
          { en: "Calculating network training speed", es: "Calcular velocidad de entrenamiento de red", de: "Netzwerk-Trainingsgeschwindigkeit berechnen", nl: "Netwerktrainingssnelheid berekenen" },
          { en: "Measuring image quality", es: "Medir calidad de imagen", de: "Bildqualität messen", nl: "Beeldkwaliteit meten" },
          { en: "Evaluating color accuracy", es: "Evaluar precisión de color", de: "Farbgenauigkeit bewerten", nl: "Kleurnauwkeurigheid evalueren" }
        ],
        correct: 0,
        explanation: {
          en: "IoU quantifies how well predicted bounding boxes align with ground truth by computing the ratio of intersection area to union area, with values ranging from 0 (no overlap) to 1 (perfect match).",
          es: "IoU cuantifica qué tan bien las cajas delimitadoras predichas se alinean con la verdad fundamental computando la relación del área de intersección al área de unión, con valores que van de 0 (sin superposición) a 1 (coincidencia perfecta).",
          de: "IoU quantifiziert wie gut vorhergesagte Bounding Boxes mit Ground Truth übereinstimmen durch Berechnung des Verhältnisses von Schnittfläche zu Vereinigungsfläche, mit Werten von 0 (keine Überlappung) bis 1 (perfekte Übereinstimmung).",
          nl: "IoU kwantificeert hoe goed voorspelde bounding boxes aansluiten bij ground truth door de verhouding van intersectieoppervlak tot unie-oppervlak te berekenen, met waarden van 0 (geen overlap) tot 1 (perfecte match)."
        }
      },
      {
        question: {
          en: "What is the role of anchor boxes in modern object detection frameworks?",
          es: "¿Cuál es el papel de las cajas ancla en marcos modernos de detección de objetos?",
          de: "Welche Rolle spielen Anker-Boxen in modernen Objekterkennungs-Frameworks?",
          nl: "Wat is de rol van anchor boxes in moderne objectdetectie frameworks?"
        },
        options: [
          { en: "Providing reference templates at multiple scales and aspect ratios for object localization", es: "Proporcionar plantillas de referencia en múltiples escalas y proporciones para localización de objetos", de: "Referenzvorlagen in mehreren Skalen und Seitenverhältnissen für Objektlokalisierung bereitstellen", nl: "Referentiesjablonen bieden op meerdere schalen en aspectverhoudingen voor objectlokalisatie" },
          { en: "Anchoring images to prevent movement", es: "Anclar imágenes para prevenir movimiento", de: "Bilder verankern um Bewegung zu verhindern", nl: "Afbeeldingen verankeren om beweging te voorkomen" },
          { en: "Creating stable reference points only", es: "Crear solo puntos de referencia estables", de: "Nur stabile Referenzpunkte erstellen", nl: "Alleen stabiele referentiepunten maken" },
          { en: "Reducing computational complexity", es: "Reducir complejidad computacional", de: "Rechnerische Komplexität reduzieren", nl: "Computationele complexiteit verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Anchor boxes serve as predefined reference bounding boxes at different scales and aspect ratios, which detection networks learn to refine to match actual object shapes and locations.",
          es: "Las cajas ancla sirven como cajas delimitadoras de referencia predefinidas en diferentes escalas y proporciones, que las redes de detección aprenden a refinar para coincidir con formas y ubicaciones de objetos reales.",
          de: "Anker-Boxen dienen als vordefinierte Referenz-Bounding Boxes in verschiedenen Skalen und Seitenverhältnissen, die Erkennungsnetzwerke lernen zu verfeinern um tatsächliche Objektformen und -positionen zu entsprechen.",
          nl: "Anchor boxes dienen als vooraf gedefinieerde referentie bounding boxes op verschillende schalen en aspectverhoudingen, die detectienetwerken leren te verfijnen om overeen te komen met werkelijke objectvormen en -locaties."
        }
      },
      {
        question: {
          en: "What is instance segmentation and how does it differ from semantic segmentation?",
          es: "¿Qué es la segmentación de instancias y cómo difiere de la segmentación semántica?",
          de: "Was ist Instanzsegmentierung und wie unterscheidet sie sich von semantischer Segmentierung?",
          nl: "Wat is instantiesegmentatie en hoe verschilt het van semantische segmentatie?"
        },
        options: [
          { en: "Instance segmentation distinguishes between individual objects of the same class", es: "La segmentación de instancias distingue entre objetos individuales de la misma clase", de: "Instanzsegmentierung unterscheidet zwischen individuellen Objekten derselben Klasse", nl: "Instantiesegmentatie onderscheidt tussen individuele objecten van dezelfde klasse" },
          { en: "Instance segmentation only works with single objects", es: "La segmentación de instancias solo funciona con objetos únicos", de: "Instanzsegmentierung funktioniert nur mit einzelnen Objekten", nl: "Instantiesegmentatie werkt alleen met enkele objecten" },
          { en: "Instance segmentation uses different color schemes", es: "La segmentación de instancias usa esquemas de color diferentes", de: "Instanzsegmentierung verwendet verschiedene Farbschemata", nl: "Instantiesegmentatie gebruikt verschillende kleurschema's" },
          { en: "Instance segmentation processes instances faster", es: "La segmentación de instancias procesa instancias más rápido", de: "Instanzsegmentierung verarbeitet Instanzen schneller", nl: "Instantiesegmentatie verwerkt instanties sneller" }
        ],
        correct: 0,
        explanation: {
          en: "While semantic segmentation assigns the same label to all pixels of the same class, instance segmentation provides unique labels for each individual object instance, enabling counting and tracking of separate objects.",
          es: "Mientras la segmentación semántica asigna la misma etiqueta a todos los píxeles de la misma clase, la segmentación de instancias proporciona etiquetas únicas para cada instancia de objeto individual, permitiendo contar y rastrear objetos separados.",
          de: "Während semantische Segmentierung dasselbe Label allen Pixeln derselben Klasse zuweist, bietet Instanzsegmentierung einzigartige Labels für jede individuelle Objektinstanz, ermöglicht Zählung und Verfolgung separater Objekte.",
          nl: "Terwijl semantische segmentatie hetzelfde label toewijst aan alle pixels van dezelfde klasse, biedt instantiesegmentatie unieke labels voor elke individuele objectinstantie, maakt tellen en volgen van afzonderlijke objecten mogelijk."
        }
      },
      {
        question: {
          en: "What is mean Average Precision (mAP) in object detection?",
          es: "¿Qué es la Precisión Media Promedio (mAP) en detección de objetos?",
          de: "Was ist die mittlere durchschnittliche Präzision (mAP) in Objekterkennung?",
          nl: "Wat is gemiddelde Average Precision (mAP) bij objectdetectie?"
        },
        options: [
          { en: "Average of precision values across different recall levels and object classes", es: "Promedio de valores de precisión en diferentes niveles de recall y clases de objetos", de: "Durchschnitt von Präzisionswerten über verschiedene Recall-Stufen und Objektklassen", nl: "Gemiddelde van precisiewaarden over verschillende recall niveaus en objectklassen" },
          { en: "Mean accuracy percentage of predictions", es: "Porcentaje de precisión media de predicciones", de: "Mittlerer Genauigkeitsprozentsatz von Vorhersagen", nl: "Gemiddeld nauwkeurigheidspercentage van voorspellingen" },
          { en: "Map of average pixel values", es: "Mapa de valores promedio de píxeles", de: "Karte durchschnittlicher Pixelwerte", nl: "Kaart van gemiddelde pixelwaarden" },
          { en: "Maximum achievable precision", es: "Precisión máxima alcanzable", de: "Maximal erreichbare Präzision", nl: "Maximaal haalbare precisie" }
        ],
        correct: 0,
        explanation: {
          en: "mAP computes Average Precision (AP) for each class by integrating the precision-recall curve, then averages across all classes, providing a comprehensive single-number metric for evaluating detection model performance.",
          es: "mAP calcula Precisión Media (AP) para cada clase integrando la curva precisión-recall, luego promedia a través de todas las clases, proporcionando una métrica integral de número único para evaluar rendimiento del modelo de detección.",
          de: "mAP berechnet Average Precision (AP) für jede Klasse durch Integration der Präzisions-Recall-Kurve, mittelt dann über alle Klassen, bietet umfassende Einzelzahl-Metrik zur Bewertung der Erkennungsmodellleistung.",
          nl: "mAP berekent Average Precision (AP) voor elke klasse door integratie van de precisie-recall curve, middelt vervolgens over alle klassen, biedt uitgebreide enkele-getal metriek voor evaluatie van detectiemodelprestaties."
        }
      },
      {
        question: {
          en: "What is the purpose of feature pyramid networks (FPN)?",
          es: "¿Cuál es el propósito de las redes de pirámide de características (FPN)?",
          de: "Was ist der Zweck von Feature Pyramid Networks (FPN)?",
          nl: "Wat is het doel van feature pyramid networks (FPN)?"
        },
        options: [
          { en: "Build multi-scale feature representations for detecting objects at various sizes", es: "Construir representaciones de características multi-escala para detectar objetos de varios tamaños", de: "Multi-Skalen-Feature-Repräsentationen aufbauen zum Erkennen von Objekten verschiedener Größen", nl: "Multi-schaal feature representaties bouwen voor detectie van objecten van verschillende groottes" },
          { en: "Create pyramid-shaped network architectures", es: "Crear arquitecturas de red en forma de pirámide", de: "Pyramidenförmige Netzwerkarchitekturen erstellen", nl: "Piramide-vormige netwerkarchitecturen maken" },
          { en: "Organize features hierarchically only", es: "Organizar características solo jerárquicamente", de: "Features nur hierarchisch organisieren", nl: "Features alleen hiërarchisch organiseren" },
          { en: "Reduce computational costs through pyramids", es: "Reducir costos computacionales mediante pirámides", de: "Rechenkosten durch Pyramiden reduzieren", nl: "Computationele kosten verminderen door piramides" }
        ],
        correct: 0,
        explanation: {
          en: "FPNs combine low-resolution semantically strong features with high-resolution semantically weak features through top-down pathways and lateral connections, enabling accurate detection across multiple scales efficiently.",
          es: "FPNs combinan características semánticamente fuertes de baja resolución con características semánticamente débiles de alta resolución a través de vías de arriba hacia abajo y conexiones laterales, permitiendo detección precisa en múltiples escalas eficientemente.",
          de: "FPNs kombinieren semantisch starke Features niedriger Auflösung mit semantisch schwachen Features hoher Auflösung durch Top-Down-Pfade und laterale Verbindungen, ermöglichen genaue Erkennung über mehrere Skalen effizient.",
          nl: "FPNs combineren semantisch sterke features met lage resolutie met semantisch zwakke features met hoge resolutie door top-down paden en laterale verbindingen, maken nauwkeurige detectie over meerdere schalen efficiënt mogelijk."
        }
      },
      {
        question: {
          en: "What is the YOLO (You Only Look Once) approach to object detection?",
          es: "¿Cuál es el enfoque YOLO (You Only Look Once) para detección de objetos?",
          de: "Was ist der YOLO (You Only Look Once) Ansatz zur Objekterkennung?",
          nl: "Wat is de YOLO (You Only Look Once) benadering voor objectdetectie?"
        },
        options: [
          { en: "Single-stage detector that predicts bounding boxes and class probabilities directly from full images", es: "Detector de una etapa que predice cajas delimitadoras y probabilidades de clase directamente de imágenes completas", de: "Einstufiger Detektor der Bounding Boxes und Klassenwahrscheinlichkeiten direkt aus vollständigen Bildern vorhersagt", nl: "Enkele-fase detector die bounding boxes en klassewaarschijnlijkheden direct voorspelt uit volledige afbeeldingen" },
          { en: "Requires looking at images only once during training", es: "Requiere mirar imágenes solo una vez durante entrenamiento", de: "Erfordert Bilder nur einmal während Training anzusehen", nl: "Vereist afbeeldingen maar één keer te bekijken tijdens training" },
          { en: "Uses one neural network layer only", es: "Usa solo una capa de red neuronal", de: "Verwendet nur eine neuronale Netzwerkschicht", nl: "Gebruikt slechts één neurale netwerklaag" },
          { en: "Processes one object at a time", es: "Procesa un objeto a la vez", de: "Verarbeitet ein Objekt gleichzeitig", nl: "Verwerkt één object tegelijk" }
        ],
        correct: 0,
        explanation: {
          en: "YOLO frames detection as a regression problem, dividing images into grids and predicting bounding boxes and class probabilities for each grid cell in one forward pass, achieving real-time detection speeds.",
          es: "YOLO enmarca detección como problema de regresión, dividiendo imágenes en cuadrículas y prediciendo cajas delimitadoras y probabilidades de clase para cada celda de cuadrícula en un pase hacia adelante, logrando velocidades de detección en tiempo real.",
          de: "YOLO rahmt Erkennung als Regressionsproblem, teilt Bilder in Raster und sagt Bounding Boxes und Klassenwahrscheinlichkeiten für jede Rasterzelle in einem Vorwärtsdurchlauf vorher, erreicht Echtzeit-Erkennungsgeschwindigkeiten.",
          nl: "YOLO kaart detectie als regressieprobleem, verdeelt afbeeldingen in rasters en voorspelt bounding boxes en klassewaarschijnlijkheden voor elke rastercel in één voorwaartse pass, bereikt real-time detectiesnelheden."
        }
      },
      {
        question: {
          en: "What is GradCAM (Gradient-weighted Class Activation Mapping) used for?",
          es: "¿Para qué se usa GradCAM (Mapeo de Activación de Clase Ponderado por Gradiente)?",
          de: "Wofür wird GradCAM (Gradient-weighted Class Activation Mapping) verwendet?",
          nl: "Waarvoor wordt GradCAM (Gradient-weighted Class Activation Mapping) gebruikt?"
        },
        options: [
          { en: "Visualize which image regions CNN focuses on for predictions", es: "Visualizar en qué regiones de imagen se enfoca CNN para predicciones", de: "Visualisieren welche Bildbereiche CNN für Vorhersagen fokussiert", nl: "Visualiseren op welke beeldregio's CNN zich focust voor voorspellingen" },
          { en: "Activate gradient descent during training", es: "Activar descenso de gradiente durante entrenamiento", de: "Gradientenabstieg während Training aktivieren", nl: "Gradient descent activeren tijdens training" },
          { en: "Map gradients to classes automatically", es: "Mapear gradientes a clases automáticamente", de: "Gradienten automatisch auf Klassen abbilden", nl: "Gradiënten automatisch op klassen mappen" },
          { en: "Create class activation maps for cameras", es: "Crear mapas de activación de clase para cámaras", de: "Klassen-Aktivierungskarten für Kameras erstellen", nl: "Klasse activatiekaarten maken voor camera's" }
        ],
        correct: 0,
        explanation: {
          en: "GradCAM uses gradients flowing into final convolutional layer to produce localization maps highlighting discriminative regions, providing interpretability by showing what the network 'sees' when making decisions.",
          es: "GradCAM usa gradientes que fluyen hacia la capa convolucional final para producir mapas de localización destacando regiones discriminativas, proporcionando interpretabilidad mostrando qué 've' la red al tomar decisiones.",
          de: "GradCAM verwendet Gradienten die in die finale Faltungsschicht fließen um Lokalisierungskarten zu produzieren die diskriminative Regionen hervorheben, bietet Interpretierbarkeit durch Zeigen was das Netzwerk 'sieht' bei Entscheidungen.",
          nl: "GradCAM gebruikt gradiënten die naar de finale convolutionele laag stromen om localisatiekaarten te produceren die discriminatieve regio's benadrukken, biedt interpreteerbaarheid door te tonen wat het netwerk 'ziet' bij beslissingen nemen."
        }
      },
      {
        question: {
          en: "What is the Mask R-CNN architecture designed for?",
          es: "¿Para qué está diseñada la arquitectura Mask R-CNN?",
          de: "Wofür ist die Mask R-CNN Architektur konzipiert?",
          nl: "Waarvoor is de Mask R-CNN architectuur ontworpen?"
        },
        options: [
          { en: "Instance segmentation by adding mask prediction branch to Faster R-CNN", es: "Segmentación de instancias agregando rama de predicción de máscara a Faster R-CNN", de: "Instanzsegmentierung durch Hinzufügen eines Maskenvorhersage-Zweigs zu Faster R-CNN", nl: "Instance segmentatie door masker voorspellingstak toe te voegen aan Faster R-CNN" },
          { en: "Masking regions of images during processing", es: "Enmascarar regiones de imágenes durante procesamiento", de: "Regionen von Bildern während Verarbeitung maskieren", nl: "Regio's van afbeeldingen maskeren tijdens verwerking" },
          { en: "Creating masks for CNN layers", es: "Crear máscaras para capas CNN", de: "Masken für CNN-Schichten erstellen", nl: "Maskers maken voor CNN lagen" },
          { en: "Region-based classification only", es: "Solo clasificación basada en región", de: "Nur regionsbasierte Klassifikation", nl: "Alleen regio-gebaseerde classificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Mask R-CNN extends Faster R-CNN by adding a parallel branch for predicting segmentation masks on each Region of Interest, enabling simultaneous object detection, classification, and pixel-level segmentation.",
          es: "Mask R-CNN extiende Faster R-CNN agregando una rama paralela para predecir máscaras de segmentación en cada Región de Interés, permitiendo detección de objetos, clasificación y segmentación a nivel de píxel simultáneamente.",
          de: "Mask R-CNN erweitert Faster R-CNN durch Hinzufügen eines parallelen Zweigs zum Vorhersagen von Segmentierungsmasken auf jeder Region of Interest, ermöglicht simultane Objekterkennung, Klassifikation und pixelgenaue Segmentierung.",
          nl: "Mask R-CNN breidt Faster R-CNN uit door een parallelle tak toe te voegen voor het voorspellen van segmentatiemaskers op elke Region of Interest, maakt gelijktijdige objectdetectie, classificatie en pixel-niveau segmentatie mogelijk."
        }
      },
      {
        question: {
          en: "What is adversarial training in computer vision?",
          es: "¿Qué es el entrenamiento adversario en visión por computadora?",
          de: "Was ist adversariales Training in Computer Vision?",
          nl: "Wat is adversarial training in computer vision?"
        },
        options: [
          { en: "Training models on adversarial examples to improve robustness against perturbations", es: "Entrenar modelos en ejemplos adversarios para mejorar robustez contra perturbaciones", de: "Modelle auf adversarialen Beispielen trainieren um Robustheit gegen Störungen zu verbessern", nl: "Modellen trainen op adversarial voorbeelden om robuustheid tegen verstoringen te verbeteren" },
          { en: "Training two adversarial networks simultaneously", es: "Entrenar dos redes adversarias simultáneamente", de: "Zwei adversariale Netzwerke gleichzeitig trainieren", nl: "Twee adversarial netwerken gelijktijdig trainen" },
          { en: "Training models to compete in adversarial tasks", es: "Entrenar modelos para competir en tareas adversarias", de: "Modelle trainieren um in adversarialen Aufgaben zu konkurrieren", nl: "Modellen trainen om te concurreren in adversarial taken" },
          { en: "Using adversarial loss functions only", es: "Usar solo funciones de pérdida adversarias", de: "Nur adversariale Verlustfunktionen verwenden", nl: "Alleen adversarial verliesfuncties gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training augments training data with carefully crafted perturbations that fool the model, forcing it to learn more robust features that resist adversarial attacks and generalize better.",
          es: "El entrenamiento adversario aumenta datos de entrenamiento con perturbaciones cuidadosamente elaboradas que engañan al modelo, forzándolo a aprender características más robustas que resisten ataques adversarios y generalizan mejor.",
          de: "Adversariales Training erweitert Trainingsdaten mit sorgfältig gestalteten Störungen die das Modell täuschen, zwingt es robustere Features zu lernen die adversarialen Angriffen widerstehen und besser generalisieren.",
          nl: "Adversarial training augmenteert trainingsdata met zorgvuldig vervaardigde verstoringen die het model misleiden, dwingt het robuustere features te leren die adversarial aanvallen weerstaan en beter generaliseren."
        }
      },
      {
        question: {
          en: "What is domain adaptation in computer vision?",
          es: "¿Qué es la adaptación de dominio en visión por computadora?",
          de: "Was ist Domänenanpassung in Computer Vision?",
          nl: "Wat is domeinaanpassing in computer vision?"
        },
        options: [
          { en: "Adapting models trained on one domain to perform well on a different domain", es: "Adaptar modelos entrenados en un dominio para funcionar bien en un dominio diferente", de: "Modelle die auf einer Domäne trainiert wurden anpassen um auf einer anderen Domäne gut zu funktionieren", nl: "Modellen getraind op één domein aanpassen om goed te presteren op een ander domein" },
          { en: "Adapting to different internet domains", es: "Adaptarse a diferentes dominios de internet", de: "Anpassung an verschiedene Internetdomänen", nl: "Aanpassen aan verschillende internetdomeinen" },
          { en: "Changing model domains during training", es: "Cambiar dominios de modelo durante entrenamiento", de: "Modelldomänen während Training ändern", nl: "Modeldomeinen wijzigen tijdens training" },
          { en: "Training models for domain-specific tasks only", es: "Entrenar modelos solo para tareas específicas de dominio", de: "Modelle nur für domänenspezifische Aufgaben trainieren", nl: "Modellen alleen trainen voor domein-specifieke taken" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation addresses distribution shift between training (source) and deployment (target) domains, using techniques like fine-tuning, domain-invariant features, or adversarial training to transfer knowledge across domains.",
          es: "La adaptación de dominio aborda el cambio de distribución entre dominios de entrenamiento (fuente) y despliegue (objetivo), usando técnicas como ajuste fino, características invariantes de dominio o entrenamiento adversario para transferir conocimiento a través de dominios.",
          de: "Domänenanpassung adressiert Verteilungsverschiebung zwischen Trainings-(Quell-) und Einsatz-(Ziel-)Domänen, verwendet Techniken wie Fine-Tuning, domäneninvariante Features oder adversariales Training um Wissen über Domänen zu übertragen.",
          nl: "Domeinaanpassing pakt distributieverschuiving aan tussen trainings-(bron) en implementatie-(doel) domeinen, gebruikt technieken zoals fine-tuning, domein-invariante features of adversarial training om kennis over domeinen over te dragen."
        }
      },
      {
        question: {
          en: "What is the role of ROI (Region of Interest) pooling in object detection?",
          es: "¿Cuál es el papel del ROI (Región de Interés) pooling en detección de objetos?",
          de: "Was ist die Rolle von ROI (Region of Interest) Pooling in Objekterkennung?",
          nl: "Wat is de rol van ROI (Region of Interest) pooling bij objectdetectie?"
        },
        options: [
          { en: "Extract fixed-size feature vectors from variable-sized region proposals", es: "Extraer vectores de características de tamaño fijo de propuestas de región de tamaño variable", de: "Feste Größe Feature-Vektoren aus variabel großen Regionsvorschlägen extrahieren", nl: "Feature vectors van vaste grootte extraheren uit variabel-grootte regiovoorstellen" },
          { en: "Pool only regions of user interest", es: "Agrupar solo regiones de interés del usuario", de: "Nur Regionen von Benutzerinteresse poolen", nl: "Alleen regio's van gebruikersinteresse poolen" },
          { en: "Select the most interesting image regions", es: "Seleccionar las regiones de imagen más interesantes", de: "Die interessantesten Bildbereiche auswählen", nl: "De meest interessante beeldregio's selecteren" },
          { en: "Create interest maps for visualization", es: "Crear mapas de interés para visualización", de: "Interessenkarten für Visualisierung erstellen", nl: "Interessekaarten maken voor visualisatie" }
        ],
        correct: 0,
        explanation: {
          en: "ROI pooling divides each region proposal into a fixed grid and max-pools each cell, producing constant-length feature representations required by subsequent fully connected layers regardless of input region size.",
          es: "ROI pooling divide cada propuesta de región en una cuadrícula fija y hace max-pool de cada celda, produciendo representaciones de características de longitud constante requeridas por capas totalmente conectadas subsiguientes independientemente del tamaño de región de entrada.",
          de: "ROI Pooling teilt jeden Regionsvorschlag in ein festes Raster und führt Max-Pooling jeder Zelle durch, produziert Feature-Repräsentationen konstanter Länge die von nachfolgenden vollständig verbundenen Schichten benötigt werden unabhängig von Eingaberegionsgröße.",
          nl: "ROI pooling verdeelt elk regiovoorstel in een vast raster en max-poolt elke cel, produceert feature representaties van constante lengte vereist door volgende volledig verbonden lagen ongeacht invoerregiogrootte."
        }
      },
      {
        question: {
          en: "What is the difference between ROI pooling and ROI Align?",
          es: "¿Cuál es la diferencia entre ROI pooling y ROI Align?",
          de: "Was ist der Unterschied zwischen ROI Pooling und ROI Align?",
          nl: "Wat is het verschil tussen ROI pooling en ROI Align?"
        },
        options: [
          { en: "ROI Align uses bilinear interpolation to avoid quantization artifacts from rounding", es: "ROI Align usa interpolación bilineal para evitar artefactos de cuantización del redondeo", de: "ROI Align verwendet bilineare Interpolation um Quantisierungsartefakte durch Rundung zu vermeiden", nl: "ROI Align gebruikt bilineaire interpolatie om kwantisatie-artefacten van afronden te vermijden" },
          { en: "ROI Align is faster than ROI pooling", es: "ROI Align es más rápido que ROI pooling", de: "ROI Align ist schneller als ROI Pooling", nl: "ROI Align is sneller dan ROI pooling" },
          { en: "ROI Align works only with aligned images", es: "ROI Align funciona solo con imágenes alineadas", de: "ROI Align funktioniert nur mit ausgerichteten Bildern", nl: "ROI Align werkt alleen met uitgelijnde afbeeldingen" },
          { en: "They are exactly the same operation", es: "Son exactamente la misma operación", de: "Sie sind genau dieselbe Operation", nl: "Ze zijn precies dezelfde operatie" }
        ],
        correct: 0,
        explanation: {
          en: "ROI pooling uses harsh quantization (rounding coordinates), causing misalignment between ROI and extracted features. ROI Align eliminates this by using bilinear interpolation at four regularly sampled locations, improving mask prediction accuracy.",
          es: "ROI pooling usa cuantización severa (redondeo de coordenadas), causando desalineación entre ROI y características extraídas. ROI Align elimina esto usando interpolación bilineal en cuatro ubicaciones regularmente muestreadas, mejorando precisión de predicción de máscara.",
          de: "ROI Pooling verwendet harte Quantisierung (Koordinaten runden), verursacht Fehlausrichtung zwischen ROI und extrahierten Features. ROI Align eliminiert dies durch bilineare Interpolation an vier regelmäßig gesampelten Positionen, verbessert Maskenvorhersagegenauigkeit.",
          nl: "ROI pooling gebruikt harde kwantisatie (coördinaten afronden), veroorzaakt verkeerde uitlijning tussen ROI en geëxtraheerde features. ROI Align elimineert dit door bilineaire interpolatie op vier regelmatig bemonsterde locaties te gebruiken, verbetert maskervoorspellingsnauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is self-supervised learning in computer vision?",
          es: "¿Qué es el aprendizaje auto-supervisado en visión por computadora?",
          de: "Was ist selbst-überwachtes Lernen in Computer Vision?",
          nl: "Wat is zelf-supervised learning in computer vision?"
        },
        options: [
          { en: "Learning representations from unlabeled data using pretext tasks", es: "Aprender representaciones de datos sin etiquetar usando tareas de pretexto", de: "Repräsentationen von unbeschrifteten Daten lernen durch Vorwand-Aufgaben", nl: "Representaties leren van ongelabelde data met behulp van pretext taken" },
          { en: "Models supervising themselves during training", es: "Modelos supervisándose a sí mismos durante entrenamiento", de: "Modelle die sich selbst während Training überwachen", nl: "Modellen die zichzelf superviseren tijdens training" },
          { en: "Learning without any supervision at all", es: "Aprender sin ninguna supervisión en absoluto", de: "Lernen ohne jegliche Überwachung", nl: "Leren zonder enige supervisie" },
          { en: "Supervised learning on self-generated data", es: "Aprendizaje supervisado en datos auto-generados", de: "Überwachtes Lernen auf selbst generierten Daten", nl: "Supervised learning op zelf-gegenereerde data" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates supervisory signals from data itself through pretext tasks (e.g., predicting rotation, colorization, jigsaw puzzles), learning useful representations without manual labels that transfer to downstream tasks.",
          es: "El aprendizaje auto-supervisado crea señales de supervisión de los datos mismos a través de tareas de pretexto (ej., predecir rotación, colorización, rompecabezas), aprendiendo representaciones útiles sin etiquetas manuales que se transfieren a tareas posteriores.",
          de: "Selbst-überwachtes Lernen erstellt Überwachungssignale aus Daten selbst durch Vorwand-Aufgaben (z.B. Vorhersage von Rotation, Kolorierung, Puzzles), lernt nützliche Repräsentationen ohne manuelle Labels die auf nachgelagerte Aufgaben übertragen werden.",
          nl: "Zelf-supervised learning creëert toezichtsignalen uit data zelf door pretext taken (bijv. rotatie voorspellen, inkleuren, puzzels), leert nuttige representaties zonder handmatige labels die overdragen naar downstream taken."
        }
      },
      {
        question: {
          en: "What is contrastive learning in computer vision?",
          es: "¿Qué es el aprendizaje contrastivo en visión por computadora?",
          de: "Was ist kontrastives Lernen in Computer Vision?",
          nl: "Wat is contrastief leren in computer vision?"
        },
        options: [
          { en: "Learning representations by pulling similar samples together and pushing dissimilar ones apart", es: "Aprender representaciones acercando muestras similares y alejando las diferentes", de: "Repräsentationen lernen durch Zusammenziehen ähnlicher Proben und Auseinanderschieben unähnlicher", nl: "Representaties leren door vergelijkbare samples naar elkaar toe te trekken en ongelijke uit elkaar te duwen" },
          { en: "Learning from contrasting colors in images", es: "Aprender de colores contrastantes en imágenes", de: "Lernen von kontrastierenden Farben in Bildern", nl: "Leren van contrasterende kleuren in afbeeldingen" },
          { en: "Contrasting different learning methods", es: "Contrastar diferentes métodos de aprendizaje", de: "Verschiedene Lernmethoden kontrastieren", nl: "Verschillende leermethodes contrasteren" },
          { en: "Increasing image contrast during training", es: "Aumentar contraste de imagen durante entrenamiento", de: "Bildkontrast während Training erhöhen", nl: "Beeldcontrast verhogen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning (e.g., SimCLR, MoCo) learns embeddings where augmented views of the same image are close together while different images are far apart in feature space, enabling powerful self-supervised pre-training.",
          es: "El aprendizaje contrastivo (ej., SimCLR, MoCo) aprende embeddings donde vistas aumentadas de la misma imagen están cerca mientras imágenes diferentes están lejos en espacio de características, permitiendo pre-entrenamiento auto-supervisado potente.",
          de: "Kontrastives Lernen (z.B. SimCLR, MoCo) lernt Embeddings wo augmentierte Ansichten desselben Bildes nah zusammen sind während verschiedene Bilder weit auseinander im Feature-Raum sind, ermöglicht leistungsstarkes selbst-überwachtes Pre-Training.",
          nl: "Contrastief leren (bijv. SimCLR, MoCo) leert embeddings waar geaugmenteerde weergaven van dezelfde afbeelding dicht bij elkaar zijn terwijl verschillende afbeeldingen ver uit elkaar zijn in feature space, maakt krachtige zelf-supervised pre-training mogelijk."
        }
      },
      {
        question: {
          en: "What is Visual Transformer (ViT) architecture?",
          es: "¿Qué es la arquitectura Visual Transformer (ViT)?",
          de: "Was ist die Visual Transformer (ViT) Architektur?",
          nl: "Wat is Visual Transformer (ViT) architectuur?"
        },
        options: [
          { en: "Applying transformer architecture directly to sequences of image patches", es: "Aplicar arquitectura transformer directamente a secuencias de parches de imagen", de: "Transformer-Architektur direkt auf Sequenzen von Bild-Patches anwenden", nl: "Transformer architectuur direct toepassen op reeksen van afbeeldingspatches" },
          { en: "Transforming visual data into text", es: "Transformar datos visuales en texto", de: "Visuelle Daten in Text transformieren", nl: "Visuele data transformeren naar tekst" },
          { en: "Visually transforming images during processing", es: "Transformar visualmente imágenes durante procesamiento", de: "Bilder während Verarbeitung visuell transformieren", nl: "Afbeeldingen visueel transformeren tijdens verwerking" },
          { en: "Traditional CNN with transformer layers", es: "CNN tradicional con capas transformer", de: "Traditionelles CNN mit Transformer-Schichten", nl: "Traditioneel CNN met transformer lagen" }
        ],
        correct: 0,
        explanation: {
          en: "ViT divides images into fixed-size patches, linearly embeds them, adds positional encodings, then processes through standard transformer encoder layers, demonstrating transformers can match or exceed CNN performance with sufficient data.",
          es: "ViT divide imágenes en parches de tamaño fijo, los embebe linealmente, agrega codificaciones posicionales, luego procesa a través de capas de codificador transformer estándar, demostrando que transformers pueden igualar o superar rendimiento de CNN con datos suficientes.",
          de: "ViT teilt Bilder in Patches fester Größe, bettet sie linear ein, fügt Positionskodierungen hinzu, verarbeitet dann durch Standard-Transformer-Encoder-Schichten, demonstriert dass Transformers CNN-Leistung erreichen oder übertreffen können mit ausreichend Daten.",
          nl: "ViT verdeelt afbeeldingen in patches van vaste grootte, embedt ze lineair, voegt positionele coderingen toe, verwerkt vervolgens door standaard transformer encoder lagen, toont aan dat transformers CNN prestaties kunnen evenaren of overtreffen met voldoende data."
        }
      },
      {
        question: {
          en: "What is few-shot learning in computer vision?",
          es: "¿Qué es el aprendizaje de pocos ejemplos en visión por computadora?",
          de: "Was ist Few-Shot Learning in Computer Vision?",
          nl: "Wat is few-shot learning in computer vision?"
        },
        options: [
          { en: "Learning to recognize new classes from very few labeled examples", es: "Aprender a reconocer nuevas clases con muy pocos ejemplos etiquetados", de: "Lernen neue Klassen von sehr wenigen beschrifteten Beispielen zu erkennen", nl: "Leren nieuwe klassen te herkennen van zeer weinig gelabelde voorbeelden" },
          { en: "Taking only a few shots of each scene", es: "Tomar solo unas pocas tomas de cada escena", de: "Nur wenige Aufnahmen jeder Szene machen", nl: "Slechts enkele opnames maken van elke scène" },
          { en: "Learning with few training iterations", es: "Aprender con pocas iteraciones de entrenamiento", de: "Lernen mit wenigen Trainingsiterationen", nl: "Leren met weinig trainingsiteraties" },
          { en: "Using few network layers", es: "Usar pocas capas de red", de: "Wenige Netzwerkschichten verwenden", nl: "Weinig netwerklagen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to generalize to new classes with only 1-5 examples per class through meta-learning approaches like prototypical networks, matching networks, or metric learning, mimicking human-like rapid learning.",
          es: "El aprendizaje de pocos ejemplos permite a modelos generalizar a nuevas clases con solo 1-5 ejemplos por clase a través de enfoques de meta-aprendizaje como redes prototípicas, redes de coincidencia o aprendizaje métrico, imitando aprendizaje rápido similar al humano.",
          de: "Few-Shot Learning ermöglicht Modellen zu neuen Klassen mit nur 1-5 Beispielen pro Klasse zu generalisieren durch Meta-Learning-Ansätze wie prototypische Netzwerke, Matching-Netzwerke oder metrisches Lernen, ahmt menschenähnliches schnelles Lernen nach.",
          nl: "Few-shot learning stelt modellen in staat te generaliseren naar nieuwe klassen met slechts 1-5 voorbeelden per klasse door meta-learning benaderingen zoals prototypische netwerken, matching netwerken of metrisch leren, bootst mensachtig snel leren na."
        }
      },
      {
        question: {
          en: "What is zero-shot learning in computer vision?",
          es: "¿Qué es el aprendizaje de cero ejemplos en visión por computadora?",
          de: "Was ist Zero-Shot Learning in Computer Vision?",
          nl: "Wat is zero-shot learning in computer vision?"
        },
        options: [
          { en: "Recognizing object classes never seen during training using semantic knowledge", es: "Reconocer clases de objetos nunca vistas durante entrenamiento usando conocimiento semántico", de: "Objektklassen erkennen die nie während Training gesehen wurden unter Verwendung semantischen Wissens", nl: "Objectklassen herkennen die nooit tijdens training gezien zijn met behulp van semantische kennis" },
          { en: "Training with zero images", es: "Entrenar con cero imágenes", de: "Mit null Bildern trainieren", nl: "Trainen met nul afbeeldingen" },
          { en: "Setting all shots to zero value", es: "Configurar todas las tomas a valor cero", de: "Alle Aufnahmen auf Nullwert setzen", nl: "Alle opnames op nulwaarde zetten" },
          { en: "Learning without any supervision", es: "Aprender sin ninguna supervisión", de: "Lernen ohne jegliche Überwachung", nl: "Leren zonder enige supervisie" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot learning leverages semantic information (attributes, word embeddings, knowledge graphs) to transfer knowledge from seen to unseen classes, enabling recognition of novel categories by understanding class descriptions or relationships.",
          es: "El aprendizaje de cero ejemplos aprovecha información semántica (atributos, embeddings de palabras, grafos de conocimiento) para transferir conocimiento de clases vistas a no vistas, permitiendo reconocimiento de categorías novedosas entendiendo descripciones o relaciones de clases.",
          de: "Zero-Shot Learning nutzt semantische Informationen (Attribute, Wort-Embeddings, Wissensgraphen) um Wissen von gesehenen zu ungesehenen Klassen zu übertragen, ermöglicht Erkennung neuartiger Kategorien durch Verstehen von Klassenbeschreibungen oder -beziehungen.",
          nl: "Zero-shot learning maakt gebruik van semantische informatie (attributen, woord embeddings, kennisgrafen) om kennis over te dragen van geziene naar ongeziene klassen, maakt herkenning van nieuwe categorieën mogelijk door klassebeschrijvingen of -relaties te begrijpen."
        }
      },
      {
        question: {
          en: "What is neural style transfer?",
          es: "¿Qué es la transferencia de estilo neuronal?",
          de: "Was ist neuronaler Stil-Transfer?",
          nl: "Wat is neurale stijloverdracht?"
        },
        options: [
          { en: "Applying artistic style from one image to content of another using CNN features", es: "Aplicar estilo artístico de una imagen al contenido de otra usando características CNN", de: "Künstlerischen Stil von einem Bild auf Inhalt eines anderen anwenden unter Verwendung von CNN-Features", nl: "Artistieke stijl van één afbeelding toepassen op inhoud van een andere met behulp van CNN features" },
          { en: "Transferring neural network styles between models", es: "Transferir estilos de red neuronal entre modelos", de: "Neuronale Netzwerkstile zwischen Modellen übertragen", nl: "Neurale netwerkstijlen overdragen tussen modellen" },
          { en: "Changing the style of neural network output", es: "Cambiar el estilo de salida de red neuronal", de: "Stil der neuronalen Netzwerkausgabe ändern", nl: "Stijl van neurale netwerkoutput wijzigen" },
          { en: "Styling neurons in different layers", es: "Estilizar neuronas en diferentes capas", de: "Neuronen in verschiedenen Schichten stylen", nl: "Neuronen in verschillende lagen stylen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural style transfer optimizes an image to match content representation (from deeper layers) of one image while matching style representation (Gram matrices from multiple layers) of another, synthesizing artistic renditions.",
          es: "La transferencia de estilo neuronal optimiza una imagen para igualar representación de contenido (de capas más profundas) de una imagen mientras iguala representación de estilo (matrices de Gram de múltiples capas) de otra, sintetizando representaciones artísticas.",
          de: "Neuronaler Stil-Transfer optimiert ein Bild um Inhaltsrepräsentation (von tieferen Schichten) eines Bildes zu entsprechen während Stilrepräsentation (Gram-Matrizen von mehreren Schichten) eines anderen entsprochen wird, synthetisiert künstlerische Darstellungen.",
          nl: "Neurale stijloverdracht optimaliseert een afbeelding om inhoudsrepresentatie (van diepere lagen) van één afbeelding te matchen terwijl stijlrepresentatie (Gram matrices van meerdere lagen) van een andere gematcht wordt, synthetiseert artistieke weergaven."
        }
      },
      {
        question: {
          en: "What is image super-resolution in computer vision?",
          es: "¿Qué es la súper-resolución de imagen en visión por computadora?",
          de: "Was ist Bild-Superauflösung in Computer Vision?",
          nl: "Wat is afbeelding super-resolutie in computer vision?"
        },
        options: [
          { en: "Reconstructing high-resolution images from low-resolution inputs", es: "Reconstruir imágenes de alta resolución desde entradas de baja resolución", de: "Hochauflösende Bilder aus niedrigauflösenden Eingaben rekonstruieren", nl: "Hoge-resolutie afbeeldingen reconstrueren uit lage-resolutie inputs" },
          { en: "Taking images at super high resolution", es: "Tomar imágenes a resolución súper alta", de: "Bilder in super hoher Auflösung aufnehmen", nl: "Afbeeldingen maken op super hoge resolutie" },
          { en: "Resolving image conflicts at super speed", es: "Resolver conflictos de imagen a súper velocidad", de: "Bildkonflikte mit Super-Geschwindigkeit auflösen", nl: "Beeldconflicten oplossen op supersnelheid" },
          { en: "Creating resolutions beyond display capabilities", es: "Crear resoluciones más allá de capacidades de pantalla", de: "Auflösungen jenseits Display-Fähigkeiten erstellen", nl: "Resoluties maken voorbij displaymogelijkheden" }
        ],
        correct: 0,
        explanation: {
          en: "Super-resolution uses deep learning (e.g., SRCNN, ESRGAN) to hallucinate missing high-frequency details, upscaling images while enhancing sharpness and recovering fine textures lost in low-resolution versions.",
          es: "La súper-resolución usa aprendizaje profundo (ej., SRCNN, ESRGAN) para alucinar detalles de alta frecuencia faltantes, escalando imágenes mientras mejora nitidez y recupera texturas finas perdidas en versiones de baja resolución.",
          de: "Superauflösung verwendet Deep Learning (z.B. SRCNN, ESRGAN) um fehlende hochfrequente Details zu halluzinieren, skaliert Bilder hoch während Schärfe verbessert und feine Texturen wiederhergestellt werden die in niedrigauflösenden Versionen verloren gingen.",
          nl: "Super-resolutie gebruikt deep learning (bijv. SRCNN, ESRGAN) om ontbrekende hoogfrequente details te hallucineren, schaalt afbeeldingen op terwijl scherpte verbetert en fijne texturen herstelt die verloren gingen in lage-resolutie versies."
        }
      },
      {
        question: {
          en: "What is the purpose of image inpainting?",
          es: "¿Cuál es el propósito del inpainting de imagen?",
          de: "Was ist der Zweck von Bild-Inpainting?",
          nl: "Wat is het doel van afbeelding inpainting?"
        },
        options: [
          { en: "Fill missing or corrupted regions in images with plausible content", es: "Llenar regiones faltantes o corruptas en imágenes con contenido plausible", de: "Fehlende oder beschädigte Regionen in Bildern mit plausiblem Inhalt füllen", nl: "Ontbrekende of beschadigde regio's in afbeeldingen vullen met plausibele inhoud" },
          { en: "Paint images with internal colors", es: "Pintar imágenes con colores internos", de: "Bilder mit internen Farben malen", nl: "Afbeeldingen schilderen met interne kleuren" },
          { en: "Add paint effects to images", es: "Agregar efectos de pintura a imágenes", de: "Maleffekte zu Bildern hinzufügen", nl: "Verfeffecten toevoegen aan afbeeldingen" },
          { en: "Paint over entire images", es: "Pintar sobre imágenes completas", de: "Über gesamte Bilder malen", nl: "Over hele afbeeldingen schilderen" }
        ],
        correct: 0,
        explanation: {
          en: "Inpainting reconstructs missing image regions by synthesizing textures and structures consistent with surroundings, used for object removal, restoration, and completing occluded areas, often using GANs or diffusion models.",
          es: "El inpainting reconstruye regiones de imagen faltantes sintetizando texturas y estructuras consistentes con alrededores, usado para remoción de objetos, restauración y completar áreas ocluidas, a menudo usando GANs o modelos de difusión.",
          de: "Inpainting rekonstruiert fehlende Bildbereiche durch Synthetisierung von Texturen und Strukturen konsistent mit Umgebung, verwendet für Objektentfernung, Restaurierung und Vervollständigung verdeckter Bereiche, oft mit GANs oder Diffusionsmodellen.",
          nl: "Inpainting reconstrueert ontbrekende beeldregio's door texturen en structuren te synthetiseren consistent met omgeving, gebruikt voor objectverwijdering, restauratie en voltooien van geoccludeerde gebieden, vaak met GANs of diffusiemodellen."
        }
      },
      {
        question: {
          en: "What is model quantization in deep learning deployment?",
          es: "¿Qué es la cuantización de modelo en despliegue de aprendizaje profundo?",
          de: "Was ist Modellquantisierung beim Deep Learning Deployment?",
          nl: "Wat is modelkwantisatie bij deep learning deployment?"
        },
        options: [
          { en: "Reducing precision of weights and activations to lower bit-widths", es: "Reducir precisión de pesos y activaciones a anchos de bit menores", de: "Präzision von Gewichten und Aktivierungen auf niedrigere Bitbreiten reduzieren", nl: "Precisie van gewichten en activaties verminderen naar lagere bitbreedtes" },
          { en: "Quantifying model performance metrics", es: "Cuantificar métricas de rendimiento de modelo", de: "Modellleistungsmetriken quantifizieren", nl: "Modelprestatiemetrieken kwantificeren" },
          { en: "Dividing models into quantums", es: "Dividir modelos en cuantos", de: "Modelle in Quanten teilen", nl: "Modellen verdelen in kwanta" },
          { en: "Measuring quantity of model parameters", es: "Medir cantidad de parámetros de modelo", de: "Menge der Modellparameter messen", nl: "Hoeveelheid modelparameters meten" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization converts float32 weights/activations to int8 or lower precision, reducing model size by 4x and accelerating inference with minimal accuracy loss, crucial for edge device deployment.",
          es: "La cuantización convierte pesos/activaciones float32 a int8 o menor precisión, reduciendo tamaño de modelo en 4x y acelerando inferencia con pérdida mínima de precisión, crucial para despliegue en dispositivos edge.",
          de: "Quantisierung konvertiert float32 Gewichte/Aktivierungen zu int8 oder niedrigerer Präzision, reduziert Modellgröße um 4x und beschleunigt Inferenz mit minimalem Genauigkeitsverlust, entscheidend für Edge-Geräte-Deployment.",
          nl: "Kwantisatie converteert float32 gewichten/activaties naar int8 of lagere precisie, vermindert modelgrootte met 4x en versnelt inferentie met minimaal nauwkeurigheidsverlies, cruciaal voor edge device deployment."
        }
      },
      {
        question: {
          en: "What is the CutOut data augmentation technique?",
          es: "¿Qué es la técnica de aumento de datos CutOut?",
          de: "Was ist die CutOut Datenaugmentations-Technik?",
          nl: "Wat is de CutOut data augmentatie techniek?"
        },
        options: [
          { en: "Randomly masking out square regions of input images during training", es: "Enmascarar aleatoriamente regiones cuadradas de imágenes de entrada durante entrenamiento", de: "Zufällig quadratische Regionen von Eingabebildern während Training maskieren", nl: "Willekeurig vierkante regio's van invoerafbeeldingen maskeren tijdens training" },
          { en: "Cutting out objects from images", es: "Recortar objetos de imágenes", de: "Objekte aus Bildern ausschneiden", nl: "Objecten uit afbeeldingen knippen" },
          { en: "Removing outlier images from dataset", es: "Eliminar imágenes atípicas del conjunto de datos", de: "Ausreißer-Bilder aus Datensatz entfernen", nl: "Uitschieters verwijderen uit dataset" },
          { en: "Cutting training time by removing data", es: "Reducir tiempo de entrenamiento eliminando datos", de: "Trainingszeit durch Entfernen von Daten verkürzen", nl: "Trainingstijd verkorten door data te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "CutOut randomly erases rectangular patches in training images, forcing the model to learn from partial information and focus on less discriminative features, improving robustness and reducing overfitting similar to dropout.",
          es: "CutOut borra aleatoriamente parches rectangulares en imágenes de entrenamiento, forzando al modelo a aprender de información parcial y enfocarse en características menos discriminativas, mejorando robustez y reduciendo sobreajuste similar a dropout.",
          de: "CutOut löscht zufällig rechteckige Patches in Trainingsbildern, zwingt Modell von partieller Information zu lernen und sich auf weniger diskriminative Features zu konzentrieren, verbessert Robustheit und reduziert Overfitting ähnlich wie Dropout.",
          nl: "CutOut wist willekeurig rechthoekige patches in trainingsafbeeldingen, dwingt model te leren van gedeeltelijke informatie en te focussen op minder discriminatieve features, verbetert robuustheid en vermindert overfitting vergelijkbaar met dropout."
        }
      },
      {
        question: {
          en: "What is MixUp data augmentation?",
          es: "¿Qué es el aumento de datos MixUp?",
          de: "Was ist MixUp Datenaugmentation?",
          nl: "Wat is MixUp data augmentatie?"
        },
        options: [
          { en: "Creating training examples by linearly interpolating between pairs of images and their labels", es: "Crear ejemplos de entrenamiento interpolando linealmente entre pares de imágenes y sus etiquetas", de: "Trainingsbeispiele erstellen durch lineare Interpolation zwischen Bildpaaren und ihren Labels", nl: "Trainingsvoorbeelden creëren door lineair te interpoleren tussen paren afbeeldingen en hun labels" },
          { en: "Mixing up the order of training data", es: "Mezclar el orden de datos de entrenamiento", de: "Reihenfolge der Trainingsdaten mischen", nl: "Volgorde van trainingsdata door elkaar halen" },
          { en: "Combining multiple augmentation techniques", es: "Combinar múltiples técnicas de aumento", de: "Mehrere Augmentationstechniken kombinieren", nl: "Meerdere augmentatietechnieken combineren" },
          { en: "Upsampling minority classes in dataset", es: "Sobremuestreo de clases minoritarias en conjunto de datos", de: "Minderheitsklassen im Datensatz überabtasten", nl: "Minderheidsklassen in dataset oversamplen" }
        ],
        correct: 0,
        explanation: {
          en: "MixUp trains on convex combinations of image pairs and their one-hot labels, e.g., 0.7*image1 + 0.3*image2 with blended labels. This encourages linear behavior between examples, improves generalization, and provides implicit regularization.",
          es: "MixUp entrena en combinaciones convexas de pares de imágenes y sus etiquetas one-hot, ej., 0.7*imagen1 + 0.3*imagen2 con etiquetas mezcladas. Esto fomenta comportamiento lineal entre ejemplos, mejora generalización y proporciona regularización implícita.",
          de: "MixUp trainiert auf konvexen Kombinationen von Bildpaaren und ihren One-Hot-Labels, z.B. 0.7*Bild1 + 0.3*Bild2 mit gemischten Labels. Dies fördert lineares Verhalten zwischen Beispielen, verbessert Generalisierung und bietet implizite Regularisierung.",
          nl: "MixUp traint op convexe combinaties van beeldparen en hun one-hot labels, bijv. 0.7*afbeelding1 + 0.3*afbeelding2 met gemengde labels. Dit moedigt lineair gedrag tussen voorbeelden aan, verbetert generalisatie en biedt impliciete regularisatie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();