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
      },
      {
        question: {
          en: "What is the Laplacian operator used for in edge detection?",
          es: "¿Para qué se usa el operador laplaciano en detección de bordes?",
          de: "Wofür wird der Laplace-Operator in der Kantenerkennung verwendet?",
          nl: "Waarvoor wordt de Laplaciaan-operator gebruikt in randdetectie?"
        },
        options: [
          { en: "Detecting edges using second-order derivatives to find zero crossings", es: "Detectar bordes usando derivadas de segundo orden para encontrar cruces por cero", de: "Kanten erkennen durch Ableitungen zweiter Ordnung um Nulldurchgänge zu finden", nl: "Randen detecteren met tweede-orde afgeleiden om nuldoorgangen te vinden" },
          { en: "Increasing image brightness", es: "Aumentar brillo de imagen", de: "Bildhelligkeit erhöhen", nl: "Beeldhelderheid verhogen" },
          { en: "Converting color to grayscale", es: "Convertir color a escala de grises", de: "Farbe zu Graustufen konvertieren", nl: "Kleur naar grijstinten converteren" },
          { en: "Compressing image files", es: "Comprimir archivos de imagen", de: "Bilddateien komprimieren", nl: "Beeldbestanden comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Laplacian operator computes second derivatives to detect rapid intensity changes, finding edges at zero crossings where the second derivative changes sign.",
          es: "El operador laplaciano calcula derivadas de segundo orden para detectar cambios rápidos de intensidad, encontrando bordes en cruces por cero donde la derivada de segundo orden cambia de signo.",
          de: "Der Laplace-Operator berechnet zweite Ableitungen um schnelle Intensitätsänderungen zu erkennen, findet Kanten bei Nulldurchgängen wo die zweite Ableitung das Vorzeichen wechselt.",
          nl: "De Laplaciaan-operator berekent tweede afgeleiden om snelle intensiteitsveranderingen te detecteren, vindt randen bij nuldoorgangen waar de tweede afgeleide van teken verandert."
        }
      },
      {
        question: {
          en: "What is bilateral filtering designed to preserve?",
          es: "¿Qué está diseñado para preservar el filtrado bilateral?",
          de: "Was soll bilaterale Filterung erhalten?",
          nl: "Wat is bilaterale filtering ontworpen om te behouden?"
        },
        options: [
          { en: "Edges while smoothing uniform regions", es: "Bordes mientras suaviza regiones uniformes", de: "Kanten während glatte Regionen geglättet werden", nl: "Randen terwijl uniforme gebieden worden afgevlakt" },
          { en: "All high-frequency details equally", es: "Todos los detalles de alta frecuencia igualmente", de: "Alle hochfrequenten Details gleichermaßen", nl: "Alle hoogfrequente details gelijk" },
          { en: "Only color information", es: "Solo información de color", de: "Nur Farbinformationen", nl: "Alleen kleurinformatie" },
          { en: "File size during compression", es: "Tamaño de archivo durante compresión", de: "Dateigröße während Kompression", nl: "Bestandsgrootte tijdens compressie" }
        ],
        correct: 0,
        explanation: {
          en: "Bilateral filtering considers both spatial proximity and intensity similarity, smoothing noise in uniform areas while preserving sharp edges and details at boundaries.",
          es: "El filtrado bilateral considera tanto proximidad espacial como similitud de intensidad, suavizando ruido en áreas uniformes mientras preserva bordes nítidos y detalles en límites.",
          de: "Bilaterale Filterung berücksichtigt sowohl räumliche Nähe als auch Intensitätsähnlichkeit, glättet Rauschen in gleichmäßigen Bereichen während scharfe Kanten und Details an Grenzen erhalten bleiben.",
          nl: "Bilaterale filtering houdt rekening met zowel ruimtelijke nabijheid als intensiteitsgelijkheid, vlakt ruis af in uniforme gebieden terwijl scherpe randen en details bij grenzen behouden blijven."
        }
      },
      {
        question: {
          en: "What does the Hough Transform detect in images?",
          es: "¿Qué detecta la transformada de Hough en imágenes?",
          de: "Was erkennt die Hough-Transformation in Bildern?",
          nl: "Wat detecteert de Hough-transformatie in afbeeldingen?"
        },
        options: [
          { en: "Geometric shapes like lines, circles, and ellipses", es: "Formas geométricas como líneas, círculos y elipses", de: "Geometrische Formen wie Linien, Kreise und Ellipsen", nl: "Geometrische vormen zoals lijnen, cirkels en ellipsen" },
          { en: "Color gradients only", es: "Solo gradientes de color", de: "Nur Farbverläufe", nl: "Alleen kleurverlopen" },
          { en: "Image file formats", es: "Formatos de archivo de imagen", de: "Bilddateiformate", nl: "Beeldbestandsformaten" },
          { en: "Noise patterns", es: "Patrones de ruido", de: "Rauschmuster", nl: "Ruispatronen" }
        ],
        correct: 0,
        explanation: {
          en: "The Hough Transform converts edge points into parameter space to robustly detect geometric shapes even when partially obscured or noisy.",
          es: "La transformada de Hough convierte puntos de borde en espacio de parámetros para detectar robustamente formas geométricas incluso cuando están parcialmente oscurecidas o ruidosas.",
          de: "Die Hough-Transformation wandelt Kantenpunkte in Parameterraum um um geometrische Formen robust zu erkennen selbst wenn teilweise verdeckt oder verrauscht.",
          nl: "De Hough-transformatie converteert randpunten naar parameterruimte om geometrische vormen robuust te detecteren zelfs wanneer gedeeltelijk verduisterd of ruizig."
        }
      },
      {
        question: {
          en: "What is adaptive thresholding compared to global thresholding?",
          es: "¿Qué es la umbralización adaptativa comparada con la umbralización global?",
          de: "Was ist adaptive Schwellenwertverfahren im Vergleich zu globalem Schwellenwertverfahren?",
          nl: "Wat is adaptieve drempelbewerking vergeleken met globale drempelbewerking?"
        },
        options: [
          { en: "Uses different threshold values for different image regions", es: "Usa diferentes valores de umbral para diferentes regiones de imagen", de: "Verwendet verschiedene Schwellenwerte für verschiedene Bildbereiche", nl: "Gebruikt verschillende drempelwaarden voor verschillende beeldregio's" },
          { en: "Always uses a threshold of 128", es: "Siempre usa un umbral de 128", de: "Verwendet immer einen Schwellenwert von 128", nl: "Gebruikt altijd een drempel van 128" },
          { en: "Only works on color images", es: "Solo funciona en imágenes a color", de: "Funktioniert nur bei Farbbildern", nl: "Werkt alleen op kleurafbeeldingen" },
          { en: "Removes all black pixels", es: "Remueve todos los píxeles negros", de: "Entfernt alle schwarzen Pixel", nl: "Verwijdert alle zwarte pixels" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive thresholding calculates local thresholds for different image regions, handling varying illumination better than a single global threshold value.",
          es: "La umbralización adaptativa calcula umbrales locales para diferentes regiones de imagen, manejando iluminación variable mejor que un solo valor de umbral global.",
          de: "Adaptive Schwellenwertverfahren berechnet lokale Schwellenwerte für verschiedene Bildbereiche, behandelt wechselnde Beleuchtung besser als ein einzelner globaler Schwellenwert.",
          nl: "Adaptieve drempelbewerking berekent lokale drempels voor verschillende beeldregio's, behandelt variërende belichting beter dan een enkele globale drempelwaarde."
        }
      },
      {
        question: {
          en: "What is template matching used for?",
          es: "¿Para qué se usa la coincidencia de plantillas?",
          de: "Wofür wird Template-Matching verwendet?",
          nl: "Waarvoor wordt template-matching gebruikt?"
        },
        options: [
          { en: "Finding instances of a small reference image within a larger image", es: "Encontrar instancias de una imagen de referencia pequeña dentro de una imagen más grande", de: "Instanzen eines kleinen Referenzbildes in einem größeren Bild finden", nl: "Instanties van een kleine referentieafbeelding vinden binnen een grotere afbeelding" },
          { en: "Creating image templates for websites", es: "Crear plantillas de imagen para sitios web", de: "Bildvorlagen für Websites erstellen", nl: "Beeldsjablonen maken voor websites" },
          { en: "Matching file formats", es: "Coincidir formatos de archivo", de: "Dateiformate abgleichen", nl: "Bestandsformaten matchen" },
          { en: "Organizing image folders", es: "Organizar carpetas de imágenes", de: "Bildordner organisieren", nl: "Afbeeldingsmappen organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Template matching slides a template image across the target image computing similarity at each position to locate matching patterns or objects.",
          es: "La coincidencia de plantillas desliza una imagen de plantilla a través de la imagen objetivo calculando similitud en cada posición para localizar patrones u objetos coincidentes.",
          de: "Template-Matching schiebt ein Template-Bild über das Zielbild und berechnet Ähnlichkeit an jeder Position um übereinstimmende Muster oder Objekte zu lokalisieren.",
          nl: "Template-matching schuift een sjabloonafbeelding over de doelafbeelding en berekent gelijkheid op elke positie om overeenkomende patronen of objecten te lokaliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of image pyramid representations?",
          es: "¿Cuál es el propósito de las representaciones de pirámide de imagen?",
          de: "Was ist der Zweck von Bildpyramiden-Darstellungen?",
          nl: "Wat is het doel van beeldpiramide-representaties?"
        },
        options: [
          { en: "Representing images at multiple scales for multi-resolution processing", es: "Representar imágenes en múltiples escalas para procesamiento multi-resolución", de: "Bilder in mehreren Maßstäben für Multi-Auflösungsverarbeitung darstellen", nl: "Afbeeldingen op meerdere schalen representeren voor multi-resolutie verwerking" },
          { en: "Creating 3D pyramid-shaped visualizations", es: "Crear visualizaciones en forma de pirámide 3D", de: "3D-pyramidenförmige Visualisierungen erstellen", nl: "3D-piramideachtige visualisaties maken" },
          { en: "Stacking images vertically", es: "Apilar imágenes verticalmente", de: "Bilder vertikal stapeln", nl: "Afbeeldingen verticaal stapelen" },
          { en: "Compressing images to save space", es: "Comprimir imágenes para ahorrar espacio", de: "Bilder komprimieren um Platz zu sparen", nl: "Afbeeldingen comprimeren om ruimte te besparen" }
        ],
        correct: 0,
        explanation: {
          en: "Image pyramids create multiple downsampled versions of an image, enabling efficient processing at different scales for tasks like object detection and feature matching.",
          es: "Las pirámides de imagen crean múltiples versiones submuestreadas de una imagen, habilitando procesamiento eficiente en diferentes escalas para tareas como detección de objetos y coincidencia de características.",
          de: "Bildpyramiden erstellen mehrere heruntergesamplete Versionen eines Bildes, ermöglichen effiziente Verarbeitung in verschiedenen Maßstäben für Aufgaben wie Objekterkennung und Feature-Matching.",
          nl: "Beeldpiramides creëren meerdere downsampled versies van een afbeelding, maken efficiënte verwerking op verschillende schalen mogelijk voor taken zoals objectdetectie en feature-matching."
        }
      },
      {
        question: {
          en: "What does anisotropic diffusion filtering accomplish?",
          es: "¿Qué logra el filtrado de difusión anisotrópica?",
          de: "Was erreicht anisotrope Diffusionsfilterung?",
          nl: "Wat bereikt anisotrope diffusiefiltering?"
        },
        options: [
          { en: "Smooths images while preserving and enhancing edges", es: "Suaviza imágenes mientras preserva y mejora bordes", de: "Glättet Bilder während Kanten erhalten und verbessert werden", nl: "Vlakt afbeeldingen af terwijl randen behouden en verbeterd worden" },
          { en: "Spreads colors uniformly across the image", es: "Distribuye colores uniformemente a través de la imagen", de: "Verteilt Farben gleichmäßig über das Bild", nl: "Verspreidt kleuren uniform over de afbeelding" },
          { en: "Rotates images in random directions", es: "Rota imágenes en direcciones aleatorias", de: "Dreht Bilder in zufällige Richtungen", nl: "Roteert afbeeldingen in willekeurige richtingen" },
          { en: "Converts images to vector graphics", es: "Convierte imágenes a gráficos vectoriales", de: "Konvertiert Bilder zu Vektorgrafiken", nl: "Converteert afbeeldingen naar vectorafbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Anisotropic diffusion uses edge-stopping functions to reduce smoothing near edges while aggressively smoothing within uniform regions, preserving important boundaries.",
          es: "La difusión anisotrópica usa funciones de detención de bordes para reducir suavizado cerca de bordes mientras suaviza agresivamente dentro de regiones uniformes, preservando límites importantes.",
          de: "Anisotrope Diffusion nutzt kantenstoppende Funktionen um Glättung in der Nähe von Kanten zu reduzieren während innerhalb gleichmäßiger Regionen aggressiv geglättet wird, erhält wichtige Grenzen.",
          nl: "Anisotrope diffusie gebruikt randstoppende functies om afvlakking nabij randen te verminderen terwijl agressief wordt afgevlakt binnen uniforme gebieden, behoudt belangrijke grenzen."
        }
      },
      {
        question: {
          en: "What is the purpose of the Harris corner detector?",
          es: "¿Cuál es el propósito del detector de esquinas Harris?",
          de: "Was ist der Zweck des Harris-Eckendetektors?",
          nl: "Wat is het doel van de Harris-hoekdetector?"
        },
        options: [
          { en: "Identifying points where image intensity changes significantly in multiple directions", es: "Identificar puntos donde intensidad de imagen cambia significativamente en múltiples direcciones", de: "Punkte identifizieren wo Bildintensität sich signifikant in mehreren Richtungen ändert", nl: "Punten identificeren waar beeldintensiteit significant verandert in meerdere richtingen" },
          { en: "Finding rectangular corners in images", es: "Encontrar esquinas rectangulares en imágenes", de: "Rechteckige Ecken in Bildern finden", nl: "Rechthoekige hoeken in afbeeldingen vinden" },
          { en: "Detecting the four corners of the image", es: "Detectar las cuatro esquinas de la imagen", de: "Die vier Ecken des Bildes erkennen", nl: "De vier hoeken van de afbeelding detecteren" },
          { en: "Measuring corner angles in degrees", es: "Medir ángulos de esquinas en grados", de: "Eckenwinkel in Grad messen", nl: "Hoekhoeken meten in graden" }
        ],
        correct: 0,
        explanation: {
          en: "The Harris corner detector finds interest points where gradients change in multiple directions, identifying distinctive features useful for tracking, matching, and recognition.",
          es: "El detector de esquinas Harris encuentra puntos de interés donde gradientes cambian en múltiples direcciones, identificando características distintivas útiles para rastreo, coincidencia y reconocimiento.",
          de: "Der Harris-Eckendetektor findet Interessenpunkte wo Gradienten sich in mehreren Richtungen ändern, identifiziert charakteristische Merkmale nützlich für Tracking, Matching und Erkennung.",
          nl: "De Harris-hoekdetector vindt interessepunten waar gradiënten in meerdere richtingen veranderen, identificeert onderscheidende kenmerken nuttig voor tracking, matching en herkenning."
        }
      },
      {
        question: {
          en: "What is watershed segmentation based on?",
          es: "¿En qué se basa la segmentación watershed?",
          de: "Worauf basiert Watershed-Segmentierung?",
          nl: "Waarop is watershed-segmentatie gebaseerd?"
        },
        options: [
          { en: "Treating the image as a topographic surface and flooding from markers", es: "Tratar la imagen como superficie topográfica e inundar desde marcadores", de: "Das Bild als topografische Oberfläche behandeln und von Markern aus fluten", nl: "De afbeelding behandelen als topografisch oppervlak en overstromen vanaf markers" },
          { en: "Detecting water in images", es: "Detectar agua en imágenes", de: "Wasser in Bildern erkennen", nl: "Water detecteren in afbeeldingen" },
          { en: "Removing watermarks from images", es: "Remover marcas de agua de imágenes", de: "Wasserzeichen aus Bildern entfernen", nl: "Watermerken uit afbeeldingen verwijderen" },
          { en: "Measuring watershed boundaries", es: "Medir límites de cuencas hidrográficas", de: "Wassereinzugsgebietsgrenzen messen", nl: "Waterscheidingsgrenzen meten" }
        ],
        correct: 0,
        explanation: {
          en: "Watershed segmentation interprets grayscale intensity as elevation, flooding from seed points to partition the image into regions separated by watershed lines.",
          es: "La segmentación watershed interpreta intensidad en escala de grises como elevación, inundando desde puntos semilla para particionar la imagen en regiones separadas por líneas de cuenca.",
          de: "Watershed-Segmentierung interpretiert Graustufenintensität als Höhe, flutet von Samen-Punkten um das Bild in Regionen zu partitionieren getrennt durch Watershed-Linien.",
          nl: "Watershed-segmentatie interpreteert grijstintenintensiteit als hoogte, overstroomt vanaf zaadpunten om de afbeelding te verdelen in gebieden gescheiden door watershed-lijnen."
        }
      },
      {
        question: {
          en: "What is the difference between padding types in image convolution?",
          es: "¿Cuál es la diferencia entre tipos de relleno en convolución de imagen?",
          de: "Was ist der Unterschied zwischen Padding-Typen in Bildkonvolution?",
          nl: "Wat is het verschil tussen padding-types in beeldconvolutie?"
        },
        options: [
          { en: "They determine how borders are handled: zero padding, replicate, reflect, or wrap", es: "Determinan cómo se manejan bordes: relleno cero, replicar, reflejar o envolver", de: "Sie bestimmen wie Ränder behandelt werden: Null-Padding, Replizieren, Reflektieren oder Umschließen", nl: "Ze bepalen hoe randen worden behandeld: nul-padding, repliceren, reflecteren of omwikkelen" },
          { en: "Padding only affects image file size", es: "El relleno solo afecta tamaño de archivo de imagen", de: "Padding beeinflusst nur die Bilddateigröße", nl: "Padding beïnvloedt alleen bestandsgrootte van afbeelding" },
          { en: "All padding types produce identical results", es: "Todos los tipos de relleno producen resultados idénticos", de: "Alle Padding-Typen erzeugen identische Ergebnisse", nl: "Alle padding-types produceren identieke resultaten" },
          { en: "Padding is only used for color images", es: "El relleno solo se usa para imágenes a color", de: "Padding wird nur für Farbbilder verwendet", nl: "Padding wordt alleen gebruikt voor kleurafbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Padding strategies handle boundary pixels differently: zero padding adds zeros, replication extends edge values, reflection mirrors pixels, and wrap uses opposite-side values.",
          es: "Las estrategias de relleno manejan píxeles de borde de manera diferente: relleno cero añade ceros, replicación extiende valores de borde, reflexión refleja píxeles y wrap usa valores del lado opuesto.",
          de: "Padding-Strategien behandeln Randpixel unterschiedlich: Null-Padding fügt Nullen hinzu, Replikation erweitert Randwerte, Reflexion spiegelt Pixel und Wrap verwendet Werte der gegenüberliegenden Seite.",
          nl: "Padding-strategieën behandelen randpixels verschillend: nul-padding voegt nullen toe, replicatie breidt randwaarden uit, reflectie spiegelt pixels en wrap gebruikt tegenoverliggende zijdewaarden."
        }
      },
      {
        question: {
          en: "What is image registration?",
          es: "¿Qué es el registro de imagen?",
          de: "Was ist Bildregistrierung?",
          nl: "Wat is beeldregistratie?"
        },
        options: [
          { en: "Aligning multiple images of the same scene into a common coordinate system", es: "Alinear múltiples imágenes de la misma escena en un sistema de coordenadas común", de: "Mehrere Bilder derselben Szene in ein gemeinsames Koordinatensystem ausrichten", nl: "Meerdere afbeeldingen van dezelfde scène uitlijnen in een gemeenschappelijk coördinatensysteem" },
          { en: "Saving images to a database", es: "Guardar imágenes en una base de datos", de: "Bilder in einer Datenbank speichern", nl: "Afbeeldingen opslaan in een database" },
          { en: "Registering copyright for images", es: "Registrar derechos de autor para imágenes", de: "Urheberrecht für Bilder registrieren", nl: "Auteursrecht registreren voor afbeeldingen" },
          { en: "Creating a registry of image files", es: "Crear un registro de archivos de imagen", de: "Ein Register von Bilddateien erstellen", nl: "Een register van beeldbestanden maken" }
        ],
        correct: 0,
        explanation: {
          en: "Image registration geometrically transforms images to align corresponding features, enabling comparison, fusion, and analysis of images taken from different viewpoints or times.",
          es: "El registro de imagen transforma geométricamente imágenes para alinear características correspondientes, habilitando comparación, fusión y análisis de imágenes tomadas desde diferentes puntos de vista o tiempos.",
          de: "Bildregistrierung transformiert Bilder geometrisch um entsprechende Merkmale auszurichten, ermöglicht Vergleich, Fusion und Analyse von Bildern die aus verschiedenen Blickwinkeln oder Zeiten aufgenommen wurden.",
          nl: "Beeldregistratie transformeert afbeeldingen geometrisch om overeenkomstige kenmerken uit te lijnen, maakt vergelijking, fusie en analyse mogelijk van afbeeldingen genomen vanuit verschillende gezichtspunten of tijden."
        }
      },
      {
        question: {
          en: "What is SIFT (Scale-Invariant Feature Transform) designed for?",
          es: "¿Para qué está diseñado SIFT (Transformada de Características Invariante a Escala)?",
          de: "Wofür ist SIFT (Scale-Invariant Feature Transform) konzipiert?",
          nl: "Waarvoor is SIFT (Scale-Invariant Feature Transform) ontworpen?"
        },
        options: [
          { en: "Detecting and describing local features that are invariant to scale and rotation", es: "Detectar y describir características locales que son invariantes a escala y rotación", de: "Lokale Merkmale erkennen und beschreiben die invariant gegenüber Skalierung und Rotation sind", nl: "Lokale kenmerken detecteren en beschrijven die invariant zijn voor schaal en rotatie" },
          { en: "Sifting through image files to find duplicates", es: "Cribar archivos de imagen para encontrar duplicados", de: "Bilddateien durchsieben um Duplikate zu finden", nl: "Beeldbestanden zeven om duplicaten te vinden" },
          { en: "Shifting images to different positions", es: "Desplazar imágenes a diferentes posiciones", de: "Bilder zu verschiedenen Positionen verschieben", nl: "Afbeeldingen verplaatsen naar verschillende posities" },
          { en: "Filtering out small features from images", es: "Filtrar características pequeñas de imágenes", de: "Kleine Merkmale aus Bildern filtern", nl: "Kleine kenmerken uit afbeeldingen filteren" }
        ],
        correct: 0,
        explanation: {
          en: "SIFT extracts distinctive keypoints and computes descriptors that remain consistent across different scales, rotations, and lighting conditions for robust feature matching.",
          es: "SIFT extrae puntos clave distintivos y calcula descriptores que permanecen consistentes a través de diferentes escalas, rotaciones y condiciones de iluminación para coincidencia robusta de características.",
          de: "SIFT extrahiert charakteristische Schlüsselpunkte und berechnet Deskriptoren die konsistent über verschiedene Skalierungen, Rotationen und Lichtverhältnisse bleiben für robustes Feature-Matching.",
          nl: "SIFT extraheert onderscheidende sleutelpunten en berekent descriptoren die consistent blijven over verschillende schalen, rotaties en lichtomstandigheden voor robuuste feature-matching."
        }
      },
      {
        question: {
          en: "What is optical flow estimation used for?",
          es: "¿Para qué se usa la estimación de flujo óptico?",
          de: "Wofür wird optische Flussschätzung verwendet?",
          nl: "Waarvoor wordt optische flow-schatting gebruikt?"
        },
        options: [
          { en: "Tracking pixel movement between consecutive video frames", es: "Rastrear movimiento de píxeles entre fotogramas de video consecutivos", de: "Pixelbewegung zwischen aufeinanderfolgenden Videoframes verfolgen", nl: "Pixelbeweging volgen tussen opeenvolgende videoframes" },
          { en: "Measuring light intensity in optical fibers", es: "Medir intensidad de luz en fibras ópticas", de: "Lichtintensität in Glasfasern messen", nl: "Lichtintensiteit meten in optische vezels" },
          { en: "Optimizing image flow through networks", es: "Optimizar flujo de imagen a través de redes", de: "Bildfluss durch Netzwerke optimieren", nl: "Beeldstroom optimaliseren door netwerken" },
          { en: "Detecting optical illusions in images", es: "Detectar ilusiones ópticas en imágenes", de: "Optische Täuschungen in Bildern erkennen", nl: "Optische illusies detecteren in afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Optical flow computes apparent motion vectors of pixels between frames, enabling motion analysis, object tracking, and video stabilization applications.",
          es: "El flujo óptico calcula vectores de movimiento aparente de píxeles entre fotogramas, habilitando análisis de movimiento, rastreo de objetos y aplicaciones de estabilización de video.",
          de: "Optischer Fluss berechnet scheinbare Bewegungsvektoren von Pixeln zwischen Frames, ermöglicht Bewegungsanalyse, Objektverfolgung und Videostabilisierungsanwendungen.",
          nl: "Optische flow berekent schijnbare bewegingsvectoren van pixels tussen frames, maakt bewegingsanalyse, objecttracking en videostabilisatie-applicaties mogelijk."
        }
      },
      {
        question: {
          en: "What is color space conversion used for in computer vision?",
          es: "¿Para qué se usa la conversión de espacio de color en visión por computadora?",
          de: "Wofür wird Farbraumkonvertierung in Computer Vision verwendet?",
          nl: "Waarvoor wordt kleurruimteconversie gebruikt in computer vision?"
        },
        options: [
          { en: "Transforming images between color representations like RGB, HSV, or LAB", es: "Transformar imágenes entre representaciones de color como RGB, HSV o LAB", de: "Bilder zwischen Farbdarstellungen wie RGB, HSV oder LAB transformieren", nl: "Afbeeldingen transformeren tussen kleurrepresentaties zoals RGB, HSV of LAB" },
          { en: "Increasing the amount of storage space for colors", es: "Aumentar cantidad de espacio de almacenamiento para colores", de: "Menge an Speicherplatz für Farben erhöhen", nl: "Hoeveelheid opslagruimte voor kleuren verhogen" },
          { en: "Converting all images to black and white", es: "Convertir todas las imágenes a blanco y negro", de: "Alle Bilder zu Schwarz-Weiß konvertieren", nl: "Alle afbeeldingen converteren naar zwart-wit" },
          { en: "Changing the physical color of displayed images", es: "Cambiar el color físico de imágenes mostradas", de: "Physische Farbe angezeigter Bilder ändern", nl: "Fysieke kleur van weergegeven afbeeldingen veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Different color spaces separate color information differently - HSV separates hue from intensity, LAB mimics human perception, enabling better segmentation and analysis for specific tasks.",
          es: "Diferentes espacios de color separan información de color de manera diferente - HSV separa matiz de intensidad, LAB imita percepción humana, habilitando mejor segmentación y análisis para tareas específicas.",
          de: "Verschiedene Farbräume trennen Farbinformationen unterschiedlich - HSV trennt Farbton von Intensität, LAB imitiert menschliche Wahrnehmung, ermöglicht bessere Segmentierung und Analyse für spezifische Aufgaben.",
          nl: "Verschillende kleurruimtes scheiden kleurinformatie verschillend - HSV scheidt tint van intensiteit, LAB bootst menselijke waarneming na, maakt betere segmentatie en analyse mogelijk voor specifieke taken."
        }
      },
      {
        question: {
          en: "What is perspective transformation in image processing?",
          es: "¿Qué es la transformación de perspectiva en procesamiento de imágenes?",
          de: "Was ist Perspektivtransformation in der Bildverarbeitung?",
          nl: "Wat is perspectieftransformatie in beeldverwerking?"
        },
        options: [
          { en: "Warping images to correct or simulate perspective distortions", es: "Deformar imágenes para corregir o simular distorsiones de perspectiva", de: "Bilder verzerren um Perspektivverzerrungen zu korrigieren oder zu simulieren", nl: "Afbeeldingen vervormen om perspectiefvervormingen te corrigeren of simuleren" },
          { en: "Changing the perspective or opinion about images", es: "Cambiar la perspectiva u opinión sobre imágenes", de: "Perspektive oder Meinung über Bilder ändern", nl: "Perspectief of mening over afbeeldingen veranderen" },
          { en: "Creating 3D images from 2D images", es: "Crear imágenes 3D desde imágenes 2D", de: "3D-Bilder aus 2D-Bildern erstellen", nl: "3D-afbeeldingen maken van 2D-afbeeldingen" },
          { en: "Measuring distances in perspective drawings", es: "Medir distancias en dibujos en perspectiva", de: "Entfernungen in Perspektivzeichnungen messen", nl: "Afstanden meten in perspectieftekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Perspective transformation applies projective geometry to map quadrilaterals, correcting viewpoint distortions like tilted documents or simulating different camera angles.",
          es: "La transformación de perspectiva aplica geometría proyectiva para mapear cuadriláteros, corrigiendo distorsiones de punto de vista como documentos inclinados o simulando diferentes ángulos de cámara.",
          de: "Perspektivtransformation wendet projektive Geometrie an um Vierecke abzubilden, korrigiert Blickwinkelverzerrungen wie gekippte Dokumente oder simuliert verschiedene Kamerawinkel.",
          nl: "Perspectieftransformatie past projectieve meetkunde toe om vierhoeken af te beelden, corrigeert gezichtspuntvervormingen zoals gekantelde documenten of simuleert verschillende camerahoeken."
        }
      },
      {
        question: {
          en: "What is blob detection in computer vision?",
          es: "¿Qué es la detección de blobs en visión por computadora?",
          de: "Was ist Blob-Erkennung in Computer Vision?",
          nl: "Wat is blob-detectie in computer vision?"
        },
        options: [
          { en: "Identifying regions that differ in properties like brightness or color from surroundings", es: "Identificar regiones que difieren en propiedades como brillo o color de alrededores", de: "Regionen identifizieren die sich in Eigenschaften wie Helligkeit oder Farbe von Umgebung unterscheiden", nl: "Gebieden identificeren die verschillen in eigenschappen zoals helderheid of kleur van omgeving" },
          { en: "Detecting liquid drops in images", es: "Detectar gotas líquidas en imágenes", de: "Flüssigkeitstropfen in Bildern erkennen", nl: "Vloeistofdruppels detecteren in afbeeldingen" },
          { en: "Finding corrupted image data", es: "Encontrar datos de imagen corruptos", de: "Beschädigte Bilddaten finden", nl: "Beschadigde beeldgegevens vinden" },
          { en: "Measuring blob sizes in biology", es: "Medir tamaños de blobs en biología", de: "Blob-Größen in Biologie messen", nl: "Blob-groottes meten in biologie" }
        ],
        correct: 0,
        explanation: {
          en: "Blob detection finds connected regions (blobs) with consistent properties distinct from background, useful for detecting objects, cells, or features of interest.",
          es: "La detección de blobs encuentra regiones conectadas (blobs) con propiedades consistentes distintas del fondo, útil para detectar objetos, células o características de interés.",
          de: "Blob-Erkennung findet verbundene Regionen (Blobs) mit konsistenten Eigenschaften die sich vom Hintergrund unterscheiden, nützlich zum Erkennen von Objekten, Zellen oder interessanten Merkmalen.",
          nl: "Blob-detectie vindt verbonden gebieden (blobs) met consistente eigenschappen die verschillen van achtergrond, nuttig voor detecteren van objecten, cellen of kenmerken van interesse."
        }
      },
      {
        question: {
          en: "What is the purpose of non-maximum suppression?",
          es: "¿Cuál es el propósito de la supresión de no-máximos?",
          de: "Was ist der Zweck der Nicht-Maximum-Unterdrückung?",
          nl: "Wat is het doel van niet-maximum onderdrukking?"
        },
        options: [
          { en: "Thinning detected edges to single-pixel width by removing non-peak responses", es: "Adelgazar bordes detectados a ancho de un solo píxel removiendo respuestas no pico", de: "Erkannte Kanten auf Ein-Pixel-Breite verdünnen durch Entfernung von Nicht-Spitzen-Antworten", nl: "Gedetecteerde randen verdunnen tot enkele-pixel breedte door niet-piek reacties te verwijderen" },
          { en: "Maximizing the brightness of all pixels", es: "Maximizar el brillo de todos los píxeles", de: "Helligkeit aller Pixel maximieren", nl: "Helderheid van alle pixels maximaliseren" },
          { en: "Removing maximum values from images", es: "Remover valores máximos de imágenes", de: "Maximalwerte aus Bildern entfernen", nl: "Maximum waarden uit afbeeldingen verwijderen" },
          { en: "Suppressing noise in images", es: "Suprimir ruido en imágenes", de: "Rauschen in Bildern unterdrücken", nl: "Ruis in afbeeldingen onderdrukken" }
        ],
        correct: 0,
        explanation: {
          en: "Non-maximum suppression keeps only local maxima along the gradient direction, producing thin edges by suppressing redundant edge pixels that aren't the strongest in their neighborhood.",
          es: "La supresión de no-máximos mantiene solo máximos locales a lo largo de la dirección de gradiente, produciendo bordes delgados suprimiendo píxeles de borde redundantes que no son los más fuertes en su vecindario.",
          de: "Nicht-Maximum-Unterdrückung behält nur lokale Maxima entlang der Gradientenrichtung, produziert dünne Kanten durch Unterdrückung redundanter Kantenpixel die nicht die stärksten in ihrer Nachbarschaft sind.",
          nl: "Niet-maximum onderdrukking behoudt alleen lokale maxima langs de gradiëntrichting, produceert dunne randen door redundante randpixels te onderdrukken die niet de sterkste zijn in hun buurt."
        }
      },
      {
        question: {
          en: "What is image stitching (panorama creation) based on?",
          es: "¿En qué se basa la unión de imágenes (creación de panoramas)?",
          de: "Worauf basiert Bild-Stitching (Panorama-Erstellung)?",
          nl: "Waarop is beeldstitching (panorama-creatie) gebaseerd?"
        },
        options: [
          { en: "Finding and matching overlapping features between images, then warping and blending", es: "Encontrar y coincidir características superpuestas entre imágenes, luego deformar y mezclar", de: "Überlappende Merkmale zwischen Bildern finden und abgleichen, dann verzerren und verschmelzen", nl: "Overlappende kenmerken tussen afbeeldingen vinden en matchen, dan vervormen en mengen" },
          { en: "Sewing images together side-by-side", es: "Coser imágenes juntas lado a lado", de: "Bilder nebeneinander nähen", nl: "Afbeeldingen zij aan zij aan elkaar naaien" },
          { en: "Compressing multiple images into one file", es: "Comprimir múltiples imágenes en un archivo", de: "Mehrere Bilder in eine Datei komprimieren", nl: "Meerdere afbeeldingen comprimeren in één bestand" },
          { en: "Creating embroidered patterns from images", es: "Crear patrones bordados desde imágenes", de: "Gestickte Muster aus Bildern erstellen", nl: "Geborduurde patronen maken van afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Image stitching detects corresponding features across overlapping images, estimates geometric transformations, warps images to align, and blends seamlessly to create panoramas.",
          es: "La unión de imágenes detecta características correspondientes a través de imágenes superpuestas, estima transformaciones geométricas, deforma imágenes para alinear y mezcla sin problemas para crear panoramas.",
          de: "Bild-Stitching erkennt entsprechende Merkmale über überlappende Bilder, schätzt geometrische Transformationen, verzerrt Bilder zum Ausrichten und verschmilzt nahtlos um Panoramen zu erstellen.",
          nl: "Beeldstitching detecteert overeenkomstige kenmerken over overlappende afbeeldingen, schat geometrische transformaties, vervormt afbeeldingen om uit te lijnen en mengt naadloos om panorama's te maken."
        }
      },
      {
        question: {
          en: "What is connected component analysis used for?",
          es: "¿Para qué se usa el análisis de componentes conectados?",
          de: "Wofür wird Analyse verbundener Komponenten verwendet?",
          nl: "Waarvoor wordt analyse van verbonden componenten gebruikt?"
        },
        options: [
          { en: "Labeling and analyzing distinct objects in binary images", es: "Etiquetar y analizar objetos distintos en imágenes binarias", de: "Unterschiedliche Objekte in Binärbildern beschriften und analysieren", nl: "Verschillende objecten in binaire afbeeldingen labelen en analyseren" },
          { en: "Connecting electronic components in circuits", es: "Conectar componentes electrónicos en circuitos", de: "Elektronische Komponenten in Schaltungen verbinden", nl: "Elektronische componenten in circuits verbinden" },
          { en: "Analyzing network connectivity", es: "Analizar conectividad de red", de: "Netzwerkkonnektivität analysieren", nl: "Netwerkconnectiviteit analyseren" },
          { en: "Finding related image files", es: "Encontrar archivos de imagen relacionados", de: "Verwandte Bilddateien finden", nl: "Gerelateerde beeldbestanden vinden" }
        ],
        correct: 0,
        explanation: {
          en: "Connected component analysis identifies groups of adjacent pixels with the same value, assigning unique labels to separate objects for counting, measurement, and individual analysis.",
          es: "El análisis de componentes conectados identifica grupos de píxeles adyacentes con el mismo valor, asignando etiquetas únicas para separar objetos para contar, medir y análisis individual.",
          de: "Analyse verbundener Komponenten identifiziert Gruppen benachbarter Pixel mit demselben Wert, weist eindeutige Labels zu um Objekte zu trennen für Zählung, Messung und individuelle Analyse.",
          nl: "Analyse van verbonden componenten identificeert groepen aangrenzende pixels met dezelfde waarde, wijst unieke labels toe om objecten te scheiden voor telling, meting en individuele analyse."
        }
      },
      {
        question: {
          en: "What is the purpose of the Fourier Transform in image processing?",
          es: "¿Cuál es el propósito de la transformada de Fourier en procesamiento de imágenes?",
          de: "Was ist der Zweck der Fourier-Transformation in der Bildverarbeitung?",
          nl: "Wat is het doel van de Fourier-transformatie in beeldverwerking?"
        },
        options: [
          { en: "Converting images to frequency domain to analyze patterns and perform filtering", es: "Convertir imágenes a dominio de frecuencia para analizar patrones y realizar filtrado", de: "Bilder in Frequenzbereich konvertieren um Muster zu analysieren und Filterung durchzuführen", nl: "Afbeeldingen converteren naar frequentiedomein om patronen te analyseren en filtering uit te voeren" },
          { en: "Transforming images into different file formats", es: "Transformar imágenes en diferentes formatos de archivo", de: "Bilder in verschiedene Dateiformate transformieren", nl: "Afbeeldingen transformeren naar verschillende bestandsformaten" },
          { en: "Rotating images by specific angles", es: "Rotar imágenes por ángulos específicos", de: "Bilder um bestimmte Winkel drehen", nl: "Afbeeldingen draaien met specifieke hoeken" },
          { en: "Compressing image files", es: "Comprimir archivos de imagen", de: "Bilddateien komprimieren", nl: "Beeldbestanden comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Fourier Transform decomposes images into sinusoidal components, revealing frequency information useful for filtering, compression, and understanding periodic patterns or textures.",
          es: "La transformada de Fourier descompone imágenes en componentes sinusoidales, revelando información de frecuencia útil para filtrado, compresión y entendimiento de patrones periódicos o texturas.",
          de: "Die Fourier-Transformation zerlegt Bilder in sinusförmige Komponenten, enthüllt Frequenzinformationen nützlich für Filterung, Kompression und Verstehen periodischer Muster oder Texturen.",
          nl: "De Fourier-transformatie ontleedt afbeeldingen in sinusvormige componenten, onthult frequentie-informatie nuttig voor filtering, compressie en begrip van periodieke patronen of texturen."
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