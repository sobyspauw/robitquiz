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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();