// Computer vision Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Computer Vision Level 6",
          "es": "Visión por Computadora Nivel 6",
          "de": "Computer Vision Stufe 6",
          "nl": "Computer Vision Level 6"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between object detection and object classification?",
                  "es": "¿Cuál es la principal diferencia entre detección de objetos y clasificación de objetos?",
                  "de": "Was ist der Hauptunterschied zwischen Objekterkennung und Objektklassifizierung?",
                  "nl": "Wat is het hoofdverschil tussen objectdetectie en objectclassificatie?"
        },
        options: [
        {
                  "en": "They are exactly the same thing",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau dasselbe",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Classification works with videos, detection with images",
                  "es": "La clasificación funciona con videos, la detección con imágenes",
                  "de": "Klassifizierung funktioniert mit Videos, Erkennung mit Bildern",
                  "nl": "Classificatie werkt met video's, detectie met afbeeldingen"
        },
        {
                  "en": "Detection is faster than classification",
                  "es": "La detección es más rápida que la clasificación",
                  "de": "Erkennung ist schneller als Klassifizierung",
                  "nl": "Detectie is sneller dan classificatie"
        },
        {
                  "en": "Detection finds and locates objects, classification only identifies what type of object it is",
                  "es": "La detección encuentra y localiza objetos, la clasificación solo identifica qué tipo de objeto es",
                  "de": "Erkennung findet und lokalisiert Objekte, Klassifizierung identifiziert nur welche Art von Objekt es ist",
                  "nl": "Detectie vindt en lokaliseert objecten, classificatie identificeert alleen welk type object het is"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Object detection combines classification (what is it?) with localization (where is it?), producing bounding boxes around detected objects with their class labels.",
                  "es": "La detección de objetos combina clasificación (¿qué es?) con localización (¿dónde está?), produciendo cajas delimitadoras alrededor de objetos detectados con sus etiquetas de clase.",
                  "de": "Objekterkennung kombiniert Klassifizierung (was ist es?) mit Lokalisierung (wo ist es?), produziert Begrenzungsrahmen um erkannte Objekte mit ihren Klassenlabels.",
                  "nl": "Objectdetectie combineert classificatie (wat is het?) met lokalisatie (waar is het?), produceert begrenzingskaders rond gedetecteerde objecten met hun klassenlabels."
        }
      },
      {
        question: {
                  "en": "What is YOLO (You Only Look Once) known for in object detection?",
                  "es": "¿Por qué es conocido YOLO (You Only Look Once) en detección de objetos?",
                  "de": "Wofür ist YOLO (You Only Look Once) in der Objekterkennung bekannt?",
                  "nl": "Waarvoor staat YOLO (You Only Look Once) bekend bij objectdetectie?"
        },
        options: [
        {
                  "en": "Only detecting one object per image",
                  "es": "Solo detectar un objeto por imagen",
                  "de": "Nur ein Objekt pro Bild erkennen",
                  "nl": "Slechts één object per afbeelding detecteren"
        },
        {
                  "en": "Looking at images only once for training",
                  "es": "Mirar imágenes solo una vez para entrenamiento",
                  "de": "Bilder nur einmal für Training betrachten",
                  "nl": "Afbeeldingen slechts één keer bekijken voor training"
        },
        {
                  "en": "Real-time object detection by processing the entire image in a single forward pass",
                  "es": "Detección de objetos en tiempo real procesando toda la imagen en una sola pasada hacia adelante",
                  "de": "Echtzeit-Objekterkennung durch Verarbeitung des gesamten Bildes in einem einzigen Vorwärtsdurchgang",
                  "nl": "Real-time objectdetectie door het hele beeld in één forward pass te verwerken"
        },
        {
                  "en": "Using yellow color detection only",
                  "es": "Usar solo detección de color amarillo",
                  "de": "Nur gelbe Farberkennung verwenden",
                  "nl": "Alleen gele kleurdetectie gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "YOLO revolutionized object detection by treating it as a single regression problem, making predictions for bounding boxes and class probabilities simultaneously in one network evaluation.",
                  "es": "YOLO revolucionó la detección de objetos tratándola como un solo problema de regresión, haciendo predicciones para cajas delimitadoras y probabilidades de clase simultáneamente en una evaluación de red.",
                  "de": "YOLO revolutionierte Objekterkennung indem es sie als einzelnes Regressionsproblem behandelte, Vorhersagen für Begrenzungsrahmen und Klassenwahrscheinlichkeiten gleichzeitig in einer Netzwerkevaluierung machte.",
                  "nl": "YOLO revolutioneerde objectdetectie door het te behandelen als één regressieprobleem, voorspellingen voor begrenzingskaders en klassewaarschijnlijkheden tegelijkertijd maken in één netwerkevaluatie."
        }
      },
      {
        question: {
                  "en": "What is object tracking in computer vision?",
                  "es": "¿Qué es el seguimiento de objetos en visión por computadora?",
                  "de": "Was ist Objektverfolgung in Computer Vision?",
                  "nl": "Wat is object tracking in computer vision?"
        },
        options: [
        {
                  "en": "Drawing tracks around static objects",
                  "es": "Dibujar pistas alrededor de objetos estáticos",
                  "de": "Spuren um statische Objekte zeichnen",
                  "nl": "Sporen tekenen rond statische objecten"
        },
        {
                  "en": "Following the movement of objects across multiple video frames",
                  "es": "Seguir el movimiento de objetos a través de múltiples fotogramas de video",
                  "de": "Verfolgung der Bewegung von Objekten über mehrere Videoframes",
                  "nl": "Het volgen van de beweging van objecten over meerdere videoframes"
        },
        {
                  "en": "Counting the number of objects in images",
                  "es": "Contar el número de objetos en imágenes",
                  "de": "Anzahl der Objekte in Bildern zählen",
                  "nl": "Het aantal objecten in afbeeldingen tellen"
        },
        {
                  "en": "Recording object locations in databases",
                  "es": "Registrar ubicaciones de objetos en bases de datos",
                  "de": "Objektpositionen in Datenbanken aufzeichnen",
                  "nl": "Objectlocaties opslaan in databases"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Object tracking maintains consistent identity of objects as they move through a video sequence, enabling applications like surveillance, autonomous driving, and sports analysis.",
                  "es": "El seguimiento de objetos mantiene identidad consistente de objetos mientras se mueven a través de una secuencia de video, permitiendo aplicaciones como vigilancia, conducción autónoma y análisis deportivo.",
                  "de": "Objektverfolgung erhält konsistente Identität von Objekten während sie sich durch eine Videosequenz bewegen, ermöglicht Anwendungen wie Überwachung, autonomes Fahren und Sportanalyse.",
                  "nl": "Object tracking houdt consistente identiteit van objecten bij terwijl ze door een videoreeks bewegen, maakt toepassingen mogelijk zoals bewaking, autonoom rijden en sportanalyse."
        }
      },
      {
        question: {
                  "en": "What is Non-Maximum Suppression (NMS) used for in object detection?",
                  "es": "¿Para qué se usa la Supresión No-Máxima (NMS) en detección de objetos?",
                  "de": "Wofür wird Non-Maximum Suppression (NMS) in der Objekterkennung verwendet?",
                  "nl": "Waarvoor wordt Non-Maximum Suppression (NMS) gebruikt bij objectdetectie?"
        },
        options: [
        {
                  "en": "Minimizing detection accuracy",
                  "es": "Minimizar precisión de detección",
                  "de": "Erkennungsgenauigkeit minimieren",
                  "nl": "Detectienauwkeurigheid minimaliseren"
        },
        {
                  "en": "Reducing image brightness",
                  "es": "Reducir brillo de imagen",
                  "de": "Bildhelligkeit reduzieren",
                  "nl": "Beeldhelderheid verminderen"
        },
        {
                  "en": "Suppressing low-quality images",
                  "es": "Suprimir imágenes de baja calidad",
                  "de": "Unterdrückung minderwertiger Bilder",
                  "nl": "Beelden van lage kwaliteit onderdrukken"
        },
        {
                  "en": "Removing duplicate detections of the same object",
                  "es": "Eliminar detecciones duplicadas del mismo objeto",
                  "de": "Entfernung doppelter Erkennungen desselben Objekts",
                  "nl": "Dubbele detecties van hetzelfde object verwijderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NMS eliminates redundant bounding boxes by keeping only the detection with highest confidence score among overlapping detections of the same object class.",
                  "es": "NMS elimina cajas delimitadoras redundantes manteniendo solo la detección con mayor puntuación de confianza entre detecciones superpuestas de la misma clase de objeto.",
                  "de": "NMS eliminiert redundante Begrenzungsrahmen indem nur die Erkennung mit höchster Vertrauenswertung unter überlappenden Erkennungen derselben Objektklasse beibehalten wird.",
                  "nl": "NMS elimineert redundante begrenzingskaders door alleen de detectie met de hoogste vertrouwensscore te behouden onder overlappende detecties van dezelfde objectklasse."
        }
      },
      {
        question: {
                  "en": "What are anchor boxes in modern object detection architectures?",
                  "es": "¿Qué son las cajas ancla en arquitecturas modernas de detección de objetos?",
                  "de": "Was sind Anker-Boxen in modernen Objekterkennungsarchitekturen?",
                  "nl": "Wat zijn anchor boxes in moderne objectdetectie-architecturen?"
        },
        options: [
        {
                  "en": "Boxes that anchor images to the screen",
                  "es": "Cajas que anclan imágenes a la pantalla",
                  "de": "Boxen die Bilder am Bildschirm verankern",
                  "nl": "Kaders die afbeeldingen aan het scherm verankeren"
        },
        {
                  "en": "Boxes used only for sea navigation",
                  "es": "Cajas usadas solo para navegación marítima",
                  "de": "Boxen nur für Seenavigation verwendet",
                  "nl": "Kaders alleen gebruikt voor zeenavigatie"
        },
        {
                  "en": "Predefined reference boxes of different sizes and aspect ratios used as detection templates",
                  "es": "Cajas de referencia predefinidas de diferentes tamaños y proporciones usadas como plantillas de detección",
                  "de": "Vordefinierte Referenzboxen verschiedener Größen und Seitenverhältnisse als Erkennungsvorlagen verwendet",
                  "nl": "Vooraf gedefinieerde referentiekaders van verschillende groottes en aspectverhoudingen gebruikt als detectiesjablonen"
        },
        {
                  "en": "Heavy boxes that slow down detection",
                  "es": "Cajas pesadas que ralentizan la detección",
                  "de": "Schwere Boxen die Erkennung verlangsamen",
                  "nl": "Zware kaders die detectie vertragen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Anchor boxes provide a set of reference bounding boxes at different scales and ratios, which the network learns to adjust to fit actual objects during training.",
                  "es": "Las cajas ancla proporcionan un conjunto de cajas delimitadoras de referencia en diferentes escalas y proporciones, que la red aprende a ajustar para encajar objetos reales durante el entrenamiento.",
                  "de": "Anker-Boxen bieten einen Satz von Referenz-Begrenzungsrahmen in verschiedenen Skalen und Verhältnissen, die das Netzwerk lernt anzupassen um tatsächliche Objekte während des Trainings zu erfassen.",
                  "nl": "Anchor boxes bieden een set van referentie begrenzingskaders op verschillende schalen en verhoudingen, die het netwerk leert aan te passen om echte objecten te passen tijdens training."
        }
      },
      {
        question: {
                  "en": "What is SIFT (Scale-Invariant Feature Transform) primarily designed to detect?",
                  "es": "¿Qué está diseñado principalmente a detectar SIFT (Scale-Invariant Feature Transform)?",
                  "de": "Was ist SIFT (Scale-Invariant Feature Transform) hauptsächlich darauf ausgelegt zu erkennen?",
                  "nl": "Wat is SIFT (Scale-Invariant Feature Transform) hoofdzakelijk ontworpen om te detecteren?"
        },
        options: [
        {
                  "en": "Color differences between regions",
                  "es": "Diferencias de color entre regiones",
                  "de": "Farbunterschiede zwischen Regionen",
                  "nl": "Kleurverschillen tussen regio's"
        },
        {
                  "en": "Text and numbers in documents",
                  "es": "Texto y números en documentos",
                  "de": "Text und Zahlen in Dokumenten",
                  "nl": "Tekst en nummers in documenten"
        },
        {
                  "en": "Distinctive keypoints that are invariant to scale, rotation, and illumination changes",
                  "es": "Puntos clave distintivos que son invariantes a cambios de escala, rotación e iluminación",
                  "de": "Markante Schlüsselpunkte die invariant gegenüber Skalen-, Rotations- und Beleuchtungsänderungen sind",
                  "nl": "Onderscheidende keypoints die invariant zijn voor schaal-, rotatie- en verlichtingsveranderingen"
        },
        {
                  "en": "Only circular features in images",
                  "es": "Solo características circulares en imágenes",
                  "de": "Nur kreisförmige Merkmale in Bildern",
                  "nl": "Alleen ronde kenmerken in afbeeldingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "SIFT extracts local features that remain stable across different viewing conditions, making it excellent for object recognition and image matching applications.",
                  "es": "SIFT extrae características locales que permanecen estables en diferentes condiciones de visualización, haciéndolo excelente para reconocimiento de objetos y aplicaciones de coincidencia de imágenes.",
                  "de": "SIFT extrahiert lokale Merkmale die unter verschiedenen Betrachtungsbedingungen stabil bleiben, macht es ausgezeichnet für Objekterkennung und Bildabgleichsanwendungen.",
                  "nl": "SIFT extraheert lokale kenmerken die stabiel blijven onder verschillende kijkomstandigheden, waardoor het uitstekend is voor objectherkenning en beeldmatchingtoepassingen."
        }
      },
      {
        question: {
                  "en": "What advantage does SURF (Speeded-Up Robust Features) have over SIFT?",
                  "es": "¿Qué ventaja tiene SURF (Speeded-Up Robust Features) sobre SIFT?",
                  "de": "Welchen Vorteil hat SURF (Speeded-Up Robust Features) gegenüber SIFT?",
                  "nl": "Welk voordeel heeft SURF (Speeded-Up Robust Features) ten opzichte van SIFT?"
        },
        options: [
        {
                  "en": "Works only with underwater images",
                  "es": "Funciona solo con imágenes submarinas",
                  "de": "Funktioniert nur mit Unterwasserbildern",
                  "nl": "Werkt alleen met onderwaterafbeeldingen"
        },
        {
                  "en": "Faster computation while maintaining similar robustness to transformations",
                  "es": "Computación más rápida manteniendo robustez similar a transformaciones",
                  "de": "Schnellere Berechnung bei ähnlicher Robustheit gegenüber Transformationen",
                  "nl": "Snellere berekening terwijl vergelijkbare robuustheid tegen transformaties behouden blijft"
        },
        {
                  "en": "Detects larger features exclusively",
                  "es": "Detecta exclusivamente características más grandes",
                  "de": "Erkennt ausschließlich größere Merkmale",
                  "nl": "Detecteert uitsluitend grotere kenmerken"
        },
        {
                  "en": "Better color feature detection",
                  "es": "Mejor detección de características de color",
                  "de": "Bessere Farb-Feature-Erkennung",
                  "nl": "Betere kleurkenmerkdetectie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "SURF uses integral images and Hessian matrix approximations to achieve significantly faster feature detection and description while maintaining comparable performance to SIFT.",
                  "es": "SURF usa imágenes integrales y aproximaciones de matriz Hessiana para lograr detección y descripción de características significativamente más rápida manteniendo rendimiento comparable a SIFT.",
                  "de": "SURF verwendet Integralbilder und Hessian-Matrix-Approximationen um signifikant schnellere Feature-Erkennung und -Beschreibung zu erreichen bei vergleichbarer Leistung zu SIFT.",
                  "nl": "SURF gebruikt integrale afbeeldingen en Hessian matrix benaderingen om significant snellere kenmerkdetectie en -beschrijving te bereiken terwijl vergelijkbare prestaties met SIFT behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is template matching used for in computer vision?",
                  "es": "¿Para qué se usa la coincidencia de plantillas en visión por computadora?",
                  "de": "Wofür wird Template Matching in Computer Vision verwendet?",
                  "nl": "Waarvoor wordt template matching gebruikt in computer vision?"
        },
        options: [
        {
                  "en": "Finding occurrences of a template image within a larger source image",
                  "es": "Encontrar ocurrencias de una imagen plantilla dentro de una imagen fuente más grande",
                  "de": "Vorkommen eines Template-Bildes in einem größeren Quellbild finden",
                  "nl": "Voorkomens van een sjabloonafbeelding vinden binnen een grotere bronafbeelding"
        },
        {
                  "en": "Generating templates automatically",
                  "es": "Generar plantillas automáticamente",
                  "de": "Vorlagen automatisch generieren",
                  "nl": "Sjablonen automatisch genereren"
        },
        {
                  "en": "Creating image templates for websites",
                  "es": "Crear plantillas de imagen para sitios web",
                  "de": "Bildvorlagen für Websites erstellen",
                  "nl": "Beeldsjablonen maken voor websites"
        },
        {
                  "en": "Matching color templates across images",
                  "es": "Coincidir plantillas de color entre imágenes",
                  "de": "Farbvorlagen zwischen Bildern abgleichen",
                  "nl": "Kleursjablonen matchen tussen afbeeldingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Template matching is a fundamental technique for locating specific patterns or objects by sliding a template across an image and computing similarity measures at each position.",
                  "es": "La coincidencia de plantillas es una técnica fundamental para localizar patrones u objetos específicos deslizando una plantilla a través de una imagen y computando medidas de similitud en cada posición.",
                  "de": "Template Matching ist eine grundlegende Technik zur Lokalisierung spezifischer Muster oder Objekte durch Verschieben einer Vorlage über ein Bild und Berechnung von Ähnlichkeitsmaßen an jeder Position.",
                  "nl": "Template matching is een fundamentele techniek voor het lokaliseren van specifieke patronen of objecten door een sjabloon over een afbeelding te schuiven en gelijkenismetingen te berekenen op elke positie."
        }
      },
      {
        question: {
                  "en": "What is the main limitation of basic template matching?",
                  "es": "¿Cuál es la principal limitación de la coincidencia básica de plantillas?",
                  "de": "Was ist die Hauptbeschränkung des grundlegenden Template Matching?",
                  "nl": "Wat is de hoofdbeperking van basis template matching?"
        },
        options: [
        {
                  "en": "Sensitivity to scale, rotation, and illumination changes",
                  "es": "Sensibilidad a cambios de escala, rotación e iluminación",
                  "de": "Empfindlichkeit gegenüber Skalen-, Rotations- und Beleuchtungsänderungen",
                  "nl": "Gevoeligheid voor schaal-, rotatie- en verlichtingsveranderingen"
        },
        {
                  "en": "Too slow for any practical use",
                  "es": "Demasiado lento para cualquier uso práctico",
                  "de": "Zu langsam für praktische Anwendung",
                  "nl": "Te langzaam voor praktisch gebruik"
        },
        {
                  "en": "Only works with black and white images",
                  "es": "Solo funciona con imágenes en blanco y negro",
                  "de": "Funktioniert nur mit schwarz-weißen Bildern",
                  "nl": "Werkt alleen met zwart-wit afbeeldingen"
        },
        {
                  "en": "Requires too much memory",
                  "es": "Requiere demasiada memoria",
                  "de": "Benötigt zu viel Speicher",
                  "nl": "Vereist te veel geheugen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Basic template matching fails when the target object appears at different scales, orientations, or under different lighting conditions, making it unsuitable for robust object detection.",
                  "es": "La coincidencia básica de plantillas falla cuando el objeto objetivo aparece en diferentes escalas, orientaciones o bajo diferentes condiciones de iluminación, haciéndola inadecuada para detección robusta de objetos.",
                  "de": "Grundlegendes Template Matching versagt wenn das Zielobjekt in verschiedenen Skalierungen, Orientierungen oder unter verschiedenen Beleuchtungsbedingungen erscheint, macht es ungeeignet für robuste Objekterkennung.",
                  "nl": "Basis template matching faalt wanneer het doelobject verschijnt op verschillende schalen, oriëntaties of onder verschillende verlichtingsomstandigheden, waardoor het ongeschikt wordt voor robuuste objectdetectie."
        }
      },
      {
        question: {
                  "en": "What are corner points in feature detection?",
                  "es": "¿Qué son los puntos de esquina en detección de características?",
                  "de": "Was sind Eckpunkte in der Feature-Erkennung?",
                  "nl": "Wat zijn hoekpunten in kenmerkdetectie?"
        },
        options: [
        {
                  "en": "Points with sharp color transitions",
                  "es": "Puntos con transiciones de color agudas",
                  "de": "Punkte mit scharfen Farbübergängen",
                  "nl": "Punten met scherpe kleurovergangen"
        },
        {
                  "en": "Points forming geometric corners",
                  "es": "Puntos formando esquinas geométricas",
                  "de": "Punkte die geometrische Ecken bilden",
                  "nl": "Punten die geometrische hoeken vormen"
        },
        {
                  "en": "Points where image intensity changes significantly in multiple directions",
                  "es": "Puntos donde la intensidad de imagen cambia significativamente en múltiples direcciones",
                  "de": "Punkte wo sich Bildintensität signifikant in mehrere Richtungen ändert",
                  "nl": "Punten waar beeldintensiteit significant verandert in meerdere richtingen"
        },
        {
                  "en": "Points only at image corners",
                  "es": "Puntos solo en esquinas de imagen",
                  "de": "Punkte nur an Bildecken",
                  "nl": "Punten alleen op afbeeldingshoeken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Corner points represent locations with high gradient variations in multiple directions, making them highly distinctive and repeatable features for matching and tracking.",
                  "es": "Los puntos de esquina representan ubicaciones con altas variaciones de gradiente en múltiples direcciones, haciéndolos características altamente distintivas y repetibles para coincidencia y seguimiento.",
                  "de": "Eckpunkte repräsentieren Orte mit hohen Gradientenvariationen in mehrere Richtungen, macht sie hochdistinktive und wiederholbare Features für Matching und Tracking.",
                  "nl": "Hoekpunten vertegenwoordigen locaties met hoge gradiëntvariaties in meerdere richtingen, waardoor ze zeer onderscheidende en herhaalbare kenmerken worden voor matching en tracking."
        }
      },
      {
        question: {
                  "en": "What is the Harris corner detector measuring?",
                  "es": "¿Qué está midiendo el detector de esquinas Harris?",
                  "de": "Was misst der Harris Corner Detector?",
                  "nl": "Wat meet de Harris hoekdetector?"
        },
        options: [
        {
                  "en": "Local autocorrelation function to identify points with strong gradients in orthogonal directions",
                  "es": "Función de autocorrelación local para identificar puntos con gradientes fuertes en direcciones ortogonales",
                  "de": "Lokale Autokorrelationsfunktion um Punkte mit starken Gradienten in orthogonalen Richtungen zu identifizieren",
                  "nl": "Lokale autocorrelatiefunctie om punten te identificeren met sterke gradiënten in orthogonale richtingen"
        },
        {
                  "en": "Brightness levels at corners",
                  "es": "Niveles de brillo en esquinas",
                  "de": "Helligkeitslevel an Ecken",
                  "nl": "Helderheidsniveaus bij hoeken"
        },
        {
                  "en": "Corner angles in geometric shapes",
                  "es": "Ángulos de esquina en formas geométricas",
                  "de": "Eckwinkel in geometrischen Formen",
                  "nl": "Hoekhoeken in geometrische vormen"
        },
        {
                  "en": "Distance from image center",
                  "es": "Distancia desde el centro de imagen",
                  "de": "Entfernung vom Bildzentrum",
                  "nl": "Afstand van beeldcentrum"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Harris detector computes eigenvalues of the structure tensor to measure how much the local autocorrelation function changes when the image is shifted in small amounts.",
                  "es": "El detector Harris calcula valores propios del tensor de estructura para medir cuánto cambia la función de autocorrelación local cuando la imagen se desplaza en cantidades pequeñas.",
                  "de": "Der Harris-Detektor berechnet Eigenwerte des Strukturtensors um zu messen wie stark sich die lokale Autokorrelationsfunktion ändert wenn das Bild um kleine Beträge verschoben wird.",
                  "nl": "De Harris detector berekent eigenwaarden van de structuurtensor om te meten hoeveel de lokale autocorrelatiefunctie verandert wanneer het beeld in kleine hoeveelheden wordt verschoven."
        }
      },
      {
        question: {
                  "en": "What is feature matching in computer vision?",
                  "es": "¿Qué es la coincidencia de características en visión por computadora?",
                  "de": "Was ist Feature Matching in Computer Vision?",
                  "nl": "Wat is kenmerkmatching in computer vision?"
        },
        options: [
        {
                  "en": "Matching image features to templates",
                  "es": "Coincidir características de imagen con plantillas",
                  "de": "Bildmerkmale mit Vorlagen abgleichen",
                  "nl": "Beeldkenmerken matchen met sjablonen"
        },
        {
                  "en": "Matching feature extraction algorithms",
                  "es": "Coincidir algoritmos de extracción de características",
                  "de": "Feature-Extraktionsalgorithmen abgleichen",
                  "nl": "Kenmerkextractie-algoritmes matchen"
        },
        {
                  "en": "Establishing correspondences between features detected in different images",
                  "es": "Establecer correspondencias entre características detectadas en diferentes imágenes",
                  "de": "Korrespondenzen zwischen in verschiedenen Bildern erkannten Features etablieren",
                  "nl": "Correspondentie vaststellen tussen kenmerken gedetecteerd in verschillende afbeeldingen"
        },
        {
                  "en": "Finding similar colors in images",
                  "es": "Encontrar colores similares en imágenes",
                  "de": "Ähnliche Farben in Bildern finden",
                  "nl": "Vergelijkbare kleuren vinden in afbeeldingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Feature matching connects corresponding points between images using descriptor similarity, enabling applications like image stitching, 3D reconstruction, and object recognition.",
                  "es": "La coincidencia de características conecta puntos correspondientes entre imágenes usando similitud de descriptores, permitiendo aplicaciones como cosido de imágenes, reconstrucción 3D y reconocimiento de objetos.",
                  "de": "Feature Matching verbindet korrespondierende Punkte zwischen Bildern mittels Deskriptor-Ähnlichkeit, ermöglicht Anwendungen wie Bildstitching, 3D-Rekonstruktion und Objekterkennung.",
                  "nl": "Kenmerkmatching verbindt corresponderende punten tussen afbeeldingen met behulp van descriptor gelijkenis, waardoor toepassingen mogelijk worden zoals beeldstitching, 3D reconstructie en objectherkenning."
        }
      },
      {
        question: {
                  "en": "What is RANSAC commonly used for in feature-based computer vision?",
                  "es": "¿Para qué se usa comúnmente RANSAC en visión por computadora basada en características?",
                  "de": "Wofür wird RANSAC häufig in Feature-basierter Computer Vision verwendet?",
                  "nl": "Waarvoor wordt RANSAC vaak gebruikt in kenmerk-gebaseerde computer vision?"
        },
        options: [
        {
                  "en": "Randomly selecting corner points",
                  "es": "Seleccionar aleatoriamente puntos de esquina",
                  "de": "Zufällige Auswahl von Eckpunkten",
                  "nl": "Willekeurig hoekpunten selecteren"
        },
        {
                  "en": "Robust estimation of geometric transformations by rejecting outlier matches",
                  "es": "Estimación robusta de transformaciones geométricas rechazando coincidencias atípicas",
                  "de": "Robuste Schätzung geometrischer Transformationen durch Ablehnung von Ausreißer-Matches",
                  "nl": "Robuuste schatting van geometrische transformaties door uitbijter matches te verwerpen"
        },
        {
                  "en": "Creating random feature descriptors",
                  "es": "Crear descriptores de características aleatorios",
                  "de": "Zufällige Feature-Deskriptoren erstellen",
                  "nl": "Willekeurige kenmerkdescriptors maken"
        },
        {
                  "en": "Random sampling of image regions",
                  "es": "Muestreo aleatorio de regiones de imagen",
                  "de": "Zufälliges Sampling von Bildregionen",
                  "nl": "Willekeurige sampling van beeldregio's"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "RANSAC iteratively fits models to random subsets of feature matches, identifying the largest set of inliers consistent with a geometric transformation like homography or fundamental matrix.",
                  "es": "RANSAC ajusta iterativamente modelos a subconjuntos aleatorios de coincidencias de características, identificando el conjunto más grande de valores atípicos consistentes con una transformación geométrica como homografía o matriz fundamental.",
                  "de": "RANSAC passt iterativ Modelle an zufällige Teilmengen von Feature-Matches an, identifiziert die größte Menge von Inliers die mit einer geometrischen Transformation wie Homographie oder Fundamentalmatrix konsistent sind.",
                  "nl": "RANSAC past iteratief modellen aan op willekeurige subsets van kenmerkmatches, identificeert de grootste set van inliers consistent met een geometrische transformatie zoals homografie of fundamentele matrix."
        }
      },
      {
        question: {
                  "en": "What is the Difference of Gaussians (DoG) used for in SIFT?",
                  "es": "¿Para qué se usa la Diferencia de Gaussianas (DoG) en SIFT?",
                  "de": "Wofür wird die Difference of Gaussians (DoG) in SIFT verwendet?",
                  "nl": "Waarvoor wordt het Verschil van Gaussians (DoG) gebruikt in SIFT?"
        },
        options: [
        {
                  "en": "Calculating Gaussian blur differences",
                  "es": "Calcular diferencias de desenfoque Gaussiano",
                  "de": "Gaussian-Unschärfe-Unterschiede berechnen",
                  "nl": "Gaussian vervagingsverschillen berekenen"
        },
        {
                  "en": "Comparing two Gaussian distributions",
                  "es": "Comparar dos distribuciones Gaussianas",
                  "de": "Zwei Gaussian-Verteilungen vergleichen",
                  "nl": "Twee Gaussian distributies vergelijken"
        },
        {
                  "en": "Approximating the Laplacian of Gaussian for efficient scale-space extrema detection",
                  "es": "Aproximar el Laplaciano de Gaussiana para detección eficiente de extremos de espacio-escala",
                  "de": "Approximation des Laplacian of Gaussian für effiziente Skalenraum-Extremwert-Erkennung",
                  "nl": "Benadering van de Laplacian van Gaussian voor efficiënte schaalruimte extrema detectie"
        },
        {
                  "en": "Finding differences between dog images",
                  "es": "Encontrar diferencias entre imágenes de perros",
                  "de": "Unterschiede zwischen Hundebildern finden",
                  "nl": "Verschillen vinden tussen hondenafbeeldingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "DoG provides a computationally efficient approximation to the Laplacian of Gaussian, which is optimal for detecting blob-like structures at different scales in scale-space.",
                  "es": "DoG proporciona una aproximación computacionalmente eficiente al Laplaciano de Gaussiana, que es óptimo para detectar estructuras tipo blob en diferentes escalas en espacio-escala.",
                  "de": "DoG bietet eine rechnerisch effiziente Approximation zum Laplacian of Gaussian, der optimal für die Erkennung blob-artiger Strukturen in verschiedenen Skalen im Skalenraum ist.",
                  "nl": "DoG biedt een computationeel efficiënte benadering van de Laplacian van Gaussian, die optimaal is voor het detecteren van blob-achtige structuren op verschillende schalen in schaalruimte."
        }
      },
      {
        question: {
                  "en": "What is local binary patterns (LBP) primarily used for?",
                  "es": "¿Para qué se usan principalmente los patrones binarios locales (LBP)?",
                  "de": "Wofür werden Local Binary Patterns (LBP) hauptsächlich verwendet?",
                  "nl": "Waarvoor worden lokale binaire patronen (LBP) hoofdzakelijk gebruikt?"
        },
        options: [
        {
                  "en": "Binary image processing only",
                  "es": "Solo procesamiento de imágenes binarias",
                  "de": "Nur binäre Bildverarbeitung",
                  "nl": "Alleen binaire beeldverwerking"
        },
        {
                  "en": "Local pattern matching algorithms",
                  "es": "Algoritmos de coincidencia de patrones locales",
                  "de": "Lokale Musterabgleichsalgorithmen",
                  "nl": "Lokale patroonmatchingalgoritmes"
        },
        {
                  "en": "Texture description and classification by encoding local neighborhood relationships",
                  "es": "Descripción y clasificación de textura codificando relaciones de vecindario local",
                  "de": "Texturbeschreibung und -klassifizierung durch Kodierung lokaler Nachbarschaftsbeziehungen",
                  "nl": "Textuuromschrijving en classificatie door lokale buurtrelaties te coderen"
        },
        {
                  "en": "Converting images to binary format",
                  "es": "Convertir imágenes a formato binario",
                  "de": "Bilder in binäres Format konvertieren",
                  "nl": "Afbeeldingen converteren naar binair formaat"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "LBP creates rotation-invariant texture descriptors by comparing each pixel with its neighbors and encoding the relationships as binary numbers, useful for face recognition and material classification.",
                  "es": "LBP crea descriptores de textura invariantes a rotación comparando cada píxel con sus vecinos y codificando las relaciones como números binarios, útil para reconocimiento facial y clasificación de materiales.",
                  "de": "LBP erstellt rotationsinvariante Texturdeskriptoren durch Vergleich jedes Pixels mit seinen Nachbarn und Kodierung der Beziehungen als Binärzahlen, nützlich für Gesichtserkennung und Materialklassifizierung.",
                  "nl": "LBP creëert rotatie-invariante textuurbeschrijvers door elke pixel te vergelijken met zijn buren en de relaties te coderen als binaire getallen, nuttig voor gezichtsherkenning en materiaalclassificatie."
        }
      },
      {
        question: {
                  "en": "What is the main challenge in multi-scale feature detection?",
                  "es": "¿Cuál es el principal desafío en detección de características multi-escala?",
                  "de": "Was ist die Hauptherausforderung in der Multiskalen-Feature-Erkennung?",
                  "nl": "Wat is de hoofduitdaging in multi-schaal kenmerkdetectie?"
        },
        options: [
        {
                  "en": "Detecting features consistently across different image scales and resolutions",
                  "es": "Detectar características consistentemente a través de diferentes escalas y resoluciones de imagen",
                  "de": "Features konsistent über verschiedene Bildskalen und -auflösungen erkennen",
                  "nl": "Kenmerken consistent detecteren over verschillende beeldschalen en resoluties"
        },
        {
                  "en": "Processing multiple images simultaneously",
                  "es": "Procesar múltiples imágenes simultáneamente",
                  "de": "Mehrere Bilder gleichzeitig verarbeiten",
                  "nl": "Meerdere afbeeldingen tegelijkertijd verwerken"
        },
        {
                  "en": "Finding the optimal image scale",
                  "es": "Encontrar la escala de imagen óptima",
                  "de": "Optimale Bildskala finden",
                  "nl": "Optimale beeldschaal vinden"
        },
        {
                  "en": "Scaling feature descriptors",
                  "es": "Escalar descriptores de características",
                  "de": "Feature-Deskriptoren skalieren",
                  "nl": "Kenmerkdescriptors schalen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-scale detection must handle the fact that features appear differently at various scales, requiring scale-space representations and careful parameter tuning to maintain detection consistency.",
                  "es": "La detección multi-escala debe manejar el hecho de que las características aparecen diferentemente en varias escalas, requiriendo representaciones de espacio-escala y ajuste cuidadoso de parámetros para mantener consistencia de detección.",
                  "de": "Multiskalen-Erkennung muss damit umgehen dass Features bei verschiedenen Skalen unterschiedlich erscheinen, erfordert Skalenraum-Repräsentationen und sorgfältige Parameter-Anpassung um Erkennungskonsistenz zu erhalten.",
                  "nl": "Multi-schaal detectie moet omgaan met het feit dat kenmerken anders verschijnen op verschillende schalen, vereist schaalruimte representaties en zorgvuldige parameter afstelling om detectieconsistentie te behouden."
        }
      },
      {
        question: {
                  "en": "What is optical flow estimation used for in computer vision?",
                  "es": "¿Para qué se usa la estimación de flujo óptico en visión por computadora?",
                  "de": "Wofür wird Optical Flow Estimation in Computer Vision verwendet?",
                  "nl": "Waarvoor wordt optische flow schatting gebruikt in computer vision?"
        },
        options: [
        {
                  "en": "Calculating optical device performance",
                  "es": "Calcular rendimiento de dispositivo óptico",
                  "de": "Optische Geräteleistung berechnen",
                  "nl": "Optische apparaatprestaties berekenen"
        },
        {
                  "en": "Measuring light flow through optical systems",
                  "es": "Medir flujo de luz a través de sistemas ópticos",
                  "de": "Lichtfluss durch optische Systeme messen",
                  "nl": "Lichtstroming meten door optische systemen"
        },
        {
                  "en": "Computing pixel-level motion vectors between consecutive video frames",
                  "es": "Computar vectores de movimiento a nivel de píxel entre fotogramas consecutivos de video",
                  "de": "Pixel-Level-Bewegungsvektoren zwischen aufeinanderfolgenden Videoframes berechnen",
                  "nl": "Pixel-niveau bewegingsvectoren berekenen tussen opeenvolgende videoframes"
        },
        {
                  "en": "Estimating camera lens quality",
                  "es": "Estimar calidad de lente de cámara",
                  "de": "Kameraobjektivqualität schätzen",
                  "nl": "Cameralenskwaliteit schatten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Optical flow provides dense motion information by estimating how each pixel moves between frames, enabling applications like motion analysis, object tracking, and video stabilization.",
                  "es": "El flujo óptico proporciona información de movimiento densa estimando cómo se mueve cada píxel entre fotogramas, permitiendo aplicaciones como análisis de movimiento, seguimiento de objetos y estabilización de video.",
                  "de": "Optical Flow bietet dichte Bewegungsinformationen durch Schätzung wie sich jeder Pixel zwischen Frames bewegt, ermöglicht Anwendungen wie Bewegungsanalyse, Objektverfolgung und Videostabilisierung.",
                  "nl": "Optische flow biedt dichte bewegingsinformatie door te schatten hoe elke pixel beweegt tussen frames, maakt toepassingen mogelijk zoals bewegingsanalyse, object tracking en videostabilisatie."
        }
      },
      {
        question: {
                  "en": "What is normalized cross-correlation (NCC) measuring in template matching?",
                  "es": "¿Qué está midiendo la correlación cruzada normalizada (NCC) en coincidencia de plantillas?",
                  "de": "Was misst die normalisierte Kreuzkorrelation (NCC) im Template Matching?",
                  "nl": "Wat meet genormaliseerde kruiscorrelatie (NCC) in template matching?"
        },
        options: [
        {
                  "en": "Normal distribution correlation",
                  "es": "Correlación de distribución normal",
                  "de": "Normalverteilungskorrelation",
                  "nl": "Normale distributie correlatie"
        },
        {
                  "en": "Network cross-connections",
                  "es": "Conexiones cruzadas de red",
                  "de": "Netzwerk-Kreuzverbindungen",
                  "nl": "Netwerk kruisverbindingen"
        },
        {
                  "en": "Similarity between template and image regions, normalized for intensity variations",
                  "es": "Similitud entre plantilla y regiones de imagen, normalizada para variaciones de intensidad",
                  "de": "Ähnlichkeit zwischen Template und Bildregionen, normalisiert für Intensitätsvariationen",
                  "nl": "Gelijkenis tussen sjabloon en beeldregio's, genormaliseerd voor intensiteitsvariaties"
        },
        {
                  "en": "Cross-sectional correlation only",
                  "es": "Solo correlación de sección transversal",
                  "de": "Nur Querschnittskorrelation",
                  "nl": "Alleen dwarsdoorsnede correlatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NCC provides a robust similarity measure that is invariant to linear illumination changes by normalizing the correlation coefficient, making template matching more reliable across varying lighting conditions.",
                  "es": "NCC proporciona una medida de similitud robusta que es invariante a cambios de iluminación lineales normalizando el coeficiente de correlación, haciendo la coincidencia de plantillas más confiable en condiciones de iluminación variables.",
                  "de": "NCC bietet ein robustes Ähnlichkeitsmaß das invariant gegenüber linearen Beleuchtungsänderungen ist durch Normalisierung des Korrelationskoeffizienten, macht Template Matching zuverlässiger bei wechselnden Lichtbedingungen.",
                  "nl": "NCC biedt een robuuste gelijkenismaat die invariant is voor lineaire verlichtingsveranderingen door de correlatiecoëfficiënt te normaliseren, waardoor template matching betrouwbaarder wordt onder variërende verlichtingsomstandigheden."
        }
      },
      {
        question: {
                  "en": "What is feature pyramid representation used for in computer vision?",
                  "es": "¿Para qué se usa la representación de pirámide de características en visión por computadora?",
                  "de": "Wofür wird Feature Pyramid Representation in Computer Vision verwendet?",
                  "nl": "Waarvoor wordt feature pyramid representatie gebruikt in computer vision?"
        },
        options: [
        {
                  "en": "Processing images at multiple scales efficiently for scale-invariant detection",
                  "es": "Procesar imágenes en múltiples escalas eficientemente para detección invariante a escala",
                  "de": "Bilder bei mehreren Skalen effizient verarbeiten für skalenunabhängige Erkennung",
                  "nl": "Afbeeldingen efficiënt verwerken op meerdere schalen voor schaal-invariante detectie"
        },
        {
                  "en": "Pyramidal image compression",
                  "es": "Compresión de imagen piramidal",
                  "de": "Pyramidale Bildkompression",
                  "nl": "Piramidale beeldcompressie"
        },
        {
                  "en": "Hierarchical feature organization only",
                  "es": "Solo organización jerárquica de características",
                  "de": "Nur hierarchische Feature-Organisation",
                  "nl": "Alleen hiërarchische kenmerkorganisatie"
        },
        {
                  "en": "Building pyramid-shaped feature structures",
                  "es": "Construir estructuras de características en forma de pirámide",
                  "de": "Pyramidenförmige Feature-Strukturen aufbauen",
                  "nl": "Piramide-vormige kenmerkstructuren bouwen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Feature pyramids create multi-resolution representations allowing algorithms to detect objects of different sizes efficiently without repeatedly resizing the input image.",
                  "es": "Las pirámides de características crean representaciones multi-resolución permitiendo a algoritmos detectar objetos de diferentes tamaños eficientemente sin redimensionar repetidamente la imagen de entrada.",
                  "de": "Feature-Pyramiden erstellen Multi-Auflösungs-Repräsentationen die Algorithmen ermöglichen Objekte verschiedener Größen effizient zu erkennen ohne wiederholt das Eingabebild zu skalieren.",
                  "nl": "Feature pyramiden creëren multi-resolutie representaties waardoor algoritmes objecten van verschillende groottes efficiënt kunnen detecteren zonder herhaaldelijk het invoerbeeld te herschalen."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of using HOG (Histogram of Oriented Gradients) features?",
                  "es": "¿Cuál es la principal ventaja de usar características HOG (Histograma de Gradientes Orientados)?",
                  "de": "Was ist der Hauptvorteil der Verwendung von HOG (Histogram of Oriented Gradients) Features?",
                  "nl": "Wat is het hoofdvoordeel van het gebruik van HOG (Histogram van Georiënteerde Gradiënten) kenmerken?"
        },
        options: [
        {
                  "en": "Capturing local shape information while being robust to illumination changes",
                  "es": "Capturar información de forma local siendo robusta a cambios de iluminación",
                  "de": "Lokale Forminformationen erfassen während robust gegenüber Beleuchtungsänderungen",
                  "nl": "Lokale vorminfo vastleggen terwijl robuust tegen verlichtingsveranderingen"
        },
        {
                  "en": "Only working with histogram equalization",
                  "es": "Solo funcionar con ecualización de histograma",
                  "de": "Nur mit Histogramm-Ausgleich funktionieren",
                  "nl": "Alleen werken met histogram egalisatie"
        },
        {
                  "en": "Detecting horizontal and vertical edges only",
                  "es": "Detectar solo bordes horizontales y verticales",
                  "de": "Nur horizontale und vertikale Kanten erkennen",
                  "nl": "Alleen horizontale en verticale randen detecteren"
        },
        {
                  "en": "Requiring minimal computational resources",
                  "es": "Requerir recursos computacionales mínimos",
                  "de": "Minimale Rechenressourcen benötigen",
                  "nl": "Minimale computationele bronnen vereisen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "HOG descriptors encode edge directions and magnitudes in local regions, providing rich shape information that is relatively invariant to lighting variations and small geometric transformations.",
                  "es": "Los descriptores HOG codifican direcciones y magnitudes de bordes en regiones locales, proporcionando información rica de forma que es relativamente invariante a variaciones de iluminación y pequeñas transformaciones geométricas.",
                  "de": "HOG-Deskriptoren kodieren Kantenrichtungen und -stärken in lokalen Regionen, bieten reiche Forminformationen die relativ invariant gegenüber Beleuchtungsvariationen und kleinen geometrischen Transformationen sind.",
                  "nl": "HOG descriptors coderen randrichtingen en sterktes in lokale regio's, bieden rijke vorminfo die relatief invariant is voor verlichtingsvariaties en kleine geometrische transformaties."
        }
      },
      {
        question: {
                  "en": "What is dilated (atrous) convolution used for in CNNs?",
                  "es": "¿Para qué se usa la convolución dilatada (atrous) en las CNN?",
                  "de": "Wofür wird dilatierte (atrous) Faltung in CNNs verwendet?",
                  "nl": "Waarvoor wordt dilated (atrous) convolutie gebruikt in CNNs?"
        },
        options: [
        {
                  "en": "Speed up convolution operations",
                  "es": "Acelerar operaciones de convolución",
                  "de": "Faltungsoperationen beschleunigen",
                  "nl": "Convolutie-operaties versnellen"
        },
        {
                  "en": "Create holes in feature maps",
                  "es": "Crear agujeros en mapas de características",
                  "de": "Löcher in Feature-Maps erstellen",
                  "nl": "Gaten maken in feature maps"
        },
        {
                  "en": "Increase receptive field without increasing parameters or losing resolution",
                  "es": "Aumentar campo receptivo sin incrementar parámetros o perder resolución",
                  "de": "Rezeptives Feld erweitern ohne Parameter zu erhöhen oder Auflösung zu verlieren",
                  "nl": "Receptief veld vergroten zonder parameters te verhogen of resolutie te verliezen"
        },
        {
                  "en": "Dilate images to make them larger",
                  "es": "Dilatar imágenes para hacerlas más grandes",
                  "de": "Bilder dilatieren um sie größer zu machen",
                  "nl": "Afbeeldingen dilateren om ze groter te maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dilated convolutions insert spacing between kernel elements, expanding the receptive field exponentially while maintaining spatial resolution, crucial for dense prediction tasks like semantic segmentation.",
                  "es": "Las convoluciones dilatadas insertan espaciado entre elementos del kernel, expandiendo el campo receptivo exponencialmente mientras mantienen resolución espacial, crucial para tareas de predicción densa como segmentación semántica.",
                  "de": "Dilatierte Faltungen fügen Abstände zwischen Kernel-Elementen ein, erweitern rezeptives Feld exponentiell während räumliche Auflösung beibehalten wird, entscheidend für dichte Vorhersageaufgaben wie semantische Segmentierung.",
                  "nl": "Dilated convoluties voegen afstand in tussen kernel elementen, breiden receptief veld exponentieel uit terwijl ruimtelijke resolutie behouden blijft, cruciaal voor dichte voorspellingstaken zoals semantische segmentatie."
        }
      },
      {
        question: {
                  "en": "What is focal loss designed to address in object detection?",
                  "es": "¿Qué está diseñada la focal loss para abordar en detección de objetos?",
                  "de": "Was soll Focal Loss in Objekterkennung adressieren?",
                  "nl": "Wat is focal loss ontworpen om aan te pakken bij objectdetectie?"
        },
        options: [
        {
                  "en": "Focusing camera lenses automatically",
                  "es": "Enfocar lentes de cámara automáticamente",
                  "de": "Kameraobjektive automatisch fokussieren",
                  "nl": "Camera lenzen automatisch scherpstellen"
        },
        {
                  "en": "Reducing focal length variations",
                  "es": "Reducir variaciones de longitud focal",
                  "de": "Brennweitenvariationen reduzieren",
                  "nl": "Brandpuntafstand variaties verminderen"
        },
        {
                  "en": "Class imbalance between foreground and background examples",
                  "es": "Desbalance de clases entre ejemplos de primer plano y fondo",
                  "de": "Klassenungleichgewicht zwischen Vordergrund- und Hintergrundbeispielen",
                  "nl": "Klasse onbalans tussen voorgrond en achtergrond voorbeelden"
        },
        {
                  "en": "Concentrating computational resources",
                  "es": "Concentrar recursos computacionales",
                  "de": "Rechenressourcen konzentrieren",
                  "nl": "Computationele bronnen concentreren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Focal loss down-weights easy negative examples and focuses training on hard examples by reshaping cross-entropy loss, effectively handling the extreme foreground-background imbalance in one-stage detectors like RetinaNet.",
                  "es": "Focal loss reduce el peso de ejemplos negativos fáciles y enfoca entrenamiento en ejemplos difíciles reformando la pérdida de entropía cruzada, manejando efectivamente el desbalance extremo primer plano-fondo en detectores de una etapa como RetinaNet.",
                  "de": "Focal Loss gewichtet einfache negative Beispiele ab und fokussiert Training auf schwierige Beispiele durch Umformung von Kreuzentropieverlust, behandelt effektiv das extreme Vordergrund-Hintergrund-Ungleichgewicht in einstufigen Detektoren wie RetinaNet.",
                  "nl": "Focal loss vermindert gewicht van makkelijke negatieve voorbeelden en focust training op moeilijke voorbeelden door cross-entropy loss te hervormen, behandelt effectief de extreme voorgrond-achtergrond onbalans in één-fase detectoren zoals RetinaNet."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of EfficientNet architecture?",
                  "es": "¿Cuál es la innovación clave de la arquitectura EfficientNet?",
                  "de": "Was ist die Schlüsselinnovation der EfficientNet-Architektur?",
                  "nl": "Wat is de belangrijkste innovatie van EfficientNet architectuur?"
        },
        options: [
        {
                  "en": "Reducing power consumption during inference",
                  "es": "Reducir consumo de energía durante inferencia",
                  "de": "Stromverbrauch während Inferenz reduzieren",
                  "nl": "Stroomverbruik verminderen tijdens inferentie"
        },
        {
                  "en": "Using only efficient convolution operations",
                  "es": "Usar solo operaciones de convolución eficientes",
                  "de": "Nur effiziente Faltungsoperationen verwenden",
                  "nl": "Alleen efficiënte convolutie-operaties gebruiken"
        },
        {
                  "en": "Compound scaling that balances network depth, width, and resolution",
                  "es": "Escalado compuesto que equilibra profundidad, ancho y resolución de red",
                  "de": "Zusammengesetzte Skalierung die Netzwerktiefe, Breite und Auflösung ausgleicht",
                  "nl": "Samengestelde schaling die netwerkdiepte, breedte en resolutie balanceert"
        },
        {
                  "en": "Training networks more efficiently with less data",
                  "es": "Entrenar redes más eficientemente con menos datos",
                  "de": "Netzwerke effizienter mit weniger Daten trainieren",
                  "nl": "Netwerken efficiënter trainen met minder data"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "EfficientNet uses neural architecture search to find optimal compound scaling coefficients that uniformly scale depth, width, and resolution simultaneously, achieving better performance with fewer parameters than scaling any single dimension.",
                  "es": "EfficientNet usa búsqueda de arquitectura neuronal para encontrar coeficientes de escalado compuesto óptimos que escalan uniformemente profundidad, ancho y resolución simultáneamente, logrando mejor rendimiento con menos parámetros que escalar cualquier dimensión única.",
                  "de": "EfficientNet verwendet neuronale Architektursuche um optimale zusammengesetzte Skalierungskoeffizienten zu finden die Tiefe, Breite und Auflösung gleichmäßig gleichzeitig skalieren, erreicht bessere Leistung mit weniger Parametern als Skalierung einzelner Dimensionen.",
                  "nl": "EfficientNet gebruikt neurale architectuurzoeken om optimale samengestelde schalingscoëfficiënten te vinden die diepte, breedte en resolutie uniform gelijktijdig schalen, bereikt betere prestaties met minder parameters dan het schalen van een enkele dimensie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of Region Proposal Networks (RPN) in Faster R-CNN?",
                  "es": "¿Cuál es el propósito de las Redes de Propuesta de Región (RPN) en Faster R-CNN?",
                  "de": "Was ist der Zweck von Region Proposal Networks (RPN) in Faster R-CNN?",
                  "nl": "Wat is het doel van Region Proposal Networks (RPN) in Faster R-CNN?"
        },
        options: [
        {
                  "en": "Generate object proposals directly from feature maps efficiently",
                  "es": "Generar propuestas de objeto directamente desde mapas de características eficientemente",
                  "de": "Objektvorschläge direkt aus Feature-Maps effizient generieren",
                  "nl": "Objectvoorstellen direct genereren uit feature maps efficiënt"
        },
        {
                  "en": "Propose new network architectures automatically",
                  "es": "Proponer nuevas arquitecturas de red automáticamente",
                  "de": "Neue Netzwerkarchitekturen automatisch vorschlagen",
                  "nl": "Nieuwe netwerkarchitecturen automatisch voorstellen"
        },
        {
                  "en": "Reduce the number of network regions",
                  "es": "Reducir el número de regiones de red",
                  "de": "Anzahl der Netzwerkregionen reduzieren",
                  "nl": "Aantal netwerkgebieden verminderen"
        },
        {
                  "en": "Select regions for data augmentation",
                  "es": "Seleccionar regiones para aumento de datos",
                  "de": "Regionen für Datenaugmentation auswählen",
                  "nl": "Regio's selecteren voor data augmentation"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "RPN is a fully convolutional network that shares computation with the detection network, sliding over feature maps to efficiently predict objectness scores and bounding box refinements at multiple scales and aspect ratios.",
                  "es": "RPN es una red totalmente convolucional que comparte computación con la red de detección, deslizándose sobre mapas de características para predecir eficientemente puntajes de objetividad y refinamientos de caja delimitadora en múltiples escalas y proporciones de aspecto.",
                  "de": "RPN ist ein vollständig faltungsneuronales Netzwerk das Berechnungen mit dem Detektionsnetzwerk teilt, gleitet über Feature-Maps um effizient Objektheitswerte und Begrenzungsrahmen-Verfeinerungen bei mehreren Skalen und Seitenverhältnissen vorherzusagen.",
                  "nl": "RPN is een volledig convolutioneel netwerk dat berekening deelt met het detectienetwerk, schuift over feature maps om efficiënt objectness scores en bounding box verfijningen te voorspellen op meerdere schalen en beeldverhoudingen."
        }
      },
      {
        question: {
                  "en": "What is the main difference between R-CNN, Fast R-CNN, and Faster R-CNN?",
                  "es": "¿Cuál es la principal diferencia entre R-CNN, Fast R-CNN y Faster R-CNN?",
                  "de": "Was ist der Hauptunterschied zwischen R-CNN, Fast R-CNN und Faster R-CNN?",
                  "nl": "Wat is het belangrijkste verschil tussen R-CNN, Fast R-CNN en Faster R-CNN?"
        },
        options: [
        {
                  "en": "They use different activation functions",
                  "es": "Usan diferentes funciones de activación",
                  "de": "Sie verwenden verschiedene Aktivierungsfunktionen",
                  "nl": "Ze gebruiken verschillende activatiefuncties"
        },
        {
                  "en": "Progressive improvements in speed and efficiency of region proposal and feature extraction",
                  "es": "Mejoras progresivas en velocidad y eficiencia de propuesta de región y extracción de características",
                  "de": "Progressive Verbesserungen in Geschwindigkeit und Effizienz von Regionsvorschlag und Merkmalsextraktion",
                  "nl": "Progressieve verbeteringen in snelheid en efficiëntie van regiovoorstellen en feature extractie"
        },
        {
                  "en": "They are completely unrelated architectures",
                  "es": "Son arquitecturas completamente no relacionadas",
                  "de": "Sie sind völlig unabhängige Architekturen",
                  "nl": "Ze zijn volledig ongerelateerde architecturen"
        },
        {
                  "en": "Each works on different image sizes",
                  "es": "Cada uno funciona con diferentes tamaños de imagen",
                  "de": "Jeder funktioniert mit verschiedenen Bildgrößen",
                  "nl": "Elk werkt met verschillende beeldgroottes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "R-CNN extracts features for each region separately (slow), Fast R-CNN processes the whole image once then crops features (faster), Faster R-CNN adds RPN for end-to-end learning without external region proposals (fastest).",
                  "es": "R-CNN extrae características para cada región por separado (lento), Fast R-CNN procesa toda la imagen una vez luego recorta características (más rápido), Faster R-CNN agrega RPN para aprendizaje de extremo a extremo sin propuestas de región externas (más rápido).",
                  "de": "R-CNN extrahiert Features für jede Region separat (langsam), Fast R-CNN verarbeitet das gesamte Bild einmal dann schneidet Features (schneller), Faster R-CNN fügt RPN für End-to-End-Lernen ohne externe Regionsvorschläge hinzu (am schnellsten).",
                  "nl": "R-CNN extraheert features voor elke regio afzonderlijk (traag), Fast R-CNN verwerkt het hele beeld één keer dan knipt features (sneller), Faster R-CNN voegt RPN toe voor end-to-end leren zonder externe regiovoorstellen (snelst)."
        }
      },
      {
        question: {
                  "en": "What is optical flow estimation in computer vision?",
                  "es": "¿Qué es la estimación de flujo óptico en visión por computadora?",
                  "de": "Was ist optische Flussschätzung in Computer Vision?",
                  "nl": "Wat is optische flow schatting in computer vision?"
        },
        options: [
        {
                  "en": "Tracking light sources in videos",
                  "es": "Rastrear fuentes de luz en videos",
                  "de": "Lichtquellen in Videos verfolgen",
                  "nl": "Lichtbronnen volgen in video's"
        },
        {
                  "en": "Analyzing water flow in images",
                  "es": "Analizar flujo de agua en imágenes",
                  "de": "Wasserfluss in Bildern analysieren",
                  "nl": "Waterstroom analyseren in afbeeldingen"
        },
        {
                  "en": "Measuring optical lens flow characteristics",
                  "es": "Medir características de flujo de lentes ópticas",
                  "de": "Optische Linsenfluss-Eigenschaften messen",
                  "nl": "Optische lens flow kenmerken meten"
        },
        {
                  "en": "Computing pixel-wise motion vectors between consecutive frames",
                  "es": "Calcular vectores de movimiento por píxel entre fotogramas consecutivos",
                  "de": "Pixelweise Bewegungsvektoren zwischen aufeinanderfolgenden Frames berechnen",
                  "nl": "Pixel-gewijze bewegingsvectoren berekenen tussen opeenvolgende frames"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Optical flow captures the apparent motion of objects, surfaces, and edges in a visual scene caused by relative movement between observer and scene, providing dense motion information used in video analysis, tracking, and action recognition.",
                  "es": "El flujo óptico captura el movimiento aparente de objetos, superficies y bordes en una escena visual causado por movimiento relativo entre observador y escena, proporcionando información de movimiento densa usada en análisis de video, rastreo y reconocimiento de acciones.",
                  "de": "Optischer Fluss erfasst die scheinbare Bewegung von Objekten, Oberflächen und Kanten in einer visuellen Szene verursacht durch relative Bewegung zwischen Beobachter und Szene, bietet dichte Bewegungsinformation für Videoanalyse, Tracking und Aktionserkennung.",
                  "nl": "Optische flow legt de schijnbare beweging vast van objecten, oppervlakken en randen in een visuele scène veroorzaakt door relatieve beweging tussen waarnemer en scène, biedt dichte bewegingsinfo gebruikt in videoanalyse, tracking en actieherkenning."
        }
      },
      {
        question: {
                  "en": "What is panoptic segmentation combining?",
                  "es": "¿Qué combina la segmentación panóptica?",
                  "de": "Was kombiniert panoptische Segmentierung?",
                  "nl": "Wat combineert panoptische segmentatie?"
        },
        options: [
        {
                  "en": "Multiple camera views simultaneously",
                  "es": "Múltiples vistas de cámara simultáneamente",
                  "de": "Mehrere Kameraansichten gleichzeitig",
                  "nl": "Meerdere cameraweergaven tegelijkertijd"
        },
        {
                  "en": "Semantic segmentation for stuff classes and instance segmentation for thing classes",
                  "es": "Segmentación semántica para clases de material y segmentación de instancias para clases de objetos",
                  "de": "Semantische Segmentierung für Material-Klassen und Instanzsegmentierung für Objekt-Klassen",
                  "nl": "Semantische segmentatie voor materiaalklassen en instance segmentatie voor objectklassen"
        },
        {
                  "en": "Panoramic images with semantic labels",
                  "es": "Imágenes panorámicas con etiquetas semánticas",
                  "de": "Panoramabilder mit semantischen Labels",
                  "nl": "Panoramische afbeeldingen met semantische labels"
        },
        {
                  "en": "All possible segmentation methods",
                  "es": "Todos los métodos de segmentación posibles",
                  "de": "Alle möglichen Segmentierungsmethoden",
                  "nl": "Alle mogelijke segmentatie methodes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Panoptic segmentation unifies semantic segmentation (for amorphous regions like sky, road) and instance segmentation (for countable objects like cars, people), assigning unique IDs to thing instances while labeling stuff regions.",
                  "es": "La segmentación panóptica unifica segmentación semántica (para regiones amorfas como cielo, carretera) y segmentación de instancias (para objetos contables como autos, personas), asignando IDs únicos a instancias de objetos mientras etiqueta regiones de material.",
                  "de": "Panoptische Segmentierung vereint semantische Segmentierung (für amorphe Regionen wie Himmel, Straße) und Instanzsegmentierung (für zählbare Objekte wie Autos, Personen), weist eindeutige IDs zu Objekt-Instanzen zu während Material-Regionen gelabelt werden.",
                  "nl": "Panoptische segmentatie verenigt semantische segmentatie (voor amorfe regio's zoals lucht, weg) en instance segmentatie (voor telbare objecten zoals auto's, mensen), wijst unieke IDs toe aan object instanties terwijl materiaalregio's gelabeld worden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of spatial pyramid pooling in CNNs?",
                  "es": "¿Cuál es el propósito del pooling de pirámide espacial en las CNN?",
                  "de": "Was ist der Zweck von Spatial Pyramid Pooling in CNNs?",
                  "nl": "Wat is het doel van spatial pyramid pooling in CNNs?"
        },
        options: [
        {
                  "en": "Pool only spatial information, not temporal",
                  "es": "Agrupar solo información espacial, no temporal",
                  "de": "Nur räumliche Information poolen, nicht zeitliche",
                  "nl": "Alleen ruimtelijke informatie poolen, niet temporeel"
        },
        {
                  "en": "Increase pooling pyramid depth",
                  "es": "Aumentar profundidad de pirámide de pooling",
                  "de": "Pooling-Pyramiden-Tiefe erhöhen",
                  "nl": "Pooling piramide diepte verhogen"
        },
        {
                  "en": "Handle variable input sizes by pooling at multiple scales",
                  "es": "Manejar tamaños de entrada variables agrupando en múltiples escalas",
                  "de": "Variable Eingabegrößen handhaben durch Pooling auf mehreren Skalen",
                  "nl": "Variabele invoergroottes behandelen door pooling op meerdere schalen"
        },
        {
                  "en": "Build pyramid structures from spatial data",
                  "es": "Construir estructuras piramidales desde datos espaciales",
                  "de": "Pyramidenstrukturen aus räumlichen Daten aufbauen",
                  "nl": "Piramidestructuren bouwen uit ruimtelijke data"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Spatial pyramid pooling divides feature maps into grids of different scales and pools each grid region, producing fixed-length representations regardless of input size, enabling CNNs to process images of arbitrary dimensions.",
                  "es": "El pooling de pirámide espacial divide mapas de características en cuadrículas de diferentes escalas y agrupa cada región de cuadrícula, produciendo representaciones de longitud fija independientemente del tamaño de entrada, permitiendo a las CNN procesar imágenes de dimensiones arbitrarias.",
                  "de": "Spatial Pyramid Pooling teilt Feature-Maps in Raster verschiedener Skalen und poolt jede Rasterregion, produziert Repräsentationen fester Länge unabhängig von Eingabegröße, ermöglicht CNNs Bilder beliebiger Dimensionen zu verarbeiten.",
                  "nl": "Spatial pyramid pooling verdeelt feature maps in rasters van verschillende schalen en poolt elke rasterregio, produceert representaties van vaste lengte ongeacht invoergrootte, stelt CNNs in staat afbeeldingen van willekeurige dimensies te verwerken."
        }
      },
      {
        question: {
                  "en": "What is deformable convolution addressing?",
                  "es": "¿Qué está abordando la convolución deformable?",
                  "de": "Was adressiert verformbare Faltung?",
                  "nl": "Wat pakt deformable convolutie aan?"
        },
        options: [
        {
                  "en": "Correcting lens deformation automatically",
                  "es": "Corregir deformación de lente automáticamente",
                  "de": "Linsenverformung automatisch korrigieren",
                  "nl": "Lensvervorming automatisch corrigeren"
        },
        {
                  "en": "Deforming images before processing",
                  "es": "Deformar imágenes antes de procesar",
                  "de": "Bilder vor Verarbeitung verformen",
                  "nl": "Afbeeldingen vervormen voor verwerking"
        },
        {
                  "en": "Learning adaptive receptive fields that match object shapes and transformations",
                  "es": "Aprender campos receptivos adaptativos que coinciden con formas y transformaciones de objetos",
                  "de": "Adaptive rezeptive Felder lernen die Objektformen und -transformationen entsprechen",
                  "nl": "Adaptieve receptieve velden leren die overeenkomen met objectvormen en transformaties"
        },
        {
                  "en": "Making network architectures more flexible",
                  "es": "Hacer arquitecturas de red más flexibles",
                  "de": "Netzwerkarchitekturen flexibler machen",
                  "nl": "Netwerkarchitecturen flexibeler maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Deformable convolutions add learnable 2D offsets to standard convolution sampling locations, allowing the receptive field to adapt to object scale, deformation, and perspective transformations, improving geometric transformation modeling.",
                  "es": "Las convoluciones deformables agregan desplazamientos 2D aprendibles a ubicaciones de muestreo de convolución estándar, permitiendo que el campo receptivo se adapte a escala de objeto, deformación y transformaciones de perspectiva, mejorando modelado de transformación geométrica.",
                  "de": "Verformbare Faltungen fügen lernbare 2D-Verschiebungen zu Standard-Faltungs-Sampling-Positionen hinzu, ermöglichen rezeptivem Feld sich an Objektskala, Verformung und Perspektivtransformationen anzupassen, verbessern geometrische Transformationsmodellierung.",
                  "nl": "Deformable convoluties voegen leerbare 2D offsets toe aan standaard convolutie sampling locaties, stellen receptief veld in staat zich aan te passen aan objectschaal, vervorming en perspectieftransformaties, verbeteren geometrische transformatie modellering."
        }
      },
      {
        question: {
                  "en": "What is the purpose of feature matching in image stitching and panorama creation?",
                  "es": "¿Cuál es el propósito de la coincidencia de características en unión de imágenes y creación de panoramas?",
                  "de": "Was ist der Zweck von Feature Matching bei Bild-Stitching und Panorama-Erstellung?",
                  "nl": "Wat is het doel van feature matching bij beeldstikken en panorama creatie?"
        },
        options: [
        {
                  "en": "Find corresponding points across images to align and blend them seamlessly",
                  "es": "Encontrar puntos correspondientes a través de imágenes para alinearlas y mezclarlas sin problemas",
                  "de": "Korrespondierende Punkte über Bilder finden um sie nahtlos auszurichten und zu mischen",
                  "nl": "Corresponderende punten vinden over afbeeldingen om ze naadloos uit te lijnen en samen te voegen"
        },
        {
                  "en": "Match image quality across different cameras",
                  "es": "Igualar calidad de imagen entre diferentes cámaras",
                  "de": "Bildqualität über verschiedene Kameras angleichen",
                  "nl": "Beeldkwaliteit over verschillende camera's matchen"
        },
        {
                  "en": "Select features for storage",
                  "es": "Seleccionar características para almacenamiento",
                  "de": "Features für Speicherung auswählen",
                  "nl": "Kenmerken selecteren voor opslag"
        },
        {
                  "en": "Create matching pairs of similar images",
                  "es": "Crear pares coincidentes de imágenes similares",
                  "de": "Passende Paare ähnlicher Bilder erstellen",
                  "nl": "Matchende paren van vergelijkbare afbeeldingen maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Feature matching identifies shared keypoints between overlapping images using descriptors (e.g., SIFT, ORB), enabling homography estimation for geometric transformation and smooth blending to create wide-angle panoramas.",
                  "es": "La coincidencia de características identifica puntos clave compartidos entre imágenes superpuestas usando descriptores (ej., SIFT, ORB), permitiendo estimación de homografía para transformación geométrica y mezcla suave para crear panoramas de ángulo amplio.",
                  "de": "Feature Matching identifiziert gemeinsame Schlüsselpunkte zwischen überlappenden Bildern mit Deskriptoren (z.B. SIFT, ORB), ermöglicht Homographie-Schätzung für geometrische Transformation und sanftes Mischen um Weitwinkelpanoramen zu erstellen.",
                  "nl": "Feature matching identificeert gedeelde keypoints tussen overlappende afbeeldingen met descriptors (bijv. SIFT, ORB), maakt homografie schatting mogelijk voor geometrische transformatie en vloeiend mengen om panorama's met groot gezichtsveld te creëren."
        }
      },
      {
        question: {
                  "en": "What is the role of skip connections in encoder-decoder architectures like U-Net?",
                  "es": "¿Cuál es el papel de las conexiones de salto en arquitecturas codificador-decodificador como U-Net?",
                  "de": "Was ist die Rolle von Skip-Verbindungen in Encoder-Decoder-Architekturen wie U-Net?",
                  "nl": "Wat is de rol van skip verbindingen in encoder-decoder architecturen zoals U-Net?"
        },
        options: [
        {
                  "en": "Skip unnecessary layers to speed up inference",
                  "es": "Saltar capas innecesarias para acelerar inferencia",
                  "de": "Unnötige Schichten überspringen um Inferenz zu beschleunigen",
                  "nl": "Onnodige lagen overslaan om inferentie te versnellen"
        },
        {
                  "en": "Connect only encoder and decoder ends",
                  "es": "Conectar solo extremos de codificador y decodificador",
                  "de": "Nur Encoder- und Decoder-Enden verbinden",
                  "nl": "Alleen encoder en decoder uiteinden verbinden"
        },
        {
                  "en": "Preserve high-resolution spatial information lost during downsampling",
                  "es": "Preservar información espacial de alta resolución perdida durante submuestreo",
                  "de": "Hochauflösende räumliche Informationen bewahren die beim Downsampling verloren gehen",
                  "nl": "Hoge-resolutie ruimtelijke informatie behouden die verloren gaat tijdens downsampling"
        },
        {
                  "en": "Bypass training for certain layers",
                  "es": "Omitir entrenamiento para ciertas capas",
                  "de": "Training für bestimmte Schichten umgehen",
                  "nl": "Training omzeilen voor bepaalde lagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Skip connections concatenate high-resolution encoder features with corresponding decoder features, combining coarse semantic information with fine spatial details crucial for precise localization in segmentation and similar dense prediction tasks.",
                  "es": "Las conexiones de salto concatenan características de codificador de alta resolución con características de decodificador correspondientes, combinando información semántica gruesa con detalles espaciales finos cruciales para localización precisa en segmentación y tareas similares de predicción densa.",
                  "de": "Skip-Verbindungen verketten hochauflösende Encoder-Features mit entsprechenden Decoder-Features, kombinieren grobe semantische Information mit feinen räumlichen Details entscheidend für präzise Lokalisierung in Segmentierung und ähnlichen dichten Vorhersageaufgaben.",
                  "nl": "Skip verbindingen voegen hoge-resolutie encoder features samen met corresponderende decoder features, combineren grove semantische informatie met fijne ruimtelijke details cruciaal voor precieze lokalisatie in segmentatie en vergelijkbare dichte voorspellingstaken."
        }
      },
      {
        question: {
                  "en": "What is test-time augmentation (TTA) used for?",
                  "es": "¿Para qué se usa el aumento en tiempo de prueba (TTA)?",
                  "de": "Wofür wird Test-Zeit-Augmentation (TTA) verwendet?",
                  "nl": "Waarvoor wordt test-time augmentation (TTA) gebruikt?"
        },
        options: [
        {
                  "en": "Improve prediction robustness by averaging predictions on augmented test samples",
                  "es": "Mejorar robustez de predicción promediando predicciones en muestras de prueba aumentadas",
                  "de": "Vorhersagerobustheit verbessern durch Mittelung von Vorhersagen auf augmentierten Testproben",
                  "nl": "Voorspellingsrobuustheid verbeteren door voorspellingen te middelen op geaugmenteerde testsamples"
        },
        {
                  "en": "Test different augmentation strategies",
                  "es": "Probar diferentes estrategias de aumento",
                  "de": "Verschiedene Augmentationsstrategien testen",
                  "nl": "Verschillende augmentatie strategieën testen"
        },
        {
                  "en": "Reduce testing time through augmentation",
                  "es": "Reducir tiempo de prueba a través de aumento",
                  "de": "Testzeit durch Augmentation reduzieren",
                  "nl": "Testtijd verminderen door augmentatie"
        },
        {
                  "en": "Augment training data during testing phase",
                  "es": "Aumentar datos de entrenamiento durante fase de prueba",
                  "de": "Trainingsdaten während Testphase augmentieren",
                  "nl": "Trainingsdata augmenteren tijdens testfase"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "TTA applies multiple transformations (flips, rotations, crops) to test images, runs inference on each variant, then aggregates predictions (averaging or voting) to produce more robust and accurate final predictions than single-image inference.",
                  "es": "TTA aplica múltiples transformaciones (volteos, rotaciones, recortes) a imágenes de prueba, ejecuta inferencia en cada variante, luego agrega predicciones (promediando o votando) para producir predicciones finales más robustas y precisas que inferencia de imagen única.",
                  "de": "TTA wendet mehrere Transformationen (Spiegelungen, Rotationen, Zuschnitte) auf Testbilder an, führt Inferenz auf jeder Variante aus, aggregiert dann Vorhersagen (Mittelung oder Abstimmung) um robustere und genauere finale Vorhersagen als Einzelbild-Inferenz zu produzieren.",
                  "nl": "TTA past meerdere transformaties (flips, rotaties, crops) toe op testafbeeldingen, voert inferentie uit op elke variant, aggregeert vervolgens voorspellingen (middelen of stemmen) om robuustere en nauwkeurigere finale voorspellingen te produceren dan enkele-beeld inferentie."
        }
      },
      {
        question: {
                  "en": "What is the difference between local and global thresholding?",
                  "es": "¿Cuál es la diferencia entre umbralización local y global?",
                  "de": "Was ist der Unterschied zwischen lokaler und globaler Schwellenwertbildung?",
                  "nl": "Wat is het verschil tussen lokale en globale drempelwaarden?"
        },
        options: [
        {
                  "en": "Local is always faster than global",
                  "es": "Local es siempre más rápido que global",
                  "de": "Lokal ist immer schneller als global",
                  "nl": "Lokaal is altijd sneller dan globaal"
        },
        {
                  "en": "Global uses one threshold for entire image, local adapts threshold per region",
                  "es": "Global usa un umbral para toda la imagen, local adapta umbral por región",
                  "de": "Global verwendet einen Schwellenwert für gesamtes Bild, lokal passt Schwellenwert pro Region an",
                  "nl": "Globaal gebruikt één drempelwaarde voor hele afbeelding, lokaal past drempelwaarde per regio aan"
        },
        {
                  "en": "They produce identical results",
                  "es": "Producen resultados idénticos",
                  "de": "Sie produzieren identische Ergebnisse",
                  "nl": "Ze produceren identieke resultaten"
        },
        {
                  "en": "Global works on color images only",
                  "es": "Global funciona solo en imágenes a color",
                  "de": "Global funktioniert nur auf Farbbildern",
                  "nl": "Globaal werkt alleen op kleurenafbeeldingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Global thresholding applies a single threshold value across the entire image, while local (adaptive) thresholding calculates different thresholds for different image regions, handling varying illumination conditions more effectively.",
                  "es": "La umbralización global aplica un solo valor umbral a través de toda la imagen, mientras que la umbralización local (adaptativa) calcula diferentes umbrales para diferentes regiones de imagen, manejando condiciones de iluminación variables más efectivamente.",
                  "de": "Globale Schwellenwertbildung wendet einen einzelnen Schwellenwert über das gesamte Bild an, während lokale (adaptive) Schwellenwertbildung verschiedene Schwellenwerte für verschiedene Bildregionen berechnet, behandelt variierende Beleuchtungsbedingungen effektiver.",
                  "nl": "Globale drempelwaarden past een enkele drempelwaarde toe over de hele afbeelding, terwijl lokale (adaptieve) drempelwaarden verschillende drempelwaarden berekent voor verschillende beeldregio's, behandelt variërende verlichtingsomstandigheden effectiever."
        }
      },
      {
        question: {
                  "en": "What is the primary goal of image registration?",
                  "es": "¿Cuál es el objetivo principal del registro de imágenes?",
                  "de": "Was ist das Hauptziel der Bildregistrierung?",
                  "nl": "Wat is het primaire doel van beeldregistratie?"
        },
        options: [
        {
                  "en": "Align multiple images into a common coordinate system",
                  "es": "Alinear múltiples imágenes en un sistema de coordenadas común",
                  "de": "Mehrere Bilder in ein gemeinsames Koordinatensystem ausrichten",
                  "nl": "Meerdere afbeeldingen uitlijnen in een gemeenschappelijk coördinatensysteem"
        },
        {
                  "en": "Create image registration certificates",
                  "es": "Crear certificados de registro de imagen",
                  "de": "Bildregistrierungszertifikate erstellen",
                  "nl": "Beeldregistratie certificaten maken"
        },
        {
                  "en": "Register images in a database for retrieval",
                  "es": "Registrar imágenes en base de datos para recuperación",
                  "de": "Bilder in Datenbank für Abruf registrieren",
                  "nl": "Afbeeldingen registreren in database voor opvraging"
        },
        {
                  "en": "Count registered objects in images",
                  "es": "Contar objetos registrados en imágenes",
                  "de": "Registrierte Objekte in Bildern zählen",
                  "nl": "Geregistreerde objecten in afbeeldingen tellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Image registration spatially aligns images from different viewpoints, times, or sensors by finding geometric transformations, enabling applications like medical image fusion, change detection, and multi-modal analysis.",
                  "es": "El registro de imágenes alinea espacialmente imágenes de diferentes puntos de vista, tiempos o sensores encontrando transformaciones geométricas, permitiendo aplicaciones como fusión de imagen médica, detección de cambios y análisis multi-modal.",
                  "de": "Bildregistrierung richtet Bilder aus verschiedenen Blickwinkeln, Zeiten oder Sensoren räumlich aus durch Finden geometrischer Transformationen, ermöglicht Anwendungen wie medizinische Bildfusion, Änderungserkennung und multi-modale Analyse.",
                  "nl": "Beeldregistratie lijnt afbeeldingen uit verschillende gezichtspunten, tijden of sensoren ruimtelijk uit door geometrische transformaties te vinden, maakt toepassingen mogelijk zoals medische beeldfusie, veranderingsdetectie en multi-modale analyse."
        }
      },
      {
        question: {
                  "en": "What is the purpose of non-local neural networks?",
                  "es": "¿Cuál es el propósito de las redes neuronales no locales?",
                  "de": "Was ist der Zweck von nicht-lokalen neuronalen Netzwerken?",
                  "nl": "Wat is het doel van non-local neural networks?"
        },
        options: [
        {
                  "en": "Capture long-range dependencies by computing interactions between all positions",
                  "es": "Capturar dependencias de largo alcance calculando interacciones entre todas las posiciones",
                  "de": "Langstrecken-Abhängigkeiten erfassen durch Berechnung von Interaktionen zwischen allen Positionen",
                  "nl": "Lange-afstands afhankelijkheden vastleggen door interacties tussen alle posities te berekenen"
        },
        {
                  "en": "Avoid using local convolutions entirely",
                  "es": "Evitar usar convoluciones locales por completo",
                  "de": "Lokale Faltungen vollständig vermeiden",
                  "nl": "Lokale convoluties volledig vermijden"
        },
        {
                  "en": "Process networks distributed across locations",
                  "es": "Procesar redes distribuidas a través de ubicaciones",
                  "de": "Netzwerke verarbeiten die über Standorte verteilt sind",
                  "nl": "Netwerken verwerken verspreid over locaties"
        },
        {
                  "en": "Connect neurons non-locally only",
                  "es": "Conectar neuronas solo no localmente",
                  "de": "Neuronen nur nicht-lokal verbinden",
                  "nl": "Neuronen alleen non-lokaal verbinden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Non-local operations compute response at a position as a weighted sum of features at all positions, capturing global context and long-range spatial/temporal relationships that local convolutions with limited receptive fields cannot model effectively.",
                  "es": "Las operaciones no locales calculan respuesta en una posición como suma ponderada de características en todas las posiciones, capturando contexto global y relaciones espaciales/temporales de largo alcance que convoluciones locales con campos receptivos limitados no pueden modelar efectivamente.",
                  "de": "Nicht-lokale Operationen berechnen Antwort an einer Position als gewichtete Summe von Features an allen Positionen, erfassen globalen Kontext und Langstrecken-räumliche/zeitliche Beziehungen die lokale Faltungen mit begrenzten rezeptiven Feldern nicht effektiv modellieren können.",
                  "nl": "Non-local operaties berekenen respons op een positie als gewogen som van features op alle posities, leggen globale context en lange-afstands ruimtelijke/temporele relaties vast die lokale convoluties met beperkte receptieve velden niet effectief kunnen modelleren."
        }
      },
      {
        question: {
                  "en": "What is the main challenge that CutMix data augmentation addresses?",
                  "es": "¿Cuál es el principal desafío que aborda el aumento de datos CutMix?",
                  "de": "Was ist die Hauptherausforderung die CutMix-Datenaugmentation adressiert?",
                  "nl": "Wat is de belangrijkste uitdaging die CutMix data augmentation aanpakt?"
        },
        options: [
        {
                  "en": "Mixing only similar images together",
                  "es": "Mezclar solo imágenes similares juntas",
                  "de": "Nur ähnliche Bilder zusammen mischen",
                  "nl": "Alleen vergelijkbare afbeeldingen samen mengen"
        },
        {
                  "en": "Loss of spatial information and context when mixing training samples",
                  "es": "Pérdida de información espacial y contexto al mezclar muestras de entrenamiento",
                  "de": "Verlust räumlicher Informationen und Kontext beim Mischen von Trainingsproben",
                  "nl": "Verlies van ruimtelijke informatie en context bij het mengen van trainingssamples"
        },
        {
                  "en": "Reducing training speed significantly",
                  "es": "Reducir velocidad de entrenamiento significativamente",
                  "de": "Trainingsgeschwindigkeit erheblich reduzieren",
                  "nl": "Trainingssnelheid aanzienlijk verminderen"
        },
        {
                  "en": "Cutting images into too many pieces",
                  "es": "Cortar imágenes en demasiadas piezas",
                  "de": "Bilder in zu viele Teile schneiden",
                  "nl": "Afbeeldingen in te veel stukken knippen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "CutMix cuts and pastes rectangular regions between training images while mixing labels proportionally, preserving local features and spatial relationships better than methods like Mixup that blend entire images, improving model robustness and localization ability.",
                  "es": "CutMix corta y pega regiones rectangulares entre imágenes de entrenamiento mientras mezcla etiquetas proporcionalmente, preservando características locales y relaciones espaciales mejor que métodos como Mixup que mezclan imágenes completas, mejorando robustez del modelo y capacidad de localización.",
                  "de": "CutMix schneidet und fügt rechteckige Regionen zwischen Trainingsbildern ein während Labels proportional gemischt werden, bewahrt lokale Features und räumliche Beziehungen besser als Methoden wie Mixup die ganze Bilder mischen, verbessert Modellrobustheit und Lokalisierungsfähigkeit.",
                  "nl": "CutMix knipt en plakt rechthoekige regio's tussen trainingsafbeeldingen terwijl labels proportioneel worden gemengd, behoudt lokale features en ruimtelijke relaties beter dan methodes zoals Mixup die hele afbeeldingen mengen, verbetert modelrobuustheid en localisatievermogen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of Group Normalization?",
                  "es": "¿Cuál es el propósito de la Normalización de Grupo?",
                  "de": "Was ist der Zweck von Gruppennormalisierung?",
                  "nl": "Wat is het doel van Group Normalization?"
        },
        options: [
        {
                  "en": "Normalize channels in groups, working well with small batch sizes",
                  "es": "Normalizar canales en grupos, funcionando bien con tamaños de lote pequeños",
                  "de": "Kanäle in Gruppen normalisieren, funktioniert gut mit kleinen Batch-Größen",
                  "nl": "Kanalen normaliseren in groepen, werkt goed met kleine batch groottes"
        },
        {
                  "en": "Normalize only grouped convolutions",
                  "es": "Normalizar solo convoluciones agrupadas",
                  "de": "Nur gruppierte Faltungen normalisieren",
                  "nl": "Alleen gegroepeerde convoluties normaliseren"
        },
        {
                  "en": "Group images by class before normalization",
                  "es": "Agrupar imágenes por clase antes de normalización",
                  "de": "Bilder vor Normalisierung nach Klasse gruppieren",
                  "nl": "Afbeeldingen groeperen op klasse voor normalisatie"
        },
        {
                  "en": "Create normalization groups randomly",
                  "es": "Crear grupos de normalización aleatoriamente",
                  "de": "Normalisierungsgruppen zufällig erstellen",
                  "nl": "Normalisatie groepen willekeurig maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Group Normalization divides channels into groups and normalizes within each group independently of batch size, providing stable performance when batch sizes are small (e.g., in object detection) where Batch Normalization degrades.",
                  "es": "Group Normalization divide canales en grupos y normaliza dentro de cada grupo independientemente del tamaño de lote, proporcionando rendimiento estable cuando tamaños de lote son pequeños (ej., en detección de objetos) donde Batch Normalization se degrada.",
                  "de": "Gruppennormalisierung teilt Kanäle in Gruppen und normalisiert innerhalb jeder Gruppe unabhängig von Batch-Größe, bietet stabile Leistung wenn Batch-Größen klein sind (z.B. in Objekterkennung) wo Batch-Normalisierung sich verschlechtert.",
                  "nl": "Group Normalization verdeelt kanalen in groepen en normaliseert binnen elke groep onafhankelijk van batch grootte, biedt stabiele prestaties wanneer batch groottes klein zijn (bijv. in objectdetectie) waar Batch Normalization verslechtert."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of Squeeze-and-Excitation (SE) blocks?",
                  "es": "¿Cuál es la innovación clave de los bloques Squeeze-and-Excitation (SE)?",
                  "de": "Was ist die Schlüsselinnovation von Squeeze-and-Excitation (SE) Blöcken?",
                  "nl": "Wat is de belangrijkste innovatie van Squeeze-and-Excitation (SE) blokken?"
        },
        options: [
        {
                  "en": "Reduce and expand network width dynamically",
                  "es": "Reducir y expandir ancho de red dinámicamente",
                  "de": "Netzwerkbreite dynamisch reduzieren und erweitern",
                  "nl": "Netwerkbreedte dynamisch verminderen en uitbreiden"
        },
        {
                  "en": "Excite only important features while squeezing others",
                  "es": "Excitar solo características importantes mientras comprime otras",
                  "de": "Nur wichtige Features anregen während andere komprimiert werden",
                  "nl": "Alleen belangrijke features exciteren terwijl anderen worden gecomprimeerd"
        },
        {
                  "en": "Explicitly model channel interdependencies to recalibrate channel-wise features",
                  "es": "Modelar explícitamente interdependencias de canal para recalibrar características por canal",
                  "de": "Kanalabhängigkeiten explizit modellieren um kanalweise Features neu zu kalibrieren",
                  "nl": "Kanaalafhankelijkheden expliciet modelleren om kanaal-gewijze features te herkalibreren"
        },
        {
                  "en": "Squeeze images to smaller sizes then excite neurons",
                  "es": "Comprimir imágenes a tamaños más pequeños luego excitar neuronas",
                  "de": "Bilder auf kleinere Größen komprimieren dann Neuronen anregen",
                  "nl": "Afbeeldingen comprimeren tot kleinere groottes dan neuronen exciteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "SE blocks use global average pooling to squeeze spatial information, then excitation through fully connected layers learns channel attention weights, adaptively recalibrating feature responses by emphasizing informative channels and suppressing less useful ones.",
                  "es": "Los bloques SE usan global average pooling para comprimir información espacial, luego excitación a través de capas totalmente conectadas aprende pesos de atención de canal, recalibrando adaptativamente respuestas de características enfatizando canales informativos y suprimiendo menos útiles.",
                  "de": "SE-Blöcke verwenden globales Average-Pooling um räumliche Information zu komprimieren, dann lernt Anregung durch vollständig verbundene Schichten Kanalaufmerksamkeitsgewichte, kalibriert adaptiv Feature-Antworten neu durch Betonung informativer Kanäle und Unterdrückung weniger nützlicher.",
                  "nl": "SE blokken gebruiken global average pooling om ruimtelijke informatie te comprimeren, dan leert excitatie door volledig verbonden lagen kanaal aandachtsgewichten, herkalibreert adaptief feature responses door informatieve kanalen te benadrukken en minder nuttige te onderdrukken."
        }
      },
      {
        question: {
                  "en": "What is model pruning used for in neural networks?",
                  "es": "¿Para qué se usa la poda de modelo en redes neuronales?",
                  "de": "Wofür wird Modell-Pruning in neuronalen Netzwerken verwendet?",
                  "nl": "Waarvoor wordt model pruning gebruikt in neurale netwerken?"
        },
        options: [
        {
                  "en": "Remove unimportant weights or neurons to reduce model size and computation",
                  "es": "Eliminar pesos o neuronas poco importantes para reducir tamaño de modelo y computación",
                  "de": "Unwichtige Gewichte oder Neuronen entfernen um Modellgröße und Berechnung zu reduzieren",
                  "nl": "Onbelangrijke gewichten of neuronen verwijderen om modelgrootte en berekening te verminderen"
        },
        {
                  "en": "Prune training data by removing outliers",
                  "es": "Podar datos de entrenamiento eliminando valores atípicos",
                  "de": "Trainingsdaten durch Entfernen von Ausreißern beschneiden",
                  "nl": "Trainingsdata snoeien door uitschieters te verwijderen"
        },
        {
                  "en": "Trim image borders before processing",
                  "es": "Recortar bordes de imagen antes de procesar",
                  "de": "Bildränder vor Verarbeitung trimmen",
                  "nl": "Beeldranden trimmen voor verwerking"
        },
        {
                  "en": "Cut off network layers periodically",
                  "es": "Cortar capas de red periódicamente",
                  "de": "Netzwerkschichten periodisch abschneiden",
                  "nl": "Netwerklagen periodiek afsnijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pruning identifies and removes parameters (weights, neurons, filters, or entire layers) with minimal impact on performance, creating smaller, faster models suitable for deployment on resource-constrained devices while maintaining accuracy.",
                  "es": "La poda identifica y elimina parámetros (pesos, neuronas, filtros o capas enteras) con impacto mínimo en rendimiento, creando modelos más pequeños y rápidos adecuados para despliegue en dispositivos con recursos limitados mientras mantiene precisión.",
                  "de": "Pruning identifiziert und entfernt Parameter (Gewichte, Neuronen, Filter oder ganze Schichten) mit minimalem Einfluss auf Leistung, erstellt kleinere, schnellere Modelle geeignet für Bereitstellung auf ressourcenbeschränkten Geräten während Genauigkeit beibehalten wird.",
                  "nl": "Pruning identificeert en verwijdert parameters (gewichten, neuronen, filters of hele lagen) met minimale impact op prestaties, creëert kleinere, snellere modellen geschikt voor implementatie op apparaten met beperkte bronnen terwijl nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is neural architecture search (NAS) automating?",
                  "es": "¿Qué está automatizando la búsqueda de arquitectura neuronal (NAS)?",
                  "de": "Was automatisiert neuronale Architektursuche (NAS)?",
                  "nl": "Wat automatiseert neural architecture search (NAS)?"
        },
        options: [
        {
                  "en": "Automatically naming architectures",
                  "es": "Nombrar arquitecturas automáticamente",
                  "de": "Architekturen automatisch benennen",
                  "nl": "Architecturen automatisch benoemen"
        },
        {
                  "en": "Searching for images in neural networks",
                  "es": "Buscar imágenes en redes neuronales",
                  "de": "Bilder in neuronalen Netzwerken suchen",
                  "nl": "Zoeken naar afbeeldingen in neurale netwerken"
        },
        {
                  "en": "Finding network connection patterns",
                  "es": "Encontrar patrones de conexión de red",
                  "de": "Netzwerkverbindungsmuster finden",
                  "nl": "Netwerkverbindingspatronen vinden"
        },
        {
                  "en": "Design and discovery of optimal network architectures",
                  "es": "Diseño y descubrimiento de arquitecturas de red óptimas",
                  "de": "Entwurf und Entdeckung optimaler Netzwerkarchitekturen",
                  "nl": "Ontwerp en ontdekking van optimale netwerkarchitecturen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NAS uses algorithms (reinforcement learning, evolutionary methods, or gradient-based approaches) to automatically search the space of possible architectures, discovering novel designs that often outperform human-engineered networks like EfficientNet and NASNet.",
                  "es": "NAS usa algoritmos (aprendizaje por refuerzo, métodos evolutivos o enfoques basados en gradientes) para buscar automáticamente el espacio de arquitecturas posibles, descubriendo diseños novedosos que a menudo superan redes diseñadas por humanos como EfficientNet y NASNet.",
                  "de": "NAS verwendet Algorithmen (Reinforcement Learning, evolutionäre Methoden oder gradientenbasierte Ansätze) um automatisch den Raum möglicher Architekturen zu durchsuchen, entdeckt neuartige Designs die oft von Menschen entwickelte Netzwerke wie EfficientNet und NASNet übertreffen.",
                  "nl": "NAS gebruikt algoritmes (reinforcement learning, evolutionaire methodes of gradiënt-gebaseerde benaderingen) om automatisch de ruimte van mogelijke architecturen te doorzoeken, ontdekt nieuwe ontwerpen die vaak door mensen ontwikkelde netwerken zoals EfficientNet en NASNet overtreffen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();