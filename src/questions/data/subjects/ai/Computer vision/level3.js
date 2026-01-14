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
      },
      {
        question: {
          en: "What is the Lucas-Kanade method used for?",
          es: "¿Para qué se usa el método Lucas-Kanade?",
          de: "Wofür wird die Lucas-Kanade-Methode verwendet?",
          nl: "Waarvoor wordt de Lucas-Kanade methode gebruikt?"
        },
        options: [
          { en: "Computing optical flow by assuming constant motion in local neighborhoods", es: "Calcular flujo óptico asumiendo movimiento constante en vecindarios locales", de: "Optischen Fluss berechnen durch Annahme konstanter Bewegung in lokalen Nachbarschaften", nl: "Optische flow berekenen door constante beweging aan te nemen in lokale buurten" },
          { en: "Enhancing image brightness and contrast", es: "Mejorar brillo y contraste de imagen", de: "Bildhelligkeit und Kontrast verbessern", nl: "Beeldhelderheid en contrast verbeteren" },
          { en: "Detecting corners in binary images", es: "Detectar esquinas en imágenes binarias", de: "Ecken in Binärbildern erkennen", nl: "Hoeken detecteren in binaire afbeeldingen" },
          { en: "Compressing video files efficiently", es: "Comprimir archivos de video eficientemente", de: "Videodateien effizient komprimieren", nl: "Videobestanden efficiënt comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucas-Kanade method is a differential technique for optical flow estimation, tracking feature motion between frames by solving least-squares problems in local windows.",
          es: "El método Lucas-Kanade es una técnica diferencial para estimación de flujo óptico, rastreando movimiento de características entre fotogramas resolviendo problemas de mínimos cuadrados en ventanas locales.",
          de: "Die Lucas-Kanade-Methode ist eine differentielle Technik zur optischen Flussschätzung, verfolgt Merkmalsbewegung zwischen Frames durch Lösen von Kleinste-Quadrate-Problemen in lokalen Fenstern.",
          nl: "De Lucas-Kanade methode is een differentiële techniek voor optische flow schatting, volgt kenmerkbeweging tussen frames door kleinste-kwadraten problemen op te lossen in lokale vensters."
        }
      },
      {
        question: {
          en: "What is Structure from Motion (SfM)?",
          es: "¿Qué es Structure from Motion (SfM)?",
          de: "Was ist Structure from Motion (SfM)?",
          nl: "Wat is Structure from Motion (SfM)?"
        },
        options: [
          { en: "Reconstructing 3D scene structure from 2D image sequences with camera motion", es: "Reconstruir estructura de escena 3D desde secuencias de imagen 2D con movimiento de cámara", de: "3D-Szenenstruktur aus 2D-Bildsequenzen mit Kamerabewegung rekonstruieren", nl: "3D scènestructuur reconstrueren uit 2D beeldsequenties met camerabeweging" },
          { en: "Analyzing the structure of moving objects only", es: "Analizar la estructura de objetos en movimiento solamente", de: "Struktur bewegter Objekte nur analysieren", nl: "Alleen de structuur van bewegende objecten analyseren" },
          { en: "Creating motion blur effects in images", es: "Crear efectos de desenfoque de movimiento en imágenes", de: "Bewegungsunschärfe-Effekte in Bildern erstellen", nl: "Bewegingsonscherpte effecten creëren in afbeeldingen" },
          { en: "Organizing video frames by structure", es: "Organizar fotogramas de video por estructura", de: "Videoframes nach Struktur organisieren", nl: "Videoframes organiseren op structuur" }
        ],
        correct: 0,
        explanation: {
          en: "SfM simultaneously estimates 3D structure and camera poses from multiple images, widely used in photogrammetry, autonomous navigation, and 3D modeling from photographs.",
          es: "SfM estima simultáneamente estructura 3D y poses de cámara desde múltiples imágenes, ampliamente usado en fotogrametría, navegación autónoma y modelado 3D desde fotografías.",
          de: "SfM schätzt gleichzeitig 3D-Struktur und Kameraposen aus mehreren Bildern, weit verbreitet in Photogrammetrie, autonomer Navigation und 3D-Modellierung aus Fotografien.",
          nl: "SfM schat simultaan 3D structuur en cameraposes uit meerdere afbeeldingen, wijd gebruikt in fotogrammetrie, autonome navigatie en 3D modellering uit foto's."
        }
      },
      {
        question: {
          en: "What is the fundamental matrix in stereo vision?",
          es: "¿Qué es la matriz fundamental en visión estéreo?",
          de: "Was ist die Fundamentalmatrix in Stereo-Vision?",
          nl: "Wat is de fundamentele matrix in stereozicht?"
        },
        options: [
          { en: "A 3x3 matrix encoding epipolar geometry between two uncalibrated cameras", es: "Una matriz 3x3 que codifica geometría epipolar entre dos cámaras no calibradas", de: "Eine 3x3-Matrix die epipolare Geometrie zwischen zwei unkalibrierten Kameras kodiert", nl: "Een 3x3 matrix die epipolaire geometrie codeert tussen twee ongekalibreerde camera's" },
          { en: "The basic transformation matrix for all vision tasks", es: "La matriz de transformación básica para todas las tareas de visión", de: "Die grundlegende Transformationsmatrix für alle Vision-Aufgaben", nl: "De basistransformatiematrix voor alle vision-taken" },
          { en: "A matrix representing fundamental colors in images", es: "Una matriz que representa colores fundamentales en imágenes", de: "Eine Matrix die fundamentale Farben in Bildern repräsentiert", nl: "Een matrix die fundamentele kleuren in afbeeldingen vertegenwoordigt" },
          { en: "The first matrix computed in any vision algorithm", es: "La primera matriz calculada en cualquier algoritmo de visión", de: "Die erste Matrix die in jedem Vision-Algorithmus berechnet wird", nl: "De eerste matrix berekend in elk vision-algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental matrix relates corresponding points in stereo images through epipolar constraints, enabling stereo matching and 3D reconstruction without camera calibration.",
          es: "La matriz fundamental relaciona puntos correspondientes en imágenes estéreo a través de restricciones epipolares, permitiendo coincidencia estéreo y reconstrucción 3D sin calibración de cámara.",
          de: "Die Fundamentalmatrix verbindet entsprechende Punkte in Stereobildern durch epipolare Einschränkungen, ermöglicht Stereo-Matching und 3D-Rekonstruktion ohne Kamerakalibrierung.",
          nl: "De fundamentele matrix relateert corresponderende punten in stereobeelden door epipolaire beperkingen, maakt stereo-matching en 3D reconstructie mogelijk zonder camerakalibratie."
        }
      },
      {
        question: {
          en: "What is RANSAC primarily used for in computer vision?",
          es: "¿Para qué se usa principalmente RANSAC en visión por computadora?",
          de: "Wofür wird RANSAC hauptsächlich in Computer Vision verwendet?",
          nl: "Waarvoor wordt RANSAC voornamelijk gebruikt in computer vision?"
        },
        options: [
          { en: "Robustly estimating model parameters in the presence of outliers", es: "Estimar robustamente parámetros de modelo en presencia de valores atípicos", de: "Robuste Schätzung von Modellparametern bei Vorhandensein von Ausreißern", nl: "Robuust schatten van modelparameters in aanwezigheid van uitschieters" },
          { en: "Randomly sampling pixels for color analysis", es: "Muestrear aleatoriamente píxeles para análisis de color", de: "Zufällig Pixel für Farbanalyse sampeln", nl: "Willekeurig pixels samplen voor kleuranalyse" },
          { en: "Scanning images from left to right", es: "Escanear imágenes de izquierda a derecha", de: "Bilder von links nach rechts scannen", nl: "Afbeeldingen van links naar rechts scannen" },
          { en: "Organizing random access to image memory", es: "Organizar acceso aleatorio a memoria de imagen", de: "Zufallszugriff auf Bildspeicher organisieren", nl: "Willekeurige toegang tot beeldgeheugen organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "RANSAC (Random Sample Consensus) iteratively estimates model parameters by randomly sampling minimal subsets, identifying inliers, and selecting the model with most support despite noisy data.",
          es: "RANSAC (Consenso de Muestra Aleatoria) estima iterativamente parámetros de modelo muestreando aleatoriamente subconjuntos mínimos, identificando valores internos y seleccionando el modelo con más soporte a pesar de datos ruidosos.",
          de: "RANSAC (Random Sample Consensus) schätzt iterativ Modellparameter durch zufälliges Sampeln minimaler Teilmengen, identifiziert Inlier und wählt das Modell mit meister Unterstützung trotz verrauschter Daten.",
          nl: "RANSAC (Random Sample Consensus) schat iteratief modelparameters door willekeurig minimale subsets te samplen, identificeert inliers en selecteert het model met meeste ondersteuning ondanks ruizige data."
        }
      },
      {
        question: {
          en: "What is semantic segmentation?",
          es: "¿Qué es la segmentación semántica?",
          de: "Was ist semantische Segmentierung?",
          nl: "Wat is semantische segmentatie?"
        },
        options: [
          { en: "Assigning a class label to every pixel in an image", es: "Asignar una etiqueta de clase a cada píxel en una imagen", de: "Jedem Pixel in einem Bild eine Klassenbezeichnung zuweisen", nl: "Een klasselabel toewijzen aan elke pixel in een afbeelding" },
          { en: "Dividing images based on semantic meaning of colors", es: "Dividir imágenes basándose en significado semántico de colores", de: "Bilder basierend auf semantischer Bedeutung von Farben teilen", nl: "Afbeeldingen verdelen op basis van semantische betekenis van kleuren" },
          { en: "Organizing images by their content themes", es: "Organizar imágenes por sus temas de contenido", de: "Bilder nach ihren Inhaltsthemen organisieren", nl: "Afbeeldingen organiseren op hun inhoudsthema's" },
          { en: "Segmenting text regions in document images", es: "Segmentar regiones de texto en imágenes de documentos", de: "Textregionen in Dokumentbildern segmentieren", nl: "Tekstgebieden segmenteren in documentafbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic segmentation classifies each pixel into predefined categories (e.g., road, sky, person), creating dense pixel-level predictions for scene understanding.",
          es: "La segmentación semántica clasifica cada píxel en categorías predefinidas (ej., carretera, cielo, persona), creando predicciones densas a nivel de píxel para comprensión de escena.",
          de: "Semantische Segmentierung klassifiziert jeden Pixel in vordefinierte Kategorien (z.B. Straße, Himmel, Person), erstellt dichte Pixel-Level-Vorhersagen für Szenenverständnis.",
          nl: "Semantische segmentatie classificeert elke pixel in voorgedefinieerde categorieën (bijv. weg, lucht, persoon), creëert dichte pixel-niveau voorspellingen voor scènebegrip."
        }
      },
      {
        question: {
          en: "What is instance segmentation?",
          es: "¿Qué es la segmentación de instancias?",
          de: "Was ist Instanzsegmentierung?",
          nl: "Wat is instantiesegmentatie?"
        },
        options: [
          { en: "Detecting and delineating each individual object instance separately", es: "Detectar y delinear cada instancia de objeto individual por separado", de: "Jede einzelne Objektinstanz separat erkennen und abgrenzen", nl: "Elke individuele objectinstantie afzonderlijk detecteren en afbakenen" },
          { en: "Segmenting images instantly in real-time", es: "Segmentar imágenes instantáneamente en tiempo real", de: "Bilder sofort in Echtzeit segmentieren", nl: "Afbeeldingen direct in real-time segmenteren" },
          { en: "Creating multiple instances of image segments", es: "Crear múltiples instancias de segmentos de imagen", de: "Mehrere Instanzen von Bildsegmenten erstellen", nl: "Meerdere instanties van beeldsegmenten maken" },
          { en: "Segmenting only the first instance found", es: "Segmentar solo la primera instancia encontrada", de: "Nur die erste gefundene Instanz segmentieren", nl: "Alleen de eerst gevonden instantie segmenteren" }
        ],
        correct: 0,
        explanation: {
          en: "Instance segmentation combines object detection and semantic segmentation, distinguishing between different instances of the same class (e.g., separating individual people in a crowd).",
          es: "La segmentación de instancias combina detección de objetos y segmentación semántica, distinguiendo entre diferentes instancias de la misma clase (ej., separar personas individuales en una multitud).",
          de: "Instanzsegmentierung kombiniert Objekterkennung und semantische Segmentierung, unterscheidet zwischen verschiedenen Instanzen derselben Klasse (z.B. einzelne Personen in einer Menge trennen).",
          nl: "Instantiesegmentatie combineert objectdetectie en semantische segmentatie, onderscheidt tussen verschillende instanties van dezelfde klasse (bijv. individuele mensen scheiden in een menigte)."
        }
      },
      {
        question: {
          en: "What is the essential matrix in stereo vision?",
          es: "¿Qué es la matriz esencial en visión estéreo?",
          de: "Was ist die essentielle Matrix in Stereo-Vision?",
          nl: "Wat is de essentiële matrix in stereozicht?"
        },
        options: [
          { en: "The fundamental matrix for calibrated cameras relating camera motion and structure", es: "La matriz fundamental para cámaras calibradas relacionando movimiento de cámara y estructura", de: "Die Fundamentalmatrix für kalibrierte Kameras die Kamerabewegung und Struktur verbindet", nl: "De fundamentele matrix voor gekalibreerde camera's die camerabeweging en structuur relateert" },
          { en: "The most essential component of any vision system", es: "El componente más esencial de cualquier sistema de visión", de: "Die wesentlichste Komponente jedes Vision-Systems", nl: "Het meest essentiële component van elk vision-systeem" },
          { en: "A matrix storing essential image features", es: "Una matriz que almacena características de imagen esenciales", de: "Eine Matrix die essentielle Bildmerkmale speichert", nl: "Een matrix die essentiële beeldkenmerken opslaat" },
          { en: "The primary color transformation matrix", es: "La matriz de transformación de color primaria", de: "Die primäre Farbtransformationsmatrix", nl: "De primaire kleurtransformatiematrix" }
        ],
        correct: 0,
        explanation: {
          en: "The essential matrix encodes the epipolar geometry for calibrated cameras, relating 3D camera motion (rotation and translation) to 2D point correspondences.",
          es: "La matriz esencial codifica la geometría epipolar para cámaras calibradas, relacionando movimiento de cámara 3D (rotación y traslación) con correspondencias de puntos 2D.",
          de: "Die essentielle Matrix kodiert die epipolare Geometrie für kalibrierte Kameras, verbindet 3D-Kamerabewegung (Rotation und Translation) mit 2D-Punktkorrespondenzen.",
          nl: "De essentiële matrix codeert de epipolaire geometrie voor gekalibreerde camera's, relateert 3D camerabeweging (rotatie en translatie) aan 2D puntcorrespondenties."
        }
      },
      {
        question: {
          en: "What is bundle adjustment in 3D reconstruction?",
          es: "¿Qué es el ajuste de haz en reconstrucción 3D?",
          de: "Was ist Bundle Adjustment in 3D-Rekonstruktion?",
          nl: "Wat is bundle adjustment in 3D reconstructie?"
        },
        options: [
          { en: "Simultaneously refining 3D point positions and camera parameters to minimize reprojection error", es: "Refinar simultáneamente posiciones de puntos 3D y parámetros de cámara para minimizar error de reproyección", de: "Gleichzeitig 3D-Punktpositionen und Kameraparameter verfeinern um Reprojektionsfehler zu minimieren", nl: "Simultaan 3D puntposities en cameraparameters verfijnen om reprojectiefout te minimaliseren" },
          { en: "Bundling multiple images together for processing", es: "Agrupar múltiples imágenes juntas para procesamiento", de: "Mehrere Bilder zum Verarbeiten bündeln", nl: "Meerdere afbeeldingen bundelen voor verwerking" },
          { en: "Adjusting the brightness of image bundles", es: "Ajustar el brillo de grupos de imágenes", de: "Helligkeit von Bildbündeln anpassen", nl: "Helderheid van beeldbundels aanpassen" },
          { en: "Organizing reconstruction steps in bundles", es: "Organizar pasos de reconstrucción en grupos", de: "Rekonstruktionsschritte in Bündeln organisieren", nl: "Reconstructiestappen in bundels organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Bundle adjustment is a global optimization technique that jointly optimizes camera poses and 3D structure by minimizing the sum of squared reprojection errors across all observations.",
          es: "El ajuste de haz es una técnica de optimización global que optimiza conjuntamente poses de cámara y estructura 3D minimizando la suma de errores de reproyección al cuadrado a través de todas las observaciones.",
          de: "Bundle Adjustment ist eine globale Optimierungstechnik die gemeinsam Kameraposen und 3D-Struktur optimiert durch Minimierung der Summe quadrierter Reprojektionsfehler über alle Beobachtungen.",
          nl: "Bundle adjustment is een globale optimalisatietechniek die gezamenlijk cameraposes en 3D structuur optimaliseert door de som van gekwadrateerde reprojectiefouten over alle observaties te minimaliseren."
        }
      },
      {
        question: {
          en: "What is stereo rectification?",
          es: "¿Qué es la rectificación estéreo?",
          de: "Was ist Stereo-Rektifizierung?",
          nl: "Wat is stereo-rectificatie?"
        },
        options: [
          { en: "Transforming stereo images so epipolar lines become horizontal and aligned", es: "Transformar imágenes estéreo para que líneas epipolares se vuelvan horizontales y alineadas", de: "Stereobilder transformieren damit epipolare Linien horizontal und ausgerichtet werden", nl: "Stereobeelden transformeren zodat epipolaire lijnen horizontaal en uitgelijnd worden" },
          { en: "Correcting distortions in stereo camera lenses", es: "Corregir distorsiones en lentes de cámara estéreo", de: "Verzerrungen in Stereo-Kameraobjektiven korrigieren", nl: "Vervormingen in stereocameralenzen corrigeren" },
          { en: "Making stereo images perfectly rectangular", es: "Hacer imágenes estéreo perfectamente rectangulares", de: "Stereobilder perfekt rechteckig machen", nl: "Stereobeelden perfect rechthoekig maken" },
          { en: "Adjusting stereo audio in videos", es: "Ajustar audio estéreo en videos", de: "Stereo-Audio in Videos anpassen", nl: "Stereo-audio in video's aanpassen" }
        ],
        correct: 0,
        explanation: {
          en: "Stereo rectification warps image pairs so corresponding points lie on the same horizontal scan line, simplifying stereo matching from 2D search to efficient 1D search.",
          es: "La rectificación estéreo deforma pares de imágenes para que puntos correspondientes estén en la misma línea de escaneo horizontal, simplificando coincidencia estéreo de búsqueda 2D a búsqueda 1D eficiente.",
          de: "Stereo-Rektifizierung verzerrt Bildpaare damit entsprechende Punkte auf derselben horizontalen Scanlinie liegen, vereinfacht Stereo-Matching von 2D-Suche zu effizienter 1D-Suche.",
          nl: "Stereo-rectificatie vervormt beeldparen zodat corresponderende punten op dezelfde horizontale scanlijn liggen, vereenvoudigt stereo-matching van 2D zoeken naar efficiënte 1D zoeken."
        }
      },
      {
        question: {
          en: "What is disparity in stereo vision?",
          es: "¿Qué es la disparidad en visión estéreo?",
          de: "Was ist Disparität in Stereo-Vision?",
          nl: "Wat is dispariteit in stereozicht?"
        },
        options: [
          { en: "The horizontal difference in position of corresponding points between stereo images", es: "La diferencia horizontal en posición de puntos correspondientes entre imágenes estéreo", de: "Der horizontale Unterschied in Position entsprechender Punkte zwischen Stereobildern", nl: "Het horizontale verschil in positie van corresponderende punten tussen stereobeelden" },
          { en: "The quality difference between left and right images", es: "La diferencia de calidad entre imágenes izquierda y derecha", de: "Der Qualitätsunterschied zwischen linken und rechten Bildern", nl: "Het kwaliteitsverschil tussen linker en rechter beelden" },
          { en: "The disparity between expected and actual results", es: "La disparidad entre resultados esperados y reales", de: "Die Diskrepanz zwischen erwarteten und tatsächlichen Ergebnissen", nl: "De discrepantie tussen verwachte en werkelijke resultaten" },
          { en: "The color variation across stereo pairs", es: "La variación de color a través de pares estéreo", de: "Die Farbvariation über Stereopaare", nl: "De kleurvariatie over stereoparen" }
        ],
        correct: 0,
        explanation: {
          en: "Disparity measures the pixel shift between corresponding points in rectified stereo images, inversely proportional to depth - closer objects have larger disparities.",
          es: "La disparidad mide el desplazamiento de píxeles entre puntos correspondientes en imágenes estéreo rectificadas, inversamente proporcional a profundidad - objetos más cercanos tienen disparidades mayores.",
          de: "Disparität misst die Pixelverschiebung zwischen entsprechenden Punkten in rektifizierten Stereobildern, umgekehrt proportional zur Tiefe - nähere Objekte haben größere Disparitäten.",
          nl: "Dispariteit meet de pixelverschuiving tussen corresponderende punten in gerectificeerde stereobeelden, omgekeerd evenredig met diepte - dichterbij objecten hebben grotere dispariteiten."
        }
      },
      {
        question: {
          en: "What is the purpose of camera calibration?",
          es: "¿Cuál es el propósito de la calibración de cámara?",
          de: "Was ist der Zweck der Kamerakalibrierung?",
          nl: "Wat is het doel van camerakalibratie?"
        },
        options: [
          { en: "Estimating intrinsic and extrinsic camera parameters for accurate 3D reconstruction", es: "Estimar parámetros intrínsecos y extrínsecos de cámara para reconstrucción 3D precisa", de: "Intrinsische und extrinsische Kameraparameter schätzen für präzise 3D-Rekonstruktion", nl: "Intrinsieke en extrinsieke cameraparameters schatten voor nauwkeurige 3D reconstructie" },
          { en: "Adjusting camera settings for better image quality", es: "Ajustar configuraciones de cámara para mejor calidad de imagen", de: "Kameraeinstellungen für bessere Bildqualität anpassen", nl: "Camera-instellingen aanpassen voor betere beeldkwaliteit" },
          { en: "Synchronizing multiple cameras for simultaneous capture", es: "Sincronizar múltiples cámaras para captura simultánea", de: "Mehrere Kameras für gleichzeitige Aufnahme synchronisieren", nl: "Meerdere camera's synchroniseren voor gelijktijdige opname" },
          { en: "Calibrating color temperature and white balance", es: "Calibrar temperatura de color y balance de blancos", de: "Farbtemperatur und Weißabgleich kalibrieren", nl: "Kleurtemperatuur en witbalans kalibreren" }
        ],
        correct: 0,
        explanation: {
          en: "Camera calibration determines the camera's intrinsic parameters (focal length, principal point, distortion) and extrinsic parameters (position, orientation) for metric 3D measurements.",
          es: "La calibración de cámara determina parámetros intrínsecos de cámara (longitud focal, punto principal, distorsión) y parámetros extrínsecos (posición, orientación) para mediciones 3D métricas.",
          de: "Kamerakalibrierung bestimmt intrinsische Kameraparameter (Brennweite, Hauptpunkt, Verzerrung) und extrinsische Parameter (Position, Orientierung) für metrische 3D-Messungen.",
          nl: "Camerakalibratie bepaalt de intrinsieke cameraparameters (brandpuntsafstand, hoofdpunt, vervorming) en extrinsieke parameters (positie, oriëntatie) voor metrische 3D metingen."
        }
      },
      {
        question: {
          en: "What is photometric stereo?",
          es: "¿Qué es el estéreo fotométrico?",
          de: "Was ist photometrisches Stereo?",
          nl: "Wat is fotometrisch stereo?"
        },
        options: [
          { en: "Recovering surface normals from images under varying lighting directions", es: "Recuperar normales de superficie desde imágenes bajo direcciones de iluminación variables", de: "Oberflächennormalen aus Bildern unter variierenden Beleuchtungsrichtungen wiederherstellen", nl: "Oppervlaktenormalen herstellen uit beelden onder variërende verlichtingsrichtingen" },
          { en: "Measuring photometric properties of stereo cameras", es: "Medir propiedades fotométricas de cámaras estéreo", de: "Photometrische Eigenschaften von Stereokameras messen", nl: "Fotometrische eigenschappen van stereocamera's meten" },
          { en: "Adjusting exposure settings for stereo pairs", es: "Ajustar configuraciones de exposición para pares estéreo", de: "Belichtungseinstellungen für Stereopaare anpassen", nl: "Belichtingsinstellingen aanpassen voor stereoparen" },
          { en: "Creating stereo images with different brightness levels", es: "Crear imágenes estéreo con diferentes niveles de brillo", de: "Stereobilder mit verschiedenen Helligkeitsstufen erstellen", nl: "Stereobeelden maken met verschillende helderheidsniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Photometric stereo estimates surface orientation by analyzing intensity variations across multiple images captured from a fixed viewpoint under different illumination directions.",
          es: "El estéreo fotométrico estima orientación de superficie analizando variaciones de intensidad a través de múltiples imágenes capturadas desde un punto de vista fijo bajo diferentes direcciones de iluminación.",
          de: "Photometrisches Stereo schätzt Oberflächenorientierung durch Analyse von Intensitätsvariationen über mehrere Bilder die aus einem festen Blickwinkel unter verschiedenen Beleuchtungsrichtungen aufgenommen wurden.",
          nl: "Fotometrisch stereo schat oppervlakteoriëntatie door intensiteitsvariaties te analyseren over meerdere beelden vastgelegd vanuit een vast gezichtspunt onder verschillende verlichtingsrichtingen."
        }
      },
      {
        question: {
          en: "What is visual odometry?",
          es: "¿Qué es la odometría visual?",
          de: "Was ist visuelle Odometrie?",
          nl: "Wat is visuele odometrie?"
        },
        options: [
          { en: "Estimating camera motion and trajectory from sequential images", es: "Estimar movimiento de cámara y trayectoria desde imágenes secuenciales", de: "Kamerabewegung und Trajektorie aus sequentiellen Bildern schätzen", nl: "Camerabeweging en traject schatten uit sequentiële beelden" },
          { en: "Measuring odor detection capabilities in vision systems", es: "Medir capacidades de detección de olor en sistemas de visión", de: "Geruchserkennungsfähigkeiten in Vision-Systemen messen", nl: "Geurbewerkingsmogelijkheden in vision-systemen meten" },
          { en: "Visual representation of odometer readings", es: "Representación visual de lecturas de odómetro", de: "Visuelle Darstellung von Kilometerzähler-Ablesungen", nl: "Visuele weergave van kilometertelleraflezing" },
          { en: "Tracking visual patterns in odometry data", es: "Rastrear patrones visuales en datos de odometría", de: "Visuelle Muster in Odometriedaten verfolgen", nl: "Visuele patronen volgen in odometriegegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Visual odometry tracks camera pose changes between consecutive frames by matching features, enabling autonomous navigation and SLAM applications in robotics and vehicles.",
          es: "La odometría visual rastrea cambios de pose de cámara entre fotogramas consecutivos coincidiendo características, habilitando navegación autónoma y aplicaciones SLAM en robótica y vehículos.",
          de: "Visuelle Odometrie verfolgt Kameraposen-Änderungen zwischen aufeinanderfolgenden Frames durch Feature-Matching, ermöglicht autonome Navigation und SLAM-Anwendungen in Robotik und Fahrzeugen.",
          nl: "Visuele odometrie volgt cameraposewijzigingen tussen opeenvolgende frames door kenmerken te matchen, maakt autonome navigatie en SLAM-toepassingen mogelijk in robotica en voertuigen."
        }
      },
      {
        question: {
          en: "What is depth from defocus?",
          es: "¿Qué es profundidad desde desenfoque?",
          de: "Was ist Tiefe aus Unschärfe?",
          nl: "Wat is diepte uit onscherpte?"
        },
        options: [
          { en: "Estimating depth by analyzing blur variation at different focus settings", es: "Estimar profundidad analizando variación de desenfoque en diferentes configuraciones de enfoque", de: "Tiefe schätzen durch Analyse von Unschärfevariationen bei verschiedenen Fokuseinstellungen", nl: "Diepte schatten door onscherpte variatie te analyseren bij verschillende focusinstellingen" },
          { en: "Creating depth maps from out-of-focus background regions", es: "Crear mapas de profundidad desde regiones de fondo desenfocadas", de: "Tiefenkarten aus unscharfen Hintergrundbereichen erstellen", nl: "Dieptekaarten maken uit onscharpe achtergrondgebieden" },
          { en: "Measuring how defocused lenses affect depth perception", es: "Medir cómo lentes desenfocados afectan percepción de profundidad", de: "Messen wie defokussierte Linsen Tiefenwahrnehmung beeinflussen", nl: "Meten hoe onscherpe lenzen dieptewaarneming beïnvloeden" },
          { en: "Removing depth information from blurry images", es: "Remover información de profundidad de imágenes borrosas", de: "Tiefeninformationen aus unscharfen Bildern entfernen", nl: "Diepte-informatie verwijderen uit wazige beelden" }
        ],
        correct: 0,
        explanation: {
          en: "Depth from defocus exploits the relationship between object distance and blur amount in images with limited depth of field, using multiple images at different focus settings.",
          es: "Profundidad desde desenfoque explota la relación entre distancia de objeto y cantidad de desenfoque en imágenes con profundidad de campo limitada, usando múltiples imágenes en diferentes configuraciones de enfoque.",
          de: "Tiefe aus Unschärfe nutzt die Beziehung zwischen Objektdistanz und Unschärfemenge in Bildern mit begrenzter Schärfentiefe, verwendet mehrere Bilder bei verschiedenen Fokuseinstellungen.",
          nl: "Diepte uit onscherpte exploiteert de relatie tussen objectafstand en onscherpte hoeveelheid in beelden met beperkte scherptediepte, gebruikt meerdere beelden bij verschillende focusinstellingen."
        }
      },
      {
        question: {
          en: "What is multi-view stereo (MVS)?",
          es: "¿Qué es estéreo multi-vista (MVS)?",
          de: "Was ist Multi-View-Stereo (MVS)?",
          nl: "Wat is multi-view stereo (MVS)?"
        },
        options: [
          { en: "Dense 3D reconstruction using multiple overlapping images from different viewpoints", es: "Reconstrucción 3D densa usando múltiples imágenes superpuestas desde diferentes puntos de vista", de: "Dichte 3D-Rekonstruktion unter Verwendung mehrerer überlappender Bilder aus verschiedenen Blickwinkeln", nl: "Dichte 3D reconstructie met meerdere overlappende beelden vanuit verschillende gezichtspunten" },
          { en: "Displaying stereo images on multiple screens simultaneously", es: "Mostrar imágenes estéreo en múltiples pantallas simultáneamente", de: "Stereobilder gleichzeitig auf mehreren Bildschirmen anzeigen", nl: "Stereobeelden gelijktijdig op meerdere schermen weergeven" },
          { en: "Viewing the same stereo pair from different angles", es: "Ver el mismo par estéreo desde diferentes ángulos", de: "Dasselbe Stereopaar aus verschiedenen Winkeln betrachten", nl: "Hetzelfde stereopaar vanuit verschillende hoeken bekijken" },
          { en: "Creating multiple stereo versions of a single image", es: "Crear múltiples versiones estéreo de una sola imagen", de: "Mehrere Stereoversionen eines einzelnen Bildes erstellen", nl: "Meerdere stereoversies van een enkele afbeelding maken" }
        ],
        correct: 0,
        explanation: {
          en: "MVS extends two-view stereo to leverage many images, improving reconstruction completeness and accuracy by aggregating information from multiple viewpoints for robust depth estimation.",
          es: "MVS extiende estéreo de dos vistas para aprovechar muchas imágenes, mejorando completitud y precisión de reconstrucción agregando información desde múltiples puntos de vista para estimación de profundidad robusta.",
          de: "MVS erweitert Zwei-Ansichten-Stereo um viele Bilder zu nutzen, verbessert Rekonstruktionsvollständigkeit und Genauigkeit durch Aggregation von Informationen aus mehreren Blickwinkeln für robuste Tiefenschätzung.",
          nl: "MVS breidt twee-zicht stereo uit om veel beelden te benutten, verbetert reconstructie-volledigheid en nauwkeurigheid door informatie van meerdere gezichtspunten te aggregeren voor robuuste diepteschatting."
        }
      },
      {
        question: {
          en: "What is shape from shading?",
          es: "¿Qué es forma desde sombreado?",
          de: "Was ist Form aus Schattierung?",
          nl: "Wat is vorm uit schaduw?"
        },
        options: [
          { en: "Recovering 3D surface shape from intensity variations in a single image", es: "Recuperar forma de superficie 3D desde variaciones de intensidad en una sola imagen", de: "3D-Oberflächenform aus Intensitätsvariationen in einem einzelnen Bild wiederherstellen", nl: "3D oppervlaktevorm herstellen uit intensiteitsvariaties in een enkel beeld" },
          { en: "Creating shadows to represent 3D shapes", es: "Crear sombras para representar formas 3D", de: "Schatten erstellen um 3D-Formen darzustellen", nl: "Schaduwen maken om 3D vormen weer te geven" },
          { en: "Shading objects based on their geometric shapes", es: "Sombrear objetos basándose en sus formas geométricas", de: "Objekte basierend auf ihren geometrischen Formen schattieren", nl: "Objecten schaduwen gebaseerd op hun geometrische vormen" },
          { en: "Removing shading artifacts from 3D models", es: "Remover artefactos de sombreado de modelos 3D", de: "Schattierungsartefakte aus 3D-Modellen entfernen", nl: "Schaduw-artefacten verwijderen uit 3D modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Shape from shading infers surface orientation and depth from brightness patterns, using reflectance models to relate image intensity to surface geometry under known illumination.",
          es: "Forma desde sombreado infiere orientación de superficie y profundidad desde patrones de brillo, usando modelos de reflectancia para relacionar intensidad de imagen con geometría de superficie bajo iluminación conocida.",
          de: "Form aus Schattierung leitet Oberflächenorientierung und Tiefe aus Helligkeitsmustern ab, verwendet Reflektanzmodelle um Bildintensität mit Oberflächengeometrie unter bekannter Beleuchtung zu verbinden.",
          nl: "Vorm uit schaduw leidt oppervlakteoriëntatie en diepte af uit helderheidspatronen, gebruikt reflectiemodellen om beeldintensiteit te relateren aan oppervlaktegeometrie onder bekende verlichting."
        }
      },
      {
        question: {
          en: "What is the homography matrix used for?",
          es: "¿Para qué se usa la matriz de homografía?",
          de: "Wofür wird die Homographie-Matrix verwendet?",
          nl: "Waarvoor wordt de homografie-matrix gebruikt?"
        },
        options: [
          { en: "Mapping points between images of planar surfaces or pure camera rotations", es: "Mapear puntos entre imágenes de superficies planares o rotaciones de cámara puras", de: "Punkte zwischen Bildern planarer Oberflächen oder reiner Kamerarotationen abbilden", nl: "Punten mappen tussen beelden van vlakke oppervlakken of pure camerarotaties" },
          { en: "Creating homogeneous color distributions in images", es: "Crear distribuciones de color homogéneas en imágenes", de: "Homogene Farbverteilungen in Bildern erstellen", nl: "Homogene kleurverdelingen in beelden maken" },
          { en: "Storing homography information about image graphs", es: "Almacenar información de homografía sobre gráficos de imagen", de: "Homographie-Informationen über Bildgraphen speichern", nl: "Homografie-informatie over beeldgrafieken opslaan" },
          { en: "Measuring similarity between homogenous regions", es: "Medir similitud entre regiones homogéneas", de: "Ähnlichkeit zwischen homogenen Regionen messen", nl: "Gelijkenis meten tussen homogene gebieden" }
        ],
        correct: 0,
        explanation: {
          en: "A homography is a 3x3 projective transformation relating image points when viewing a plane or during pure rotation, essential for image stitching, augmented reality, and plane tracking.",
          es: "Una homografía es una transformación proyectiva 3x3 relacionando puntos de imagen al ver un plano o durante rotación pura, esencial para unión de imágenes, realidad aumentada y seguimiento de planos.",
          de: "Eine Homographie ist eine 3x3-projektive Transformation die Bildpunkte beim Betrachten einer Ebene oder während reiner Rotation verbindet, wesentlich für Bild-Stitching, Augmented Reality und Ebenen-Tracking.",
          nl: "Een homografie is een 3x3 projectieve transformatie die beeldpunten relateert bij het bekijken van een vlak of tijdens pure rotatie, essentieel voor beeldstitching, augmented reality en vlaktracking."
        }
      },
      {
        question: {
          en: "What is the triangulation method in stereo vision?",
          es: "¿Qué es el método de triangulación en visión estéreo?",
          de: "Was ist die Triangulationsmethode in Stereo-Vision?",
          nl: "Wat is de triangulatieomethode in stereozicht?"
        },
        options: [
          { en: "Computing 3D point positions by intersecting rays from corresponding image points", es: "Calcular posiciones de puntos 3D intersectando rayos desde puntos de imagen correspondientes", de: "3D-Punktpositionen berechnen durch Schnittpunkte von Strahlen aus entsprechenden Bildpunkten", nl: "3D puntposities berekenen door stralen te kruisen vanuit corresponderende beeldpunten" },
          { en: "Dividing images into triangular regions for processing", es: "Dividir imágenes en regiones triangulares para procesamiento", de: "Bilder in dreieckige Regionen für Verarbeitung teilen", nl: "Beelden verdelen in driehoekige gebieden voor verwerking" },
          { en: "Creating triangular mesh models from stereo pairs", es: "Crear modelos de malla triangular desde pares estéreo", de: "Dreieckige Mesh-Modelle aus Stereopaaren erstellen", nl: "Driehoekige mesh-modellen maken uit stereoparen" },
          { en: "Measuring triangular features in 3D scenes", es: "Medir características triangulares en escenas 3D", de: "Dreieckige Merkmale in 3D-Szenen messen", nl: "Driehoekige kenmerken meten in 3D scènes" }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation computes 3D coordinates by finding the intersection of viewing rays from two or more camera centers through corresponding 2D image points with known camera geometry.",
          es: "La triangulación calcula coordenadas 3D encontrando la intersección de rayos de visualización desde dos o más centros de cámara a través de puntos de imagen 2D correspondientes con geometría de cámara conocida.",
          de: "Triangulation berechnet 3D-Koordinaten durch Finden der Schnittpunkte von Sichtstrahlen von zwei oder mehr Kamerazentren durch entsprechende 2D-Bildpunkte mit bekannter Kamerageometrie.",
          nl: "Triangulatie berekent 3D coördinaten door het snijpunt te vinden van kijkstralen van twee of meer cameracentra door corresponderende 2D beeldpunten met bekende camerageometrie."
        }
      },
      {
        question: {
          en: "What is dense stereo matching?",
          es: "¿Qué es la coincidencia estéreo densa?",
          de: "Was ist dichtes Stereo-Matching?",
          nl: "Wat is dichte stereo-matching?"
        },
        options: [
          { en: "Computing disparity for every pixel to create complete depth maps", es: "Calcular disparidad para cada píxel para crear mapas de profundidad completos", de: "Disparität für jeden Pixel berechnen um vollständige Tiefenkarten zu erstellen", nl: "Dispariteit berekenen voor elke pixel om complete dieptekaarten te maken" },
          { en: "Matching only densely packed feature points", es: "Coincidir solo puntos de características densamente empaquetados", de: "Nur dicht gepackte Feature-Punkte matchen", nl: "Alleen dicht verpakte kenmerkpunten matchen" },
          { en: "Increasing pixel density in stereo images", es: "Aumentar densidad de píxeles en imágenes estéreo", de: "Pixeldichte in Stereobildern erhöhen", nl: "Pixeldichtheid verhogen in stereobeelden" },
          { en: "Matching images with high information density", es: "Coincidir imágenes con alta densidad de información", de: "Bilder mit hoher Informationsdichte matchen", nl: "Beelden matchen met hoge informatiedichtheid" }
        ],
        correct: 0,
        explanation: {
          en: "Dense stereo matching establishes pixel-wise correspondences across the entire image to generate complete disparity maps, unlike sparse methods that match only distinctive features.",
          es: "La coincidencia estéreo densa establece correspondencias píxel a píxel a través de la imagen entera para generar mapas de disparidad completos, a diferencia de métodos dispersos que coinciden solo características distintivas.",
          de: "Dichtes Stereo-Matching etabliert pixelweise Korrespondenzen über das gesamte Bild um vollständige Disparitätskarten zu generieren, im Gegensatz zu spärlichen Methoden die nur charakteristische Merkmale matchen.",
          nl: "Dichte stereo-matching vestigt pixel-gewijs correspondences over het hele beeld om complete dispariteitskaarten te genereren, in tegenstelling tot sparse methoden die alleen onderscheidende kenmerken matchen."
        }
      },
      {
        question: {
          en: "What is the baseline in stereo vision?",
          es: "¿Qué es la línea base en visión estéreo?",
          de: "Was ist die Basislinie in Stereo-Vision?",
          nl: "Wat is de basislijn in stereozicht?"
        },
        options: [
          { en: "The distance between the optical centers of the two cameras", es: "La distancia entre los centros ópticos de las dos cámaras", de: "Der Abstand zwischen den optischen Zentren der zwei Kameras", nl: "De afstand tussen de optische centra van de twee camera's" },
          { en: "The reference line for measuring image alignment", es: "La línea de referencia para medir alineación de imagen", de: "Die Referenzlinie zum Messen der Bildausrichtung", nl: "De referentielijn voor het meten van beelduitlijning" },
          { en: "The minimum accuracy threshold for stereo algorithms", es: "El umbral mínimo de precisión para algoritmos estéreo", de: "Die minimale Genauigkeitsschwelle für Stereo-Algorithmen", nl: "De minimale nauwkeurigheidsdrempel voor stereo-algoritmen" },
          { en: "The horizontal line at the bottom of stereo images", es: "La línea horizontal en la parte inferior de imágenes estéreo", de: "Die horizontale Linie am unteren Rand von Stereobildern", nl: "De horizontale lijn onderaan stereobeelden" }
        ],
        correct: 0,
        explanation: {
          en: "The baseline is the physical separation between camera centers - longer baselines improve depth accuracy but may cause matching difficulties; shorter baselines reduce accuracy but simplify correspondence.",
          es: "La línea base es la separación física entre centros de cámara - líneas base más largas mejoran precisión de profundidad pero pueden causar dificultades de coincidencia; líneas base más cortas reducen precisión pero simplifican correspondencia.",
          de: "Die Basislinie ist die physische Trennung zwischen Kamerazentren - längere Basislinien verbessern Tiefengenauigkeit können aber Matching-Schwierigkeiten verursachen; kürzere Basislinien reduzieren Genauigkeit vereinfachen aber Korrespondenz.",
          nl: "De basislijn is de fysieke scheiding tussen cameracentra - langere basislijnen verbeteren dieptenauwkeurigheid maar kunnen matchingmoeilijkheden veroorzaken; kortere basislijnen verminderen nauwkeurigheid maar vereenvoudigen correspondentie."
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