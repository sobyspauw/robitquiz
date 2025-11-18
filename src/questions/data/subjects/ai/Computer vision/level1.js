// Computer Vision Quiz - Level 1: Basic Computer Vision
(function() {
  const level1 = {
    name: {
      en: "Computer Vision Level 1",
      es: "Visión por Computadora Nivel 1",
      de: "Computer Vision Stufe 1",
      nl: "Computer Vision Level 1"
    },
    questions: [
      {
        question: {
          en: "What does computer vision help computers do?",
          es: "¿Qué ayuda la visión por computadora a hacer a las computadoras?",
          de: "Was hilft Computer Vision Computern zu tun?",
          nl: "Wat helpt computer vision computers te doen?"
        },
        options: [
          { en: "See and understand images", es: "Ver y entender imágenes", de: "Bilder sehen und verstehen", nl: "Afbeeldingen zien en begrijpen" },
          { en: "Hear sounds better", es: "Escuchar sonidos mejor", de: "Geräusche besser hören", nl: "Geluiden beter horen" },
          { en: "Type faster", es: "Escribir más rápido", de: "Schneller tippen", nl: "Sneller typen" },
          { en: "Calculate numbers", es: "Calcular números", de: "Zahlen berechnen", nl: "Getallen berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision allows machines to process and analyze visual information from the world, just like human eyes and brain work together.",
          es: "La visión por computadora permite a las máquinas procesar y analizar información visual del mundo, como los ojos humanos y el cerebro trabajan juntos.",
          de: "Computer Vision ermöglicht Maschinen visuelle Informationen aus der Welt zu verarbeiten und zu analysieren, wie menschliche Augen und Gehirn zusammenarbeiten.",
          nl: "Computer vision stelt machines in staat om visuele informatie uit de wereld te verwerken en analyseren, net zoals menselijke ogen en hersenen samenwerken."
        }
      },
      {
        question: {
          en: "Which is a common use of computer vision in daily life?",
          es: "¿Cuál es un uso común de visión por computadora en la vida diaria?",
          de: "Was ist eine häufige Anwendung von Computer Vision im täglichen Leben?",
          nl: "Wat is een veelvoorkomend gebruik van computer vision in het dagelijks leven?"
        },
        options: [
          { en: "Photo tagging on social media", es: "Etiquetado de fotos en redes sociales", de: "Foto-Tagging in sozialen Medien", nl: "Foto-tagging op sociale media" },
          { en: "Making coffee", es: "Hacer café", de: "Kaffee machen", nl: "Koffie zetten" },
          { en: "Playing music", es: "Reproducir música", de: "Musik abspielen", nl: "Muziek afspelen" },
          { en: "Sending emails", es: "Enviar correos", de: "E-Mails senden", nl: "E-mails verzenden" }
        ],
        correct: 0,
        explanation: {
          en: "Social media platforms use computer vision to automatically recognize faces and suggest who to tag in photos.",
          es: "Las plataformas de redes sociales usan visión por computadora para reconocer automáticamente caras y sugerir a quién etiquetar en fotos.",
          de: "Social Media Plattformen nutzen Computer Vision um automatisch Gesichter zu erkennen und vorzuschlagen wen man in Fotos taggen soll.",
          nl: "Sociale media platforms gebruiken computer vision om automatisch gezichten te herkennen en voor te stellen wie te taggen in foto's."
        }
      },
      {
        question: {
          en: "What are pixels in computer vision?",
          es: "¿Qué son los píxeles en visión por computadora?",
          de: "Was sind Pixel in Computer Vision?",
          nl: "Wat zijn pixels in computer vision?"
        },
        options: [
          { en: "Tiny dots that make up digital images", es: "Pequeños puntos que forman las imágenes digitales", de: "Winzige Punkte die digitale Bilder bilden", nl: "Kleine puntjes die digitale afbeeldingen vormen" },
          { en: "Special computer programs", es: "Programas especiales de computadora", de: "Spezielle Computerprogramme", nl: "Speciale computerprogramma's" },
          { en: "Type of camera lens", es: "Tipo de lente de cámara", de: "Art von Kameraobjektiv", nl: "Type cameralens" },
          { en: "Computer memory units", es: "Unidades de memoria de computadora", de: "Computer-Speichereinheiten", nl: "Computer geheugen eenheden" }
        ],
        correct: 0,
        explanation: {
          en: "Pixels are the smallest individual elements in a digital image. Each pixel contains color information that computers can analyze.",
          es: "Los píxeles son los elementos individuales más pequeños en una imagen digital. Cada píxel contiene información de color que las computadoras pueden analizar.",
          de: "Pixel sind die kleinsten individuellen Elemente in einem digitalen Bild. Jeder Pixel enthält Farbinformationen die Computer analysieren können.",
          nl: "Pixels zijn de kleinste individuele elementen in een digitaal beeld. Elke pixel bevat kleurinformatie die computers kunnen analyseren."
        }
      },
      {
        question: {
          en: "What does RGB stand for in computer vision?",
          es: "¿Qué significa RGB en visión por computadora?",
          de: "Wofür steht RGB in Computer Vision?",
          nl: "Waar staat RGB voor in computer vision?"
        },
        options: [
          { en: "Red, Green, Blue", es: "Rojo, Verde, Azul", de: "Rot, Grün, Blau", nl: "Rood, Groen, Blauw" },
          { en: "Really Good Brightness", es: "Realmente Buen Brillo", de: "Wirklich Gute Helligkeit", nl: "Echt Goede Helderheid" },
          { en: "Robot Guided Brain", es: "Cerebro Guiado por Robot", de: "Robotergesteuertes Gehirn", nl: "Robot Geleide Hersenen" },
          { en: "Random Generated Bits", es: "Bits Generados Aleatoriamente", de: "Zufällig Generierte Bits", nl: "Willekeurig Gegenereerde Bits" }
        ],
        correct: 0,
        explanation: {
          en: "RGB represents the three primary colors (Red, Green, Blue) that combine to create all colors in digital images.",
          es: "RGB representa los tres colores primarios (Rojo, Verde, Azul) que se combinan para crear todos los colores en imágenes digitales.",
          de: "RGB repräsentiert die drei Grundfarben (Rot, Grün, Blau) die sich kombinieren um alle Farben in digitalen Bildern zu erzeugen.",
          nl: "RGB vertegenwoordigt de drie primaire kleuren (Rood, Groen, Blauw) die combineren om alle kleuren in digitale afbeeldingen te creëren."
        }
      },
      {
        question: {
          en: "Which of these is NOT a typical application of computer vision?",
          es: "¿Cuál de estos NO es una aplicación típica de visión por computadora?",
          de: "Welches ist KEINE typische Anwendung von Computer Vision?",
          nl: "Welke van deze is GEEN typische toepassing van computer vision?"
        },
        options: [
          { en: "Writing poetry", es: "Escribir poesía", de: "Gedichte schreiben", nl: "Poëzie schrijven" },
          { en: "Reading license plates", es: "Leer placas de matrícula", de: "Nummernschilder lesen", nl: "Kentekenplaten lezen" },
          { en: "Detecting tumors in medical scans", es: "Detectar tumores en escáneres médicos", de: "Tumore in medizinischen Scans erkennen", nl: "Tumoren detecteren in medische scans" },
          { en: "Counting people in crowds", es: "Contar personas en multitudes", de: "Menschen in Menschenmengen zählen", nl: "Mensen tellen in menigten" }
        ],
        correct: 0,
        explanation: {
          en: "Writing poetry is a creative language task that doesn't involve visual analysis, while the other options all require processing and understanding visual information.",
          es: "Escribir poesía es una tarea creativa de lenguaje que no involucra análisis visual, mientras que las otras opciones requieren procesar y entender información visual.",
          de: "Gedichte schreiben ist eine kreative Sprachaufgabe die keine visuelle Analyse beinhaltet, während die anderen Optionen alle das Verarbeiten und Verstehen visueller Informationen erfordern.",
          nl: "Poëzie schrijven is een creatieve taaltaak die geen visuele analyse behelst, terwijl de andere opties allemaal het verwerken en begrijpen van visuele informatie vereisen."
        }
      },
      {
        question: {
          en: "What is the main goal of computer vision?",
          es: "¿Cuál es el objetivo principal de la visión por computadora?",
          de: "Was ist das Hauptziel von Computer Vision?",
          nl: "Wat is het hoofddoel van computer vision?"
        },
        options: [
          { en: "To teach computers to see like humans", es: "Enseñar a las computadoras a ver como humanos", de: "Computern beibringen wie Menschen zu sehen", nl: "Computers leren zien zoals mensen" },
          { en: "To make computers faster", es: "Hacer computadoras más rápidas", de: "Computer schneller machen", nl: "Computers sneller maken" },
          { en: "To create better keyboards", es: "Crear mejores teclados", de: "Bessere Tastaturen erstellen", nl: "Betere toetsenborden maken" },
          { en: "To improve internet speed", es: "Mejorar velocidad de internet", de: "Internetgeschwindigkeit verbessern", nl: "Internetsnelheid verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision aims to give machines the ability to interpret and understand visual information from the world, similar to human vision.",
          es: "La visión por computadora busca dar a las máquinas la capacidad de interpretar y entender información visual del mundo, similar a la visión humana.",
          de: "Computer Vision zielt darauf ab, Maschinen die Fähigkeit zu geben, visuelle Informationen aus der Welt zu interpretieren und zu verstehen, ähnlich der menschlichen Sicht.",
          nl: "Computer vision heeft als doel machines de mogelijkheid te geven visuele informatie uit de wereld te interpreteren en begrijpen, vergelijkbaar met menselijk zicht."
        }
      },
      {
        question: {
          en: "What does a webcam help computers do?",
          es: "¿Qué ayuda una cámara web a hacer a las computadoras?",
          de: "Was hilft eine Webcam Computern zu tun?",
          nl: "Wat helpt een webcam computers te doen?"
        },
        options: [
          { en: "Capture images and videos", es: "Capturar imágenes y videos", de: "Bilder und Videos aufnehmen", nl: "Afbeeldingen en video's vastleggen" },
          { en: "Play music", es: "Reproducir música", de: "Musik abspielen", nl: "Muziek afspelen" },
          { en: "Print documents", es: "Imprimir documentos", de: "Dokumente drucken", nl: "Documenten printen" },
          { en: "Connect to wifi", es: "Conectar a wifi", de: "Mit WLAN verbinden", nl: "Verbinden met wifi" }
        ],
        correct: 0,
        explanation: {
          en: "A webcam is the 'eyes' of a computer, capturing visual information that computer vision algorithms can then process and analyze.",
          es: "Una cámara web son los 'ojos' de una computadora, capturando información visual que los algoritmos de visión por computadora pueden procesar y analizar.",
          de: "Eine Webcam sind die 'Augen' eines Computers, die visuelle Informationen erfassen, die Computer Vision Algorithmen dann verarbeiten und analysieren können.",
          nl: "Een webcam zijn de 'ogen' van een computer, die visuele informatie vastlegt die computer vision algoritmen dan kunnen verwerken en analyseren."
        }
      },
      {
        question: {
          en: "What is image recognition?",
          es: "¿Qué es el reconocimiento de imágenes?",
          de: "Was ist Bilderkennung?",
          nl: "Wat is beeldherkenning?"
        },
        options: [
          { en: "When computers can identify what's in a picture", es: "Cuando las computadoras pueden identificar qué hay en una imagen", de: "Wenn Computer identifizieren können was in einem Bild ist", nl: "Wanneer computers kunnen identificeren wat er in een afbeelding staat" },
          { en: "Taking better photos", es: "Tomar mejores fotos", de: "Bessere Fotos machen", nl: "Betere foto's maken" },
          { en: "Editing image colors", es: "Editar colores de imagen", de: "Bildfarben bearbeiten", nl: "Afbeeldingskleuren bewerken" },
          { en: "Saving images to computer", es: "Guardar imágenes en computadora", de: "Bilder auf Computer speichern", nl: "Afbeeldingen opslaan op computer" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition allows computers to identify and classify objects, people, or scenes in digital images, like recognizing a cat in a photo.",
          es: "El reconocimiento de imágenes permite a las computadoras identificar y clasificar objetos, personas o escenas en imágenes digitales, como reconocer un gato en una foto.",
          de: "Bilderkennung ermöglicht Computern Objekte, Personen oder Szenen in digitalen Bildern zu identifizieren und zu klassifizieren, wie das Erkennen einer Katze in einem Foto.",
          nl: "Beeldherkenning stelt computers in staat objecten, mensen of scènes in digitale afbeeldingen te identificeren en classificeren, zoals het herkennen van een kat in een foto."
        }
      },
      {
        question: {
          en: "What makes a digital image?",
          es: "¿Qué forma una imagen digital?",
          de: "Was macht ein digitales Bild aus?",
          nl: "Wat maakt een digitale afbeelding?"
        },
        options: [
          { en: "Thousands of tiny colored dots (pixels)", es: "Miles de pequeños puntos de colores (píxeles)", de: "Tausende winziger farbiger Punkte (Pixel)", nl: "Duizenden kleine gekleurde puntjes (pixels)" },
          { en: "Magic computer code", es: "Código mágico de computadora", de: "Magischer Computercode", nl: "Magische computercode" },
          { en: "Special paper", es: "Papel especial", de: "Spezielles Papier", nl: "Speciaal papier" },
          { en: "Invisible light rays", es: "Rayos de luz invisibles", de: "Unsichtbare Lichtstrahlen", nl: "Onzichtbare lichtstralen" }
        ],
        correct: 0,
        explanation: {
          en: "Digital images are made up of pixels - tiny squares that each contain color information. When you put many pixels together, they form the complete image.",
          es: "Las imágenes digitales están hechas de píxeles - pequeños cuadrados que cada uno contiene información de color. Cuando juntas muchos píxeles, forman la imagen completa.",
          de: "Digitale Bilder bestehen aus Pixeln - winzigen Quadraten die jeweils Farbinformationen enthalten. Wenn man viele Pixel zusammenfügt, bilden sie das vollständige Bild.",
          nl: "Digitale afbeeldingen bestaan uit pixels - kleine vierkantjes die elk kleurinformatie bevatten. Wanneer je veel pixels samenvoegt, vormen ze de complete afbeelding."
        }
      },
      {
        question: {
          en: "What can computer vision help doctors do?",
          es: "¿Qué puede ayudar la visión por computadora a hacer a los médicos?",
          de: "Was kann Computer Vision Ärzten helfen zu tun?",
          nl: "Wat kan computer vision artsen helpen doen?"
        },
        options: [
          { en: "Look at X-rays and medical scans", es: "Mirar radiografías y escáneres médicos", de: "Röntgenbilder und medizinische Scans betrachten", nl: "Röntgenfoto's en medische scans bekijken" },
          { en: "Cook better food", es: "Cocinar mejor comida", de: "Besseres Essen kochen", nl: "Beter eten koken" },
          { en: "Drive faster cars", es: "Conducir autos más rápidos", de: "Schnellere Autos fahren", nl: "Snellere auto's rijden" },
          { en: "Write better stories", es: "Escribir mejores historias", de: "Bessere Geschichten schreiben", nl: "Betere verhalen schrijven" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision helps doctors analyze medical images like X-rays, CT scans, and MRIs to detect diseases and plan treatments more accurately.",
          es: "La visión por computadora ayuda a los médicos a analizar imágenes médicas como radiografías, tomografías y resonancias para detectar enfermedades y planificar tratamientos más precisamente.",
          de: "Computer Vision hilft Ärzten medizinische Bilder wie Röntgenaufnahmen, CT-Scans und MRTs zu analysieren um Krankheiten zu erkennen und Behandlungen genauer zu planen.",
          nl: "Computer vision helpt artsen medische beelden zoals röntgenfoto's, CT-scans en MRI's te analyseren om ziektes te detecteren en behandelingen nauwkeuriger te plannen."
        }
      },
      {
        question: {
          en: "What happens when you take a selfie with face filters?",
          es: "¿Qué pasa cuando tomas una selfie con filtros de cara?",
          de: "Was passiert wenn du ein Selfie mit Gesichtsfiltern machst?",
          nl: "Wat gebeurt er wanneer je een selfie maakt met gezichtsfilters?"
        },
        options: [
          { en: "Computer vision finds your face and adds effects", es: "La visión por computadora encuentra tu cara y añade efectos", de: "Computer Vision findet dein Gesicht und fügt Effekte hinzu", nl: "Computer vision vindt je gezicht en voegt effecten toe" },
          { en: "The camera becomes magical", es: "La cámara se vuelve mágica", de: "Die Kamera wird magisch", nl: "De camera wordt magisch" },
          { en: "Your phone gets smarter", es: "Tu teléfono se vuelve más inteligente", de: "Dein Handy wird klüger", nl: "Je telefoon wordt slimmer" },
          { en: "The internet adds the filters", es: "Internet añade los filtros", de: "Das Internet fügt die Filter hinzu", nl: "Het internet voegt de filters toe" }
        ],
        correct: 0,
        explanation: {
          en: "Face filters use computer vision to detect your facial features in real-time, then overlay digital effects like animal ears or funny glasses on your face.",
          es: "Los filtros de cara usan visión por computadora para detectar tus características faciales en tiempo real, luego superponen efectos digitales como orejas de animales o gafas divertidas en tu cara.",
          de: "Gesichtsfilter nutzen Computer Vision um deine Gesichtszüge in Echtzeit zu erkennen, dann überlagern sie digitale Effekte wie Tierohren oder lustige Brillen auf dein Gesicht.",
          nl: "Gezichtsfilters gebruiken computer vision om je gezichtskenmerken in real-time te detecteren, dan leggen ze digitale effecten zoals dierenoren of grappige brillen over je gezicht."
        }
      },
      {
        question: {
          en: "What does OCR stand for?",
          es: "¿Qué significa OCR?",
          de: "Wofür steht OCR?",
          nl: "Waar staat OCR voor?"
        },
        options: [
          { en: "Optical Character Recognition", es: "Reconocimiento Óptico de Caracteres", de: "Optische Zeichenerkennung", nl: "Optische Karakterherkenning" },
          { en: "Online Computer Reading", es: "Lectura de Computadora en Línea", de: "Online Computer Lesen", nl: "Online Computer Lezen" },
          { en: "Original Color Rendering", es: "Renderizado de Color Original", de: "Originale Farbwiedergabe", nl: "Originele Kleurweergave" },
          { en: "Outdoor Camera Recording", es: "Grabación de Cámara Exterior", de: "Außenkamera-Aufzeichnung", nl: "Buitencamera Opname" }
        ],
        correct: 0,
        explanation: {
          en: "OCR allows computers to read text from images, converting printed or handwritten text into digital text that can be edited and searched.",
          es: "OCR permite a las computadoras leer texto de imágenes, convirtiendo texto impreso o manuscrito en texto digital que puede editarse y buscarse.",
          de: "OCR ermöglicht Computern Text aus Bildern zu lesen, wandelt gedruckten oder handgeschriebenen Text in digitalen Text um der bearbeitet und durchsucht werden kann.",
          nl: "OCR stelt computers in staat tekst uit afbeeldingen te lezen, zet gedrukte of handgeschreven tekst om in digitale tekst die bewerkt en doorzocht kan worden."
        }
      },
      {
        question: {
          en: "How do smartphones unlock with your face?",
          es: "¿Cómo se desbloquean los smartphones con tu cara?",
          de: "Wie entsperren sich Smartphones mit deinem Gesicht?",
          nl: "Hoe ontgrendelen smartphones met je gezicht?"
        },
        options: [
          { en: "They use computer vision to recognize your unique facial features", es: "Usan visión por computadora para reconocer tus características faciales únicas", de: "Sie nutzen Computer Vision um deine einzigartigen Gesichtszüge zu erkennen", nl: "Ze gebruiken computer vision om je unieke gezichtskenmerken te herkennen" },
          { en: "They remember your name", es: "Recuerdan tu nombre", de: "Sie merken sich deinen Namen", nl: "Ze onthouden je naam" },
          { en: "They scan your fingerprint through the camera", es: "Escanean tu huella digital a través de la cámara", de: "Sie scannen deinen Fingerabdruck durch die Kamera", nl: "Ze scannen je vingerafdruk via de camera" },
          { en: "They connect to your social media", es: "Se conectan a tus redes sociales", de: "Sie verbinden sich mit deinen sozialen Medien", nl: "Ze verbinden met je sociale media" }
        ],
        correct: 0,
        explanation: {
          en: "Face ID uses advanced computer vision to create a detailed 3D map of your face, measuring distances between features to create a unique facial signature.",
          es: "Face ID usa visión por computadora avanzada para crear un mapa 3D detallado de tu cara, midiendo distancias entre características para crear una firma facial única.",
          de: "Face ID nutzt fortgeschrittene Computer Vision um eine detaillierte 3D-Karte deines Gesichts zu erstellen, misst Abstände zwischen Merkmalen um eine einzigartige Gesichtssignatur zu erstellen.",
          nl: "Face ID gebruikt geavanceerde computer vision om een gedetailleerde 3D-kaart van je gezicht te maken, meet afstanden tussen kenmerken om een unieke gezichtshandtekening te creëren."
        }
      },
      {
        question: {
          en: "What is the simplest form of computer vision?",
          es: "¿Cuál es la forma más simple de visión por computadora?",
          de: "Was ist die einfachste Form von Computer Vision?",
          nl: "Wat is de eenvoudigste vorm van computer vision?"
        },
        options: [
          { en: "Detecting if something is present or not in an image", es: "Detectar si algo está presente o no en una imagen", de: "Erkennen ob etwas in einem Bild vorhanden ist oder nicht", nl: "Detecteren of iets aanwezig is of niet in een afbeelding" },
          { en: "Creating new images", es: "Crear nuevas imágenes", de: "Neue Bilder erstellen", nl: "Nieuwe afbeeldingen maken" },
          { en: "Changing image colors", es: "Cambiar colores de imagen", de: "Bildfarben ändern", nl: "Afbeeldingskleuren veranderen" },
          { en: "Making images bigger", es: "Hacer imágenes más grandes", de: "Bilder größer machen", nl: "Afbeeldingen groter maken" }
        ],
        correct: 0,
        explanation: {
          en: "Binary classification (yes/no detection) is the foundation of computer vision - simply determining if a specific object or pattern exists in an image.",
          es: "La clasificación binaria (detección sí/no) es la base de la visión por computadora - simplemente determinar si un objeto o patrón específico existe en una imagen.",
          de: "Binäre Klassifikation (Ja/Nein-Erkennung) ist die Grundlage von Computer Vision - einfach bestimmen ob ein spezifisches Objekt oder Muster in einem Bild existiert.",
          nl: "Binaire classificatie (ja/nee detectie) is de basis van computer vision - simpelweg bepalen of een specifiek object of patroon bestaat in een afbeelding."
        }
      },
      {
        question: {
          en: "What do computer vision systems need to 'see'?",
          es: "¿Qué necesitan los sistemas de visión por computadora para 'ver'?",
          de: "Was brauchen Computer Vision Systeme um zu 'sehen'?",
          nl: "Wat hebben computer vision systemen nodig om te 'zien'?"
        },
        options: [
          { en: "Light and a camera or sensor", es: "Luz y una cámara o sensor", de: "Licht und eine Kamera oder Sensor", nl: "Licht en een camera of sensor" },
          { en: "Special glasses", es: "Gafas especiales", de: "Spezielle Brille", nl: "Speciale bril" },
          { en: "Human eyes nearby", es: "Ojos humanos cerca", de: "Menschliche Augen in der Nähe", nl: "Menselijke ogen in de buurt" },
          { en: "Magic powers", es: "Poderes mágicos", de: "Magische Kräfte", nl: "Magische krachten" }
        ],
        correct: 0,
        explanation: {
          en: "Just like human vision needs light to see, computer vision systems require light reflecting off objects and a camera or sensor to capture that light information.",
          es: "Así como la visión humana necesita luz para ver, los sistemas de visión por computadora requieren luz reflejándose en objetos y una cámara o sensor para capturar esa información de luz.",
          de: "Genau wie menschliche Sicht Licht zum Sehen braucht, benötigen Computer Vision Systeme Licht das von Objekten reflektiert wird und eine Kamera oder Sensor um diese Lichtinformation zu erfassen.",
          nl: "Net zoals menselijk zicht licht nodig heeft om te zien, hebben computer vision systemen licht nodig dat weerkaatst van objecten en een camera of sensor om die lichtinformatie vast te leggen."
        }
      },
      {
        question: {
          en: "What is a simple example of computer vision in everyday life?",
          es: "¿Cuál es un ejemplo simple de visión por computadora en la vida cotidiana?",
          de: "Was ist ein einfaches Beispiel für Computer Vision im Alltag?",
          nl: "Wat is een eenvoudig voorbeeld van computer vision in het dagelijks leven?"
        },
        options: [
          { en: "Automatic doors that open when you approach", es: "Puertas automáticas que se abren cuando te acercas", de: "Automatische Türen die sich öffnen wenn du dich näherst", nl: "Automatische deuren die openen wanneer je nadert" },
          { en: "Microwaves heating food", es: "Microondas calentando comida", de: "Mikrowellen die Essen erhitzen", nl: "Magnetrons die eten verwarmen" },
          { en: "Radios playing music", es: "Radios reproduciendo música", de: "Radios die Musik spielen", nl: "Radio's die muziek afspelen" },
          { en: "Phones making calls", es: "Teléfonos haciendo llamadas", de: "Telefone die Anrufe tätigen", nl: "Telefoons die bellen" }
        ],
        correct: 0,
        explanation: {
          en: "Automatic doors use motion sensors and simple computer vision to detect when people approach, then trigger the door to open automatically.",
          es: "Las puertas automáticas usan sensores de movimiento y visión por computadora simple para detectar cuando las personas se acercan, luego activan la puerta para abrirse automáticamente.",
          de: "Automatische Türen nutzen Bewegungssensoren und einfache Computer Vision um zu erkennen wenn Menschen sich nähern, dann lösen sie aus dass sich die Tür automatisch öffnet.",
          nl: "Automatische deuren gebruiken bewegingssensoren en eenvoudige computer vision om te detecteren wanneer mensen naderen, dan activeren ze de deur om automatisch te openen."
        }
      },
      {
        question: {
          en: "What does 'digital' mean in digital images?",
          es: "¿Qué significa 'digital' en imágenes digitales?",
          de: "Was bedeutet 'digital' in digitalen Bildern?",
          nl: "Wat betekent 'digitaal' in digitale afbeeldingen?"
        },
        options: [
          { en: "Made of numbers that computers can understand", es: "Hechas de números que las computadoras pueden entender", de: "Aus Zahlen gemacht die Computer verstehen können", nl: "Gemaakt van nummers die computers kunnen begrijpen" },
          { en: "Made with your fingers", es: "Hechas con tus dedos", de: "Mit deinen Fingern gemacht", nl: "Gemaakt met je vingers" },
          { en: "Very small images", es: "Imágenes muy pequeñas", de: "Sehr kleine Bilder", nl: "Heel kleine afbeeldingen" },
          { en: "Images that move", es: "Imágenes que se mueven", de: "Bilder die sich bewegen", nl: "Afbeeldingen die bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Digital images are represented as numbers (0s and 1s) that computers can process, store, and manipulate, unlike traditional film photographs.",
          es: "Las imágenes digitales se representan como números (0s y 1s) que las computadoras pueden procesar, almacenar y manipular, a diferencia de las fotografías tradicionales en película.",
          de: "Digitale Bilder werden als Zahlen (0en und 1en) dargestellt die Computer verarbeiten, speichern und manipulieren können, im Gegensatz zu traditionellen Filmfotografien.",
          nl: "Digitale afbeeldingen worden weergegeven als nummers (0en en 1en) die computers kunnen verwerken, opslaan en manipuleren, in tegenstelling tot traditionele filmfoto's."
        }
      },
      {
        question: {
          en: "Why is computer vision useful for security cameras?",
          es: "¿Por qué es útil la visión por computadora para cámaras de seguridad?",
          de: "Warum ist Computer Vision nützlich für Sicherheitskameras?",
          nl: "Waarom is computer vision nuttig voor beveiligingscamera's?"
        },
        options: [
          { en: "It can automatically detect unusual activities or people", es: "Puede detectar automáticamente actividades inusuales o personas", de: "Es kann automatisch ungewöhnliche Aktivitäten oder Personen erkennen", nl: "Het kan automatisch ongewone activiteiten of mensen detecteren" },
          { en: "It makes cameras cheaper", es: "Hace las cámaras más baratas", de: "Es macht Kameras billiger", nl: "Het maakt camera's goedkoper" },
          { en: "It improves camera battery life", es: "Mejora la duración de la batería de la cámara", de: "Es verbessert die Akkulaufzeit der Kamera", nl: "Het verbetert de batterijduur van de camera" },
          { en: "It makes cameras invisible", es: "Hace las cámaras invisibles", de: "Es macht Kameras unsichtbar", nl: "Het maakt camera's onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision enables security cameras to automatically monitor areas, detect motion, recognize faces, and alert security when something suspicious happens.",
          es: "La visión por computadora permite a las cámaras de seguridad monitorear áreas automáticamente, detectar movimiento, reconocer caras y alertar seguridad cuando algo sospechoso sucede.",
          de: "Computer Vision ermöglicht Sicherheitskameras Bereiche automatisch zu überwachen, Bewegung zu erkennen, Gesichter zu erkennen und Sicherheit zu alarmieren wenn etwas Verdächtiges passiert.",
          nl: "Computer vision stelt beveiligingscamera's in staat gebieden automatisch te monitoren, beweging te detecteren, gezichten te herkennen en beveiliging te waarschuwen wanneer er iets verdachts gebeurt."
        }
      },
      {
        question: {
          en: "What makes computer vision different from just storing pictures?",
          es: "¿Qué hace diferente la visión por computadora de solo almacenar imágenes?",
          de: "Was macht Computer Vision anders als nur Bilder zu speichern?",
          nl: "Wat maakt computer vision anders dan alleen plaatjes opslaan?"
        },
        options: [
          { en: "Computer vision can understand and analyze what's in the pictures", es: "La visión por computadora puede entender y analizar qué hay en las imágenes", de: "Computer Vision kann verstehen und analysieren was in den Bildern ist", nl: "Computer vision kan begrijpen en analyseren wat er in de afbeeldingen staat" },
          { en: "Computer vision stores pictures faster", es: "La visión por computadora almacena imágenes más rápido", de: "Computer Vision speichert Bilder schneller", nl: "Computer vision slaat afbeeldingen sneller op" },
          { en: "Computer vision uses less memory", es: "La visión por computadora usa menos memoria", de: "Computer Vision nutzt weniger Speicher", nl: "Computer vision gebruikt minder geheugen" },
          { en: "Computer vision makes pictures prettier", es: "La visión por computadora hace las imágenes más bonitas", de: "Computer Vision macht Bilder schöner", nl: "Computer vision maakt afbeeldingen mooier" }
        ],
        correct: 0,
        explanation: {
          en: "Unlike simple image storage, computer vision adds intelligence - it can identify objects, understand scenes, and make decisions based on what it sees.",
          es: "A diferencia del almacenamiento simple de imágenes, la visión por computadora añade inteligencia - puede identificar objetos, entender escenas y tomar decisiones basadas en lo que ve.",
          de: "Im Gegensatz zu einfacher Bildspeicherung fügt Computer Vision Intelligenz hinzu - es kann Objekte identifizieren, Szenen verstehen und Entscheidungen basierend auf dem was es sieht treffen.",
          nl: "In tegenstelling tot eenvoudige afbeeldingsopslag voegt computer vision intelligentie toe - het kan objecten identificeren, scènes begrijpen en beslissingen nemen gebaseerd op wat het ziet."
        }
      },
      {
        question: {
          en: "What is the first step computers take when analyzing an image?",
          es: "¿Cuál es el primer paso que toman las computadoras al analizar una imagen?",
          de: "Was ist der erste Schritt den Computer beim Analysieren eines Bildes machen?",
          nl: "Wat is de eerste stap die computers nemen bij het analyseren van een afbeelding?"
        },
        options: [
          { en: "Convert the image into numbers", es: "Convertir la imagen en números", de: "Das Bild in Zahlen umwandeln", nl: "De afbeelding omzetten naar nummers" },
          { en: "Make the image bigger", es: "Hacer la imagen más grande", de: "Das Bild größer machen", nl: "De afbeelding groter maken" },
          { en: "Change the image colors", es: "Cambiar los colores de la imagen", de: "Die Bildfarben ändern", nl: "De afbeeldingskleuren veranderen" },
          { en: "Save the image to memory", es: "Guardar la imagen en memoria", de: "Das Bild im Speicher sichern", nl: "De afbeelding opslaan in geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "Before computers can analyze an image, they must first convert all the visual information into numerical data that they can process and understand.",
          es: "Antes de que las computadoras puedan analizar una imagen, primero deben convertir toda la información visual en datos numéricos que puedan procesar y entender.",
          de: "Bevor Computer ein Bild analysieren können, müssen sie zuerst alle visuellen Informationen in numerische Daten umwandeln die sie verarbeiten und verstehen können.",
          nl: "Voordat computers een afbeelding kunnen analyseren, moeten ze eerst alle visuele informatie omzetten naar numerieke data die ze kunnen verwerken en begrijpen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();