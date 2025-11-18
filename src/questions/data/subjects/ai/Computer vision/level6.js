// Computer Vision Quiz - Level 6: Advanced Object Detection and Tracking
(function() {
  const level6 = {
    name: {
      en: "Computer Vision Level 6",
      es: "Visión por Computadora Nivel 6",
      de: "Computer Vision Stufe 6",
      nl: "Computer Vision Level 6"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between object detection and object classification?",
          es: "¿Cuál es la principal diferencia entre detección de objetos y clasificación de objetos?",
          de: "Was ist der Hauptunterschied zwischen Objekterkennung und Objektklassifizierung?",
          nl: "Wat is het hoofdverschil tussen objectdetectie en objectclassificatie?"
        },
        options: [
          { en: "Detection finds and locates objects, classification only identifies what type of object it is", es: "La detección encuentra y localiza objetos, la clasificación solo identifica qué tipo de objeto es", de: "Erkennung findet und lokalisiert Objekte, Klassifizierung identifiziert nur welche Art von Objekt es ist", nl: "Detectie vindt en lokaliseert objecten, classificatie identificeert alleen welk type object het is" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Detection is faster than classification", es: "La detección es más rápida que la clasificación", de: "Erkennung ist schneller als Klassifizierung", nl: "Detectie is sneller dan classificatie" },
          { en: "Classification works with videos, detection with images", es: "La clasificación funciona con videos, la detección con imágenes", de: "Klassifizierung funktioniert mit Videos, Erkennung mit Bildern", nl: "Classificatie werkt met video's, detectie met afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Object detection combines classification (what is it?) with localization (where is it?), producing bounding boxes around detected objects with their class labels.",
          es: "La detección de objetos combina clasificación (¿qué es?) con localización (¿dónde está?), produciendo cajas delimitadoras alrededor de objetos detectados con sus etiquetas de clase.",
          de: "Objekterkennung kombiniert Klassifizierung (was ist es?) mit Lokalisierung (wo ist es?), produziert Begrenzungsrahmen um erkannte Objekte mit ihren Klassenlabels.",
          nl: "Objectdetectie combineert classificatie (wat is het?) met lokalisatie (waar is het?), produceert begrenzingskaders rond gedetecteerde objecten met hun klassenlabels."
        }
      },
      {
        question: {
          en: "What is YOLO (You Only Look Once) known for in object detection?",
          es: "¿Por qué es conocido YOLO (You Only Look Once) en detección de objetos?",
          de: "Wofür ist YOLO (You Only Look Once) in der Objekterkennung bekannt?",
          nl: "Waarvoor staat YOLO (You Only Look Once) bekend bij objectdetectie?"
        },
        options: [
          { en: "Real-time object detection by processing the entire image in a single forward pass", es: "Detección de objetos en tiempo real procesando toda la imagen en una sola pasada hacia adelante", de: "Echtzeit-Objekterkennung durch Verarbeitung des gesamten Bildes in einem einzigen Vorwärtsdurchgang", nl: "Real-time objectdetectie door het hele beeld in één forward pass te verwerken" },
          { en: "Only detecting one object per image", es: "Solo detectar un objeto por imagen", de: "Nur ein Objekt pro Bild erkennen", nl: "Slechts één object per afbeelding detecteren" },
          { en: "Looking at images only once for training", es: "Mirar imágenes solo una vez para entrenamiento", de: "Bilder nur einmal für Training betrachten", nl: "Afbeeldingen slechts één keer bekijken voor training" },
          { en: "Using yellow color detection only", es: "Usar solo detección de color amarillo", de: "Nur gelbe Farberkennung verwenden", nl: "Alleen gele kleurdetectie gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "YOLO revolutionized object detection by treating it as a single regression problem, making predictions for bounding boxes and class probabilities simultaneously in one network evaluation.",
          es: "YOLO revolucionó la detección de objetos tratándola como un solo problema de regresión, haciendo predicciones para cajas delimitadoras y probabilidades de clase simultáneamente en una evaluación de red.",
          de: "YOLO revolutionierte Objekterkennung indem es sie als einzelnes Regressionsproblem behandelte, Vorhersagen für Begrenzungsrahmen und Klassenwahrscheinlichkeiten gleichzeitig in einer Netzwerkevaluierung machte.",
          nl: "YOLO revolutioneerde objectdetectie door het te behandelen als één regressieprobleem, voorspellingen voor begrenzingskaders en klassewaarschijnlijkheden tegelijkertijd maken in één netwerkevaluatie."
        }
      },
      {
        question: {
          en: "What is object tracking in computer vision?",
          es: "¿Qué es el seguimiento de objetos en visión por computadora?",
          de: "Was ist Objektverfolgung in Computer Vision?",
          nl: "Wat is object tracking in computer vision?"
        },
        options: [
          { en: "Following the movement of objects across multiple video frames", es: "Seguir el movimiento de objetos a través de múltiples fotogramas de video", de: "Verfolgung der Bewegung von Objekten über mehrere Videoframes", nl: "Het volgen van de beweging van objecten over meerdere videoframes" },
          { en: "Counting the number of objects in images", es: "Contar el número de objetos en imágenes", de: "Anzahl der Objekte in Bildern zählen", nl: "Het aantal objecten in afbeeldingen tellen" },
          { en: "Recording object locations in databases", es: "Registrar ubicaciones de objetos en bases de datos", de: "Objektpositionen in Datenbanken aufzeichnen", nl: "Objectlocaties opslaan in databases" },
          { en: "Drawing tracks around static objects", es: "Dibujar pistas alrededor de objetos estáticos", de: "Spuren um statische Objekte zeichnen", nl: "Sporen tekenen rond statische objecten" }
        ],
        correct: 0,
        explanation: {
          en: "Object tracking maintains consistent identity of objects as they move through a video sequence, enabling applications like surveillance, autonomous driving, and sports analysis.",
          es: "El seguimiento de objetos mantiene identidad consistente de objetos mientras se mueven a través de una secuencia de video, permitiendo aplicaciones como vigilancia, conducción autónoma y análisis deportivo.",
          de: "Objektverfolgung erhält konsistente Identität von Objekten während sie sich durch eine Videosequenz bewegen, ermöglicht Anwendungen wie Überwachung, autonomes Fahren und Sportanalyse.",
          nl: "Object tracking houdt consistente identiteit van objecten bij terwijl ze door een videoreeks bewegen, maakt toepassingen mogelijk zoals bewaking, autonoom rijden en sportanalyse."
        }
      },
      {
        question: {
          en: "What is Non-Maximum Suppression (NMS) used for in object detection?",
          es: "¿Para qué se usa la Supresión No-Máxima (NMS) en detección de objetos?",
          de: "Wofür wird Non-Maximum Suppression (NMS) in der Objekterkennung verwendet?",
          nl: "Waarvoor wordt Non-Maximum Suppression (NMS) gebruikt bij objectdetectie?"
        },
        options: [
          { en: "Removing duplicate detections of the same object", es: "Eliminar detecciones duplicadas del mismo objeto", de: "Entfernung doppelter Erkennungen desselben Objekts", nl: "Dubbele detecties van hetzelfde object verwijderen" },
          { en: "Suppressing low-quality images", es: "Suprimir imágenes de baja calidad", de: "Unterdrückung minderwertiger Bilder", nl: "Beelden van lage kwaliteit onderdrukken" },
          { en: "Reducing image brightness", es: "Reducir brillo de imagen", de: "Bildhelligkeit reduzieren", nl: "Beeldhelderheid verminderen" },
          { en: "Minimizing detection accuracy", es: "Minimizar precisión de detección", de: "Erkennungsgenauigkeit minimieren", nl: "Detectienauwkeurigheid minimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "NMS eliminates redundant bounding boxes by keeping only the detection with highest confidence score among overlapping detections of the same object class.",
          es: "NMS elimina cajas delimitadoras redundantes manteniendo solo la detección con mayor puntuación de confianza entre detecciones superpuestas de la misma clase de objeto.",
          de: "NMS eliminiert redundante Begrenzungsrahmen indem nur die Erkennung mit höchster Vertrauenswertung unter überlappenden Erkennungen derselben Objektklasse beibehalten wird.",
          nl: "NMS elimineert redundante begrenzingskaders door alleen de detectie met de hoogste vertrouwensscore te behouden onder overlappende detecties van dezelfde objectklasse."
        }
      },
      {
        question: {
          en: "What are anchor boxes in modern object detection architectures?",
          es: "¿Qué son las cajas ancla en arquitecturas modernas de detección de objetos?",
          de: "Was sind Anker-Boxen in modernen Objekterkennungsarchitekturen?",
          nl: "Wat zijn anchor boxes in moderne objectdetectie-architecturen?"
        },
        options: [
          { en: "Predefined reference boxes of different sizes and aspect ratios used as detection templates", es: "Cajas de referencia predefinidas de diferentes tamaños y proporciones usadas como plantillas de detección", de: "Vordefinierte Referenzboxen verschiedener Größen und Seitenverhältnisse als Erkennungsvorlagen verwendet", nl: "Vooraf gedefinieerde referentiekaders van verschillende groottes en aspectverhoudingen gebruikt als detectiesjablonen" },
          { en: "Boxes that anchor images to the screen", es: "Cajas que anclan imágenes a la pantalla", de: "Boxen die Bilder am Bildschirm verankern", nl: "Kaders die afbeeldingen aan het scherm verankeren" },
          { en: "Heavy boxes that slow down detection", es: "Cajas pesadas que ralentizan la detección", de: "Schwere Boxen die Erkennung verlangsamen", nl: "Zware kaders die detectie vertragen" },
          { en: "Boxes used only for sea navigation", es: "Cajas usadas solo para navegación marítima", de: "Boxen nur für Seenavigation verwendet", nl: "Kaders alleen gebruikt voor zeenavigatie" }
        ],
        correct: 0,
        explanation: {
          en: "Anchor boxes provide a set of reference bounding boxes at different scales and ratios, which the network learns to adjust to fit actual objects during training.",
          es: "Las cajas ancla proporcionan un conjunto de cajas delimitadoras de referencia en diferentes escalas y proporciones, que la red aprende a ajustar para encajar objetos reales durante el entrenamiento.",
          de: "Anker-Boxen bieten einen Satz von Referenz-Begrenzungsrahmen in verschiedenen Skalen und Verhältnissen, die das Netzwerk lernt anzupassen um tatsächliche Objekte während des Trainings zu erfassen.",
          nl: "Anchor boxes bieden een set van referentie begrenzingskaders op verschillende schalen en verhoudingen, die het netwerk leert aan te passen om echte objecten te passen tijdens training."
        }
      },
      {
        question: {
          en: "What is SIFT (Scale-Invariant Feature Transform) primarily designed to detect?",
          es: "¿Qué está diseñado principalmente a detectar SIFT (Scale-Invariant Feature Transform)?",
          de: "Was ist SIFT (Scale-Invariant Feature Transform) hauptsächlich darauf ausgelegt zu erkennen?",
          nl: "Wat is SIFT (Scale-Invariant Feature Transform) hoofdzakelijk ontworpen om te detecteren?"
        },
        options: [
          { en: "Distinctive keypoints that are invariant to scale, rotation, and illumination changes", es: "Puntos clave distintivos que son invariantes a cambios de escala, rotación e iluminación", de: "Markante Schlüsselpunkte die invariant gegenüber Skalen-, Rotations- und Beleuchtungsänderungen sind", nl: "Onderscheidende keypoints die invariant zijn voor schaal-, rotatie- en verlichtingsveranderingen" },
          { en: "Only circular features in images", es: "Solo características circulares en imágenes", de: "Nur kreisförmige Merkmale in Bildern", nl: "Alleen ronde kenmerken in afbeeldingen" },
          { en: "Text and numbers in documents", es: "Texto y números en documentos", de: "Text und Zahlen in Dokumenten", nl: "Tekst en nummers in documenten" },
          { en: "Color differences between regions", es: "Diferencias de color entre regiones", de: "Farbunterschiede zwischen Regionen", nl: "Kleurverschillen tussen regio's" }
        ],
        correct: 0,
        explanation: {
          en: "SIFT extracts local features that remain stable across different viewing conditions, making it excellent for object recognition and image matching applications.",
          es: "SIFT extrae características locales que permanecen estables en diferentes condiciones de visualización, haciéndolo excelente para reconocimiento de objetos y aplicaciones de coincidencia de imágenes.",
          de: "SIFT extrahiert lokale Merkmale die unter verschiedenen Betrachtungsbedingungen stabil bleiben, macht es ausgezeichnet für Objekterkennung und Bildabgleichsanwendungen.",
          nl: "SIFT extraheert lokale kenmerken die stabiel blijven onder verschillende kijkomstandigheden, waardoor het uitstekend is voor objectherkenning en beeldmatchingtoepassingen."
        }
      },
      {
        question: {
          en: "What advantage does SURF (Speeded-Up Robust Features) have over SIFT?",
          es: "¿Qué ventaja tiene SURF (Speeded-Up Robust Features) sobre SIFT?",
          de: "Welchen Vorteil hat SURF (Speeded-Up Robust Features) gegenüber SIFT?",
          nl: "Welk voordeel heeft SURF (Speeded-Up Robust Features) ten opzichte van SIFT?"
        },
        options: [
          { en: "Faster computation while maintaining similar robustness to transformations", es: "Computación más rápida manteniendo robustez similar a transformaciones", de: "Schnellere Berechnung bei ähnlicher Robustheit gegenüber Transformationen", nl: "Snellere berekening terwijl vergelijkbare robuustheid tegen transformaties behouden blijft" },
          { en: "Better color feature detection", es: "Mejor detección de características de color", de: "Bessere Farb-Feature-Erkennung", nl: "Betere kleurkenmerkdetectie" },
          { en: "Works only with underwater images", es: "Funciona solo con imágenes submarinas", de: "Funktioniert nur mit Unterwasserbildern", nl: "Werkt alleen met onderwaterafbeeldingen" },
          { en: "Detects larger features exclusively", es: "Detecta exclusivamente características más grandes", de: "Erkennt ausschließlich größere Merkmale", nl: "Detecteert uitsluitend grotere kenmerken" }
        ],
        correct: 0,
        explanation: {
          en: "SURF uses integral images and Hessian matrix approximations to achieve significantly faster feature detection and description while maintaining comparable performance to SIFT.",
          es: "SURF usa imágenes integrales y aproximaciones de matriz Hessiana para lograr detección y descripción de características significativamente más rápida manteniendo rendimiento comparable a SIFT.",
          de: "SURF verwendet Integralbilder und Hessian-Matrix-Approximationen um signifikant schnellere Feature-Erkennung und -Beschreibung zu erreichen bei vergleichbarer Leistung zu SIFT.",
          nl: "SURF gebruikt integrale afbeeldingen en Hessian matrix benaderingen om significant snellere kenmerkdetectie en -beschrijving te bereiken terwijl vergelijkbare prestaties met SIFT behouden blijven."
        }
      },
      {
        question: {
          en: "What is template matching used for in computer vision?",
          es: "¿Para qué se usa la coincidencia de plantillas en visión por computadora?",
          de: "Wofür wird Template Matching in Computer Vision verwendet?",
          nl: "Waarvoor wordt template matching gebruikt in computer vision?"
        },
        options: [
          { en: "Finding occurrences of a template image within a larger source image", es: "Encontrar ocurrencias de una imagen plantilla dentro de una imagen fuente más grande", de: "Vorkommen eines Template-Bildes in einem größeren Quellbild finden", nl: "Voorkomens van een sjabloonafbeelding vinden binnen een grotere bronafbeelding" },
          { en: "Creating image templates for websites", es: "Crear plantillas de imagen para sitios web", de: "Bildvorlagen für Websites erstellen", nl: "Beeldsjablonen maken voor websites" },
          { en: "Matching color templates across images", es: "Coincidir plantillas de color entre imágenes", de: "Farbvorlagen zwischen Bildern abgleichen", nl: "Kleursjablonen matchen tussen afbeeldingen" },
          { en: "Generating templates automatically", es: "Generar plantillas automáticamente", de: "Vorlagen automatisch generieren", nl: "Sjablonen automatisch genereren" }
        ],
        correct: 0,
        explanation: {
          en: "Template matching is a fundamental technique for locating specific patterns or objects by sliding a template across an image and computing similarity measures at each position.",
          es: "La coincidencia de plantillas es una técnica fundamental para localizar patrones u objetos específicos deslizando una plantilla a través de una imagen y computando medidas de similitud en cada posición.",
          de: "Template Matching ist eine grundlegende Technik zur Lokalisierung spezifischer Muster oder Objekte durch Verschieben einer Vorlage über ein Bild und Berechnung von Ähnlichkeitsmaßen an jeder Position.",
          nl: "Template matching is een fundamentele techniek voor het lokaliseren van specifieke patronen of objecten door een sjabloon over een afbeelding te schuiven en gelijkenismetingen te berekenen op elke positie."
        }
      },
      {
        question: {
          en: "What is the main limitation of basic template matching?",
          es: "¿Cuál es la principal limitación de la coincidencia básica de plantillas?",
          de: "Was ist die Hauptbeschränkung des grundlegenden Template Matching?",
          nl: "Wat is de hoofdbeperking van basis template matching?"
        },
        options: [
          { en: "Sensitivity to scale, rotation, and illumination changes", es: "Sensibilidad a cambios de escala, rotación e iluminación", de: "Empfindlichkeit gegenüber Skalen-, Rotations- und Beleuchtungsänderungen", nl: "Gevoeligheid voor schaal-, rotatie- en verlichtingsveranderingen" },
          { en: "Too slow for any practical use", es: "Demasiado lento para cualquier uso práctico", de: "Zu langsam für praktische Anwendung", nl: "Te langzaam voor praktisch gebruik" },
          { en: "Only works with black and white images", es: "Solo funciona con imágenes en blanco y negro", de: "Funktioniert nur mit schwarz-weißen Bildern", nl: "Werkt alleen met zwart-wit afbeeldingen" },
          { en: "Requires too much memory", es: "Requiere demasiada memoria", de: "Benötigt zu viel Speicher", nl: "Vereist te veel geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "Basic template matching fails when the target object appears at different scales, orientations, or under different lighting conditions, making it unsuitable for robust object detection.",
          es: "La coincidencia básica de plantillas falla cuando el objeto objetivo aparece en diferentes escalas, orientaciones o bajo diferentes condiciones de iluminación, haciéndola inadecuada para detección robusta de objetos.",
          de: "Grundlegendes Template Matching versagt wenn das Zielobjekt in verschiedenen Skalierungen, Orientierungen oder unter verschiedenen Beleuchtungsbedingungen erscheint, macht es ungeeignet für robuste Objekterkennung.",
          nl: "Basis template matching faalt wanneer het doelobject verschijnt op verschillende schalen, oriëntaties of onder verschillende verlichtingsomstandigheden, waardoor het ongeschikt wordt voor robuuste objectdetectie."
        }
      },
      {
        question: {
          en: "What are corner points in feature detection?",
          es: "¿Qué son los puntos de esquina en detección de características?",
          de: "Was sind Eckpunkte in der Feature-Erkennung?",
          nl: "Wat zijn hoekpunten in kenmerkdetectie?"
        },
        options: [
          { en: "Points where image intensity changes significantly in multiple directions", es: "Puntos donde la intensidad de imagen cambia significativamente en múltiples direcciones", de: "Punkte wo sich Bildintensität signifikant in mehrere Richtungen ändert", nl: "Punten waar beeldintensiteit significant verandert in meerdere richtingen" },
          { en: "Points only at image corners", es: "Puntos solo en esquinas de imagen", de: "Punkte nur an Bildecken", nl: "Punten alleen op afbeeldingshoeken" },
          { en: "Points forming geometric corners", es: "Puntos formando esquinas geométricas", de: "Punkte die geometrische Ecken bilden", nl: "Punten die geometrische hoeken vormen" },
          { en: "Points with sharp color transitions", es: "Puntos con transiciones de color agudas", de: "Punkte mit scharfen Farbübergängen", nl: "Punten met scherpe kleurovergangen" }
        ],
        correct: 0,
        explanation: {
          en: "Corner points represent locations with high gradient variations in multiple directions, making them highly distinctive and repeatable features for matching and tracking.",
          es: "Los puntos de esquina representan ubicaciones con altas variaciones de gradiente en múltiples direcciones, haciéndolos características altamente distintivas y repetibles para coincidencia y seguimiento.",
          de: "Eckpunkte repräsentieren Orte mit hohen Gradientenvariationen in mehrere Richtungen, macht sie hochdistinktive und wiederholbare Features für Matching und Tracking.",
          nl: "Hoekpunten vertegenwoordigen locaties met hoge gradiëntvariaties in meerdere richtingen, waardoor ze zeer onderscheidende en herhaalbare kenmerken worden voor matching en tracking."
        }
      },
      {
        question: {
          en: "What is the Harris corner detector measuring?",
          es: "¿Qué está midiendo el detector de esquinas Harris?",
          de: "Was misst der Harris Corner Detector?",
          nl: "Wat meet de Harris hoekdetector?"
        },
        options: [
          { en: "Local autocorrelation function to identify points with strong gradients in orthogonal directions", es: "Función de autocorrelación local para identificar puntos con gradientes fuertes en direcciones ortogonales", de: "Lokale Autokorrelationsfunktion um Punkte mit starken Gradienten in orthogonalen Richtungen zu identifizieren", nl: "Lokale autocorrelatiefunctie om punten te identificeren met sterke gradiënten in orthogonale richtingen" },
          { en: "Corner angles in geometric shapes", es: "Ángulos de esquina en formas geométricas", de: "Eckwinkel in geometrischen Formen", nl: "Hoekhoeken in geometrische vormen" },
          { en: "Distance from image center", es: "Distancia desde el centro de imagen", de: "Entfernung vom Bildzentrum", nl: "Afstand van beeldcentrum" },
          { en: "Brightness levels at corners", es: "Niveles de brillo en esquinas", de: "Helligkeitslevel an Ecken", nl: "Helderheidsniveaus bij hoeken" }
        ],
        correct: 0,
        explanation: {
          en: "The Harris detector computes eigenvalues of the structure tensor to measure how much the local autocorrelation function changes when the image is shifted in small amounts.",
          es: "El detector Harris calcula valores propios del tensor de estructura para medir cuánto cambia la función de autocorrelación local cuando la imagen se desplaza en cantidades pequeñas.",
          de: "Der Harris-Detektor berechnet Eigenwerte des Strukturtensors um zu messen wie stark sich die lokale Autokorrelationsfunktion ändert wenn das Bild um kleine Beträge verschoben wird.",
          nl: "De Harris detector berekent eigenwaarden van de structuurtensor om te meten hoeveel de lokale autocorrelatiefunctie verandert wanneer het beeld in kleine hoeveelheden wordt verschoven."
        }
      },
      {
        question: {
          en: "What is feature matching in computer vision?",
          es: "¿Qué es la coincidencia de características en visión por computadora?",
          de: "Was ist Feature Matching in Computer Vision?",
          nl: "Wat is kenmerkmatching in computer vision?"
        },
        options: [
          { en: "Establishing correspondences between features detected in different images", es: "Establecer correspondencias entre características detectadas en diferentes imágenes", de: "Korrespondenzen zwischen in verschiedenen Bildern erkannten Features etablieren", nl: "Correspondentie vaststellen tussen kenmerken gedetecteerd in verschillende afbeeldingen" },
          { en: "Matching image features to templates", es: "Coincidir características de imagen con plantillas", de: "Bildmerkmale mit Vorlagen abgleichen", nl: "Beeldkenmerken matchen met sjablonen" },
          { en: "Finding similar colors in images", es: "Encontrar colores similares en imágenes", de: "Ähnliche Farben in Bildern finden", nl: "Vergelijkbare kleuren vinden in afbeeldingen" },
          { en: "Matching feature extraction algorithms", es: "Coincidir algoritmos de extracción de características", de: "Feature-Extraktionsalgorithmen abgleichen", nl: "Kenmerkextractie-algoritmes matchen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature matching connects corresponding points between images using descriptor similarity, enabling applications like image stitching, 3D reconstruction, and object recognition.",
          es: "La coincidencia de características conecta puntos correspondientes entre imágenes usando similitud de descriptores, permitiendo aplicaciones como cosido de imágenes, reconstrucción 3D y reconocimiento de objetos.",
          de: "Feature Matching verbindet korrespondierende Punkte zwischen Bildern mittels Deskriptor-Ähnlichkeit, ermöglicht Anwendungen wie Bildstitching, 3D-Rekonstruktion und Objekterkennung.",
          nl: "Kenmerkmatching verbindt corresponderende punten tussen afbeeldingen met behulp van descriptor gelijkenis, waardoor toepassingen mogelijk worden zoals beeldstitching, 3D reconstructie en objectherkenning."
        }
      },
      {
        question: {
          en: "What is RANSAC commonly used for in feature-based computer vision?",
          es: "¿Para qué se usa comúnmente RANSAC en visión por computadora basada en características?",
          de: "Wofür wird RANSAC häufig in Feature-basierter Computer Vision verwendet?",
          nl: "Waarvoor wordt RANSAC vaak gebruikt in kenmerk-gebaseerde computer vision?"
        },
        options: [
          { en: "Robust estimation of geometric transformations by rejecting outlier matches", es: "Estimación robusta de transformaciones geométricas rechazando coincidencias atípicas", de: "Robuste Schätzung geometrischer Transformationen durch Ablehnung von Ausreißer-Matches", nl: "Robuuste schatting van geometrische transformaties door uitbijter matches te verwerpen" },
          { en: "Random sampling of image regions", es: "Muestreo aleatorio de regiones de imagen", de: "Zufälliges Sampling von Bildregionen", nl: "Willekeurige sampling van beeldregio's" },
          { en: "Creating random feature descriptors", es: "Crear descriptores de características aleatorios", de: "Zufällige Feature-Deskriptoren erstellen", nl: "Willekeurige kenmerkdescriptors maken" },
          { en: "Randomly selecting corner points", es: "Seleccionar aleatoriamente puntos de esquina", de: "Zufällige Auswahl von Eckpunkten", nl: "Willekeurig hoekpunten selecteren" }
        ],
        correct: 0,
        explanation: {
          en: "RANSAC iteratively fits models to random subsets of feature matches, identifying the largest set of inliers consistent with a geometric transformation like homography or fundamental matrix.",
          es: "RANSAC ajusta iterativamente modelos a subconjuntos aleatorios de coincidencias de características, identificando el conjunto más grande de valores atípicos consistentes con una transformación geométrica como homografía o matriz fundamental.",
          de: "RANSAC passt iterativ Modelle an zufällige Teilmengen von Feature-Matches an, identifiziert die größte Menge von Inliers die mit einer geometrischen Transformation wie Homographie oder Fundamentalmatrix konsistent sind.",
          nl: "RANSAC past iteratief modellen aan op willekeurige subsets van kenmerkmatches, identificeert de grootste set van inliers consistent met een geometrische transformatie zoals homografie of fundamentele matrix."
        }
      },
      {
        question: {
          en: "What is the Difference of Gaussians (DoG) used for in SIFT?",
          es: "¿Para qué se usa la Diferencia de Gaussianas (DoG) en SIFT?",
          de: "Wofür wird die Difference of Gaussians (DoG) in SIFT verwendet?",
          nl: "Waarvoor wordt het Verschil van Gaussians (DoG) gebruikt in SIFT?"
        },
        options: [
          { en: "Approximating the Laplacian of Gaussian for efficient scale-space extrema detection", es: "Aproximar el Laplaciano de Gaussiana para detección eficiente de extremos de espacio-escala", de: "Approximation des Laplacian of Gaussian für effiziente Skalenraum-Extremwert-Erkennung", nl: "Benadering van de Laplacian van Gaussian voor efficiënte schaalruimte extrema detectie" },
          { en: "Finding differences between dog images", es: "Encontrar diferencias entre imágenes de perros", de: "Unterschiede zwischen Hundebildern finden", nl: "Verschillen vinden tussen hondenafbeeldingen" },
          { en: "Calculating Gaussian blur differences", es: "Calcular diferencias de desenfoque Gaussiano", de: "Gaussian-Unschärfe-Unterschiede berechnen", nl: "Gaussian vervagingsverschillen berekenen" },
          { en: "Comparing two Gaussian distributions", es: "Comparar dos distribuciones Gaussianas", de: "Zwei Gaussian-Verteilungen vergleichen", nl: "Twee Gaussian distributies vergelijken" }
        ],
        correct: 0,
        explanation: {
          en: "DoG provides a computationally efficient approximation to the Laplacian of Gaussian, which is optimal for detecting blob-like structures at different scales in scale-space.",
          es: "DoG proporciona una aproximación computacionalmente eficiente al Laplaciano de Gaussiana, que es óptimo para detectar estructuras tipo blob en diferentes escalas en espacio-escala.",
          de: "DoG bietet eine rechnerisch effiziente Approximation zum Laplacian of Gaussian, der optimal für die Erkennung blob-artiger Strukturen in verschiedenen Skalen im Skalenraum ist.",
          nl: "DoG biedt een computationeel efficiënte benadering van de Laplacian van Gaussian, die optimaal is voor het detecteren van blob-achtige structuren op verschillende schalen in schaalruimte."
        }
      },
      {
        question: {
          en: "What is local binary patterns (LBP) primarily used for?",
          es: "¿Para qué se usan principalmente los patrones binarios locales (LBP)?",
          de: "Wofür werden Local Binary Patterns (LBP) hauptsächlich verwendet?",
          nl: "Waarvoor worden lokale binaire patronen (LBP) hoofdzakelijk gebruikt?"
        },
        options: [
          { en: "Texture description and classification by encoding local neighborhood relationships", es: "Descripción y clasificación de textura codificando relaciones de vecindario local", de: "Texturbeschreibung und -klassifizierung durch Kodierung lokaler Nachbarschaftsbeziehungen", nl: "Textuuromschrijving en classificatie door lokale buurtrelaties te coderen" },
          { en: "Binary image processing only", es: "Solo procesamiento de imágenes binarias", de: "Nur binäre Bildverarbeitung", nl: "Alleen binaire beeldverwerking" },
          { en: "Converting images to binary format", es: "Convertir imágenes a formato binario", de: "Bilder in binäres Format konvertieren", nl: "Afbeeldingen converteren naar binair formaat" },
          { en: "Local pattern matching algorithms", es: "Algoritmos de coincidencia de patrones locales", de: "Lokale Musterabgleichsalgorithmen", nl: "Lokale patroonmatchingalgoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "LBP creates rotation-invariant texture descriptors by comparing each pixel with its neighbors and encoding the relationships as binary numbers, useful for face recognition and material classification.",
          es: "LBP crea descriptores de textura invariantes a rotación comparando cada píxel con sus vecinos y codificando las relaciones como números binarios, útil para reconocimiento facial y clasificación de materiales.",
          de: "LBP erstellt rotationsinvariante Texturdeskriptoren durch Vergleich jedes Pixels mit seinen Nachbarn und Kodierung der Beziehungen als Binärzahlen, nützlich für Gesichtserkennung und Materialklassifizierung.",
          nl: "LBP creëert rotatie-invariante textuurbeschrijvers door elke pixel te vergelijken met zijn buren en de relaties te coderen als binaire getallen, nuttig voor gezichtsherkenning en materiaalclassificatie."
        }
      },
      {
        question: {
          en: "What is the main challenge in multi-scale feature detection?",
          es: "¿Cuál es el principal desafío en detección de características multi-escala?",
          de: "Was ist die Hauptherausforderung in der Multiskalen-Feature-Erkennung?",
          nl: "Wat is de hoofduitdaging in multi-schaal kenmerkdetectie?"
        },
        options: [
          { en: "Detecting features consistently across different image scales and resolutions", es: "Detectar características consistentemente a través de diferentes escalas y resoluciones de imagen", de: "Features konsistent über verschiedene Bildskalen und -auflösungen erkennen", nl: "Kenmerken consistent detecteren over verschillende beeldschalen en resoluties" },
          { en: "Processing multiple images simultaneously", es: "Procesar múltiples imágenes simultáneamente", de: "Mehrere Bilder gleichzeitig verarbeiten", nl: "Meerdere afbeeldingen tegelijkertijd verwerken" },
          { en: "Scaling feature descriptors", es: "Escalar descriptores de características", de: "Feature-Deskriptoren skalieren", nl: "Kenmerkdescriptors schalen" },
          { en: "Finding the optimal image scale", es: "Encontrar la escala de imagen óptima", de: "Optimale Bildskala finden", nl: "Optimale beeldschaal vinden" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-scale detection must handle the fact that features appear differently at various scales, requiring scale-space representations and careful parameter tuning to maintain detection consistency.",
          es: "La detección multi-escala debe manejar el hecho de que las características aparecen diferentemente en varias escalas, requiriendo representaciones de espacio-escala y ajuste cuidadoso de parámetros para mantener consistencia de detección.",
          de: "Multiskalen-Erkennung muss damit umgehen dass Features bei verschiedenen Skalen unterschiedlich erscheinen, erfordert Skalenraum-Repräsentationen und sorgfältige Parameter-Anpassung um Erkennungskonsistenz zu erhalten.",
          nl: "Multi-schaal detectie moet omgaan met het feit dat kenmerken anders verschijnen op verschillende schalen, vereist schaalruimte representaties en zorgvuldige parameter afstelling om detectieconsistentie te behouden."
        }
      },
      {
        question: {
          en: "What is optical flow estimation used for in computer vision?",
          es: "¿Para qué se usa la estimación de flujo óptico en visión por computadora?",
          de: "Wofür wird Optical Flow Estimation in Computer Vision verwendet?",
          nl: "Waarvoor wordt optische flow schatting gebruikt in computer vision?"
        },
        options: [
          { en: "Computing pixel-level motion vectors between consecutive video frames", es: "Computar vectores de movimiento a nivel de píxel entre fotogramas consecutivos de video", de: "Pixel-Level-Bewegungsvektoren zwischen aufeinanderfolgenden Videoframes berechnen", nl: "Pixel-niveau bewegingsvectoren berekenen tussen opeenvolgende videoframes" },
          { en: "Measuring light flow through optical systems", es: "Medir flujo de luz a través de sistemas ópticos", de: "Lichtfluss durch optische Systeme messen", nl: "Lichtstroming meten door optische systemen" },
          { en: "Estimating camera lens quality", es: "Estimar calidad de lente de cámara", de: "Kameraobjektivqualität schätzen", nl: "Cameralenskwaliteit schatten" },
          { en: "Calculating optical device performance", es: "Calcular rendimiento de dispositivo óptico", de: "Optische Geräteleistung berechnen", nl: "Optische apparaatprestaties berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Optical flow provides dense motion information by estimating how each pixel moves between frames, enabling applications like motion analysis, object tracking, and video stabilization.",
          es: "El flujo óptico proporciona información de movimiento densa estimando cómo se mueve cada píxel entre fotogramas, permitiendo aplicaciones como análisis de movimiento, seguimiento de objetos y estabilización de video.",
          de: "Optical Flow bietet dichte Bewegungsinformationen durch Schätzung wie sich jeder Pixel zwischen Frames bewegt, ermöglicht Anwendungen wie Bewegungsanalyse, Objektverfolgung und Videostabilisierung.",
          nl: "Optische flow biedt dichte bewegingsinformatie door te schatten hoe elke pixel beweegt tussen frames, maakt toepassingen mogelijk zoals bewegingsanalyse, object tracking en videostabilisatie."
        }
      },
      {
        question: {
          en: "What is normalized cross-correlation (NCC) measuring in template matching?",
          es: "¿Qué está midiendo la correlación cruzada normalizada (NCC) en coincidencia de plantillas?",
          de: "Was misst die normalisierte Kreuzkorrelation (NCC) im Template Matching?",
          nl: "Wat meet genormaliseerde kruiscorrelatie (NCC) in template matching?"
        },
        options: [
          { en: "Similarity between template and image regions, normalized for intensity variations", es: "Similitud entre plantilla y regiones de imagen, normalizada para variaciones de intensidad", de: "Ähnlichkeit zwischen Template und Bildregionen, normalisiert für Intensitätsvariationen", nl: "Gelijkenis tussen sjabloon en beeldregio's, genormaliseerd voor intensiteitsvariaties" },
          { en: "Cross-sectional correlation only", es: "Solo correlación de sección transversal", de: "Nur Querschnittskorrelation", nl: "Alleen dwarsdoorsnede correlatie" },
          { en: "Normal distribution correlation", es: "Correlación de distribución normal", de: "Normalverteilungskorrelation", nl: "Normale distributie correlatie" },
          { en: "Network cross-connections", es: "Conexiones cruzadas de red", de: "Netzwerk-Kreuzverbindungen", nl: "Netwerk kruisverbindingen" }
        ],
        correct: 0,
        explanation: {
          en: "NCC provides a robust similarity measure that is invariant to linear illumination changes by normalizing the correlation coefficient, making template matching more reliable across varying lighting conditions.",
          es: "NCC proporciona una medida de similitud robusta que es invariante a cambios de iluminación lineales normalizando el coeficiente de correlación, haciendo la coincidencia de plantillas más confiable en condiciones de iluminación variables.",
          de: "NCC bietet ein robustes Ähnlichkeitsmaß das invariant gegenüber linearen Beleuchtungsänderungen ist durch Normalisierung des Korrelationskoeffizienten, macht Template Matching zuverlässiger bei wechselnden Lichtbedingungen.",
          nl: "NCC biedt een robuuste gelijkenismaat die invariant is voor lineaire verlichtingsveranderingen door de correlatiecoëfficiënt te normaliseren, waardoor template matching betrouwbaarder wordt onder variërende verlichtingsomstandigheden."
        }
      },
      {
        question: {
          en: "What is feature pyramid representation used for in computer vision?",
          es: "¿Para qué se usa la representación de pirámide de características en visión por computadora?",
          de: "Wofür wird Feature Pyramid Representation in Computer Vision verwendet?",
          nl: "Waarvoor wordt feature pyramid representatie gebruikt in computer vision?"
        },
        options: [
          { en: "Processing images at multiple scales efficiently for scale-invariant detection", es: "Procesar imágenes en múltiples escalas eficientemente para detección invariante a escala", de: "Bilder bei mehreren Skalen effizient verarbeiten für skalenunabhängige Erkennung", nl: "Afbeeldingen efficiënt verwerken op meerdere schalen voor schaal-invariante detectie" },
          { en: "Building pyramid-shaped feature structures", es: "Construir estructuras de características en forma de pirámide", de: "Pyramidenförmige Feature-Strukturen aufbauen", nl: "Piramide-vormige kenmerkstructuren bouwen" },
          { en: "Hierarchical feature organization only", es: "Solo organización jerárquica de características", de: "Nur hierarchische Feature-Organisation", nl: "Alleen hiërarchische kenmerkorganisatie" },
          { en: "Pyramidal image compression", es: "Compresión de imagen piramidal", de: "Pyramidale Bildkompression", nl: "Piramidale beeldcompressie" }
        ],
        correct: 0,
        explanation: {
          en: "Feature pyramids create multi-resolution representations allowing algorithms to detect objects of different sizes efficiently without repeatedly resizing the input image.",
          es: "Las pirámides de características crean representaciones multi-resolución permitiendo a algoritmos detectar objetos de diferentes tamaños eficientemente sin redimensionar repetidamente la imagen de entrada.",
          de: "Feature-Pyramiden erstellen Multi-Auflösungs-Repräsentationen die Algorithmen ermöglichen Objekte verschiedener Größen effizient zu erkennen ohne wiederholt das Eingabebild zu skalieren.",
          nl: "Feature pyramiden creëren multi-resolutie representaties waardoor algoritmes objecten van verschillende groottes efficiënt kunnen detecteren zonder herhaaldelijk het invoerbeeld te herschalen."
        }
      },
      {
        question: {
          en: "What is the main advantage of using HOG (Histogram of Oriented Gradients) features?",
          es: "¿Cuál es la principal ventaja de usar características HOG (Histograma de Gradientes Orientados)?",
          de: "Was ist der Hauptvorteil der Verwendung von HOG (Histogram of Oriented Gradients) Features?",
          nl: "Wat is het hoofdvoordeel van het gebruik van HOG (Histogram van Georiënteerde Gradiënten) kenmerken?"
        },
        options: [
          { en: "Capturing local shape information while being robust to illumination changes", es: "Capturar información de forma local siendo robusta a cambios de iluminación", de: "Lokale Forminformationen erfassen während robust gegenüber Beleuchtungsänderungen", nl: "Lokale vorminfo vastleggen terwijl robuust tegen verlichtingsveranderingen" },
          { en: "Only working with histogram equalization", es: "Solo funcionar con ecualización de histograma", de: "Nur mit Histogramm-Ausgleich funktionieren", nl: "Alleen werken met histogram egalisatie" },
          { en: "Detecting horizontal and vertical edges only", es: "Detectar solo bordes horizontales y verticales", de: "Nur horizontale und vertikale Kanten erkennen", nl: "Alleen horizontale en verticale randen detecteren" },
          { en: "Requiring minimal computational resources", es: "Requerir recursos computacionales mínimos", de: "Minimale Rechenressourcen benötigen", nl: "Minimale computationele bronnen vereisen" }
        ],
        correct: 0,
        explanation: {
          en: "HOG descriptors encode edge directions and magnitudes in local regions, providing rich shape information that is relatively invariant to lighting variations and small geometric transformations.",
          es: "Los descriptores HOG codifican direcciones y magnitudes de bordes en regiones locales, proporcionando información rica de forma que es relativamente invariante a variaciones de iluminación y pequeñas transformaciones geométricas.",
          de: "HOG-Deskriptoren kodieren Kantenrichtungen und -stärken in lokalen Regionen, bieten reiche Forminformationen die relativ invariant gegenüber Beleuchtungsvariationen und kleinen geometrischen Transformationen sind.",
          nl: "HOG descriptors coderen randrichtingen en sterktes in lokale regio's, bieden rijke vorminfo die relatief invariant is voor verlichtingsvariaties en kleine geometrische transformaties."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();