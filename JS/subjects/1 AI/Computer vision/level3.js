// Computer Vision Quiz - Level 3: Feature Detection and Object Recognition
(function() {
  const level3 = {
    name: {
      en: "Computer Vision Level 3",
      es: "Visión por Computadora Nivel 3",
      de: "Computer Vision Stufe 3",
      nl: "Computer Vision Level 3"
    },
    questions: [
      {
        question: {
          en: "What are feature points in computer vision?",
          es: "¿Qué son los puntos de características en visión por computadora?",
          de: "Was sind Merkmalspunkte in Computer Vision?",
          nl: "Wat zijn kenmerken punten in computer vision?"
        },
        options: [
          { en: "Distinctive points in images that can be reliably detected and matched", es: "Puntos distintivos en imágenes que pueden ser detectados y emparejados de manera confiable", de: "Charakteristische Punkte in Bildern die zuverlässig erkannt und abgeglichen werden können", nl: "Onderscheidende punten in afbeeldingen die betrouwbaar gedetecteerd en gematcht kunnen worden" },
          { en: "Special image editing features", es: "Características especiales de edición de imagen", de: "Spezielle Bildbearbeitungsfeatures", nl: "Speciale beeldbewerkingsfuncties" },
          { en: "Points that show image quality", es: "Puntos que muestran calidad de imagen", de: "Punkte die Bildqualität zeigen", nl: "Punten die beeldkwaliteit tonen" },
          { en: "Random points in images", es: "Puntos aleatorios en imágenes", de: "Zufällige Punkte in Bildern", nl: "Willekeurige punten in afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature points are corners, edges, or unique patterns that remain recognizable even when the image is rotated, scaled, or viewed from different angles.",
          es: "Los puntos de características son esquinas, bordes o patrones únicos que permanecen reconocibles incluso cuando la imagen es rotada, escalada o vista desde diferentes ángulos.",
          de: "Merkmalspunkte sind Ecken, Kanten oder einzigartige Muster die erkennbar bleiben auch wenn das Bild gedreht, skaliert oder aus verschiedenen Winkeln betrachtet wird.",
          nl: "Kenmerken punten zijn hoeken, randen of unieke patronen die herkenbaar blijven zelfs wanneer het beeld geroteerd, geschaald of vanuit verschillende hoeken bekeken wordt."
        }
      },
      {
        question: {
          en: "What is object detection in computer vision?",
          es: "¿Qué es la detección de objetos en visión por computadora?",
          de: "Was ist Objekterkennung in Computer Vision?",
          nl: "Wat is objectdetectie in computer vision?"
        },
        options: [
          { en: "Identifying and locating specific objects within images", es: "Identificar y localizar objetos específicos dentro de imágenes", de: "Spezifische Objekte in Bildern identifizieren und lokalisieren", nl: "Specifieke objecten in afbeeldingen identificeren en lokaliseren" },
          { en: "Detecting image file corruption", es: "Detectar corrupción de archivos de imagen", de: "Bildateibeschädigung erkennen", nl: "Beeldbestandbeschadiging detecteren" },
          { en: "Finding missing objects in photos", es: "Encontrar objetos perdidos en fotos", de: "Fehlende Objekte in Fotos finden", nl: "Ontbrekende objecten in foto's vinden" },
          { en: "Measuring object weight from images", es: "Medir peso de objeto desde imágenes", de: "Objektgewicht aus Bildern messen", nl: "Objectgewicht meten uit afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Object detection algorithms analyze images to find, classify, and draw bounding boxes around objects like cars, people, animals, or other items of interest.",
          es: "Los algoritmos de detección de objetos analizan imágenes para encontrar, clasificar y dibujar cajas delimitadoras alrededor de objetos como autos, personas, animales u otros elementos de interés.",
          de: "Objekterkennungsalgorithmen analysieren Bilder um Objekte wie Autos, Menschen, Tiere oder andere interessante Gegenstände zu finden, zu klassifizieren und Begrenzungsrahmen zu zeichnen.",
          nl: "Objectdetectie-algoritmes analyseren afbeeldingen om objecten zoals auto's, mensen, dieren of andere interessante items te vinden, classificeren en begrenzingskaders te tekenen."
        }
      },
      {
        question: {
          en: "What does template matching help achieve in computer vision?",
          es: "¿Qué ayuda a lograr la coincidencia de plantillas en visión por computadora?",
          de: "Was hilft Template Matching in Computer Vision zu erreichen?",
          nl: "Wat helpt template matching bereiken in computer vision?"
        },
        options: [
          { en: "Finding specific patterns or objects by comparing with reference images", es: "Encontrar patrones u objetos específicos comparando con imágenes de referencia", de: "Spezifische Muster oder Objekte durch Vergleich mit Referenzbildern finden", nl: "Specifieke patronen of objecten vinden door vergelijking met referentieafbeeldingen" },
          { en: "Creating image templates for design", es: "Crear plantillas de imagen para diseño", de: "Bildvorlagen für Design erstellen", nl: "Beeldsjablonen maken voor ontwerp" },
          { en: "Matching image file formats", es: "Coincidir formatos de archivo de imagen", de: "Bilddateiformate abgleichen", nl: "Beeldbestandsformaten matchen" },
          { en: "Comparing image sizes", es: "Comparar tamaños de imagen", de: "Bildgrößen vergleichen", nl: "Beeldgroottes vergelijken" }
        ],
        correct: 0,
        explanation: {
          en: "Template matching slides a small reference image across a larger image to find locations where they match closely, useful for detecting logos, symbols, or repeated patterns.",
          es: "La coincidencia de plantillas desliza una imagen de referencia pequeña a través de una imagen más grande para encontrar ubicaciones donde coinciden estrechamente, útil para detectar logos, símbolos o patrones repetidos.",
          de: "Template Matching schiebt ein kleines Referenzbild über ein größeres Bild um Stellen zu finden wo sie eng übereinstimmen, nützlich für das Erkennen von Logos, Symbolen oder wiederholten Mustern.",
          nl: "Template matching schuift een kleine referentieafbeelding over een grotere afbeelding om locaties te vinden waar ze dicht overeenkomen, nuttig voor het detecteren van logo's, symbolen of herhaalde patronen."
        }
      },
      {
        question: {
          en: "What is the purpose of image segmentation?",
          es: "¿Cuál es el propósito de la segmentación de imagen?",
          de: "Was ist der Zweck der Bildsegmentierung?",
          nl: "Wat is het doel van beeldsegmentatie?"
        },
        options: [
          { en: "Dividing an image into meaningful regions or objects", es: "Dividir una imagen en regiones u objetos significativos", de: "Ein Bild in bedeutungsvolle Regionen oder Objekte aufteilen", nl: "Een afbeelding verdelen in betekenisvolle regio's of objecten" },
          { en: "Cutting images into equal parts", es: "Cortar imágenes en partes iguales", de: "Bilder in gleiche Teile schneiden", nl: "Afbeeldingen in gelijke delen snijden" },
          { en: "Organizing image files in folders", es: "Organizar archivos de imagen en carpetas", de: "Bilddateien in Ordnern organisieren", nl: "Beeldbestanden in mappen organiseren" },
          { en: "Reducing image file size", es: "Reducir tamaño de archivo de imagen", de: "Bilddateigröße reduzieren", nl: "Beeldbestandsgrootte verkleinen" }
        ],
        correct: 0,
        explanation: {
          en: "Image segmentation partitions images into distinct regions based on color, texture, or other properties, making it easier to analyze individual objects or areas separately.",
          es: "La segmentación de imagen divide imágenes en regiones distintas basadas en color, textura u otras propiedades, facilitando analizar objetos o áreas individuales por separado.",
          de: "Bildsegmentierung unterteilt Bilder in verschiedene Regionen basierend auf Farbe, Textur oder anderen Eigenschaften, was es einfacher macht einzelne Objekte oder Bereiche separat zu analysieren.",
          nl: "Beeldsegmentatie verdeelt afbeeldingen in verschillende regio's gebaseerd op kleur, textuur of andere eigenschappen, waardoor het gemakkelijker wordt om individuele objecten of gebieden afzonderlijk te analyseren."
        }
      },
      {
        question: {
          en: "Which technique would be most effective for detecting circles in an image?",
          es: "¿Qué técnica sería más efectiva para detectar círculos en una imagen?",
          de: "Welche Technik wäre am effektivsten um Kreise in einem Bild zu erkennen?",
          nl: "Welke techniek zou het meest effectief zijn voor het detecteren van cirkels in een afbeelding?"
        },
        options: [
          { en: "Hough Transform for circular shapes", es: "Transformada de Hough para formas circulares", de: "Hough-Transformation für kreisförmige Formen", nl: "Hough Transform voor cirkelvormige vormen" },
          { en: "Simple color filtering", es: "Filtrado de color simple", de: "Einfache Farbfilterung", nl: "Eenvoudige kleurfiltering" },
          { en: "Image rotation", es: "Rotación de imagen", de: "Bildrotation", nl: "Beeldrotatie" },
          { en: "Brightness adjustment only", es: "Solo ajuste de brillo", de: "Nur Helligkeitsanpassung", nl: "Alleen helderheidaanpassing" }
        ],
        correct: 0,
        explanation: {
          en: "The Hough Transform is specifically designed to detect geometric shapes like circles, lines, and ellipses by transforming edge points into parameter space.",
          es: "La Transformada de Hough está específicamente diseñada para detectar formas geométricas como círculos, líneas y elipses transformando puntos de borde en espacio de parámetros.",
          de: "Die Hough-Transformation ist speziell dafür entwickelt geometrische Formen wie Kreise, Linien und Ellipsen zu erkennen indem Kantenpunkte in Parameterraum transformiert werden.",
          nl: "De Hough Transform is specifiek ontworpen voor het detecteren van geometrische vormen zoals cirkels, lijnen en ellipsen door randpunten te transformeren naar parameterruimte."
        }
      },
      {
        question: {
          en: "What is blob detection used for in computer vision?",
          es: "¿Para qué se usa la detección de blobs en visión por computadora?",
          de: "Wofür wird Blob-Erkennung in Computer Vision verwendet?",
          nl: "Waarvoor wordt blob-detectie gebruikt in computer vision?"
        },
        options: [
          { en: "Finding regions that differ in brightness or color from surrounding areas", es: "Encontrar regiones que difieren en brillo o color de áreas circundantes", de: "Regionen finden die sich in Helligkeit oder Farbe von umgebenden Bereichen unterscheiden", nl: "Gebieden vinden die verschillen in helderheid of kleur van omringende gebieden" },
          { en: "Detecting image compression artifacts", es: "Detectar artefactos de compresión de imagen", de: "Bildkompressionsartefakte erkennen", nl: "Beeldcompressie-artefacten detecteren" },
          { en: "Finding deleted parts of images", es: "Encontrar partes eliminadas de imágenes", de: "Gelöschte Teile von Bildern finden", nl: "Verwijderde delen van afbeeldingen vinden" },
          { en: "Measuring blob fish in underwater photos", es: "Medir peces blob en fotos submarinas", de: "Blobfische in Unterwasserfotos messen", nl: "Blobvissen meten in onderwaterfoto's" }
        ],
        correct: 0,
        explanation: {
          en: "Blob detection identifies connected regions of pixels with similar properties, useful for finding objects, spots, or distinctive areas in images.",
          es: "La detección de blobs identifica regiones conectadas de píxeles con propiedades similares, útil para encontrar objetos, manchas o áreas distintivas en imágenes.",
          de: "Blob-Erkennung identifiziert verbundene Regionen von Pixeln mit ähnlichen Eigenschaften, nützlich zum Finden von Objekten, Flecken oder charakteristischen Bereichen in Bildern.",
          nl: "Blob-detectie identificeert verbonden gebieden van pixels met vergelijkbare eigenschappen, nuttig voor het vinden van objecten, vlekken of onderscheidende gebieden in afbeeldingen."
        }
      },
      {
        question: {
          en: "What is optical character recognition (OCR) best used for?",
          es: "¿Para qué se usa mejor el reconocimiento óptico de caracteres (OCR)?",
          de: "Wofür wird optische Zeichenerkennung (OCR) am besten verwendet?",
          nl: "Waarvoor wordt optische karakterherkenning (OCR) het beste gebruikt?"
        },
        options: [
          { en: "Converting text in images into editable digital text", es: "Convertir texto en imágenes en texto digital editable", de: "Text in Bildern in bearbeitbaren digitalen Text umwandeln", nl: "Tekst in afbeeldingen omzetten naar bewerkbare digitale tekst" },
          { en: "Recognizing faces in photos", es: "Reconocer caras en fotos", de: "Gesichter in Fotos erkennen", nl: "Gezichten herkennen in foto's" },
          { en: "Detecting objects in motion", es: "Detectar objetos en movimiento", de: "Objekte in Bewegung erkennen", nl: "Objecten in beweging detecteren" },
          { en: "Measuring optical lens quality", es: "Medir calidad de lentes ópticas", de: "Optische Linsenqualität messen", nl: "Optische lenskwaliteit meten" }
        ],
        correct: 0,
        explanation: {
          en: "OCR technology reads printed or handwritten text from images and converts it into machine-readable text, enabling document digitization and text extraction.",
          es: "La tecnología OCR lee texto impreso o manuscrito desde imágenes y lo convierte en texto legible por máquina, habilitando digitalización de documentos y extracción de texto.",
          de: "OCR-Technologie liest gedruckten oder handgeschriebenen Text aus Bildern und wandelt ihn in maschinenlesbaren Text um, ermöglicht Dokumentendigitalisierung und Textextraktion.",
          nl: "OCR-technologie leest gedrukte of handgeschreven tekst uit afbeeldingen en zet het om in machine-leesbare tekst, maakt documentdigitalisering en tekstextractie mogelijk."
        }
      },
      {
        question: {
          en: "What does corner detection help identify in images?",
          es: "¿Qué ayuda a identificar la detección de esquinas en imágenes?",
          de: "Was hilft Eckenerkennung in Bildern zu identifizieren?",
          nl: "Wat helpt hoekdetectie identificeren in afbeeldingen?"
        },
        options: [
          { en: "Points where edges meet at sharp angles, creating distinctive features", es: "Puntos donde los bordes se encuentran en ángulos agudos, creando características distintivas", de: "Punkte wo Kanten sich in scharfen Winkeln treffen und charakteristische Merkmale schaffen", nl: "Punten waar randen elkaar ontmoeten onder scherpe hoeken, wat onderscheidende kenmerken creëert" },
          { en: "The four corners of rectangular images", es: "Las cuatro esquinas de imágenes rectangulares", de: "Die vier Ecken rechteckiger Bilder", nl: "De vier hoeken van rechthoekige afbeeldingen" },
          { en: "Damaged corners of photo frames", es: "Esquinas dañadas de marcos de fotos", de: "Beschädigte Ecken von Bilderrahmen", nl: "Beschadigde hoeken van fotolijsten" },
          { en: "Where images should be cropped", es: "Donde las imágenes deberían ser recortadas", de: "Wo Bilder beschnitten werden sollten", nl: "Waar afbeeldingen bijgesneden moeten worden" }
        ],
        correct: 0,
        explanation: {
          en: "Corner detection algorithms find points where two or more edges intersect, which are stable features useful for image matching, tracking, and 3D reconstruction.",
          es: "Los algoritmos de detección de esquinas encuentran puntos donde dos o más bordes se intersectan, que son características estables útiles para emparejamiento de imágenes, seguimiento y reconstrucción 3D.",
          de: "Eckenerkennungsalgorithmen finden Punkte wo zwei oder mehr Kanten sich schneiden, das sind stabile Merkmale nützlich für Bildabgleich, Verfolgung und 3D-Rekonstruktion.",
          nl: "Hoekdetectie-algoritmes vinden punten waar twee of meer randen elkaar kruisen, dit zijn stabiele kenmerken nuttig voor beeldmatching, tracking en 3D-reconstructie."
        }
      },
      {
        question: {
          en: "What is image registration in computer vision?",
          es: "¿Qué es el registro de imagen en visión por computadora?",
          de: "Was ist Bildregistrierung in Computer Vision?",
          nl: "Wat is beeldregistratie in computer vision?"
        },
        options: [
          { en: "Aligning multiple images of the same scene taken from different viewpoints or times", es: "Alinear múltiples imágenes de la misma escena tomadas desde diferentes puntos de vista o tiempos", de: "Mehrere Bilder derselben Szene ausrichten die aus verschiedenen Blickwinkeln oder Zeiten aufgenommen wurden", nl: "Meerdere afbeeldingen van dezelfde scène uitlijnen die vanuit verschillende gezichtspunten of tijden zijn genomen" },
          { en: "Creating a database of all images", es: "Crear una base de datos de todas las imágenes", de: "Eine Datenbank aller Bilder erstellen", nl: "Een database van alle afbeeldingen maken" },
          { en: "Registering copyright for images", es: "Registrar derechos de autor para imágenes", de: "Urheberrechte für Bilder registrieren", nl: "Auteursrechten registreren voor afbeeldingen" },
          { en: "Recording image metadata", es: "Grabar metadatos de imagen", de: "Bildmetadaten aufzeichnen", nl: "Beeldmetadata opnemen" }
        ],
        correct: 0,
        explanation: {
          en: "Image registration finds spatial transformations to align images, essential for panorama stitching, medical imaging, remote sensing, and temporal analysis.",
          es: "El registro de imagen encuentra transformaciones espaciales para alinear imágenes, esencial para costura de panoramas, imágenes médicas, teledetección y análisis temporal.",
          de: "Bildregistrierung findet räumliche Transformationen um Bilder auszurichten, wesentlich für Panorama-Stitching, medizinische Bildgebung, Fernerkundung und Zeitanalyse.",
          nl: "Beeldregistratie vindt ruimtelijke transformaties om afbeeldingen uit te lijnen, essentieel voor panorama-stitching, medische beeldvorming, remote sensing en temporele analyse."
        }
      },
      {
        question: {
          en: "What is stereo vision used for?",
          es: "¿Para qué se usa la visión estéreo?",
          de: "Wofür wird Stereovision verwendet?",
          nl: "Waarvoor wordt stereovisie gebruikt?"
        },
        options: [
          { en: "Calculating depth and 3D structure from two or more camera viewpoints", es: "Calcular profundidad y estructura 3D desde dos o más puntos de vista de cámara", de: "Tiefe und 3D-Struktur aus zwei oder mehr Kamera-Blickwinkeln berechnen", nl: "Diepte en 3D-structuur berekenen vanuit twee of meer camera-gezichtspunten" },
          { en: "Playing music through image analysis", es: "Reproducir música a través de análisis de imagen", de: "Musik durch Bildanalyse abspielen", nl: "Muziek afspelen via beeldanalyse" },
          { en: "Making images look more artistic", es: "Hacer que las imágenes se vean más artísticas", de: "Bilder künstlerischer aussehen lassen", nl: "Afbeeldingen er artistieker uit laten zien" },
          { en: "Converting 2D images to old-style stereoscopes", es: "Convertir imágenes 2D a estereoscopios de estilo antiguo", de: "2D-Bilder zu altmodischen Stereoskopen konvertieren", nl: "2D-afbeeldingen converteren naar ouderwetse stereoscopen" }
        ],
        correct: 0,
        explanation: {
          en: "Stereo vision mimics human binocular vision by using disparity between images from two cameras to estimate distance and create 3D depth maps.",
          es: "La visión estéreo imita la visión binocular humana usando disparidad entre imágenes de dos cámaras para estimar distancia y crear mapas de profundidad 3D.",
          de: "Stereovision imitiert menschliche binokulare Sicht indem Disparität zwischen Bildern von zwei Kameras verwendet wird um Entfernung zu schätzen und 3D-Tiefenkarten zu erstellen.",
          nl: "Stereovisie imiteert menselijk binoculair zicht door dispariteit tussen afbeeldingen van twee camera's te gebruiken om afstand te schatten en 3D-dieptekaarten te maken."
        }
      },
      {
        question: {
          en: "What is texture analysis in computer vision?",
          es: "¿Qué es el análisis de textura en visión por computadora?",
          de: "Was ist Texturanalyse in Computer Vision?",
          nl: "Wat is textuuranalyse in computer vision?"
        },
        options: [
          { en: "Analyzing surface patterns and repetitive structures in image regions", es: "Analizar patrones de superficie y estructuras repetitivas en regiones de imagen", de: "Oberflächenmuster und repetitive Strukturen in Bildbereichen analysieren", nl: "Oppervlaktepatronen en repetitieve structuren in beeldgebieden analyseren" },
          { en: "Measuring fabric quality in textile images", es: "Medir calidad de tela en imágenes textiles", de: "Stoffqualität in Textilbildern messen", nl: "Stofkwaliteit meten in textielafbeeldingen" },
          { en: "Adding texture effects to smooth images", es: "Añadir efectos de textura a imágenes suaves", de: "Textureffekte zu glatten Bildern hinzufügen", nl: "Textuureffecten toevoegen aan gladde afbeeldingen" },
          { en: "Reading text from textured backgrounds", es: "Leer texto desde fondos texturizados", de: "Text aus strukturierten Hintergründen lesen", nl: "Tekst lezen van getextureerde achtergronden" }
        ],
        correct: 0,
        explanation: {
          en: "Texture analysis characterizes spatial patterns in image regions, helping classify materials, identify defects, and distinguish between different surface types.",
          es: "El análisis de textura caracteriza patrones espaciales en regiones de imagen, ayudando a clasificar materiales, identificar defectos y distinguir entre diferentes tipos de superficie.",
          de: "Texturanalyse charakterisiert räumliche Muster in Bildbereichen, hilft Materialien zu klassifizieren, Defekte zu identifizieren und zwischen verschiedenen Oberflächentypen zu unterscheiden.",
          nl: "Textuuranalyse karakteriseert ruimtelijke patronen in beeldgebieden, helpt materialen classificeren, defecten identificeren en onderscheid maken tussen verschillende oppervlaktetypes."
        }
      },
      {
        question: {
          en: "What is contour detection used for?",
          es: "¿Para qué se usa la detección de contornos?",
          de: "Wofür wird Konturerkennung verwendet?",
          nl: "Waarvoor wordt contourdetectie gebruikt?"
        },
        options: [
          { en: "Finding the boundaries and outlines of objects in images", es: "Encontrar los límites y contornos de objetos en imágenes", de: "Grenzen und Umrisse von Objekten in Bildern finden", nl: "Grenzen en omtrekken van objecten in afbeeldingen vinden" },
          { en: "Drawing artistic contour maps", es: "Dibujar mapas de contorno artísticos", de: "Künstlerische Konturkarten zeichnen", nl: "Artistieke contourkaarten tekenen" },
          { en: "Detecting facial contours for makeup", es: "Detectar contornos faciales para maquillaje", de: "Gesichtskonturen für Make-up erkennen", nl: "Gezichtscontouren detecteren voor make-up" },
          { en: "Finding elevation changes in landscape photos", es: "Encontrar cambios de elevación en fotos de paisaje", de: "Höhenänderungen in Landschaftsfotos finden", nl: "Hoogteveranderingen vinden in landschapsfoto's" }
        ],
        correct: 0,
        explanation: {
          en: "Contour detection finds continuous curves that represent object boundaries, essential for shape analysis, object recognition, and measuring geometric properties.",
          es: "La detección de contornos encuentra curvas continuas que representan límites de objetos, esencial para análisis de forma, reconocimiento de objetos y medición de propiedades geométricas.",
          de: "Konturerkennung findet kontinuierliche Kurven die Objektgrenzen darstellen, wesentlich für Formanalyse, Objekterkennung und Messung geometrischer Eigenschaften.",
          nl: "Contourdetectie vindt continue krommen die objectgrenzen vertegenwoordigen, essentieel voor vormanalyse, objectherkenning en het meten van geometrische eigenschappen."
        }
      },
      {
        question: {
          en: "What is the watershed algorithm commonly used for?",
          es: "¿Para qué se usa comúnmente el algoritmo watershed?",
          de: "Wofür wird der Watershed-Algorithmus häufig verwendet?",
          nl: "Waarvoor wordt het watershed-algoritme vaak gebruikt?"
        },
        options: [
          { en: "Segmenting touching or overlapping objects in images", es: "Segmentar objetos que se tocan o superponen en imágenes", de: "Sich berührende oder überlappende Objekte in Bildern segmentieren", nl: "Aanrakende of overlappende objecten in afbeeldingen segmenteren" },
          { en: "Detecting water sources in satellite images", es: "Detectar fuentes de agua en imágenes satelitales", de: "Wasserquellen in Satellitenbildern erkennen", nl: "Waterbronnen detecteren in satellietbeelden" },
          { en: "Removing water damage from old photos", es: "Eliminar daño por agua de fotos antiguas", de: "Wasserschäden aus alten Fotos entfernen", nl: "Waterschade verwijderen uit oude foto's" },
          { en: "Creating artistic water effects", es: "Crear efectos artísticos de agua", de: "Künstlerische Wassereffekte erstellen", nl: "Artistieke watereffecten creëren" }
        ],
        correct: 0,
        explanation: {
          en: "The watershed algorithm treats images like topographical maps, finding natural separation lines between objects, particularly useful for separating clustered cells or particles.",
          es: "El algoritmo watershed trata imágenes como mapas topográficos, encontrando líneas de separación natural entre objetos, particularmente útil para separar células o partículas agrupadas.",
          de: "Der Watershed-Algorithmus behandelt Bilder wie topographische Karten, findet natürliche Trennlinien zwischen Objekten, besonders nützlich zum Trennen geclusterter Zellen oder Partikel.",
          nl: "Het watershed-algoritme behandelt afbeeldingen als topografische kaarten, vindt natuurlijke scheidingslijnen tussen objecten, bijzonder nuttig voor het scheiden van geclusterde cellen of deeltjes."
        }
      },
      {
        question: {
          en: "What is background subtraction typically used for?",
          es: "¿Para qué se usa típicamente la sustracción de fondo?",
          de: "Wofür wird Hintergrundsubtraktion typischerweise verwendet?",
          nl: "Waarvoor wordt achtergrondsubstractie doorgaans gebruikt?"
        },
        options: [
          { en: "Detecting moving objects by removing static background elements", es: "Detectar objetos en movimiento removiendo elementos estáticos del fondo", de: "Bewegende Objekte erkennen durch Entfernen statischer Hintergrundelemente", nl: "Bewegende objecten detecteren door statische achtergrondelementen te verwijderen" },
          { en: "Making image backgrounds transparent", es: "Hacer fondos de imagen transparentes", de: "Bildhintergründe transparent machen", nl: "Beeldachtergronden transparant maken" },
          { en: "Calculating mathematical differences between images", es: "Calcular diferencias matemáticas entre imágenes", de: "Mathematische Unterschiede zwischen Bildern berechnen", nl: "Wiskundige verschillen tussen afbeeldingen berekenen" },
          { en: "Removing unwanted background noise from audio", es: "Eliminar ruido de fondo no deseado del audio", de: "Unerwünschtes Hintergrundrauschen aus Audio entfernen", nl: "Ongewenste achtergrondruis uit audio verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Background subtraction compares current frames with a background model to identify foreground objects, essential for surveillance, traffic monitoring, and motion analysis.",
          es: "La sustracción de fondo compara marcos actuales con un modelo de fondo para identificar objetos de primer plano, esencial para vigilancia, monitoreo de tráfico y análisis de movimiento.",
          de: "Hintergrundsubtraktion vergleicht aktuelle Frames mit einem Hintergrundmodell um Vordergrundobjekte zu identifizieren, wesentlich für Überwachung, Verkehrsmonitoring und Bewegungsanalyse.",
          nl: "Achtergrondsubstractie vergelijkt huidige frames met een achtergrondmodel om voorgrond objecten te identificeren, essentieel voor bewaking, verkeersmonitoring en bewegingsanalyse."
        }
      },
      {
        question: {
          en: "What is the main advantage of scale-invariant feature detection?",
          es: "¿Cuál es la principal ventaja de la detección de características invariantes a escala?",
          de: "Was ist der Hauptvorteil skalenunabhängiger Merkmalserkennung?",
          nl: "Wat is het hoofdvoordeel van schaal-invariante kenmerkdetectie?"
        },
        options: [
          { en: "Features can be matched even when objects appear at different sizes", es: "Las características pueden coincidir incluso cuando objetos aparecen en diferentes tamaños", de: "Merkmale können abgeglichen werden auch wenn Objekte in verschiedenen Größen erscheinen", nl: "Kenmerken kunnen gematcht worden zelfs wanneer objecten in verschillende maten verschijnen" },
          { en: "Images are automatically resized to standard dimensions", es: "Las imágenes se redimensionan automáticamente a dimensiones estándar", de: "Bilder werden automatisch auf Standardabmessungen geändert", nl: "Afbeeldingen worden automatisch aangepast naar standaardafmetingen" },
          { en: "Only works with large-scale images", es: "Solo funciona con imágenes a gran escala", de: "Funktioniert nur mit großformatigen Bildern", nl: "Werkt alleen met grootschalige afbeeldingen" },
          { en: "Reduces computational complexity significantly", es: "Reduce significativamente la complejidad computacional", de: "Reduziert rechnerische Komplexität erheblich", nl: "Vermindert rekenkundige complexiteit aanzienlijk" }
        ],
        correct: 0,
        explanation: {
          en: "Scale-invariant features remain recognizable regardless of zoom level or distance, crucial for robust object recognition across varying viewing conditions.",
          es: "Las características invariantes a escala permanecen reconocibles independientemente del nivel de zoom o distancia, crucial para reconocimiento robusto de objetos a través de condiciones de visualización variables.",
          de: "Skalenunabhängige Merkmale bleiben erkennbar unabhängig von Zoomstufe oder Entfernung, entscheidend für robuste Objekterkennung unter verschiedenen Betrachtungsbedingungen.",
          nl: "Schaal-invariante kenmerken blijven herkenbaar ongeacht zoomniveau of afstand, cruciaal voor robuuste objectherkenning onder variërende kijkomstandigheden."
        }
      },
      {
        question: {
          en: "What is image rectification used for?",
          es: "¿Para qué se usa la rectificación de imagen?",
          de: "Wofür wird Bildkorrektur verwendet?",
          nl: "Waarvoor wordt beeldrechtzetting gebruikt?"
        },
        options: [
          { en: "Correcting geometric distortions and aligning image planes", es: "Corregir distorsiones geométricas y alinear planos de imagen", de: "Geometrische Verzerrungen korrigieren und Bildebenen ausrichten", nl: "Geometrische vervormingen corrigeren en beeldvlakken uitlijnen" },
          { en: "Fixing overexposed or underexposed images", es: "Corregir imágenes sobreexpuestas o subexpuestas", de: "Über- oder unterbelichtete Bilder korrigieren", nl: "Overbelichte of onderbelichte afbeeldingen corrigeren" },
          { en: "Converting curved images to rectangular format", es: "Convertir imágenes curvas a formato rectangular", de: "Gekrümmte Bilder zu rechteckigem Format konvertieren", nl: "Gebogen afbeeldingen converteren naar rechthoekig formaat" },
          { en: "Removing moral objections from controversial images", es: "Eliminar objeciones morales de imágenes controvertidas", de: "Moralische Einwände aus kontroversen Bildern entfernen", nl: "Morele bezwaren wegwerken uit controversiële afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Image rectification transforms images to remove perspective distortion and align them to a common coordinate system, essential for stereo vision and photogrammetry.",
          es: "La rectificación de imagen transforma imágenes para eliminar distorsión de perspectiva y alinearlas a un sistema de coordenadas común, esencial para visión estéreo y fotogrametría.",
          de: "Bildkorrektur transformiert Bilder um Perspektivverzerrung zu entfernen und sie an ein gemeinsames Koordinatensystem auszurichten, wesentlich für Stereovision und Photogrammetrie.",
          nl: "Beeldrechtzetting transformeert afbeeldingen om perspectiefvervorming te verwijderen en ze uit te lijnen naar een gemeenschappelijk coördinatensysteem, essentieel voor stereovisie en fotogrammetrie."
        }
      },
      {
        question: {
          en: "What does invariant feature detection aim to achieve?",
          es: "¿Qué busca lograr la detección de características invariantes?",
          de: "Was zielt invariante Merkmalserkennung zu erreichen?",
          nl: "Wat probeert invariante kenmerkdetectie te bereiken?"
        },
        options: [
          { en: "Finding features that remain consistent under various transformations like rotation and scaling", es: "Encontrar características que permanecen consistentes bajo varias transformaciones como rotación y escalado", de: "Merkmale finden die unter verschiedenen Transformationen wie Rotation und Skalierung konsistent bleiben", nl: "Kenmerken vinden die consistent blijven onder verschillende transformaties zoals rotatie en schaling" },
          { en: "Detecting features that never change in any image", es: "Detectar características que nunca cambian en ninguna imagen", de: "Merkmale erkennen die sich in keinem Bild ändern", nl: "Kenmerken detecteren die nooit veranderen in enige afbeelding" },
          { en: "Finding mathematical constants in image data", es: "Encontrar constantes matemáticas en datos de imagen", de: "Mathematische Konstanten in Bilddaten finden", nl: "Wiskundige constanten vinden in beeldgegevens" },
          { en: "Maintaining constant processing speed regardless of image complexity", es: "Mantener velocidad de procesamiento constante independientemente de complejidad de imagen", de: "Konstante Verarbeitungsgeschwindigkeit unabhängig von Bildkomplexität beibehalten", nl: "Constante verwerkingssnelheid behouden ongeacht beeldcomplexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Invariant features are designed to be robust against common image transformations, making object recognition more reliable across different viewing conditions and camera positions.",
          es: "Las características invariantes están diseñadas para ser robustas contra transformaciones comunes de imagen, haciendo el reconocimiento de objetos más confiable a través de diferentes condiciones de visualización y posiciones de cámara.",
          de: "Invariante Merkmale sind entworfen um robust gegen häufige Bildtransformationen zu sein, machen Objekterkennung zuverlässiger unter verschiedenen Betrachtungsbedingungen und Kamerapositionen.",
          nl: "Invariante kenmerken zijn ontworpen om robuust te zijn tegen veel voorkomende beeldtransformaties, maken objectherkenning betrouwbaarder onder verschillende kijkomstandigheden en cameraposities."
        }
      },
      {
        question: {
          en: "What is epipolar geometry in stereo vision?",
          es: "¿Qué es la geometría epipolar en visión estéreo?",
          de: "Was ist epipolare Geometrie in Stereo-Vision?",
          nl: "Wat is epipolaire geometrie in stereovisie?"
        },
        options: [
          { en: "The geometric relationship between corresponding points in two camera views", es: "La relación geométrica entre puntos correspondientes en dos vistas de cámara", de: "Die geometrische Beziehung zwischen entsprechenden Punkten in zwei Kameraansichten", nl: "De geometrische relatie tussen corresponderende punten in twee cameraweergaven" },
          { en: "The study of pole-shaped objects in images", es: "El estudio de objetos con forma de poste en imágenes", de: "Die Untersuchung von stäbchenförmigen Objekten in Bildern", nl: "De studie van poolachtige objecten in afbeeldingen" },
          { en: "Epipolar geometry deals with polar coordinates in images", es: "La geometría epipolar trata con coordenadas polares en imágenes", de: "Epipolare Geometrie beschäftigt sich mit Polarkoordinaten in Bildern", nl: "Epipolaire geometrie behandelt polaire coördinaten in afbeeldingen" },
          { en: "The geometry of epileptic seizure detection", es: "La geometría de detección de ataques epilépticos", de: "Die Geometrie der Epilepsieanfallserkennung", nl: "De geometrie van epileptische aanvaldetectie" }
        ],
        correct: 0,
        explanation: {
          en: "Epipolar geometry describes the fundamental geometric constraints between stereo image pairs, enabling depth estimation and 3D reconstruction from multiple camera viewpoints.",
          es: "La geometría epipolar describe las restricciones geométricas fundamentales entre pares de imágenes estéreo, permitiendo estimación de profundidad y reconstrucción 3D desde múltiples puntos de vista de cámara.",
          de: "Epipolare Geometrie beschreibt die fundamentalen geometrischen Einschränkungen zwischen Stereo-Bildpaaren, ermöglicht Tiefenschätzung und 3D-Rekonstruktion aus mehreren Kamera-Blickwinkeln.",
          nl: "Epipolaire geometrie beschrijft de fundamentele geometrische beperkingen tussen stereo beeldparen, maakt diepteschatting en 3D reconstructie mogelijk vanuit meerdere camera standpunten."
        }
      },
      {
        question: {
          en: "What is optical flow in computer vision?",
          es: "¿Qué es el flujo óptico en visión por computadora?",
          de: "Was ist optischer Fluss in Computer Vision?",
          nl: "Wat is optische flow in computer vision?"
        },
        options: [
          { en: "The pattern of motion of objects between consecutive frames in image sequences", es: "El patrón de movimiento de objetos entre fotogramas consecutivos en secuencias de imagen", de: "Das Bewegungsmuster von Objekten zwischen aufeinanderfolgenden Frames in Bildsequenzen", nl: "Het bewegingspatroon van objecten tussen opeenvolgende frames in beeldsequenties" },
          { en: "The flow of light through optical lenses", es: "El flujo de luz a través de lentes ópticas", de: "Der Lichtfluss durch optische Linsen", nl: "De stroom van licht door optische lenzen" },
          { en: "The optimal way to organize image files", es: "La forma óptima de organizar archivos de imagen", de: "Der optimale Weg Bilddateien zu organisieren", nl: "De optimale manier om beeldbestanden te organiseren" },
          { en: "The flow of data through computer vision algorithms", es: "El flujo de datos a través de algoritmos de visión por computadora", de: "Der Datenfluss durch Computer Vision Algorithmen", nl: "De datastroom door computer vision algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Optical flow analysis tracks the movement of pixels or features across image frames, essential for motion detection, object tracking, and video analysis applications.",
          es: "El análisis de flujo óptico rastrea el movimiento de píxeles o características a través de fotogramas de imagen, esencial para detección de movimiento, seguimiento de objetos y aplicaciones de análisis de video.",
          de: "Optische Flussanalyse verfolgt die Bewegung von Pixeln oder Merkmalen über Bildframes, wesentlich für Bewegungserkennung, Objektverfolgung und Videoanalyse-Anwendungen.",
          nl: "Optische flow analyse volgt de beweging van pixels of kenmerken over beeldframes, essentieel voor bewegingsdetectie, object tracking en videoanalyse toepassingen."
        }
      },
      {
        question: {
          en: "What is the main purpose of image pyramids in computer vision?",
          es: "¿Cuál es el propósito principal de las pirámides de imagen en visión por computadora?",
          de: "Was ist der Hauptzweck von Bildpyramiden in Computer Vision?",
          nl: "Wat is het hoofddoel van beeldpiramides in computer vision?"
        },
        options: [
          { en: "To represent images at multiple scales for multi-resolution analysis", es: "Para representar imágenes en múltiples escalas para análisis multi-resolución", de: "Um Bilder in mehreren Maßstäben für Multi-Auflösungsanalyse darzustellen", nl: "Om afbeeldingen op meerdere schalen weer te geven voor multi-resolutie analyse" },
          { en: "To create pyramid-shaped visualizations of image data", es: "Para crear visualizaciones en forma de pirámide de datos de imagen", de: "Um pyramidenförmige Visualisierungen von Bilddaten zu erstellen", nl: "Om piramide-vormige visualisaties van beeldgegevens te maken" },
          { en: "To stack images on top of each other like a pyramid", es: "Para apilar imágenes una encima de otra como una pirámide", de: "Um Bilder wie eine Pyramide übereinander zu stapeln", nl: "Om afbeeldingen als een piramide op elkaar te stapelen" },
          { en: "To compress images into triangular formats", es: "Para comprimir imágenes en formatos triangulares", de: "Um Bilder in dreieckige Formate zu komprimieren", nl: "Om afbeeldingen te comprimeren naar driehoekige formaten" }
        ],
        correct: 0,
        explanation: {
          en: "Image pyramids create a hierarchical representation with images at different resolutions, enabling efficient processing across scales and improving feature detection at various sizes.",
          es: "Las pirámides de imagen crean una representación jerárquica con imágenes en diferentes resoluciones, permitiendo procesamiento eficiente a través de escalas y mejorando detección de características en varios tamaños.",
          de: "Bildpyramiden erstellen eine hierarchische Darstellung mit Bildern in verschiedenen Auflösungen, ermöglichen effiziente Verarbeitung über Skalen und verbessern Merkmalserkennung in verschiedenen Größen.",
          nl: "Beeldpiramides creëren een hiërarchische representatie met afbeeldingen op verschillende resoluties, maken efficiënte verwerking mogelijk over schalen en verbeteren kenmerkdetectie op verschillende groottes."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();