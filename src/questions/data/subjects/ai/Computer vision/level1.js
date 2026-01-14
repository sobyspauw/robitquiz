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
      },
      {
        question: {
          en: "What can computer vision help self-driving cars do?",
          es: "¿Qué puede ayudar la visión por computadora a hacer a los autos autónomos?",
          de: "Was kann Computer Vision selbstfahrenden Autos helfen zu tun?",
          nl: "Wat kan computer vision zelfrijdende auto's helpen doen?"
        },
        options: [
          { en: "See roads, pedestrians, and traffic signs", es: "Ver carreteras, peatones y señales de tráfico", de: "Straßen, Fußgänger und Verkehrsschilder sehen", nl: "Wegen, voetgangers en verkeersborden zien" },
          { en: "Play music louder", es: "Reproducir música más fuerte", de: "Musik lauter spielen", nl: "Muziek luider afspelen" },
          { en: "Use less fuel", es: "Usar menos combustible", de: "Weniger Kraftstoff verbrauchen", nl: "Minder brandstof gebruiken" },
          { en: "Change tire pressure", es: "Cambiar presión de neumáticos", de: "Reifendruck ändern", nl: "Bandenspanning wijzigen" }
        ],
        correct: 0,
        explanation: {
          en: "Self-driving cars use computer vision through cameras to detect lanes, read traffic signs, identify pedestrians, and navigate safely on roads.",
          es: "Los autos autónomos usan visión por computadora a través de cámaras para detectar carriles, leer señales de tráfico, identificar peatones y navegar de forma segura en carreteras.",
          de: "Selbstfahrende Autos nutzen Computer Vision durch Kameras um Fahrspuren zu erkennen, Verkehrsschilder zu lesen, Fußgänger zu identifizieren und sicher auf Straßen zu navigieren.",
          nl: "Zelfrijdende auto's gebruiken computer vision via camera's om rijstroken te detecteren, verkeersborden te lezen, voetgangers te identificeren en veilig op wegen te navigeren."
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
          { en: "Finding and identifying specific things in images", es: "Encontrar e identificar cosas específicas en imágenes", de: "Spezifische Dinge in Bildern finden und identifizieren", nl: "Specifieke dingen vinden en identificeren in afbeeldingen" },
          { en: "Deleting unwanted objects", es: "Eliminar objetos no deseados", de: "Unerwünschte Objekte löschen", nl: "Ongewenste objecten verwijderen" },
          { en: "Making objects larger", es: "Hacer objetos más grandes", de: "Objekte größer machen", nl: "Objecten groter maken" },
          { en: "Creating new objects", es: "Crear nuevos objetos", de: "Neue Objekte erstellen", nl: "Nieuwe objecten maken" }
        ],
        correct: 0,
        explanation: {
          en: "Object detection locates and classifies multiple objects within an image, drawing boxes around them and labeling what they are, like finding all cars in a street photo.",
          es: "La detección de objetos localiza y clasifica múltiples objetos dentro de una imagen, dibujando cajas alrededor de ellos y etiquetando qué son, como encontrar todos los autos en una foto de calle.",
          de: "Objekterkennung lokalisiert und klassifiziert mehrere Objekte in einem Bild, zeichnet Kästchen um sie herum und beschriftet was sie sind, wie das Finden aller Autos in einem Straßenfoto.",
          nl: "Objectdetectie lokaliseert en classificeert meerdere objecten binnen een afbeelding, tekent vakken eromheen en labelt wat ze zijn, zoals het vinden van alle auto's in een straatfoto."
        }
      },
      {
        question: {
          en: "How does a barcode scanner work?",
          es: "¿Cómo funciona un escáner de códigos de barras?",
          de: "Wie funktioniert ein Barcode-Scanner?",
          nl: "Hoe werkt een barcodescanner?"
        },
        options: [
          { en: "It uses computer vision to read the pattern of lines", es: "Usa visión por computadora para leer el patrón de líneas", de: "Es nutzt Computer Vision um das Linienmuster zu lesen", nl: "Het gebruikt computer vision om het patroon van lijnen te lezen" },
          { en: "It weighs the product", es: "Pesa el producto", de: "Es wiegt das Produkt", nl: "Het weegt het product" },
          { en: "It reads a hidden chip", es: "Lee un chip oculto", de: "Es liest einen versteckten Chip", nl: "Het leest een verborgen chip" },
          { en: "It connects to wifi", es: "Se conecta a wifi", de: "Es verbindet sich mit WLAN", nl: "Het verbindt met wifi" }
        ],
        correct: 0,
        explanation: {
          en: "Barcode scanners use simple computer vision to capture an image of the barcode's line pattern, then decode those lines into numbers that represent product information.",
          es: "Los escáneres de códigos de barras usan visión por computadora simple para capturar una imagen del patrón de líneas del código de barras, luego decodifican esas líneas en números que representan información del producto.",
          de: "Barcode-Scanner nutzen einfache Computer Vision um ein Bild des Linienmusters des Barcodes zu erfassen, dann dekodieren sie diese Linien in Zahlen die Produktinformationen darstellen.",
          nl: "Barcodescanners gebruiken eenvoudige computer vision om een afbeelding van het lijnpatroon van de barcode vast te leggen, dan decoderen ze die lijnen naar nummers die productinformatie vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is image resolution?",
          es: "¿Qué es la resolución de imagen?",
          de: "Was ist Bildauflösung?",
          nl: "Wat is beeldresolutie?"
        },
        options: [
          { en: "How many pixels an image contains", es: "Cuántos píxeles contiene una imagen", de: "Wie viele Pixel ein Bild enthält", nl: "Hoeveel pixels een afbeelding bevat" },
          { en: "How bright the image is", es: "Qué tan brillante es la imagen", de: "Wie hell das Bild ist", nl: "Hoe helder de afbeelding is" },
          { en: "What colors the image has", es: "Qué colores tiene la imagen", de: "Welche Farben das Bild hat", nl: "Welke kleuren de afbeelding heeft" },
          { en: "When the photo was taken", es: "Cuándo se tomó la foto", de: "Wann das Foto aufgenommen wurde", nl: "Wanneer de foto genomen werd" }
        ],
        correct: 0,
        explanation: {
          en: "Resolution measures the number of pixels in an image - higher resolution means more pixels and more detail, making it easier for computer vision to analyze.",
          es: "La resolución mide el número de píxeles en una imagen - mayor resolución significa más píxeles y más detalle, facilitando que la visión por computadora analice.",
          de: "Auflösung misst die Anzahl der Pixel in einem Bild - höhere Auflösung bedeutet mehr Pixel und mehr Details, macht es einfacher für Computer Vision zu analysieren.",
          nl: "Resolutie meet het aantal pixels in een afbeelding - hogere resolutie betekent meer pixels en meer detail, maakt het gemakkelijker voor computer vision om te analyseren."
        }
      },
      {
        question: {
          en: "Why do some apps ask for camera permission?",
          es: "¿Por qué algunas aplicaciones piden permiso para la cámara?",
          de: "Warum fragen manche Apps nach Kameraberechtigung?",
          nl: "Waarom vragen sommige apps om cameratoegang?"
        },
        options: [
          { en: "To use computer vision features like scanning or filters", es: "Para usar funciones de visión por computadora como escaneo o filtros", de: "Um Computer Vision Funktionen wie Scannen oder Filter zu nutzen", nl: "Om computer vision functies te gebruiken zoals scannen of filters" },
          { en: "To make the phone work faster", es: "Para hacer que el teléfono funcione más rápido", de: "Um das Telefon schneller zu machen", nl: "Om de telefoon sneller te laten werken" },
          { en: "To save battery life", es: "Para ahorrar batería", de: "Um Akkulaufzeit zu sparen", nl: "Om batterijduur te besparen" },
          { en: "To check if the camera is working", es: "Para verificar si la cámara funciona", de: "Um zu prüfen ob die Kamera funktioniert", nl: "Om te controleren of de camera werkt" }
        ],
        correct: 0,
        explanation: {
          en: "Apps need camera access to capture images or video for computer vision tasks like QR code scanning, augmented reality filters, or photo editing.",
          es: "Las aplicaciones necesitan acceso a la cámara para capturar imágenes o video para tareas de visión por computadora como escaneo de códigos QR, filtros de realidad aumentada o edición de fotos.",
          de: "Apps benötigen Kamerazugriff um Bilder oder Videos für Computer Vision Aufgaben wie QR-Code-Scannen, Augmented Reality Filter oder Fotobearbeitung aufzunehmen.",
          nl: "Apps hebben cameratoegang nodig om afbeeldingen of video vast te leggen voor computer vision taken zoals QR-code scannen, augmented reality filters of fotobewerking."
        }
      },
      {
        question: {
          en: "What can computer vision tell about a traffic light?",
          es: "¿Qué puede decir la visión por computadora sobre un semáforo?",
          de: "Was kann Computer Vision über eine Ampel sagen?",
          nl: "Wat kan computer vision vertellen over een verkeerslicht?"
        },
        options: [
          { en: "What color it is showing (red, yellow, green)", es: "Qué color está mostrando (rojo, amarillo, verde)", de: "Welche Farbe es zeigt (rot, gelb, grün)", nl: "Welke kleur het toont (rood, geel, groen)" },
          { en: "How old the traffic light is", es: "Qué edad tiene el semáforo", de: "Wie alt die Ampel ist", nl: "Hoe oud het verkeerslicht is" },
          { en: "What the traffic light is made of", es: "De qué está hecho el semáforo", de: "Woraus die Ampel gemacht ist", nl: "Waar het verkeerslicht van gemaakt is" },
          { en: "How much electricity it uses", es: "Cuánta electricidad usa", de: "Wie viel Strom es verbraucht", nl: "Hoeveel elektriciteit het gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision can identify which light is illuminated on a traffic signal, helping autonomous vehicles know when to stop, slow down, or go.",
          es: "La visión por computadora puede identificar qué luz está iluminada en una señal de tráfico, ayudando a vehículos autónomos a saber cuándo parar, reducir velocidad o avanzar.",
          de: "Computer Vision kann identifizieren welches Licht an einer Verkehrsampel leuchtet, hilft autonomen Fahrzeugen zu wissen wann sie stoppen, verlangsamen oder fahren sollen.",
          nl: "Computer vision kan identificeren welk licht verlicht is op een verkeerssignaal, helpt autonome voertuigen te weten wanneer te stoppen, vertragen of gaan."
        }
      },
      {
        question: {
          en: "What does grayscale mean in images?",
          es: "¿Qué significa escala de grises en imágenes?",
          de: "Was bedeutet Graustufen in Bildern?",
          nl: "Wat betekent grijswaarden in afbeeldingen?"
        },
        options: [
          { en: "Images that only have shades of black, white, and gray", es: "Imágenes que solo tienen tonos de negro, blanco y gris", de: "Bilder die nur Schattierungen von Schwarz, Weiß und Grau haben", nl: "Afbeeldingen die alleen tinten van zwart, wit en grijs hebben" },
          { en: "Very large images", es: "Imágenes muy grandes", de: "Sehr große Bilder", nl: "Heel grote afbeeldingen" },
          { en: "Blurry images", es: "Imágenes borrosas", de: "Verschwommene Bilder", nl: "Wazige afbeeldingen" },
          { en: "Old photographs", es: "Fotografías antiguas", de: "Alte Fotografien", nl: "Oude foto's" }
        ],
        correct: 0,
        explanation: {
          en: "Grayscale images contain no color - just different levels of brightness from black to white. Computer vision often converts images to grayscale to simplify analysis.",
          es: "Las imágenes en escala de grises no contienen color - solo diferentes niveles de brillo del negro al blanco. La visión por computadora a menudo convierte imágenes a escala de grises para simplificar el análisis.",
          de: "Graustufen-Bilder enthalten keine Farbe - nur verschiedene Helligkeitsstufen von Schwarz bis Weiß. Computer Vision konvertiert oft Bilder in Graustufen um die Analyse zu vereinfachen.",
          nl: "Grijswaarden afbeeldingen bevatten geen kleur - alleen verschillende helderheidsniveaus van zwart naar wit. Computer vision converteert vaak afbeeldingen naar grijswaarden om analyse te vereenvoudigen."
        }
      },
      {
        question: {
          en: "How can computer vision help in sports?",
          es: "¿Cómo puede ayudar la visión por computadora en los deportes?",
          de: "Wie kann Computer Vision im Sport helfen?",
          nl: "Hoe kan computer vision helpen in sport?"
        },
        options: [
          { en: "Track players and ball movement during games", es: "Rastrear jugadores y movimiento del balón durante juegos", de: "Spieler und Ballbewegung während Spielen verfolgen", nl: "Spelers en balbeweging tijdens wedstrijden volgen" },
          { en: "Make players run faster", es: "Hacer que los jugadores corran más rápido", de: "Spieler schneller laufen lassen", nl: "Spelers sneller laten rennen" },
          { en: "Change the weather for outdoor games", es: "Cambiar el clima para juegos al aire libre", de: "Das Wetter für Outdoor-Spiele ändern", nl: "Het weer veranderen voor buitenspelen" },
          { en: "Cook food at stadiums", es: "Cocinar comida en estadios", de: "Essen in Stadien kochen", nl: "Eten koken in stadions" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision analyzes video footage to track player positions, ball trajectory, and game statistics, helping coaches analyze performance and referees make accurate calls.",
          es: "La visión por computadora analiza imágenes de video para rastrear posiciones de jugadores, trayectoria del balón y estadísticas del juego, ayudando a entrenadores a analizar rendimiento y árbitros a tomar decisiones precisas.",
          de: "Computer Vision analysiert Videomaterial um Spielerpositionen, Ballbahn und Spielstatistiken zu verfolgen, hilft Trainern Leistung zu analysieren und Schiedsrichtern genaue Entscheidungen zu treffen.",
          nl: "Computer vision analyseert videobeelden om spelerposities, baltraject en wedstrijdstatistieken te volgen, helpt coaches prestaties te analyseren en scheidsrechters nauwkeurige beslissingen te nemen."
        }
      },
      {
        question: {
          en: "What is a QR code?",
          es: "¿Qué es un código QR?",
          de: "Was ist ein QR-Code?",
          nl: "Wat is een QR-code?"
        },
        options: [
          { en: "A square pattern that computers can read with a camera", es: "Un patrón cuadrado que las computadoras pueden leer con una cámara", de: "Ein quadratisches Muster das Computer mit einer Kamera lesen können", nl: "Een vierkant patroon dat computers met een camera kunnen lezen" },
          { en: "A type of barcode for music", es: "Un tipo de código de barras para música", de: "Eine Art Barcode für Musik", nl: "Een type barcode voor muziek" },
          { en: "A video file format", es: "Un formato de archivo de video", de: "Ein Videodateiformat", nl: "Een videobestandsformaat" },
          { en: "A special kind of printer", es: "Un tipo especial de impresora", de: "Eine spezielle Art von Drucker", nl: "Een speciaal soort printer" }
        ],
        correct: 0,
        explanation: {
          en: "QR (Quick Response) codes are two-dimensional patterns that computer vision can scan with a camera to quickly access websites, payment information, or other data.",
          es: "Los códigos QR (Respuesta Rápida) son patrones bidimensionales que la visión por computadora puede escanear con una cámara para acceder rápidamente a sitios web, información de pago u otros datos.",
          de: "QR (Quick Response) Codes sind zweidimensionale Muster die Computer Vision mit einer Kamera scannen kann um schnell auf Websites, Zahlungsinformationen oder andere Daten zuzugreifen.",
          nl: "QR (Quick Response) codes zijn tweedimensionale patronen die computer vision met een camera kan scannen om snel toegang te krijgen tot websites, betalingsinformatie of andere data."
        }
      },
      {
        question: {
          en: "What makes computer vision 'smart'?",
          es: "¿Qué hace 'inteligente' a la visión por computadora?",
          de: "Was macht Computer Vision 'intelligent'?",
          nl: "Wat maakt computer vision 'slim'?"
        },
        options: [
          { en: "It learns from examples and improves over time", es: "Aprende de ejemplos y mejora con el tiempo", de: "Es lernt aus Beispielen und verbessert sich mit der Zeit", nl: "Het leert van voorbeelden en verbetert in de loop van de tijd" },
          { en: "It uses a lot of electricity", es: "Usa mucha electricidad", de: "Es verbraucht viel Strom", nl: "Het gebruikt veel elektriciteit" },
          { en: "It has a big screen", es: "Tiene una pantalla grande", de: "Es hat einen großen Bildschirm", nl: "Het heeft een groot scherm" },
          { en: "It is expensive to build", es: "Es costoso de construir", de: "Es ist teuer zu bauen", nl: "Het is duur om te bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Modern computer vision uses machine learning - it can be trained on thousands of images to recognize patterns and make accurate predictions, getting better with more data.",
          es: "La visión por computadora moderna usa aprendizaje automático - puede ser entrenada en miles de imágenes para reconocer patrones y hacer predicciones precisas, mejorando con más datos.",
          de: "Moderne Computer Vision nutzt maschinelles Lernen - es kann auf Tausenden von Bildern trainiert werden um Muster zu erkennen und genaue Vorhersagen zu treffen, wird besser mit mehr Daten.",
          nl: "Moderne computer vision gebruikt machine learning - het kan getraind worden op duizenden afbeeldingen om patronen te herkennen en nauwkeurige voorspellingen te maken, wordt beter met meer data."
        }
      },
      {
        question: {
          en: "What can computer vision do in factories?",
          es: "¿Qué puede hacer la visión por computadora en fábricas?",
          de: "Was kann Computer Vision in Fabriken tun?",
          nl: "Wat kan computer vision doen in fabrieken?"
        },
        options: [
          { en: "Check products for defects and quality", es: "Revisar productos por defectos y calidad", de: "Produkte auf Fehler und Qualität prüfen", nl: "Producten controleren op defecten en kwaliteit" },
          { en: "Make machines work slower", es: "Hacer que las máquinas funcionen más lento", de: "Maschinen langsamer arbeiten lassen", nl: "Machines langzamer laten werken" },
          { en: "Change product colors", es: "Cambiar colores de productos", de: "Produktfarben ändern", nl: "Productkleuren veranderen" },
          { en: "Keep workers entertained", es: "Mantener entretenidos a los trabajadores", de: "Arbeiter unterhalten", nl: "Werknemers vermaken" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision systems in factories automatically inspect products on assembly lines, detecting scratches, cracks, or other defects much faster and more consistently than human inspectors.",
          es: "Los sistemas de visión por computadora en fábricas inspeccionan automáticamente productos en líneas de montaje, detectando rayones, grietas u otros defectos mucho más rápido y consistentemente que inspectores humanos.",
          de: "Computer Vision Systeme in Fabriken inspizieren automatisch Produkte auf Fließbändern, erkennen Kratzer, Risse oder andere Fehler viel schneller und konsistenter als menschliche Inspektoren.",
          nl: "Computer vision systemen in fabrieken inspecteren automatisch producten op assemblagelijnen, detecteren krassen, scheuren of andere defecten veel sneller en consistenter dan menselijke inspecteurs."
        }
      },
      {
        question: {
          en: "How does computer vision help with sorting recycling?",
          es: "¿Cómo ayuda la visión por computadora con la clasificación de reciclaje?",
          de: "Wie hilft Computer Vision beim Sortieren von Recycling?",
          nl: "Hoe helpt computer vision met het sorteren van recycling?"
        },
        options: [
          { en: "It identifies different types of materials like plastic, glass, and metal", es: "Identifica diferentes tipos de materiales como plástico, vidrio y metal", de: "Es identifiziert verschiedene Materialarten wie Plastik, Glas und Metall", nl: "Het identificeert verschillende soorten materialen zoals plastic, glas en metaal" },
          { en: "It makes trash disappear", es: "Hace que la basura desaparezca", de: "Es lässt Müll verschwinden", nl: "Het laat afval verdwijnen" },
          { en: "It changes the color of recyclables", es: "Cambia el color de los reciclables", de: "Es ändert die Farbe von Wertstoffen", nl: "Het verandert de kleur van recyclebare materialen" },
          { en: "It weighs the trash", es: "Pesa la basura", de: "Es wiegt den Müll", nl: "Het weegt het afval" }
        ],
        correct: 0,
        explanation: {
          en: "Recycling facilities use computer vision to automatically recognize and sort different materials on conveyor belts, making recycling faster and more efficient.",
          es: "Las instalaciones de reciclaje usan visión por computadora para reconocer y clasificar automáticamente diferentes materiales en cintas transportadoras, haciendo el reciclaje más rápido y eficiente.",
          de: "Recycling-Anlagen nutzen Computer Vision um verschiedene Materialien auf Förderbändern automatisch zu erkennen und zu sortieren, macht Recycling schneller und effizienter.",
          nl: "Recyclingfaciliteiten gebruiken computer vision om automatisch verschillende materialen op transportbanden te herkennen en sorteren, maakt recycling sneller en efficiënter."
        }
      },
      {
        question: {
          en: "What is brightness in an image?",
          es: "¿Qué es el brillo en una imagen?",
          de: "Was ist Helligkeit in einem Bild?",
          nl: "Wat is helderheid in een afbeelding?"
        },
        options: [
          { en: "How light or dark the image appears", es: "Qué tan clara u oscura aparece la imagen", de: "Wie hell oder dunkel das Bild erscheint", nl: "Hoe licht of donker de afbeelding verschijnt" },
          { en: "How many colors the image has", es: "Cuántos colores tiene la imagen", de: "Wie viele Farben das Bild hat", nl: "Hoeveel kleuren de afbeelding heeft" },
          { en: "The size of the image file", es: "El tamaño del archivo de imagen", de: "Die Größe der Bilddatei", nl: "De grootte van het afbeeldingsbestand" },
          { en: "When the image was created", es: "Cuándo se creó la imagen", de: "Wann das Bild erstellt wurde", nl: "Wanneer de afbeelding gemaakt werd" }
        ],
        correct: 0,
        explanation: {
          en: "Brightness refers to the overall lightness or darkness of an image. Computer vision algorithms often analyze brightness to understand lighting conditions and image quality.",
          es: "El brillo se refiere a la claridad u oscuridad general de una imagen. Los algoritmos de visión por computadora a menudo analizan el brillo para entender condiciones de iluminación y calidad de imagen.",
          de: "Helligkeit bezieht sich auf die allgemeine Helligkeit oder Dunkelheit eines Bildes. Computer Vision Algorithmen analysieren oft Helligkeit um Lichtverhältnisse und Bildqualität zu verstehen.",
          nl: "Helderheid verwijst naar de algehele lichtheid of donkerte van een afbeelding. Computer vision algoritmen analyseren vaak helderheid om lichtomstandigheden en beeldkwaliteit te begrijpen."
        }
      },
      {
        question: {
          en: "What can computer vision help postal services do?",
          es: "¿Qué puede ayudar la visión por computadora a hacer a los servicios postales?",
          de: "Was kann Computer Vision Postdiensten helfen zu tun?",
          nl: "Wat kan computer vision postdiensten helpen doen?"
        },
        options: [
          { en: "Read addresses and sort mail automatically", es: "Leer direcciones y clasificar correo automáticamente", de: "Adressen lesen und Post automatisch sortieren", nl: "Adressen lezen en post automatisch sorteren" },
          { en: "Make stamps prettier", es: "Hacer sellos más bonitos", de: "Briefmarken schöner machen", nl: "Postzegels mooier maken" },
          { en: "Deliver mail faster by flying", es: "Entregar correo más rápido volando", de: "Post schneller durch Fliegen zustellen", nl: "Post sneller bezorgen door te vliegen" },
          { en: "Change package colors", es: "Cambiar colores de paquetes", de: "Paketfarben ändern", nl: "Paketkleuren veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Postal services use computer vision with OCR technology to automatically read handwritten and printed addresses on envelopes and packages, routing mail to the correct destinations.",
          es: "Los servicios postales usan visión por computadora con tecnología OCR para leer automáticamente direcciones manuscritas e impresas en sobres y paquetes, dirigiendo el correo a destinos correctos.",
          de: "Postdienste nutzen Computer Vision mit OCR-Technologie um automatisch handgeschriebene und gedruckte Adressen auf Umschlägen und Paketen zu lesen, leiten Post an richtige Ziele.",
          nl: "Postdiensten gebruiken computer vision met OCR-technologie om automatisch handgeschreven en gedrukte adressen op enveloppen en pakketten te lezen, routeren post naar correcte bestemmingen."
        }
      },
      {
        question: {
          en: "What makes a photo 'blurry'?",
          es: "¿Qué hace que una foto esté 'borrosa'?",
          de: "Was macht ein Foto 'verschwommen'?",
          nl: "Wat maakt een foto 'wazig'?"
        },
        options: [
          { en: "Unclear or out-of-focus details that computer vision finds hard to analyze", es: "Detalles poco claros o desenfocados que la visión por computadora encuentra difícil analizar", de: "Unklare oder unscharfe Details die Computer Vision schwer analysieren kann", nl: "Onduidelijke of onscherpe details die computer vision moeilijk kan analyseren" },
          { en: "Too many colors in the image", es: "Demasiados colores en la imagen", de: "Zu viele Farben im Bild", nl: "Te veel kleuren in de afbeelding" },
          { en: "The image file is too large", es: "El archivo de imagen es demasiado grande", de: "Die Bilddatei ist zu groß", nl: "Het afbeeldingsbestand is te groot" },
          { en: "The photo was taken at night", es: "La foto se tomó de noche", de: "Das Foto wurde nachts aufgenommen", nl: "De foto werd 's nachts genomen" }
        ],
        correct: 0,
        explanation: {
          en: "Blur occurs when image details lack sharpness, often from camera movement or being out of focus. Blurry images make computer vision tasks more difficult because important features are unclear.",
          es: "El desenfoque ocurre cuando los detalles de imagen carecen de nitidez, a menudo por movimiento de cámara o estar desenfocado. Las imágenes borrosas dificultan tareas de visión por computadora porque características importantes no están claras.",
          de: "Unschärfe tritt auf wenn Bilddetails an Schärfe fehlen, oft durch Kamerabewegung oder Unschärfe. Verschwommene Bilder machen Computer Vision Aufgaben schwieriger weil wichtige Merkmale unklar sind.",
          nl: "Onscherpte treedt op wanneer beelddetails gebrek aan scherpte hebben, vaak door camerabeweging of niet scherpgesteld zijn. Wazige afbeeldingen maken computer vision taken moeilijker omdat belangrijke kenmerken onduidelijk zijn."
        }
      },
      {
        question: {
          en: "How can computer vision help farmers?",
          es: "¿Cómo puede ayudar la visión por computadora a los agricultores?",
          de: "Wie kann Computer Vision Landwirten helfen?",
          nl: "Hoe kan computer vision boeren helpen?"
        },
        options: [
          { en: "Monitor crop health and detect diseases in plants", es: "Monitorear salud de cultivos y detectar enfermedades en plantas", de: "Pflanzengesundheit überwachen und Krankheiten in Pflanzen erkennen", nl: "Gewassengezondheid monitoren en ziektes in planten detecteren" },
          { en: "Make plants grow faster", es: "Hacer que las plantas crezcan más rápido", de: "Pflanzen schneller wachsen lassen", nl: "Planten sneller laten groeien" },
          { en: "Change the weather", es: "Cambiar el clima", de: "Das Wetter ändern", nl: "Het weer veranderen" },
          { en: "Create new types of seeds", es: "Crear nuevos tipos de semillas", de: "Neue Samenarten erschaffen", nl: "Nieuwe soorten zaden maken" }
        ],
        correct: 0,
        explanation: {
          en: "Agricultural computer vision analyzes drone or satellite images to monitor crop health, identify diseased plants, detect pests, and optimize irrigation and fertilization.",
          es: "La visión por computadora agrícola analiza imágenes de drones o satélites para monitorear salud de cultivos, identificar plantas enfermas, detectar plagas y optimizar irrigación y fertilización.",
          de: "Landwirtschaftliche Computer Vision analysiert Drohnen- oder Satellitenbilder um Pflanzengesundheit zu überwachen, kranke Pflanzen zu identifizieren, Schädlinge zu erkennen und Bewässerung und Düngung zu optimieren.",
          nl: "Landbouw computer vision analyseert drone- of satellietbeelden om gewassengezondheid te monitoren, zieke planten te identificeren, plagen te detecteren en irrigatie en bemesting te optimaliseren."
        }
      },
      {
        question: {
          en: "What does it mean when a computer 'sees' an image?",
          es: "¿Qué significa cuando una computadora 've' una imagen?",
          de: "Was bedeutet es wenn ein Computer ein Bild 'sieht'?",
          nl: "Wat betekent het wanneer een computer een afbeelding 'ziet'?"
        },
        options: [
          { en: "It processes the image data and extracts meaningful information", es: "Procesa los datos de imagen y extrae información significativa", de: "Es verarbeitet die Bilddaten und extrahiert bedeutungsvolle Informationen", nl: "Het verwerkt de afbeeldingsdata en extraheert betekenisvolle informatie" },
          { en: "It displays the image on a screen", es: "Muestra la imagen en una pantalla", de: "Es zeigt das Bild auf einem Bildschirm an", nl: "Het toont de afbeelding op een scherm" },
          { en: "It saves the image to memory", es: "Guarda la imagen en memoria", de: "Es speichert das Bild im Speicher", nl: "Het slaat de afbeelding op in geheugen" },
          { en: "It deletes the image", es: "Elimina la imagen", de: "Es löscht das Bild", nl: "Het verwijdert de afbeelding" }
        ],
        correct: 0,
        explanation: {
          en: "When we say a computer 'sees', we mean it analyzes pixel data to understand content - identifying objects, recognizing patterns, and making sense of visual information like humans do.",
          es: "Cuando decimos que una computadora 've', queremos decir que analiza datos de píxeles para entender contenido - identificando objetos, reconociendo patrones y dándole sentido a información visual como lo hacen los humanos.",
          de: "Wenn wir sagen ein Computer 'sieht', meinen wir dass es Pixeldaten analysiert um Inhalt zu verstehen - Objekte identifizieren, Muster erkennen und visuelle Informationen verstehen wie Menschen es tun.",
          nl: "Wanneer we zeggen dat een computer 'ziet', bedoelen we dat het pixeldata analyseert om inhoud te begrijpen - objecten identificeren, patronen herkennen en zinvolle visuele informatie maken zoals mensen doen."
        }
      },
      {
        question: {
          en: "What is image contrast?",
          es: "¿Qué es el contraste de imagen?",
          de: "Was ist Bildkontrast?",
          nl: "Wat is beeldcontrast?"
        },
        options: [
          { en: "The difference between light and dark areas in an image", es: "La diferencia entre áreas claras y oscuras en una imagen", de: "Der Unterschied zwischen hellen und dunklen Bereichen in einem Bild", nl: "Het verschil tussen lichte en donkere gebieden in een afbeelding" },
          { en: "How colorful the image is", es: "Qué tan colorida es la imagen", de: "Wie farbenfroh das Bild ist", nl: "Hoe kleurrijk de afbeelding is" },
          { en: "The number of pixels in the image", es: "El número de píxeles en la imagen", de: "Die Anzahl der Pixel im Bild", nl: "Het aantal pixels in de afbeelding" },
          { en: "The age of the photograph", es: "La edad de la fotografía", de: "Das Alter der Fotografie", nl: "De leeftijd van de foto" }
        ],
        correct: 0,
        explanation: {
          en: "Contrast measures the difference between the brightest and darkest parts of an image. High contrast makes it easier for computer vision to distinguish objects and features.",
          es: "El contraste mide la diferencia entre las partes más brillantes y oscuras de una imagen. El alto contraste facilita que la visión por computadora distinga objetos y características.",
          de: "Kontrast misst den Unterschied zwischen den hellsten und dunkelsten Teilen eines Bildes. Hoher Kontrast macht es für Computer Vision einfacher Objekte und Merkmale zu unterscheiden.",
          nl: "Contrast meet het verschil tussen de helderste en donkerste delen van een afbeelding. Hoog contrast maakt het gemakkelijker voor computer vision om objecten en kenmerken te onderscheiden."
        }
      },
      {
        question: {
          en: "Why do some apps use your phone's camera to measure things?",
          es: "¿Por qué algunas aplicaciones usan la cámara de tu teléfono para medir cosas?",
          de: "Warum nutzen manche Apps die Kamera deines Telefons um Dinge zu messen?",
          nl: "Waarom gebruiken sommige apps de camera van je telefoon om dingen te meten?"
        },
        options: [
          { en: "They use computer vision to calculate size and distance from images", es: "Usan visión por computadora para calcular tamaño y distancia de imágenes", de: "Sie nutzen Computer Vision um Größe und Entfernung aus Bildern zu berechnen", nl: "Ze gebruiken computer vision om grootte en afstand uit afbeeldingen te berekenen" },
          { en: "Cameras have built-in rulers", es: "Las cámaras tienen reglas incorporadas", de: "Kameras haben eingebaute Lineale", nl: "Camera's hebben ingebouwde linialen" },
          { en: "They guess random numbers", es: "Adivinan números aleatorios", de: "Sie raten zufällige Zahlen", nl: "Ze raden willekeurige nummers" },
          { en: "They connect to GPS satellites", es: "Se conectan a satélites GPS", de: "Sie verbinden sich mit GPS-Satelliten", nl: "Ze verbinden met GPS-satellieten" }
        ],
        correct: 0,
        explanation: {
          en: "AR measurement apps use computer vision to analyze the camera view, identify surfaces, and calculate real-world dimensions using the phone's sensors and visual reference points.",
          es: "Las aplicaciones de medición AR usan visión por computadora para analizar la vista de cámara, identificar superficies y calcular dimensiones del mundo real usando sensores del teléfono y puntos de referencia visuales.",
          de: "AR-Mess-Apps nutzen Computer Vision um die Kameraansicht zu analysieren, Oberflächen zu identifizieren und reale Dimensionen mit Telefonsensoren und visuellen Referenzpunkten zu berechnen.",
          nl: "AR-meet apps gebruiken computer vision om de cameraweergave te analyseren, oppervlakken te identificeren en echte dimensies te berekenen met telefoonsensoren en visuele referentiepunten."
        }
      },
      {
        question: {
          en: "What can computer vision do that human vision cannot?",
          es: "¿Qué puede hacer la visión por computadora que la visión humana no puede?",
          de: "Was kann Computer Vision tun was menschliche Sicht nicht kann?",
          nl: "Wat kan computer vision doen dat menselijk zicht niet kan?"
        },
        options: [
          { en: "Process thousands of images per second without getting tired", es: "Procesar miles de imágenes por segundo sin cansarse", de: "Tausende Bilder pro Sekunde verarbeiten ohne müde zu werden", nl: "Duizenden afbeeldingen per seconde verwerken zonder moe te worden" },
          { en: "See in complete darkness", es: "Ver en oscuridad completa", de: "In völliger Dunkelheit sehen", nl: "Zien in complete duisternis" },
          { en: "Create new colors", es: "Crear nuevos colores", de: "Neue Farben erschaffen", nl: "Nieuwe kleuren maken" },
          { en: "Read minds through images", es: "Leer mentes a través de imágenes", de: "Gedanken durch Bilder lesen", nl: "Gedachten lezen door afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision can analyze vast amounts of visual data extremely quickly and consistently without fatigue, making it ideal for repetitive tasks like quality control or monitoring surveillance cameras 24/7.",
          es: "La visión por computadora puede analizar vastas cantidades de datos visuales extremadamente rápido y consistentemente sin fatiga, haciéndola ideal para tareas repetitivas como control de calidad o monitoreo de cámaras de vigilancia 24/7.",
          de: "Computer Vision kann riesige Mengen visueller Daten extrem schnell und konsistent ohne Ermüdung analysieren, macht es ideal für repetitive Aufgaben wie Qualitätskontrolle oder Überwachungskameras 24/7.",
          nl: "Computer vision kan enorme hoeveelheden visuele data extreem snel en consistent analyseren zonder vermoeidheid, maakt het ideaal voor repetitieve taken zoals kwaliteitscontrole of bewakingscamera's 24/7 monitoren."
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