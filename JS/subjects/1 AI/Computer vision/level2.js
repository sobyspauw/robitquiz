// Computer Vision Quiz - Level 2: Image Processing Fundamentals
(function() {
  const level2 = {
    name: {
      en: "Computer Vision Level 2",
      es: "Visión por Computadora Nivel 2",
      de: "Computer Vision Stufe 2",
      nl: "Computer Vision Level 2"
    },
    questions: [
      {
        question: {
          en: "What is image filtering used for in computer vision?",
          es: "¿Para qué se usa el filtrado de imágenes en visión por computadora?",
          de: "Wofür wird Bildfilterung in Computer Vision verwendet?",
          nl: "Waarvoor wordt beeldfiltering gebruikt in computer vision?"
        },
        options: [
          { en: "To reduce noise and enhance image features", es: "Para reducir ruido y mejorar características de imagen", de: "Um Rauschen zu reduzieren und Bildmerkmale zu verbessern", nl: "Om ruis te verminderen en beeldkenmerken te verbeteren" },
          { en: "To change image colors only", es: "Solo para cambiar colores de imagen", de: "Nur um Bildfarben zu ändern", nl: "Alleen om beeldkleuren te veranderen" },
          { en: "To make images smaller", es: "Para hacer imágenes más pequeñas", de: "Um Bilder kleiner zu machen", nl: "Om afbeeldingen kleiner te maken" },
          { en: "To save storage space", es: "Para ahorrar espacio de almacenamiento", de: "Um Speicherplatz zu sparen", nl: "Om opslagruimte te besparen" }
        ],
        correct: 0,
        explanation: {
          en: "Image filtering applies mathematical operations to reduce noise, blur, sharpen, or enhance specific features like edges and textures in digital images.",
          es: "El filtrado de imágenes aplica operaciones matemáticas para reducir ruido, desenfocar, enfocar o mejorar características específicas como bordes y texturas en imágenes digitales.",
          de: "Bildfilterung wendet mathematische Operationen an um Rauschen zu reduzieren, zu verwischen, zu schärfen oder spezifische Merkmale wie Kanten und Texturen in digitalen Bildern zu verbessern.",
          nl: "Beeldfiltering past wiskundige bewerkingen toe om ruis te verminderen, te vervagen, scherper te maken of specifieke kenmerken zoals randen en texturen in digitale afbeeldingen te verbeteren."
        }
      },
      {
        question: {
          en: "What does edge detection help identify in images?",
          es: "¿Qué ayuda a identificar la detección de bordes en imágenes?",
          de: "Was hilft Kantenerkennung in Bildern zu identifizieren?",
          nl: "Wat helpt randdetectie identificeren in afbeeldingen?"
        },
        options: [
          { en: "Boundaries between different objects or regions", es: "Límites entre diferentes objetos o regiones", de: "Grenzen zwischen verschiedenen Objekten oder Bereichen", nl: "Grenzen tussen verschillende objecten of gebieden" },
          { en: "Image file size", es: "Tamaño de archivo de imagen", de: "Bilddateigröße", nl: "Beeldbestandsgrootte" },
          { en: "Color temperature", es: "Temperatura de color", de: "Farbtemperatur", nl: "Kleurtemperatuur" },
          { en: "Image resolution", es: "Resolución de imagen", de: "Bildauflösung", nl: "Beeldresolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Edge detection algorithms locate sharp changes in brightness or color intensity, which typically occur at object boundaries, helping to identify shapes and structures.",
          es: "Los algoritmos de detección de bordes localizan cambios bruscos en brillo o intensidad de color, que típicamente ocurren en límites de objetos, ayudando a identificar formas y estructuras.",
          de: "Kantenerkennungsalgorithmen lokalisieren scharfe Änderungen in Helligkeit oder Farbintensität, die typischerweise an Objektgrenzen auftreten und helfen Formen und Strukturen zu identifizieren.",
          nl: "Randdetectie-algoritmes lokaliseren scherpe veranderingen in helderheid of kleurintensiteit, die doorgaans optreden bij objectgrenzen en helpen vormen en structuren te identificeren."
        }
      },
      {
        question: {
          en: "How does adjusting brightness affect an image in computer vision?",
          es: "¿Cómo afecta ajustar el brillo a una imagen en visión por computadora?",
          de: "Wie beeinflusst die Helligkeitsanpassung ein Bild in Computer Vision?",
          nl: "Hoe beïnvloedt het aanpassen van helderheid een afbeelding in computer vision?"
        },
        options: [
          { en: "Changes the overall lightness of all pixels uniformly", es: "Cambia la luminosidad general de todos los píxeles uniformemente", de: "Ändert die Gesamthelligkeit aller Pixel gleichmäßig", nl: "Verandert de algehele lichtheid van alle pixels uniform" },
          { en: "Only affects the image corners", es: "Solo afecta las esquinas de la imagen", de: "Beeinflusst nur die Bildecken", nl: "Beïnvloedt alleen de beeldhoeken" },
          { en: "Changes image dimensions", es: "Cambia las dimensiones de la imagen", de: "Ändert Bildabmessungen", nl: "Verandert beeldafmetingen" },
          { en: "Converts color to black and white", es: "Convierte color a blanco y negro", de: "Konvertiert Farbe zu Schwarz-Weiß", nl: "Converteert kleur naar zwart-wit" }
        ],
        correct: 0,
        explanation: {
          en: "Brightness adjustment adds or subtracts a constant value to all pixel intensities, making the entire image lighter or darker while preserving relative contrast.",
          es: "El ajuste de brillo suma o resta un valor constante a todas las intensidades de píxeles, haciendo toda la imagen más clara u oscura mientras preserva el contraste relativo.",
          de: "Helligkeitsanpassung addiert oder subtrahiert einen konstanten Wert zu allen Pixelintensitäten, macht das gesamte Bild heller oder dunkler während der relative Kontrast erhalten bleibt.",
          nl: "Helderheidaanpassing voegt een constante waarde toe aan of trekt deze af van alle pixelintensiteiten, waardoor het hele beeld lichter of donkerder wordt terwijl relatief contrast behouden blijft."
        }
      },
      {
        question: {
          en: "What is the difference between brightness and contrast adjustments?",
          es: "¿Cuál es la diferencia entre ajustes de brillo y contraste?",
          de: "Was ist der Unterschied zwischen Helligkeits- und Kontrastanpassungen?",
          nl: "Wat is het verschil tussen helderheid- en contrastaanpassingen?"
        },
        options: [
          { en: "Brightness shifts all values equally, contrast stretches the range between light and dark", es: "El brillo desplaza todos los valores igualmente, el contraste estira el rango entre claro y oscuro", de: "Helligkeit verschiebt alle Werte gleich, Kontrast streckt den Bereich zwischen hell und dunkel", nl: "Helderheid verschuift alle waarden gelijk, contrast rekt het bereik tussen licht en donker op" },
          { en: "Both do exactly the same thing", es: "Ambos hacen exactamente lo mismo", de: "Beide machen genau dasselbe", nl: "Beide doen precies hetzelfde" },
          { en: "Brightness only affects colors, contrast affects shapes", es: "El brillo solo afecta colores, el contraste afecta formas", de: "Helligkeit beeinflusst nur Farben, Kontrast beeinflusst Formen", nl: "Helderheid beïnvloedt alleen kleuren, contrast beïnvloedt vormen" },
          { en: "Contrast only works on black and white images", es: "El contraste solo funciona en imágenes en blanco y negro", de: "Kontrast funktioniert nur bei Schwarz-Weiß-Bildern", nl: "Contrast werkt alleen op zwart-wit afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Brightness uniformly shifts all pixel values up or down, while contrast multiplies values to increase or decrease the difference between the lightest and darkest areas.",
          es: "El brillo desplaza uniformemente todos los valores de píxeles hacia arriba o abajo, mientras que el contraste multiplica valores para aumentar o disminuir la diferencia entre las áreas más claras y oscuras.",
          de: "Helligkeit verschiebt gleichmäßig alle Pixelwerte nach oben oder unten, während Kontrast Werte multipliziert um die Differenz zwischen den hellsten und dunkelsten Bereichen zu vergrößern oder verkleinern.",
          nl: "Helderheid verschuift uniform alle pixelwaarden omhoog of omlaag, terwijl contrast waarden vermenigvuldigt om het verschil tussen de lichtste en donkerste gebieden te vergroten of verkleinen."
        }
      },
      {
        question: {
          en: "Which image processing technique would best help identify a white circle on a black background?",
          es: "¿Qué técnica de procesamiento de imágenes ayudaría mejor a identificar un círculo blanco sobre fondo negro?",
          de: "Welche Bildverarbeitungstechnik würde am besten helfen einen weißen Kreis auf schwarzem Hintergrund zu identifizieren?",
          nl: "Welke beeldverwerkingstechniek zou het beste helpen een witte cirkel op een zwarte achtergrond te identificeren?"
        },
        options: [
          { en: "Thresholding to separate bright and dark regions", es: "Umbralización para separar regiones claras y oscuras", de: "Schwellenwertverfahren um helle und dunkle Bereiche zu trennen", nl: "Drempelbewerking om lichte en donkere gebieden te scheiden" },
          { en: "Increasing image brightness only", es: "Solo aumentar el brillo de la imagen", de: "Nur Bildhelligkeit erhöhen", nl: "Alleen beeldhelderheid verhogen" },
          { en: "Converting to color image", es: "Convertir a imagen a color", de: "Zu Farbbild konvertieren", nl: "Converteren naar kleurafbeelding" },
          { en: "Reducing image resolution", es: "Reducir resolución de imagen", de: "Bildauflösung reduzieren", nl: "Beeldresolutie verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Thresholding converts grayscale images to binary by setting pixels above a certain brightness to white and below to black, making shape detection easier.",
          es: "La umbralización convierte imágenes en escala de grises a binarias estableciendo píxeles arriba de cierto brillo a blanco y abajo a negro, facilitando la detección de formas.",
          de: "Schwellenwertverfahren konvertiert Graustufenbilder zu binären indem Pixel über einer bestimmten Helligkeit auf weiß und darunter auf schwarz gesetzt werden, was Formerkennung erleichtert.",
          nl: "Drempelbewerking converteert grijstintenafbeeldingen naar binair door pixels boven een bepaalde helderheid op wit en eronder op zwart te zetten, wat vormdetectie vergemakkelijkt."
        }
      },
      {
        question: {
          en: "What is histogram equalization used for?",
          es: "¿Para qué se usa la ecualización de histograma?",
          de: "Wofür wird Histogramm-Ausgleich verwendet?",
          nl: "Waarvoor wordt histogram-egalisatie gebruikt?"
        },
        options: [
          { en: "To improve image contrast by redistributing pixel intensities", es: "Para mejorar contraste de imagen redistribuyendo intensidades de píxeles", de: "Um Bildkontrast durch Umverteilung von Pixelintensitäten zu verbessern", nl: "Om beeldcontrast te verbeteren door pixelintensiteiten te herverdelen" },
          { en: "To create histograms of image data", es: "Para crear histogramas de datos de imagen", de: "Um Histogramme von Bilddaten zu erstellen", nl: "Om histogrammen van beeldgegevens te maken" },
          { en: "To rotate images", es: "Para rotar imágenes", de: "Um Bilder zu drehen", nl: "Om afbeeldingen te roteren" },
          { en: "To compress image files", es: "Para comprimir archivos de imagen", de: "Um Bilddateien zu komprimieren", nl: "Om beeldbestanden te comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Histogram equalization spreads out pixel intensity values more evenly across the full range, enhancing contrast in low-contrast images.",
          es: "La ecualización de histograma distribuye valores de intensidad de píxeles más uniformemente a través del rango completo, mejorando contraste en imágenes de bajo contraste.",
          de: "Histogramm-Ausgleich verteilt Pixelintensitätswerte gleichmäßiger über den gesamten Bereich und verbessert Kontrast in kontrastarmen Bildern.",
          nl: "Histogram-egalisatie verspreidt pixelintensiteitswaarden gelijkmatiger over het volledige bereik, wat contrast verbetert in afbeeldingen met laag contrast."
        }
      },
      {
        question: {
          en: "What is the purpose of Gaussian blur in image processing?",
          es: "¿Cuál es el propósito del desenfoque gaussiano en procesamiento de imágenes?",
          de: "Was ist der Zweck von Gaußscher Unschärfe in der Bildverarbeitung?",
          nl: "Wat is het doel van Gaussische vervaging in beeldverwerking?"
        },
        options: [
          { en: "To smooth images and reduce noise while preserving edges", es: "Para suavizar imágenes y reducir ruido mientras preserva bordes", de: "Um Bilder zu glätten und Rauschen zu reduzieren während Kanten erhalten bleiben", nl: "Om afbeeldingen glad te maken en ruis te verminderen terwijl randen behouden blijven" },
          { en: "To make images look more artistic", es: "Para hacer imágenes más artísticas", de: "Um Bilder künstlerischer aussehen zu lassen", nl: "Om afbeeldingen er artistieker uit te laten zien" },
          { en: "To increase image sharpness", es: "Para aumentar nitidez de imagen", de: "Um Bildschärfe zu erhöhen", nl: "Om beeldscherpte te verhogen" },
          { en: "To change image colors", es: "Para cambiar colores de imagen", de: "Um Bildfarben zu ändern", nl: "Om beeldkleuren te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Gaussian blur applies a smoothing filter that reduces noise and fine details while maintaining important structural information like edges and boundaries.",
          es: "El desenfoque gaussiano aplica un filtro de suavizado que reduce ruido y detalles finos mientras mantiene información estructural importante como bordes y límites.",
          de: "Gaußsche Unschärfe wendet einen Glättungsfilter an der Rauschen und feine Details reduziert während wichtige strukturelle Informationen wie Kanten und Grenzen erhalten bleiben.",
          nl: "Gaussische vervaging past een afvlakkingsfilter toe dat ruis en fijne details vermindert terwijl belangrijke structurele informatie zoals randen en grenzen behouden blijft."
        }
      },
      {
        question: {
          en: "What does morphological opening operation do to binary images?",
          es: "¿Qué hace la operación de apertura morfológica a imágenes binarias?",
          de: "Was macht die morphologische Öffnungsoperation mit Binärbildern?",
          nl: "Wat doet de morfologische openingsbewerking met binaire afbeeldingen?"
        },
        options: [
          { en: "Removes small noise objects and separates connected components", es: "Remueve pequeños objetos de ruido y separa componentes conectados", de: "Entfernt kleine Rausch-Objekte und trennt verbundene Komponenten", nl: "Verwijdert kleine ruisobjecten en scheidt verbonden componenten" },
          { en: "Makes images brighter", es: "Hace imágenes más brillantes", de: "Macht Bilder heller", nl: "Maakt afbeeldingen helderder" },
          { en: "Converts to color images", es: "Convierte a imágenes a color", de: "Konvertiert zu Farbbildern", nl: "Converteert naar kleurafbeeldingen" },
          { en: "Increases image resolution", es: "Aumenta resolución de imagen", de: "Erhöht Bildauflösung", nl: "Verhoogt beeldresolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Morphological opening (erosion followed by dilation) eliminates small noise blobs and can separate objects that are incorrectly connected.",
          es: "La apertura morfológica (erosión seguida de dilatación) elimina pequeñas manchas de ruido y puede separar objetos que están incorrectamente conectados.",
          de: "Morphologische Öffnung (Erosion gefolgt von Dilatation) eliminiert kleine Rauschkleckse und kann Objekte trennen die fälschlicherweise verbunden sind.",
          nl: "Morfologische opening (erosie gevolgd door dilatatie) elimineert kleine ruisvlekken en kan objecten scheiden die ten onrechte verbonden zijn."
        }
      },
      {
        question: {
          en: "What is the main advantage of using the Sobel edge detector?",
          es: "¿Cuál es la principal ventaja de usar el detector de bordes Sobel?",
          de: "Was ist der Hauptvorteil der Verwendung des Sobel-Kantendetektors?",
          nl: "Wat is het hoofdvoordeel van het gebruik van de Sobel-randdetector?"
        },
        options: [
          { en: "It detects edges in both horizontal and vertical directions simultaneously", es: "Detecta bordes en direcciones horizontal y vertical simultáneamente", de: "Es erkennt Kanten sowohl in horizontaler als auch vertikaler Richtung gleichzeitig", nl: "Het detecteert randen in zowel horizontale als verticale richtingen tegelijkertijd" },
          { en: "It only works on color images", es: "Solo funciona en imágenes a color", de: "Es funktioniert nur bei Farbbildern", nl: "Het werkt alleen op kleurafbeeldingen" },
          { en: "It makes images bigger", es: "Hace imágenes más grandes", de: "Es macht Bilder größer", nl: "Het maakt afbeeldingen groter" },
          { en: "It converts images to black and white", es: "Convierte imágenes a blanco y negro", de: "Es konvertiert Bilder zu Schwarz-Weiß", nl: "Het converteert afbeeldingen naar zwart-wit" }
        ],
        correct: 0,
        explanation: {
          en: "The Sobel operator uses two 3x3 kernels to compute gradients in both X and Y directions, providing comprehensive edge detection with directional information.",
          es: "El operador Sobel usa dos kernels 3x3 para computar gradientes en direcciones X e Y, proporcionando detección integral de bordes con información direccional.",
          de: "Der Sobel-Operator nutzt zwei 3x3-Kernel um Gradienten sowohl in X- als auch Y-Richtung zu berechnen und bietet umfassende Kantenerkennung mit Richtungsinformation.",
          nl: "De Sobel-operator gebruikt twee 3x3-kernels om gradiënten in zowel X- als Y-richting te berekenen, wat uitgebreide randdetectie biedt met richtingsinformatie."
        }
      },
      {
        question: {
          en: "What is image convolution in computer vision?",
          es: "¿Qué es la convolución de imagen en visión por computadora?",
          de: "Was ist Bildkonvolution in Computer Vision?",
          nl: "Wat is beeldconvolutie in computer vision?"
        },
        options: [
          { en: "A mathematical operation that applies filters to extract features from images", es: "Una operación matemática que aplica filtros para extraer características de imágenes", de: "Eine mathematische Operation die Filter anwendet um Merkmale aus Bildern zu extrahieren", nl: "Een wiskundige bewerking die filters toepast om kenmerken uit afbeeldingen te extraheren" },
          { en: "Rotating images in circles", es: "Rotar imágenes en círculos", de: "Bilder in Kreisen drehen", nl: "Afbeeldingen in cirkels draaien" },
          { en: "Making images curved", es: "Hacer imágenes curvadas", de: "Bilder gebogen machen", nl: "Afbeeldingen gebogen maken" },
          { en: "Combining multiple images together", es: "Combinar múltiples imágenes juntas", de: "Mehrere Bilder zusammenfügen", nl: "Meerdere afbeeldingen samenbrengen" }
        ],
        correct: 0,
        explanation: {
          en: "Convolution slides a small filter (kernel) across an image, performing element-wise multiplication and summation to detect patterns like edges, textures, or other features.",
          es: "La convolución desliza un filtro pequeño (kernel) a través de una imagen, realizando multiplicación elemento por elemento y suma para detectar patrones como bordes, texturas u otras características.",
          de: "Konvolution schiebt einen kleinen Filter (Kernel) über ein Bild und führt elementweise Multiplikation und Summierung durch um Muster wie Kanten, Texturen oder andere Merkmale zu erkennen.",
          nl: "Convolutie schuift een kleine filter (kernel) over een afbeelding en voert elementgewijze vermenigvuldiging en optelling uit om patronen zoals randen, texturen of andere kenmerken te detecteren."
        }
      },
      {
        question: {
          en: "What happens when you apply a high-pass filter to an image?",
          es: "¿Qué pasa cuando aplicas un filtro pasa-alto a una imagen?",
          de: "Was passiert wenn du einen Hochpassfilter auf ein Bild anwendest?",
          nl: "Wat gebeurt er wanneer je een hoogdoorlaatfilter op een afbeelding toepast?"
        },
        options: [
          { en: "It enhances edges and fine details while reducing smooth areas", es: "Mejora bordes y detalles finos mientras reduce áreas suaves", de: "Es verstärkt Kanten und feine Details während glatte Bereiche reduziert werden", nl: "Het versterkt randen en fijne details terwijl gladde gebieden worden verminderd" },
          { en: "It makes the image brighter overall", es: "Hace la imagen más brillante en general", de: "Es macht das Bild insgesamt heller", nl: "Het maakt de afbeelding over het algemeen helderder" },
          { en: "It removes all colors from the image", es: "Remueve todos los colores de la imagen", de: "Es entfernt alle Farben aus dem Bild", nl: "Het verwijdert alle kleuren uit de afbeelding" },
          { en: "It blurs the entire image", es: "Desenfoca toda la imagen", de: "Es verwischt das gesamte Bild", nl: "Het vervaagt de hele afbeelding" }
        ],
        correct: 0,
        explanation: {
          en: "High-pass filters allow high-frequency components (edges, textures, noise) to pass through while blocking low-frequency components (smooth regions), emphasizing details.",
          es: "Los filtros pasa-alto permiten que componentes de alta frecuencia (bordes, texturas, ruido) pasen mientras bloquean componentes de baja frecuencia (regiones suaves), enfatizando detalles.",
          de: "Hochpassfilter lassen hochfrequente Komponenten (Kanten, Texturen, Rauschen) durch während niederfrequente Komponenten (glatte Regionen) blockiert werden, betonen Details.",
          nl: "Hoogdoorlaatfilters laten hoogfrequente componenten (randen, texturen, ruis) door terwijl laagfrequente componenten (gladde gebieden) geblokkeerd worden, benadrukken details."
        }
      },
      {
        question: {
          en: "What is the purpose of image normalization?",
          es: "¿Cuál es el propósito de la normalización de imagen?",
          de: "Was ist der Zweck der Bildnormalisierung?",
          nl: "Wat is het doel van beeldnormalisatie?"
        },
        options: [
          { en: "To standardize pixel value ranges for consistent processing", es: "Para estandarizar rangos de valores de píxeles para procesamiento consistente", de: "Um Pixelwertbereiche für konsistente Verarbeitung zu standardisieren", nl: "Om pixelwaardebereiken te standaardiseren voor consistente verwerking" },
          { en: "To make all images the same size", es: "Para hacer todas las imágenes del mismo tamaño", de: "Um alle Bilder zur gleichen Größe zu machen", nl: "Om alle afbeeldingen hetzelfde formaat te geven" },
          { en: "To remove noise from images", es: "Para remover ruido de imágenes", de: "Um Rauschen aus Bildern zu entfernen", nl: "Om ruis uit afbeeldingen te verwijderen" },
          { en: "To convert images to grayscale", es: "Para convertir imágenes a escala de grises", de: "Um Bilder zu Graustufen zu konvertieren", nl: "Om afbeeldingen naar grijstinten te converteren" }
        ],
        correct: 0,
        explanation: {
          en: "Normalization scales pixel values to a standard range (like 0-1 or 0-255), ensuring consistent input for algorithms and preventing bias from different brightness levels.",
          es: "La normalización escala valores de píxeles a un rango estándar (como 0-1 o 0-255), asegurando entrada consistente para algoritmos y previniendo sesgo de diferentes niveles de brillo.",
          de: "Normalisierung skaliert Pixelwerte auf einen Standardbereich (wie 0-1 oder 0-255), gewährleistet konsistente Eingabe für Algorithmen und verhindert Verzerrung durch verschiedene Helligkeitsstufen.",
          nl: "Normalisatie schaalt pixelwaarden naar een standaardbereik (zoals 0-1 of 0-255), zorgt voor consistente invoer voor algoritmen en voorkomt bias van verschillende helderheidsniveaus."
        }
      },
      {
        question: {
          en: "What is the difference between erosion and dilation in morphological operations?",
          es: "¿Cuál es la diferencia entre erosión y dilatación en operaciones morfológicas?",
          de: "Was ist der Unterschied zwischen Erosion und Dilatation in morphologischen Operationen?",
          nl: "Wat is het verschil tussen erosie en dilatatie in morfologische bewerkingen?"
        },
        options: [
          { en: "Erosion shrinks white regions, dilation expands white regions", es: "La erosión encoge regiones blancas, la dilatación expande regiones blancas", de: "Erosion schrumpft weiße Bereiche, Dilatation erweitert weiße Bereiche", nl: "Erosie krimpt witte gebieden, dilatatie breidt witte gebieden uit" },
          { en: "Both operations do the same thing", es: "Ambas operaciones hacen lo mismo", de: "Beide Operationen machen dasselbe", nl: "Beide bewerkingen doen hetzelfde" },
          { en: "Erosion works on color images, dilation on grayscale", es: "La erosión funciona en imágenes a color, la dilatación en escala de grises", de: "Erosion funktioniert bei Farbbildern, Dilatation bei Graustufen", nl: "Erosie werkt op kleurafbeeldingen, dilatatie op grijstinten" },
          { en: "Erosion makes images darker, dilation makes them brighter", es: "La erosión hace imágenes más oscuras, la dilatación las hace más brillantes", de: "Erosion macht Bilder dunkler, Dilatation macht sie heller", nl: "Erosie maakt afbeeldingen donkerder, dilatatie maakt ze helderder" }
        ],
        correct: 0,
        explanation: {
          en: "Erosion removes pixels from object boundaries (shrinking foreground objects), while dilation adds pixels to boundaries (expanding foreground objects), useful for noise removal and gap filling.",
          es: "La erosión remueve píxeles de límites de objetos (encogiendo objetos de primer plano), mientras la dilatación añade píxeles a límites (expandiendo objetos de primer plano), útil para remoción de ruido y llenado de huecos.",
          de: "Erosion entfernt Pixel von Objektgrenzen (schrumpft Vordergrundobjekte), während Dilatation Pixel zu Grenzen hinzufügt (erweitert Vordergrundobjekte), nützlich für Rauschentfernung und Lückenfüllung.",
          nl: "Erosie verwijdert pixels van objectgrenzen (krimpt voorgrond objecten), terwijl dilatatie pixels toevoegt aan grenzen (breidt voorgrond objecten uit), nuttig voor ruisverwijdering en gat vulling."
        }
      },
      {
        question: {
          en: "What is the primary purpose of image segmentation?",
          es: "¿Cuál es el propósito principal de la segmentación de imagen?",
          de: "Was ist der Hauptzweck der Bildsegmentierung?",
          nl: "Wat is het hoofddoel van beeldsegmentatie?"
        },
        options: [
          { en: "To divide an image into meaningful regions or objects", es: "Para dividir una imagen en regiones u objetos significativos", de: "Um ein Bild in bedeutungsvolle Regionen oder Objekte zu unterteilen", nl: "Om een afbeelding te verdelen in betekenisvolle gebieden of objecten" },
          { en: "To make images smaller in file size", es: "Para hacer imágenes más pequeñas en tamaño de archivo", de: "Um Bilder kleiner in Dateigröße zu machen", nl: "Om afbeeldingen kleiner te maken in bestandsgrootte" },
          { en: "To add special effects to images", es: "Para añadir efectos especiales a imágenes", de: "Um Spezialeffekte zu Bildern hinzuzufügen", nl: "Om speciale effecten aan afbeeldingen toe te voegen" },
          { en: "To convert images between different formats", es: "Para convertir imágenes entre diferentes formatos", de: "Um Bilder zwischen verschiedenen Formaten zu konvertieren", nl: "Om afbeeldingen tussen verschillende formaten te converteren" }
        ],
        correct: 0,
        explanation: {
          en: "Image segmentation partitions an image into distinct regions based on similarity criteria like color, texture, or intensity, enabling object recognition and analysis.",
          es: "La segmentación de imagen particiona una imagen en regiones distintas basadas en criterios de similitud como color, textura o intensidad, habilitando reconocimiento y análisis de objetos.",
          de: "Bildsegmentierung teilt ein Bild in verschiedene Regionen basierend auf Ähnlichkeitskriterien wie Farbe, Textur oder Intensität auf, ermöglicht Objekterkennung und -analyse.",
          nl: "Beeldsegmentatie verdeelt een afbeelding in verschillende gebieden gebaseerd op gelijkheidscriteria zoals kleur, textuur of intensiteit, maakt objectherkenning en -analyse mogelijk."
        }
      },
      {
        question: {
          en: "What does the Canny edge detector do better than simpler edge detection methods?",
          es: "¿Qué hace mejor el detector de bordes Canny que métodos de detección de bordes más simples?",
          de: "Was macht der Canny-Kantendetektor besser als einfachere Kantenerkennungsmethoden?",
          nl: "Wat doet de Canny-randdetector beter dan eenvoudigere randdetectiemethoden?"
        },
        options: [
          { en: "Reduces noise while maintaining thin, continuous edges", es: "Reduce ruido mientras mantiene bordes delgados y continuos", de: "Reduziert Rauschen während dünne, kontinuierliche Kanten erhalten bleiben", nl: "Vermindert ruis terwijl dunne, continue randen behouden blijven" },
          { en: "Works faster than other methods", es: "Funciona más rápido que otros métodos", de: "Arbeitet schneller als andere Methoden", nl: "Werkt sneller dan andere methoden" },
          { en: "Only detects horizontal edges", es: "Solo detecta bordes horizontales", de: "Erkennt nur horizontale Kanten", nl: "Detecteert alleen horizontale randen" },
          { en: "Works only on color images", es: "Funciona solo en imágenes a color", de: "Funktioniert nur bei Farbbildern", nl: "Werkt alleen op kleurafbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Canny edge detector uses a multi-stage algorithm including Gaussian smoothing, gradient calculation, non-maximum suppression, and hysteresis thresholding for optimal edge detection.",
          es: "El detector de bordes Canny usa un algoritmo multi-etapa incluyendo suavizado gaussiano, cálculo de gradiente, supresión de no-máximos y umbralización de histéresis para detección óptima de bordes.",
          de: "Der Canny-Kantendetektor nutzt einen mehrstufigen Algorithmus einschließlich Gaußscher Glättung, Gradientenberechnung, Nicht-Maximum-Unterdrückung und Hysterese-Schwellwertverfahren für optimale Kantenerkennung.",
          nl: "De Canny-randdetector gebruikt een meerfasen algoritme inclusief Gaussische afvlakking, gradiëntberekening, niet-maximum onderdrukking en hysterese drempelbewerking voor optimale randdetectie."
        }
      },
      {
        question: {
          en: "What is the main benefit of using median filtering for noise reduction?",
          es: "¿Cuál es el principal beneficio de usar filtrado de mediana para reducción de ruido?",
          de: "Was ist der Hauptvorteil der Verwendung von Medianfilterung zur Rauschreduzierung?",
          nl: "Wat is het hoofdvoordeel van het gebruik van mediaan filtering voor ruisreductie?"
        },
        options: [
          { en: "It removes salt-and-pepper noise while preserving edges", es: "Remueve ruido sal y pimienta mientras preserva bordes", de: "Es entfernt Salz-und-Pfeffer-Rauschen während Kanten erhalten bleiben", nl: "Het verwijdert zout-en-peper ruis terwijl randen behouden blijven" },
          { en: "It works faster than other filters", es: "Funciona más rápido que otros filtros", de: "Es arbeitet schneller als andere Filter", nl: "Het werkt sneller dan andere filters" },
          { en: "It only works on grayscale images", es: "Solo funciona en imágenes en escala de grises", de: "Es funktioniert nur bei Graustufenbildern", nl: "Het werkt alleen op grijstintenafbeeldingen" },
          { en: "It increases image brightness", es: "Aumenta el brillo de la imagen", de: "Es erhöht die Bildhelligkeit", nl: "Het verhoogt de beeldhelderheid" }
        ],
        correct: 0,
        explanation: {
          en: "Median filtering replaces each pixel with the median value of its neighborhood, effectively removing impulse noise (outliers) while maintaining edge information better than linear filters.",
          es: "El filtrado de mediana reemplaza cada píxel con el valor mediano de su vecindario, removiendo efectivamente ruido impulsivo (valores atípicos) mientras mantiene información de bordes mejor que filtros lineales.",
          de: "Medianfilterung ersetzt jeden Pixel mit dem Medianwert seiner Nachbarschaft, entfernt effektiv Impulsrauschen (Ausreißer) während Kanteninformationen besser als lineare Filter erhalten bleiben.",
          nl: "Mediaan filtering vervangt elke pixel met de mediaanwaarde van zijn buurt, verwijdert effectief impulsruis (uitschieters) terwijl randinformatie beter behouden blijft dan lineaire filters."
        }
      },
      {
        question: {
          en: "What does image dithering accomplish?",
          es: "¿Qué logra el dithering de imagen?",
          de: "Was erreicht Bild-Dithering?",
          nl: "Wat bereikt beeld-dithering?"
        },
        options: [
          { en: "Creates the illusion of more colors using fewer colors through pixel patterns", es: "Crea la ilusión de más colores usando menos colores a través de patrones de píxeles", de: "Erzeugt die Illusion von mehr Farben mit weniger Farben durch Pixelmuster", nl: "Creëert de illusie van meer kleuren met minder kleuren door pixelpatronen" },
          { en: "Makes images move or animate", es: "Hace que las imágenes se muevan o animen", de: "Lässt Bilder sich bewegen oder animieren", nl: "Laat afbeeldingen bewegen of animeren" },
          { en: "Reduces image file size only", es: "Solo reduce el tamaño del archivo de imagen", de: "Reduziert nur die Bilddateigröße", nl: "Vermindert alleen bestandsgrootte van afbeelding" },
          { en: "Converts images to 3D format", es: "Convierte imágenes a formato 3D", de: "Konvertiert Bilder zu 3D-Format", nl: "Converteert afbeeldingen naar 3D-formaat" }
        ],
        correct: 0,
        explanation: {
          en: "Dithering uses spatial patterns of available colors to simulate colors that aren't available in the palette, creating smooth gradients and reducing banding artifacts.",
          es: "El dithering usa patrones espaciales de colores disponibles para simular colores que no están disponibles en la paleta, creando gradientes suaves y reduciendo artefactos de bandas.",
          de: "Dithering nutzt räumliche Muster verfügbarer Farben um Farben zu simulieren die nicht in der Palette verfügbar sind, erzeugt glatte Verläufe und reduziert Banding-Artefakte.",
          nl: "Dithering gebruikt ruimtelijke patronen van beschikbare kleuren om kleuren te simuleren die niet beschikbaar zijn in het palet, creëert gladde verlopen en vermindert banding-artefacten."
        }
      },
      {
        question: {
          en: "What is the purpose of gamma correction in image processing?",
          es: "¿Cuál es el propósito de la corrección gamma en procesamiento de imágenes?",
          de: "Was ist der Zweck der Gamma-Korrektur in der Bildverarbeitung?",
          nl: "Wat is het doel van gamma-correctie in beeldverwerking?"
        },
        options: [
          { en: "To adjust image brightness in a non-linear way that matches human perception", es: "Para ajustar brillo de imagen de manera no lineal que coincida con percepción humana", de: "Um Bildhelligkeit auf nichtlineare Weise anzupassen die der menschlichen Wahrnehmung entspricht", nl: "Om beeldhelderheid aan te passen op een niet-lineaire manier die overeenkomt met menselijke waarneming" },
          { en: "To remove gamma rays from images", es: "Para remover rayos gamma de imágenes", de: "Um Gammastrahlen aus Bildern zu entfernen", nl: "Om gammastralen uit afbeeldingen te verwijderen" },
          { en: "To compress image files", es: "Para comprimir archivos de imagen", de: "Um Bilddateien zu komprimieren", nl: "Om beeldbestanden te comprimeren" },
          { en: "To add watermarks to images", es: "Para añadir marcas de agua a imágenes", de: "Um Wasserzeichen zu Bildern hinzuzufügen", nl: "Om watermerken aan afbeeldingen toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Gamma correction compensates for the non-linear relationship between pixel values and displayed brightness, ensuring images appear with correct contrast across different devices.",
          es: "La corrección gamma compensa la relación no lineal entre valores de píxeles y brillo mostrado, asegurando que imágenes aparezcan con contraste correcto en diferentes dispositivos.",
          de: "Gamma-Korrektur kompensiert die nichtlineare Beziehung zwischen Pixelwerten und angezeigter Helligkeit, gewährleistet dass Bilder mit korrektem Kontrast auf verschiedenen Geräten erscheinen.",
          nl: "Gamma-correctie compenseert de niet-lineaire relatie tussen pixelwaarden en weergegeven helderheid, zorgt ervoor dat afbeeldingen met juist contrast verschijnen op verschillende apparaten."
        }
      },
      {
        question: {
          en: "What is image segmentation in computer vision?",
          es: "¿Qué es la segmentación de imágenes en visión por computadora?",
          de: "Was ist Bildsegmentierung in Computer Vision?",
          nl: "Wat is beeldsegmentatie in computer vision?"
        },
        options: [
          { en: "Dividing an image into meaningful regions or segments", es: "Dividir una imagen en regiones o segmentos significativos", de: "Ein Bild in bedeutungsvolle Regionen oder Segmente unterteilen", nl: "Een afbeelding verdelen in betekenisvolle regio's of segmenten" },
          { en: "Cutting images into smaller file sizes", es: "Cortar imágenes en tamaños de archivo más pequeños", de: "Bilder in kleinere Dateigrößen schneiden", nl: "Afbeeldingen knippen in kleinere bestandsgroottes" },
          { en: "Creating segments of code for image processing", es: "Crear segmentos de código para procesamiento de imágenes", de: "Code-Segmente für Bildverarbeitung erstellen", nl: "Code-segmenten maken voor beeldverwerking" },
          { en: "Organizing images into folders", es: "Organizar imágenes en carpetas", de: "Bilder in Ordnern organisieren", nl: "Afbeeldingen organiseren in mappen" }
        ],
        correct: 0,
        explanation: {
          en: "Image segmentation partitions an image into multiple segments or regions based on characteristics like color, texture, or intensity, helping to identify and isolate objects or areas of interest.",
          es: "La segmentación de imágenes particiona una imagen en múltiples segmentos o regiones basándose en características como color, textura o intensidad, ayudando a identificar y aislar objetos o áreas de interés.",
          de: "Bildsegmentierung unterteilt ein Bild in mehrere Segmente oder Regionen basierend auf Eigenschaften wie Farbe, Textur oder Intensität, hilft Objekte oder interessante Bereiche zu identifizieren und zu isolieren.",
          nl: "Beeldsegmentatie verdeelt een afbeelding in meerdere segmenten of regio's gebaseerd op kenmerken zoals kleur, textuur of intensiteit, helpt objecten of interessegebieden te identificeren en isoleren."
        }
      },
      {
        question: {
          en: "What is the difference between spatial domain and frequency domain image processing?",
          es: "¿Cuál es la diferencia entre procesamiento de imágenes en dominio espacial y dominio de frecuencia?",
          de: "Was ist der Unterschied zwischen Bildverarbeitung im Ortsbereich und Frequenzbereich?",
          nl: "Wat is het verschil tussen beeldverwerking in ruimtelijk domein en frequentiedomein?"
        },
        options: [
          { en: "Spatial domain works directly with pixel values, frequency domain analyzes image patterns and frequencies", es: "Dominio espacial trabaja directamente con valores de píxeles, dominio de frecuencia analiza patrones e imágenes y frecuencias", de: "Ortsbereich arbeitet direkt mit Pixelwerten, Frequenzbereich analysiert Bildmuster und Frequenzen", nl: "Ruimtelijk domein werkt direct met pixelwaarden, frequentiedomein analyseert beeldpatronen en frequenties" },
          { en: "Spatial domain is for 2D images, frequency domain is for 3D images", es: "Dominio espacial es para imágenes 2D, dominio de frecuencia es para imágenes 3D", de: "Ortsbereich ist für 2D-Bilder, Frequenzbereich ist für 3D-Bilder", nl: "Ruimtelijk domein is voor 2D-afbeeldingen, frequentiedomein is voor 3D-afbeeldingen" },
          { en: "Spatial domain is faster, frequency domain is slower", es: "Dominio espacial es más rápido, dominio de frecuencia es más lento", de: "Ortsbereich ist schneller, Frequenzbereich ist langsamer", nl: "Ruimtelijk domein is sneller, frequentiedomein is langzamer" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial domain processing manipulates pixel values directly in the image coordinate system, while frequency domain processing uses transforms like FFT to analyze and modify image frequency components.",
          es: "El procesamiento en dominio espacial manipula valores de píxeles directamente en el sistema de coordenadas de imagen, mientras que el procesamiento en dominio de frecuencia usa transformadas como FFT para analizar y modificar componentes de frecuencia de imagen.",
          de: "Ortsbereich-Verarbeitung manipuliert Pixelwerte direkt im Bildkoordinatensystem, während Frequenzbereich-Verarbeitung Transformationen wie FFT verwendet um Bildfrequenzkomponenten zu analysieren und zu modifizieren.",
          nl: "Ruimtelijk domein verwerking manipuleert pixelwaarden direct in het beeldcoördinatensysteem, terwijl frequentiedomein verwerking transformaties zoals FFT gebruikt om beeldfrequentiecomponenten te analyseren en wijzigen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();