(function() {
    const level2 = {
        name: {
            en: "Mobile Technology and Apps",
            es: "Tecnología Móvil y Aplicaciones",
            de: "Mobile Technologie und Apps",
            nl: "Mobiele Technologie en Apps"
        },
        questions: [
            {
                question: {
                    en: "What is a smartphone?",
                    es: "¿Qué es un teléfono inteligente?",
                    de: "Was ist ein Smartphone?",
                    nl: "Wat is een smartphone?"
                },
                options: [
                    { en: "A mobile phone with computer features", es: "Un teléfono móvil con características de computadora", de: "Ein Mobiltelefon mit Computerfunktionen", nl: "Een mobiele telefoon met computerfuncties" },
                    { en: "A regular phone", es: "Un teléfono regular", de: "Ein normales Telefon", nl: "Een gewone telefoon" },
                    { en: "A computer", es: "Una computadora", de: "Ein Computer", nl: "Een computer" },
                    { en: "A television", es: "Una televisión", de: "Ein Fernseher", nl: "Een televisie" }
                ],
                correct: 0,
                explanation: {
                    en: "A smartphone is a mobile phone with advanced computing capabilities like internet access, apps, and touchscreen interface.",
                    es: "Un teléfono inteligente es un teléfono móvil con capacidades informáticas avanzadas como acceso a internet, aplicaciones e interfaz táctil.",
                    de: "Ein Smartphone ist ein Mobiltelefon mit erweiterten Computerfunktionen wie Internetzugang, Apps und Touchscreen-Interface.",
                    nl: "Een smartphone is een mobiele telefoon met geavanceerde computerfuncties zoals internettoegang, apps en een touchscreen-interface."
                }
            },
            {
                question: {
                    en: "What is an app?",
                    es: "¿Qué es una aplicación?",
                    de: "Was ist eine App?",
                    nl: "Wat is een app?"
                },
                options: [
                    { en: "A software program for mobile devices", es: "Un programa de software para dispositivos móviles", de: "Ein Softwareprogramm für mobile Geräte", nl: "Een softwareprogramma voor mobiele apparaten" },
                    { en: "A phone number", es: "Un número de teléfono", de: "Eine Telefonnummer", nl: "Een telefoonnummer" },
                    { en: "A type of battery", es: "Un tipo de batería", de: "Eine Art Batterie", nl: "Een type batterij" },
                    { en: "A phone case", es: "Una funda de teléfono", de: "Eine Handyhülle", nl: "Een telefoonhoesje" }
                ],
                correct: 0,
                explanation: {
                    en: "An app is a software application designed to run on mobile devices like smartphones and tablets.",
                    es: "Una aplicación es un programa de software diseñado para ejecutarse en dispositivos móviles como teléfonos inteligentes y tablets.",
                    de: "Eine App ist eine Softwareanwendung, die für mobile Geräte wie Smartphones und Tablets entwickelt wurde.",
                    nl: "Een app is een softwaretoepassing ontworpen om te draaien op mobiele apparaten zoals smartphones en tablets."
                }
            },
            {
                question: {
                    en: "What is iOS?",
                    es: "¿Qué es iOS?",
                    de: "Was ist iOS?",
                    nl: "Wat is iOS?"
                },
                options: [
                    { en: "Apple's mobile operating system", es: "El sistema operativo móvil de Apple", de: "Apples mobiles Betriebssystem", nl: "Apple's mobiele besturingssysteem" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A mobile app", es: "Una aplicación móvil", de: "Eine mobile App", nl: "Een mobiele app" },
                    { en: "A phone brand", es: "Una marca de teléfono", de: "Eine Telefonmarke", nl: "Een telefoonmerk" }
                ],
                correct: 0,
                explanation: {
                    en: "iOS is Apple's mobile operating system that runs on iPhones and iPads, providing the user interface and core functionality.",
                    es: "iOS es el sistema operativo móvil de Apple que funciona en iPhones e iPads, proporcionando la interfaz de usuario y funcionalidad principal.",
                    de: "iOS ist Apples mobiles Betriebssystem, das auf iPhones und iPads läuft und die Benutzeroberfläche und Kernfunktionalität bereitstellt.",
                    nl: "iOS is Apple's mobiele besturingssysteem dat draait op iPhones en iPads, en de gebruikersinterface en kernfunctionaliteit biedt."
                }
            },
            {
                question: {
                    en: "What is Android?",
                    es: "¿Qué es Android?",
                    de: "Was ist Android?",
                    nl: "Wat is Android?"
                },
                options: [
                    { en: "Google's mobile operating system", es: "El sistema operativo móvil de Google", de: "Googles mobiles Betriebssystem", nl: "Google's mobiele besturingssysteem" },
                    { en: "A robot", es: "Un robot", de: "Ein Roboter", nl: "Een robot" },
                    { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
                    { en: "A laptop brand", es: "Una marca de laptop", de: "Eine Laptop-Marke", nl: "Een laptopmerk" }
                ],
                correct: 0,
                explanation: {
                    en: "Android is Google's open-source mobile operating system used by many smartphone manufacturers worldwide.",
                    es: "Android es el sistema operativo móvil de código abierto de Google utilizado por muchos fabricantes de teléfonos inteligentes en todo el mundo.",
                    de: "Android ist Googles Open-Source-Mobilbetriebssystem, das von vielen Smartphone-Herstellern weltweit verwendet wird.",
                    nl: "Android is Google's open-source mobiele besturingssysteem gebruikt door veel smartphonefabrikanten wereldwijd."
                }
            },
            {
                question: {
                    en: "What is a touchscreen?",
                    es: "¿Qué es una pantalla táctil?",
                    de: "Was ist ein Touchscreen?",
                    nl: "Wat is een touchscreen?"
                },
                options: [
                    { en: "A screen you can control by touching", es: "Una pantalla que puedes controlar tocando", de: "Ein Bildschirm, den du durch Berühren steuern kannst", nl: "Een scherm dat je kunt bedienen door aan te raken" },
                    { en: "A broken screen", es: "Una pantalla rota", de: "Ein kaputtes Display", nl: "Een kapot scherm" },
                    { en: "A television screen", es: "Una pantalla de televisión", de: "Ein Fernsehbildschirm", nl: "Een televisiescherm" },
                    { en: "A computer monitor", es: "Un monitor de computadora", de: "Ein Computermonitor", nl: "Een computermonitor" }
                ],
                correct: 0,
                explanation: {
                    en: "A touchscreen is a display that responds to touch input, allowing users to interact directly with what's displayed.",
                    es: "Una pantalla táctil es una pantalla que responde al tacto, permitiendo a los usuarios interactuar directamente con lo que se muestra.",
                    de: "Ein Touchscreen ist ein Display, das auf Berührungseingaben reagiert und es Benutzern ermöglicht, direkt mit dem Angezeigten zu interagieren.",
                    nl: "Een touchscreen is een beeldscherm dat reageert op aanraak, waardoor gebruikers direct kunnen interacteren met wat wordt weergegeven."
                }
            },
            {
                question: {
                    en: "What is GPS?",
                    es: "¿Qué es GPS?",
                    de: "Was ist GPS?",
                    nl: "Wat is GPS?"
                },
                options: [
                    { en: "Global Positioning System for location", es: "Sistema de Posicionamiento Global para ubicación", de: "Globales Positionierungssystem für Standort", nl: "Globaal Positioneringssysteem voor locatie" },
                    { en: "A messaging app", es: "Una aplicación de mensajes", de: "Eine Nachrichten-App", nl: "Een berichtenapp" },
                    { en: "A camera feature", es: "Una función de cámara", de: "Eine Kamerafunktion", nl: "Een camerafunctie" },
                    { en: "A battery type", es: "Un tipo de batería", de: "Ein Batterietyp", nl: "Een batterijtype" }
                ],
                correct: 0,
                explanation: {
                    en: "GPS is a satellite-based navigation system that provides location and time information anywhere on Earth.",
                    es: "GPS es un sistema de navegación basado en satélites que proporciona información de ubicación y tiempo en cualquier lugar de la Tierra.",
                    de: "GPS ist ein satellitengestütztes Navigationssystem, das Standort- und Zeitinformationen überall auf der Erde bereitstellt.",
                    nl: "GPS is een satellietgebaseerd navigatiesysteem dat locatie- en tijdinformatie biedt overal op aarde."
                }
            },
            {
                question: {
                    en: "What does it mean when your phone is 'charging'?",
                    es: "¿Qué significa cuando tu teléfono está 'cargando'?",
                    de: "Was bedeutet es, wenn dein Telefon 'lädt'?",
                    nl: "Wat betekent het als je telefoon 'oplaadt'?"
                },
                options: [
                    { en: "The battery is getting power", es: "La batería está recibiendo energía", de: "Die Batterie bekommt Strom", nl: "De batterij krijgt stroom" },
                    { en: "It's making a phone call", es: "Está haciendo una llamada telefónica", de: "Es führt einen Anruf durch", nl: "Het voert een telefoongesprek" },
                    { en: "It's downloading apps", es: "Está descargando aplicaciones", de: "Es lädt Apps herunter", nl: "Het downloadt apps" },
                    { en: "It's broken", es: "Está roto", de: "Es ist kaputt", nl: "Het is kapot" }
                ],
                correct: 0,
                explanation: {
                    en: "When your phone is charging, the battery is receiving electrical power to restore its energy for use.",
                    es: "Cuando tu teléfono está cargando, la batería está recibiendo energía eléctrica para restaurar su energía para uso.",
                    de: "Wenn dein Telefon lädt, erhält die Batterie elektrische Energie, um ihre Energie für die Nutzung wiederherzustellen.",
                    nl: "Wanneer je telefoon oplaadt, ontvangt de batterij elektrische energie om zijn energie voor gebruik te herstellen."
                }
            },
            {
                question: {
                    en: "What is a SIM card?",
                    es: "¿Qué es una tarjeta SIM?",
                    de: "Was ist eine SIM-Karte?",
                    nl: "Wat is een SIM-kaart?"
                },
                options: [
                    { en: "A small card that identifies your phone number", es: "Una pequeña tarjeta que identifica tu número de teléfono", de: "Eine kleine Karte, die deine Telefonnummer identifiziert", nl: "Een kleine kaart die je telefoonnummer identificeert" },
                    { en: "A memory card", es: "Una tarjeta de memoria", de: "Eine Speicherkarte", nl: "Een geheugenkaart" },
                    { en: "A credit card", es: "Una tarjeta de crédito", de: "Eine Kreditkarte", nl: "Een creditcard" },
                    { en: "A game card", es: "Una tarjeta de juego", de: "Eine Spielkarte", nl: "Een spelkaart" }
                ],
                correct: 0,
                explanation: {
                    en: "A SIM card is a small chip that stores your phone number and mobile network information to connect to cellular service.",
                    es: "Una tarjeta SIM es un pequeño chip que almacena tu número de teléfono e información de red móvil para conectarse al servicio celular.",
                    de: "Eine SIM-Karte ist ein kleiner Chip, der deine Telefonnummer und Mobilnetzinformationen speichert, um sich mit dem Mobilfunkdienst zu verbinden.",
                    nl: "Een SIM-kaart is een kleine chip die je telefoonnummer en mobiele netwerkinformatie opslaat om verbinding te maken met mobiele diensten."
                }
            },
            {
                question: {
                    en: "What is Bluetooth?",
                    es: "¿Qué es Bluetooth?",
                    de: "Was ist Bluetooth?",
                    nl: "Wat is Bluetooth?"
                },
                options: [
                    { en: "Wireless connection between devices", es: "Conexión inalámbrica entre dispositivos", de: "Drahtlose Verbindung zwischen Geräten", nl: "Draadloze verbinding tussen apparaten" },
                    { en: "A type of phone", es: "Un tipo de teléfono", de: "Eine Art Telefon", nl: "Een type telefoon" },
                    { en: "A color", es: "Un color", de: "Eine Farbe", nl: "Een kleur" },
                    { en: "A tooth disease", es: "Una enfermedad dental", de: "Eine Zahnkrankheit", nl: "Een tandziekte" }
                ],
                correct: 0,
                explanation: {
                    en: "Bluetooth is a short-range wireless technology that allows devices to connect and communicate without cables.",
                    es: "Bluetooth es una tecnología inalámbrica de corto alcance que permite a los dispositivos conectarse y comunicarse sin cables.",
                    de: "Bluetooth ist eine drahtlose Kurzstreckentechnologie, die es Geräten ermöglicht, sich zu verbinden und ohne Kabel zu kommunizieren.",
                    nl: "Bluetooth is een draadloze technologie voor korte afstanden waarmee apparaten kunnen verbinden en communiceren zonder kabels."
                }
            },
            {
                question: {
                    en: "What can you do with Bluetooth?",
                    es: "¿Qué puedes hacer con Bluetooth?",
                    de: "Was kannst du mit Bluetooth machen?",
                    nl: "Wat kun je doen met Bluetooth?"
                },
                options: [
                    { en: "Connect wireless headphones and speakers", es: "Conectar auriculares y altavoces inalámbricos", de: "Kabellose Kopfhörer und Lautsprecher verbinden", nl: "Draadloze koptelefoons en luidsprekers verbinden" },
                    { en: "Make the phone faster", es: "Hacer el teléfono más rápido", de: "Das Telefon schneller machen", nl: "De telefoon sneller maken" },
                    { en: "Charge the battery", es: "Cargar la batería", de: "Die Batterie laden", nl: "De batterij opladen" },
                    { en: "Take better photos", es: "Tomar mejores fotos", de: "Bessere Fotos machen", nl: "Betere foto's maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Bluetooth allows you to wirelessly connect devices like headphones, speakers, and keyboards to your phone.",
                    es: "Bluetooth te permite conectar dispositivos inalámbricamente como auriculares, altavoces y teclados a tu teléfono.",
                    de: "Bluetooth ermöglicht es dir, Geräte wie Kopfhörer, Lautsprecher und Tastaturen drahtlos mit deinem Telefon zu verbinden.",
                    nl: "Bluetooth stelt je in staat om draadloos apparaten zoals koptelefoons, luidsprekers en toetsenborden te verbinden met je telefoon."
                }
            },
            {
                question: {
                    en: "What is Wi-Fi calling?",
                    es: "¿Qué es la llamada por Wi-Fi?",
                    de: "Was ist Wi-Fi-Anrufen?",
                    nl: "Wat is Wi-Fi bellen?"
                },
                options: [
                    { en: "Making phone calls over internet connection", es: "Hacer llamadas telefónicas por conexión a internet", de: "Telefonanrufe über Internetverbindung führen", nl: "Telefoongesprekken voeren via internetverbinding" },
                    { en: "A type of messaging", es: "Un tipo de mensajería", de: "Eine Art Nachrichtendienst", nl: "Een type berichten" },
                    { en: "A camera feature", es: "Una función de cámara", de: "Eine Kamerafunktion", nl: "Een camerafunctie" },
                    { en: "A game mode", es: "Un modo de juego", de: "Ein Spielmodus", nl: "Een spelmodus" }
                ],
                correct: 0,
                explanation: {
                    en: "Wi-Fi calling allows you to make phone calls using your internet connection instead of cellular towers.",
                    es: "Las llamadas por Wi-Fi te permiten hacer llamadas telefónicas usando tu conexión a internet en lugar de torres celulares.",
                    de: "Wi-Fi-Anrufe ermöglichen es dir, Telefonanrufe über deine Internetverbindung anstatt über Mobilfunktürme zu führen.",
                    nl: "Wi-Fi bellen stelt je in staat om telefoongesprekken te voeren via je internetverbinding in plaats van via zendmasten."
                }
            },
            {
                question: {
                    en: "What is a mobile hotspot?",
                    es: "¿Qué es un punto de acceso móvil?",
                    de: "Was ist ein mobiler Hotspot?",
                    nl: "Wat is een mobiele hotspot?"
                },
                options: [
                    { en: "Sharing your phone's internet with other devices", es: "Compartir el internet de tu teléfono con otros dispositivos", de: "Das Internet deines Telefons mit anderen Geräten teilen", nl: "Het internet van je telefoon delen met andere apparaten" },
                    { en: "A hot place", es: "Un lugar caliente", de: "Ein heißer Ort", nl: "Een hete plek" },
                    { en: "A charging station", es: "Una estación de carga", de: "Eine Ladestation", nl: "Een oplaadstation" },
                    { en: "A broken phone", es: "Un teléfono roto", de: "Ein kaputtes Telefon", nl: "Een kapotte telefoon" }
                ],
                correct: 0,
                explanation: {
                    en: "A mobile hotspot lets you share your phone's internet connection with other devices like laptops or tablets.",
                    es: "Un punto de acceso móvil te permite compartir la conexión a internet de tu teléfono con otros dispositivos como laptops o tablets.",
                    de: "Ein mobiler Hotspot ermöglicht es dir, die Internetverbindung deines Telefons mit anderen Geräten wie Laptops oder Tablets zu teilen.",
                    nl: "Een mobiele hotspot laat je de internetverbinding van je telefoon delen met andere apparaten zoals laptops of tablets."
                }
            },
            {
                question: {
                    en: "What does 'airplane mode' do?",
                    es: "¿Qué hace el 'modo avión'?",
                    de: "Was macht der 'Flugzeugmodus'?",
                    nl: "Wat doet de 'vliegtuigmodus'?"
                },
                options: [
                    { en: "Turns off all wireless connections", es: "Apaga todas las conexiones inalámbricas", de: "Schaltet alle drahtlosen Verbindungen aus", nl: "Schakelt alle draadloze verbindingen uit" },
                    { en: "Makes the phone fly", es: "Hace que el teléfono vuele", de: "Lässt das Telefon fliegen", nl: "Laat de telefoon vliegen" },
                    { en: "Changes the wallpaper", es: "Cambia el fondo de pantalla", de: "Ändert das Hintergrundbild", nl: "Verandert de achtergrond" },
                    { en: "Opens flight apps", es: "Abre aplicaciones de vuelo", de: "Öffnet Flug-Apps", nl: "Opent vliegtuig-apps" }
                ],
                correct: 0,
                explanation: {
                    en: "Airplane mode disables all wireless communications (cellular, Wi-Fi, Bluetooth) as required on aircraft for safety.",
                    es: "El modo avión desactiva todas las comunicaciones inalámbricas (celular, Wi-Fi, Bluetooth) como se requiere en aeronaves por seguridad.",
                    de: "Der Flugzeugmodus deaktiviert alle drahtlosen Kommunikationen (Mobilfunk, Wi-Fi, Bluetooth), wie es in Flugzeugen aus Sicherheitsgründen erforderlich ist.",
                    nl: "Vliegtuigmodus schakelt alle draadloze communicatie (mobiel, Wi-Fi, Bluetooth) uit zoals vereist in vliegtuigen voor veiligheid."
                }
            },
            {
                question: {
                    en: "What is a notification?",
                    es: "¿Qué es una notificación?",
                    de: "Was ist eine Benachrichtigung?",
                    nl: "Wat is een melding?"
                },
                options: [
                    { en: "A message alert from apps", es: "Una alerta de mensaje de las aplicaciones", de: "Eine Nachrichtenwarnung von Apps", nl: "Een berichtwaarschuwing van apps" },
                    { en: "A phone number", es: "Un número de teléfono", de: "Eine Telefonnummer", nl: "Een telefoonnummer" },
                    { en: "A camera setting", es: "Una configuración de cámara", de: "Eine Kameraeinstellung", nl: "Een camera-instelling" },
                    { en: "A battery level", es: "Un nivel de batería", de: "Ein Batteriestand", nl: "Een batterijniveau" }
                ],
                correct: 0,
                explanation: {
                    en: "A notification is an alert message from apps that appears on your screen to inform you of new activity or events.",
                    es: "Una notificación es un mensaje de alerta de las aplicaciones que aparece en tu pantalla para informarte de nueva actividad o eventos.",
                    de: "Eine Benachrichtigung ist eine Warnmeldung von Apps, die auf deinem Bildschirm erscheint, um dich über neue Aktivitäten oder Ereignisse zu informieren.",
                    nl: "Een melding is een waarschuwingsbericht van apps dat op je scherm verschijnt om je te informeren over nieuwe activiteit of gebeurtenissen."
                }
            },
            {
                question: {
                    en: "What is a widget?",
                    es: "¿Qué es un widget?",
                    de: "Was ist ein Widget?",
                    nl: "Wat is een widget?"
                },
                options: [
                    { en: "A mini app on your home screen", es: "Una mini aplicación en tu pantalla de inicio", de: "Eine Mini-App auf deinem Startbildschirm", nl: "Een mini-app op je startscherm" },
                    { en: "A phone case", es: "Una funda de teléfono", de: "Eine Handyhülle", nl: "Een telefoonhoesje" },
                    { en: "A charger cable", es: "Un cable de carga", de: "Ein Ladekabel", nl: "Een oplaadkabel" },
                    { en: "A screen protector", es: "Un protector de pantalla", de: "Ein Displayschutz", nl: "Een schermbeschermer" }
                ],
                correct: 0,
                explanation: {
                    en: "A widget is a small app that displays information or provides quick access to functions directly on your home screen.",
                    es: "Un widget es una pequeña aplicación que muestra información o proporciona acceso rápido a funciones directamente en tu pantalla de inicio.",
                    de: "Ein Widget ist eine kleine App, die Informationen anzeigt oder schnellen Zugriff auf Funktionen direkt auf deinem Startbildschirm bietet.",
                    nl: "Een widget is een kleine app die informatie toont of snelle toegang biedt tot functies direct op je startscherm."
                }
            },
            {
                question: {
                    en: "What is Face ID or fingerprint unlock?",
                    es: "¿Qué es Face ID o desbloqueo por huella dactilar?",
                    de: "Was ist Face ID oder Fingerabdruck-Entsperrung?",
                    nl: "Wat is Face ID of vingerafdruk ontgrendeling?"
                },
                options: [
                    { en: "Biometric security to unlock your phone", es: "Seguridad biométrica para desbloquear tu teléfono", de: "Biometrische Sicherheit zum Entsperren deines Telefons", nl: "Biometrische beveiliging om je telefoon te ontgrendelen" },
                    { en: "A social media app", es: "Una aplicación de redes sociales", de: "Eine Social-Media-App", nl: "Een sociale media app" },
                    { en: "A camera filter", es: "Un filtro de cámara", de: "Ein Kamerafilter", nl: "Een camerafilter" },
                    { en: "A messaging feature", es: "Una función de mensajería", de: "Eine Nachrichten-Funktion", nl: "Een berichtenfunctie" }
                ],
                correct: 0,
                explanation: {
                    en: "Face ID and fingerprint unlock use your unique biometric features to securely unlock your phone without a password.",
                    es: "Face ID y desbloqueo por huella dactilar usan tus características biométricas únicas para desbloquear tu teléfono de forma segura sin contraseña.",
                    de: "Face ID und Fingerabdruck-Entsperrung nutzen deine einzigartigen biometrischen Merkmale, um dein Telefon sicher ohne Passwort zu entsperren.",
                    nl: "Face ID en vingerafdruk ontgrendeling gebruiken je unieke biometrische kenmerken om je telefoon veilig te ontgrendelen zonder wachtwoord."
                }
            },
            {
                question: {
                    en: "What is the App Store?",
                    es: "¿Qué es la App Store?",
                    de: "Was ist der App Store?",
                    nl: "Wat is de App Store?"
                },
                options: [
                    { en: "Apple's platform to download apps", es: "La plataforma de Apple para descargar aplicaciones", de: "Apples Plattform zum Herunterladen von Apps", nl: "Apple's platform om apps te downloaden" },
                    { en: "A physical store", es: "Una tienda física", de: "Ein physisches Geschäft", nl: "Een fysieke winkel" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A messaging app", es: "Una aplicación de mensajes", de: "Eine Nachrichten-App", nl: "Een berichtenapp" }
                ],
                correct: 0,
                explanation: {
                    en: "The App Store is Apple's official marketplace where users can browse, download, and purchase apps for their devices.",
                    es: "La App Store es el mercado oficial de Apple donde los usuarios pueden navegar, descargar y comprar aplicaciones para sus dispositivos.",
                    de: "Der App Store ist Apples offizieller Marktplatz, wo Benutzer Apps für ihre Geräte durchsuchen, herunterladen und kaufen können.",
                    nl: "De App Store is Apple's officiële marktplaats waar gebruikers apps kunnen doorbladeren, downloaden en kopen voor hun apparaten."
                }
            },
            {
                question: {
                    en: "What is Google Play Store?",
                    es: "¿Qué es Google Play Store?",
                    de: "Was ist Google Play Store?",
                    nl: "Wat is Google Play Store?"
                },
                options: [
                    { en: "Google's platform to download Android apps", es: "La plataforma de Google para descargar aplicaciones de Android", de: "Googles Plattform zum Herunterladen von Android-Apps", nl: "Google's platform om Android apps te downloaden" },
                    { en: "A gaming website", es: "Un sitio web de juegos", de: "Eine Gaming-Website", nl: "Een gaming website" },
                    { en: "A music player", es: "Un reproductor de música", de: "Ein Musikplayer", nl: "Een muziekspeler" },
                    { en: "A photo editor", es: "Un editor de fotos", de: "Ein Foto-Editor", nl: "Een foto-editor" }
                ],
                correct: 0,
                explanation: {
                    en: "Google Play Store is Google's digital marketplace where Android users can download and purchase apps and games.",
                    es: "Google Play Store es el mercado digital de Google donde los usuarios de Android pueden descargar y comprar aplicaciones y juegos.",
                    de: "Google Play Store ist Googles digitaler Marktplatz, wo Android-Benutzer Apps und Spiele herunterladen und kaufen können.",
                    nl: "Google Play Store is Google's digitale marktplaats waar Android-gebruikers apps en spellen kunnen downloaden en kopen."
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
                    { en: "A square barcode you can scan with your phone", es: "Un código de barras cuadrado que puedes escanear con tu teléfono", de: "Ein quadratischer Strichcode, den du mit deinem Telefon scannen kannst", nl: "Een vierkante streepjescode die je kunt scannen met je telefoon" },
                    { en: "A type of battery", es: "Un tipo de batería", de: "Ein Batterietyp", nl: "Een batterijtype" },
                    { en: "A phone model", es: "Un modelo de teléfono", de: "Ein Telefonmodell", nl: "Een telefoonmodel" },
                    { en: "A charger type", es: "Un tipo de cargador", de: "Ein Ladegerättyp", nl: "Een opladertype" }
                ],
                correct: 0,
                explanation: {
                    en: "A QR code is a square matrix barcode that can store information and be quickly scanned by smartphone cameras.",
                    es: "Un código QR es un código de barras matricial cuadrado que puede almacenar información y ser escaneado rápidamente por cámaras de teléfonos inteligentes.",
                    de: "Ein QR-Code ist ein quadratischer Matrix-Strichcode, der Informationen speichern kann und schnell von Smartphone-Kameras gescannt werden kann.",
                    nl: "Een QR-code is een vierkante matrix streepjescode die informatie kan opslaan en snel kan worden gescand door smartphone camera's."
                }
            },
            {
                question: {
                    en: "What is mobile data?",
                    es: "¿Qué son los datos móviles?",
                    de: "Was sind mobile Daten?",
                    nl: "Wat zijn mobiele gegevens?"
                },
                options: [
                    { en: "Internet access through cellular network", es: "Acceso a internet a través de la red celular", de: "Internetzugang über das Mobilfunknetz", nl: "Internettoegang via het mobiele netwerk" },
                    { en: "Phone contacts", es: "Contactos del teléfono", de: "Telefonkontakte", nl: "Telefooncontacten" },
                    { en: "Stored photos", es: "Fotos almacenadas", de: "Gespeicherte Fotos", nl: "Opgeslagen foto's" },
                    { en: "Downloaded apps", es: "Aplicaciones descargadas", de: "Heruntergeladene Apps", nl: "Gedownloade apps" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile data is internet access provided by your cellular network carrier, allowing you to use internet without Wi-Fi.",
                    es: "Los datos móviles son acceso a internet proporcionado por tu operador de red celular, permitiéndote usar internet sin Wi-Fi.",
                    de: "Mobile Daten sind Internetzugang, der von deinem Mobilfunkanbieter bereitgestellt wird und es dir ermöglicht, das Internet ohne Wi-Fi zu nutzen.",
                    nl: "Mobiele gegevens zijn internettoegang geleverd door je mobiele netwerkprovider, waardoor je internet kunt gebruiken zonder Wi-Fi."
                }
            },
            {
                question: {
                    en: "What does 4G or 5G mean?",
                    es: "¿Qué significa 4G o 5G?",
                    de: "Was bedeuten 4G oder 5G?",
                    nl: "Wat betekenen 4G of 5G?"
                },
                options: [
                    { en: "Generations of mobile network speed", es: "Generaciones de velocidad de red móvil", de: "Generationen der Mobilnetzgeschwindigkeit", nl: "Generaties van mobiele netwerksnelheid" },
                    { en: "Battery power levels", es: "Niveles de potencia de batería", de: "Batterieleistungsstufen", nl: "Batterijvermogen niveaus" },
                    { en: "Storage amounts", es: "Cantidades de almacenamiento", de: "Speichermengen", nl: "Opslaghoeveelheden" },
                    { en: "Screen sizes", es: "Tamaños de pantalla", de: "Bildschirmgrößen", nl: "Schermformaten" }
                ],
                correct: 0,
                explanation: {
                    en: "4G and 5G refer to different generations of mobile network technology, with higher numbers indicating faster data speeds.",
                    es: "4G y 5G se refieren a diferentes generaciones de tecnología de red móvil, con números más altos indicando velocidades de datos más rápidas.",
                    de: "4G und 5G beziehen sich auf verschiedene Generationen der Mobilfunktechnologie, wobei höhere Zahlen schnellere Datengeschwindigkeiten bedeuten.",
                    nl: "4G en 5G verwijzen naar verschillende generaties van mobiele netwerktechnologie, waarbij hogere nummers snellere datasnelheden aangeven."
                }
            },
            {
                question: {
                    en: "What is a screenshot?",
                    es: "¿Qué es una captura de pantalla?",
                    de: "Was ist ein Screenshot?",
                    nl: "Wat is een screenshot?"
                },
                options: [
                    { en: "A picture of your phone screen", es: "Una imagen de la pantalla de tu teléfono", de: "Ein Bild deines Telefonbildschirms", nl: "Een afbeelding van je telefoonscherm" },
                    { en: "A broken screen", es: "Una pantalla rota", de: "Ein kaputtes Display", nl: "Een kapot scherm" },
                    { en: "A screen saver", es: "Un salvapantallas", de: "Ein Bildschirmschoner", nl: "Een screensaver" },
                    { en: "A screen protector", es: "Un protector de pantalla", de: "Ein Displayschutz", nl: "Een schermbeschermer" }
                ],
                correct: 0,
                explanation: {
                    en: "A screenshot is a digital image of what's currently displayed on your phone screen, useful for saving information.",
                    es: "Una captura de pantalla es una imagen digital de lo que se muestra actualmente en la pantalla de tu teléfono, útil para guardar información.",
                    de: "Ein Screenshot ist ein digitales Bild von dem, was gerade auf deinem Telefonbildschirm angezeigt wird, nützlich zum Speichern von Informationen.",
                    nl: "Een screenshot is een digitale afbeelding van wat er momenteel op je telefoonscherm wordt weergegeven, handig voor het opslaan van informatie."
                }
            },
            {
                question: {
                    en: "What is cloud storage on mobile devices?",
                    es: "¿Qué es el almacenamiento en la nube en dispositivos móviles?",
                    de: "Was ist Cloud-Speicher auf mobilen Geräten?",
                    nl: "Wat is cloudopslag op mobiele apparaten?"
                },
                options: [
                    { en: "Storing files on internet servers", es: "Almacenar archivos en servidores de internet", de: "Dateien auf Internet-Servern speichern", nl: "Bestanden opslaan op internetservers" },
                    { en: "Weather forecasting", es: "Pronóstico del tiempo", de: "Wettervorhersage", nl: "Weersvoorspelling" },
                    { en: "Taking sky photos", es: "Tomar fotos del cielo", de: "Himmelsfotos machen", nl: "Luchtfoto's maken" },
                    { en: "Airplane tracking", es: "Seguimiento de aviones", de: "Flugzeugverfolgung", nl: "Vliegtuigtracking" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud storage saves your files on remote internet servers, allowing access from any device and protecting against data loss.",
                    es: "El almacenamiento en la nube guarda tus archivos en servidores remotos de internet, permitiendo acceso desde cualquier dispositivo y protegiendo contra la pérdida de datos.",
                    de: "Cloud-Speicher speichert deine Dateien auf entfernten Internet-Servern und ermöglicht Zugriff von jedem Gerät und Schutz vor Datenverlust.",
                    nl: "Cloudopslag slaat je bestanden op op externe internetservers, waardoor toegang vanaf elk apparaat mogelijk is en bescherming tegen gegevensverlies."
                }
            },
            {
                question: {
                    en: "What is multitasking on a phone?",
                    es: "¿Qué es la multitarea en un teléfono?",
                    de: "Was ist Multitasking auf einem Telefon?",
                    nl: "Wat is multitasking op een telefoon?"
                },
                options: [
                    { en: "Running multiple apps at the same time", es: "Ejecutar múltiples aplicaciones al mismo tiempo", de: "Mehrere Apps gleichzeitig ausführen", nl: "Meerdere apps tegelijkertijd uitvoeren" },
                    { en: "Having multiple phones", es: "Tener múltiples teléfonos", de: "Mehrere Telefone haben", nl: "Meerdere telefoons hebben" },
                    { en: "Multiple SIM cards", es: "Múltiples tarjetas SIM", de: "Mehrere SIM-Karten", nl: "Meerdere SIM-kaarten" },
                    { en: "Multiple phone numbers", es: "Múltiples números de teléfono", de: "Mehrere Telefonnummern", nl: "Meerdere telefoonnummers" }
                ],
                correct: 0,
                explanation: {
                    en: "Multitasking allows you to switch between and use multiple apps simultaneously without closing them completely.",
                    es: "La multitarea te permite cambiar entre y usar múltiples aplicaciones simultáneamente sin cerrarlas completamente.",
                    de: "Multitasking ermöglicht es dir, zwischen mehreren Apps zu wechseln und sie gleichzeitig zu verwenden, ohne sie vollständig zu schließen.",
                    nl: "Multitasking stelt je in staat om tussen meerdere apps te schakelen en ze tegelijkertijd te gebruiken zonder ze volledig te sluiten."
                }
            },
            {
                question: {
                    en: "What is voice recognition?",
                    es: "¿Qué es el reconocimiento de voz?",
                    de: "Was ist Spracherkennung?",
                    nl: "Wat is spraakherkenning?"
                },
                options: [
                    { en: "Technology that understands spoken words", es: "Tecnología que entiende palabras habladas", de: "Technologie, die gesprochene Worte versteht", nl: "Technologie die gesproken woorden begrijpt" },
                    { en: "Identifying people by their face", es: "Identificar personas por su rostro", de: "Menschen an ihrem Gesicht erkennen", nl: "Mensen herkennen aan hun gezicht" },
                    { en: "Recording conversations", es: "Grabar conversaciones", de: "Gespräche aufzeichnen", nl: "Gesprekken opnemen" },
                    { en: "Making phone calls louder", es: "Hacer las llamadas telefónicas más fuertes", de: "Telefonanrufe lauter machen", nl: "Telefoongesprekken luider maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Voice recognition technology converts spoken words into text or commands that the device can understand and act upon.",
                    es: "La tecnología de reconocimiento de voz convierte palabras habladas en texto o comandos que el dispositivo puede entender y ejecutar.",
                    de: "Spracherkennungstechnologie wandelt gesprochene Wörter in Text oder Befehle um, die das Gerät verstehen und befolgen kann.",
                    nl: "Spraakherkenning technologie zet gesproken woorden om in tekst of commando's die het apparaat kan begrijpen en uitvoeren."
                }
            },
            {
                question: {
                    en: "What is Siri?",
                    es: "¿Qué es Siri?",
                    de: "Was ist Siri?",
                    nl: "Wat is Siri?"
                },
                options: [
                    { en: "Apple's voice assistant", es: "El asistente de voz de Apple", de: "Apples Sprachassistent", nl: "Apple's spraakassistent" },
                    { en: "A messaging app", es: "Una aplicación de mensajes", de: "Eine Nachrichten-App", nl: "Een berichtenapp" },
                    { en: "A camera app", es: "Una aplicación de cámara", de: "Eine Kamera-App", nl: "Een camera-app" },
                    { en: "A gaming app", es: "Una aplicación de juegos", de: "Eine Gaming-App", nl: "Een gaming-app" }
                ],
                correct: 0,
                explanation: {
                    en: "Siri is Apple's intelligent voice assistant that responds to voice commands and helps with various tasks on Apple devices.",
                    es: "Siri es el asistente de voz inteligente de Apple que responde a comandos de voz y ayuda con varias tareas en dispositivos Apple.",
                    de: "Siri ist Apples intelligenter Sprachassistent, der auf Sprachbefehle reagiert und bei verschiedenen Aufgaben auf Apple-Geräten hilft.",
                    nl: "Siri is Apple's intelligente spraakassistent die reageert op spraakopdrachten en helpt met verschillende taken op Apple-apparaten."
                }
            },
            {
                question: {
                    en: "What is Google Assistant?",
                    es: "¿Qué es Google Assistant?",
                    de: "Was ist Google Assistant?",
                    nl: "Wat is Google Assistant?"
                },
                options: [
                    { en: "Google's voice assistant", es: "El asistente de voz de Google", de: "Googles Sprachassistent", nl: "Google's spraakassistent" },
                    { en: "A search engine", es: "Un motor de búsqueda", de: "Eine Suchmaschine", nl: "Een zoekmachine" },
                    { en: "A map application", es: "Una aplicación de mapas", de: "Eine Kartenanwendung", nl: "Een kaarten-app" },
                    { en: "An email service", es: "Un servicio de correo electrónico", de: "Ein E-Mail-Dienst", nl: "Een e-mailservice" }
                ],
                correct: 0,
                explanation: {
                    en: "Google Assistant is Google's AI-powered voice assistant that can answer questions and perform tasks across Google services.",
                    es: "Google Assistant es el asistente de voz con IA de Google que puede responder preguntas y realizar tareas en los servicios de Google.",
                    de: "Google Assistant ist Googles KI-gestützter Sprachassistent, der Fragen beantworten und Aufgaben in Google-Diensten ausführen kann.",
                    nl: "Google Assistant is Google's AI-aangedreven spraakassistent die vragen kan beantwoorden en taken kan uitvoeren binnen Google-diensten."
                }
            },
            {
                question: {
                    en: "What can voice assistants help you do?",
                    es: "¿En qué pueden ayudarte los asistentes de voz?",
                    de: "Wobei können dir Sprachassistenten helfen?",
                    nl: "Waarmee kunnen spraakassistenten je helpen?"
                },
                options: [
                    { en: "Set reminders, answer questions, control devices", es: "Establecer recordatorios, responder preguntas, controlar dispositivos", de: "Erinnerungen setzen, Fragen beantworten, Geräte steuern", nl: "Herinneringen instellen, vragen beantwoorden, apparaten bedienen" },
                    { en: "Only make phone calls", es: "Solo hacer llamadas telefónicas", de: "Nur Telefonanrufe führen", nl: "Alleen telefoongesprekken voeren" },
                    { en: "Only send text messages", es: "Solo enviar mensajes de texto", de: "Nur Textnachrichten senden", nl: "Alleen tekstberichten sturen" },
                    { en: "Only take photos", es: "Solo tomar fotos", de: "Nur Fotos machen", nl: "Alleen foto's maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Voice assistants can perform multiple tasks including setting reminders, answering questions, controlling smart devices, and more.",
                    es: "Los asistentes de voz pueden realizar múltiples tareas incluyendo establecer recordatorios, responder preguntas, controlar dispositivos inteligentes, y más.",
                    de: "Sprachassistenten können mehrere Aufgaben erfüllen, einschließlich Erinnerungen setzen, Fragen beantworten, intelligente Geräte steuern und mehr.",
                    nl: "Spraakassistenten kunnen meerdere taken uitvoeren zoals herinneringen instellen, vragen beantwoorden, slimme apparaten bedienen, en meer."
                }
            },
            {
                question: {
                    en: "What is auto-sync?",
                    es: "¿Qué es la sincronización automática?",
                    de: "Was ist Auto-Sync?",
                    nl: "Wat is automatische synchronisatie?"
                },
                options: [
                    { en: "Automatic updating of data across devices", es: "Actualización automática de datos entre dispositivos", de: "Automatische Aktualisierung von Daten zwischen Geräten", nl: "Automatische update van gegevens tussen apparaten" },
                    { en: "Automatic phone calls", es: "Llamadas telefónicas automáticas", de: "Automatische Telefonanrufe", nl: "Automatische telefoongesprekken" },
                    { en: "Automatic photo taking", es: "Toma automática de fotos", de: "Automatisches Fotomachen", nl: "Automatisch foto's maken" },
                    { en: "Automatic app downloads", es: "Descargas automáticas de aplicaciones", de: "Automatische App-Downloads", nl: "Automatische app-downloads" }
                ],
                correct: 0,
                explanation: {
                    en: "Auto-sync automatically keeps your data updated across all your devices so changes on one device appear on others.",
                    es: "La sincronización automática mantiene automáticamente tus datos actualizados en todos tus dispositivos para que los cambios en un dispositivo aparezcan en otros.",
                    de: "Auto-Sync hält deine Daten automatisch auf allen deinen Geräten aktuell, sodass Änderungen auf einem Gerät auf anderen erscheinen.",
                    nl: "Automatische synchronisatie houdt je gegevens automatisch up-to-date op al je apparaten zodat wijzigingen op één apparaat verschijnen op anderen."
                }
            },
            {
                question: {
                    en: "What is push notification?",
                    es: "¿Qué es una notificación push?",
                    de: "Was ist eine Push-Benachrichtigung?",
                    nl: "Wat is een pushmelding?"
                },
                options: [
                    { en: "Instant messages sent to your device", es: "Mensajes instantáneos enviados a tu dispositivo", de: "Sofortnachrichten, die an dein Gerät gesendet werden", nl: "Onmiddellijke berichten verzonden naar je apparaat" },
                    { en: "Pushing buttons on the screen", es: "Presionar botones en la pantalla", de: "Tasten auf dem Bildschirm drücken", nl: "Knoppen op het scherm indrukken" },
                    { en: "Physical push of the device", es: "Empuje físico del dispositivo", de: "Physisches Schieben des Geräts", nl: "Fysiek duwen van het apparaat" },
                    { en: "Loud notification sounds", es: "Sonidos de notificación fuertes", de: "Laute Benachrichtigungstöne", nl: "Luide meldingsgeluiden" }
                ],
                correct: 0,
                explanation: {
                    en: "Push notifications are instant alerts sent from apps to your device to inform you of new messages, updates, or events.",
                    es: "Las notificaciones push son alertas instantáneas enviadas desde las aplicaciones a tu dispositivo para informarte de nuevos mensajes, actualizaciones o eventos.",
                    de: "Push-Benachrichtigungen sind sofortige Warnungen, die von Apps an dein Gerät gesendet werden, um dich über neue Nachrichten, Updates oder Ereignisse zu informieren.",
                    nl: "Pushmeldingen zijn onmiddellijke waarschuwingen verzonden van apps naar je apparaat om je te informeren over nieuwe berichten, updates of gebeurtenissen."
                }
            },
            {
                question: {
                    en: "What is mobile banking?",
                    es: "¿Qué es la banca móvil?",
                    de: "Was ist Mobile Banking?",
                    nl: "Wat is mobiel bankieren?"
                },
                options: [
                    { en: "Banking services through mobile apps", es: "Servicios bancarios a través de aplicaciones móviles", de: "Bankdienstleistungen über mobile Apps", nl: "Bankdiensten via mobiele apps" },
                    { en: "Banks on wheels", es: "Bancos sobre ruedas", de: "Banken auf Rädern", nl: "Banken op wielen" },
                    { en: "Moving your bank account", es: "Mover tu cuenta bancaria", de: "Dein Bankkonto bewegen", nl: "Je bankrekening verplaatsen" },
                    { en: "Banking while traveling", es: "Banca mientras viajas", de: "Banking während des Reisens", nl: "Bankieren tijdens het reizen" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile banking allows you to access your bank account and perform financial transactions through your smartphone app.",
                    es: "La banca móvil te permite acceder a tu cuenta bancaria y realizar transacciones financieras a través de la aplicación de tu teléfono inteligente.",
                    de: "Mobile Banking ermöglicht es dir, auf dein Bankkonto zuzugreifen und Finanztransaktionen über deine Smartphone-App durchzuführen.",
                    nl: "Mobiel bankieren stelt je in staat om toegang te krijgen tot je bankrekening en financiële transacties uit te voeren via je smartphone-app."
                }
            },
            {
                question: {
                    en: "What is two-factor authentication?",
                    es: "¿Qué es la autenticación de dos factores?",
                    de: "Was ist Zwei-Faktor-Authentifizierung?",
                    nl: "Wat is twee-factor-authenticatie?"
                },
                options: [
                    { en: "Extra security using two verification methods", es: "Seguridad extra usando dos métodos de verificación", de: "Zusätzliche Sicherheit mit zwei Verifizierungsmethoden", nl: "Extra beveiliging met twee verificatiemethoden" },
                    { en: "Having two phones", es: "Tener dos teléfonos", de: "Zwei Telefone haben", nl: "Twee telefoons hebben" },
                    { en: "Two different apps", es: "Dos aplicaciones diferentes", de: "Zwei verschiedene Apps", nl: "Twee verschillende apps" },
                    { en: "Two passwords", es: "Dos contraseñas", de: "Zwei Passwörter", nl: "Twee wachtwoorden" }
                ],
                correct: 0,
                explanation: {
                    en: "Two-factor authentication adds an extra layer of security by requiring two forms of verification to access your accounts.",
                    es: "La autenticación de dos factores añade una capa extra de seguridad al requerir dos formas de verificación para acceder a tus cuentas.",
                    de: "Zwei-Faktor-Authentifizierung fügt eine zusätzliche Sicherheitsebene hinzu, indem sie zwei Formen der Verifizierung für den Zugang zu deinen Konten erfordert.",
                    nl: "Twee-factor-authenticatie voegt een extra beveiligingslaag toe door twee vormen van verificatie te vereisen om toegang te krijgen tot je accounts."
                }
            },
            {
                question: {
                    en: "What is app permission?",
                    es: "¿Qué es el permiso de aplicación?",
                    de: "Was ist eine App-Berechtigung?",
                    nl: "Wat is app-toestemming?"
                },
                options: [
                    { en: "Authorization for apps to access device features", es: "Autorización para que las aplicaciones accedan a las funciones del dispositivo", de: "Berechtigung für Apps, auf Gerätefunktionen zuzugreifen", nl: "Toestemming voor apps om toegang te krijgen tot apparaatfuncties" },
                    { en: "Permission to download apps", es: "Permiso para descargar aplicaciones", de: "Erlaubnis, Apps herunterzuladen", nl: "Toestemming om apps te downloaden" },
                    { en: "Age restriction for apps", es: "Restricción de edad para aplicaciones", de: "Altersbeschränkung für Apps", nl: "Leeftijdsbeperking voor apps" },
                    { en: "Cost of using apps", es: "Costo de usar aplicaciones", de: "Kosten für die Nutzung von Apps", nl: "Kosten van het gebruik van apps" }
                ],
                correct: 0,
                explanation: {
                    en: "App permissions control what device features and data an app can access, such as camera, contacts, or location.",
                    es: "Los permisos de aplicación controlan qué características del dispositivo y datos puede acceder una aplicación, como cámara, contactos o ubicación.",
                    de: "App-Berechtigungen kontrollieren, auf welche Gerätefunktionen und Daten eine App zugreifen kann, wie Kamera, Kontakte oder Standort.",
                    nl: "App-toestemmingen bepalen welke apparaatfuncties en gegevens een app kan gebruiken, zoals camera, contacten of locatie."
                }
            },
            {
                question: {
                    en: "What should you consider before giving app permissions?",
                    es: "¿Qué deberías considerar antes de dar permisos a las aplicaciones?",
                    de: "Was solltest du bedenken, bevor du App-Berechtigungen erteilst?",
                    nl: "Wat moet je overwegen voordat je app-toestemmingen geeft?"
                },
                options: [
                    { en: "Whether the app really needs that access", es: "Si la aplicación realmente necesita ese acceso", de: "Ob die App diesen Zugang wirklich braucht", nl: "Of de app die toegang echt nodig heeft" },
                    { en: "The color of the app icon", es: "El color del icono de la aplicación", de: "Die Farbe des App-Symbols", nl: "De kleur van het app-icoon" },
                    { en: "The size of the app", es: "El tamaño de la aplicación", de: "Die Größe der App", nl: "De grootte van de app" },
                    { en: "The number of downloads", es: "El número de descargas", de: "Die Anzahl der Downloads", nl: "Het aantal downloads" }
                ],
                correct: 0,
                explanation: {
                    en: "Always consider whether an app truly needs the permissions it requests to protect your privacy and security.",
                    es: "Siempre considera si una aplicación realmente necesita los permisos que solicita para proteger tu privacidad y seguridad.",
                    de: "Überlege immer, ob eine App die angeforderten Berechtigungen wirklich benötigt, um deine Privatsphäre und Sicherheit zu schützen.",
                    nl: "Overweeg altijd of een app echt de toestemmingen nodig heeft die het vraagt om je privacy en veiligheid te beschermen."
                }
            },
            {
                question: {
                    en: "What is mobile payment?",
                    es: "¿Qué es el pago móvil?",
                    de: "Was ist mobile Bezahlung?",
                    nl: "Wat is mobiel betalen?"
                },
                options: [
                    { en: "Paying for things using your phone", es: "Pagar por cosas usando tu teléfono", de: "Für Dinge mit deinem Telefon bezahlen", nl: "Voor dingen betalen met je telefoon" },
                    { en: "Paying your phone bill", es: "Pagar tu factura telefónica", de: "Deine Telefonrechnung bezahlen", nl: "Je telefoonrekening betalen" },
                    { en: "Buying a new phone", es: "Comprar un teléfono nuevo", de: "Ein neues Telefon kaufen", nl: "Een nieuwe telefoon kopen" },
                    { en: "Paying to fix your phone", es: "Pagar para arreglar tu teléfono", de: "Bezahlen, um dein Telefon zu reparieren", nl: "Betalen om je telefoon te repareren" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile payment allows you to make purchases using your smartphone instead of cash or physical credit cards.",
                    es: "El pago móvil te permite hacer compras usando tu teléfono inteligente en lugar de efectivo o tarjetas de crédito físicas.",
                    de: "Mobile Bezahlung ermöglicht es dir, Einkäufe mit deinem Smartphone zu tätigen anstatt mit Bargeld oder physischen Kreditkarten.",
                    nl: "Mobiel betalen stelt je in staat om aankopen te doen met je smartphone in plaats van contant geld of fysieke creditcards."
                }
            },
            {
                question: {
                    en: "What is Apple Pay?",
                    es: "¿Qué es Apple Pay?",
                    de: "Was ist Apple Pay?",
                    nl: "Wat is Apple Pay?"
                },
                options: [
                    { en: "Apple's mobile payment system", es: "El sistema de pago móvil de Apple", de: "Apples mobiles Bezahlsystem", nl: "Apple's mobiele betalingssysteem" },
                    { en: "Apple's music service", es: "El servicio de música de Apple", de: "Apples Musikdienst", nl: "Apple's muziekservice" },
                    { en: "Apple's cloud storage", es: "El almacenamiento en la nube de Apple", de: "Apples Cloud-Speicher", nl: "Apple's cloudopslag" },
                    { en: "Apple's video service", es: "El servicio de video de Apple", de: "Apples Videodienst", nl: "Apple's videoservice" }
                ],
                correct: 0,
                explanation: {
                    en: "Apple Pay is Apple's digital wallet service that enables secure contactless payments using your iPhone or Apple Watch.",
                    es: "Apple Pay es el servicio de billetera digital de Apple que permite pagos seguros sin contacto usando tu iPhone o Apple Watch.",
                    de: "Apple Pay ist Apples digitaler Brieftaschendienst, der sichere kontaktlose Zahlungen mit deinem iPhone oder Apple Watch ermöglicht.",
                    nl: "Apple Pay is Apple's digitale portemonnee-service die veilige contactloze betalingen mogelijk maakt met je iPhone of Apple Watch."
                }
            },
            {
                question: {
                    en: "What is Google Pay?",
                    es: "¿Qué es Google Pay?",
                    de: "Was ist Google Pay?",
                    nl: "Wat is Google Pay?"
                },
                options: [
                    { en: "Google's mobile payment system", es: "El sistema de pago móvil de Google", de: "Googles mobiles Bezahlsystem", nl: "Google's mobiele betalingssysteem" },
                    { en: "Google's search service", es: "El servicio de búsqueda de Google", de: "Googles Suchdienst", nl: "Google's zoekservice" },
                    { en: "Google's email service", es: "El servicio de correo electrónico de Google", de: "Googles E-Mail-Dienst", nl: "Google's e-mailservice" },
                    { en: "Google's map service", es: "El servicio de mapas de Google", de: "Googles Kartendienst", nl: "Google's kaartenservice" }
                ],
                correct: 0,
                explanation: {
                    en: "Google Pay is Google's digital payment platform that allows secure mobile payments and money transfers.",
                    es: "Google Pay es la plataforma de pago digital de Google que permite pagos móviles seguros y transferencias de dinero.",
                    de: "Google Pay ist Googles digitale Zahlungsplattform, die sichere mobile Zahlungen und Geldüberweisungen ermöglicht.",
                    nl: "Google Pay is Google's digitale betalingsplatform dat veilige mobiele betalingen en geldoverdrachten mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is NFC?",
                    es: "¿Qué es NFC?",
                    de: "Was ist NFC?",
                    nl: "Wat is NFC?"
                },
                options: [
                    { en: "Near Field Communication for short-range data transfer", es: "Comunicación de Campo Cercano para transferencia de datos de corto alcance", de: "Nahfeldkommunikation für Datenübertragung über kurze Entfernungen", nl: "Near Field Communication voor gegevensoverdracht over korte afstand" },
                    { en: "New File Creator", es: "Creador de Archivos Nuevos", de: "Neue Datei Ersteller", nl: "Nieuwe Bestand Maker" },
                    { en: "Network File Control", es: "Control de Archivos de Red", de: "Netzwerk-Datei-Kontrolle", nl: "Netwerk Bestand Controle" },
                    { en: "Next Function Call", es: "Llamada de Función Siguiente", de: "Nächster Funktionsaufruf", nl: "Volgende Functie Oproep" }
                ],
                correct: 0,
                explanation: {
                    en: "NFC enables short-range wireless communication between devices, commonly used for contactless payments and data sharing.",
                    es: "NFC permite comunicación inalámbrica de corto alcance entre dispositivos, comúnmente usada para pagos sin contacto y compartir datos.",
                    de: "NFC ermöglicht drahtlose Kommunikation über kurze Entfernungen zwischen Geräten, häufig für kontaktlose Zahlungen und Datenaustausch verwendet.",
                    nl: "NFC maakt draadloze communicatie over korte afstand tussen apparaten mogelijk, vaak gebruikt voor contactloze betalingen en gegevens delen."
                }
            },
            {
                question: {
                    en: "What can you do with NFC on your phone?",
                    es: "¿Qué puedes hacer con NFC en tu teléfono?",
                    de: "Was kannst du mit NFC auf deinem Telefon machen?",
                    nl: "Wat kun je doen met NFC op je telefoon?"
                },
                options: [
                    { en: "Make contactless payments and share files", es: "Hacer pagos sin contacto y compartir archivos", de: "Kontaktlose Zahlungen machen und Dateien teilen", nl: "Contactloze betalingen doen en bestanden delen" },
                    { en: "Make the phone faster", es: "Hacer el teléfono más rápido", de: "Das Telefon schneller machen", nl: "De telefoon sneller maken" },
                    { en: "Take better photos", es: "Tomar mejores fotos", de: "Bessere Fotos machen", nl: "Betere foto's maken" },
                    { en: "Charge the battery", es: "Cargar la batería", de: "Die Batterie laden", nl: "De batterij opladen" }
                ],
                correct: 0,
                explanation: {
                    en: "NFC enables convenient contactless payments and quick file sharing by simply tapping devices together.",
                    es: "NFC permite pagos convenientes sin contacto y compartir archivos rápidamente simplemente tocando dispositivos juntos.",
                    de: "NFC ermöglicht bequeme kontaktlose Zahlungen und schnelles Dateiteilen durch einfaches Zusammentippen von Geräten.",
                    nl: "NFC maakt handige contactloze betalingen en snel bestanden delen mogelijk door simpelweg apparaten tegen elkaar te tikken."
                }
            },
            {
                question: {
                    en: "What is mobile security?",
                    es: "¿Qué es la seguridad móvil?",
                    de: "Was ist mobile Sicherheit?",
                    nl: "Wat is mobiele beveiliging?"
                },
                options: [
                    { en: "Protecting your device and data from threats", es: "Proteger tu dispositivo y datos de amenazas", de: "Dein Gerät und deine Daten vor Bedrohungen schützen", nl: "Je apparaat en gegevens beschermen tegen bedreigingen" },
                    { en: "A security guard for phones", es: "Un guardia de seguridad para teléfonos", de: "Ein Sicherheitsbeamter für Telefone", nl: "Een beveiligingsbeambte voor telefoons" },
                    { en: "Locking your phone in a safe", es: "Bloquear tu teléfono en una caja fuerte", de: "Dein Telefon in einem Safe einschließen", nl: "Je telefoon in een kluis opsluiten" },
                    { en: "Insurance for your phone", es: "Seguro para tu teléfono", de: "Versicherung für dein Telefon", nl: "Verzekering voor je telefoon" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile security involves protecting your device and personal data from malware, theft, and unauthorized access.",
                    es: "La seguridad móvil implica proteger tu dispositivo y datos personales de malware, robo y acceso no autorizado.",
                    de: "Mobile Sicherheit beinhaltet den Schutz deines Geräts und persönlicher Daten vor Malware, Diebstahl und unbefugtem Zugriff.",
                    nl: "Mobiele beveiliging houdt in dat je apparaat en persoonlijke gegevens beschermd worden tegen malware, diefstal en ongeautoriseerde toegang."
                }
            },
            {
                question: {
                    en: "What are some mobile security best practices?",
                    es: "¿Cuáles son algunas mejores prácticas de seguridad móvil?",
                    de: "Was sind einige bewährte Praktiken für mobile Sicherheit?",
                    nl: "Wat zijn enkele beste praktijken voor mobiele beveiliging?"
                },
                options: [
                    { en: "Use strong passwords, update apps, avoid suspicious links", es: "Usar contraseñas fuertes, actualizar aplicaciones, evitar enlaces sospechosos", de: "Starke Passwörter verwenden, Apps aktualisieren, verdächtige Links vermeiden", nl: "Sterke wachtwoorden gebruiken, apps updaten, verdachte links vermijden" },
                    { en: "Share passwords with friends", es: "Compartir contraseñas con amigos", de: "Passwörter mit Freunden teilen", nl: "Wachtwoorden delen met vrienden" },
                    { en: "Download apps from any website", es: "Descargar aplicaciones de cualquier sitio web", de: "Apps von jeder Website herunterladen", nl: "Apps downloaden van elke website" },
                    { en: "Never lock your phone", es: "Nunca bloquear tu teléfono", de: "Niemals dein Telefon sperren", nl: "Nooit je telefoon vergrendelen" }
                ],
                correct: 0,
                explanation: {
                    en: "Good mobile security practices include using strong passwords, keeping apps updated, and avoiding suspicious downloads.",
                    es: "Las buenas prácticas de seguridad móvil incluyen usar contraseñas fuertes, mantener las aplicaciones actualizadas y evitar descargas sospechosas.",
                    de: "Gute mobile Sicherheitspraktiken umfassen starke Passwörter, Apps aktuell halten und verdächtige Downloads vermeiden.",
                    nl: "Goede mobiele beveiligingspraktijken omvatten het gebruiken van sterke wachtwoorden, apps up-to-date houden en verdachte downloads vermijden."
                }
            },
            {
                question: {
                    en: "What is rooting (Android) or jailbreaking (iOS)?",
                    es: "¿Qué es rootear (Android) o hacer jailbreak (iOS)?",
                    de: "Was ist Rooting (Android) oder Jailbreaking (iOS)?",
                    nl: "Wat is rooten (Android) of jailbreaken (iOS)?"
                },
                options: [
                    { en: "Removing software restrictions to gain full control", es: "Eliminar restricciones de software para obtener control total", de: "Softwarebeschränkungen entfernen, um vollständige Kontrolle zu erlangen", nl: "Softwarebeperkingen verwijderen om volledige controle te krijgen" },
                    { en: "Planting your phone in soil", es: "Plantar tu teléfono en la tierra", de: "Dein Telefon in die Erde pflanzen", nl: "Je telefoon in de grond planten" },
                    { en: "Breaking your phone", es: "Romper tu teléfono", de: "Dein Telefon kaputtmachen", nl: "Je telefoon kapotmaken" },
                    { en: "Escaping from jail with your phone", es: "Escapar de la cárcel con tu teléfono", de: "Mit deinem Telefon aus dem Gefängnis ausbrechen", nl: "Ontsnappen uit de gevangenis met je telefoon" }
                ],
                correct: 0,
                explanation: {
                    en: "Rooting or jailbreaking removes manufacturer software restrictions to gain full system access, but voids warranties.",
                    es: "Rootear o hacer jailbreak elimina las restricciones de software del fabricante para obtener acceso completo al sistema, pero anula garantías.",
                    de: "Rooting oder Jailbreaking entfernt Herstellersoftware-Beschränkungen für vollen Systemzugang, macht aber Garantien ungültig.",
                    nl: "Rooten of jailbreaken verwijdert softwarebeperkingen van de fabrikant om volledige systeemtoegang te krijgen, maar maakt garanties ongeldig."
                }
            },
            {
                question: {
                    en: "What is the main risk of rooting or jailbreaking?",
                    es: "¿Cuál es el principal riesgo de rootear o hacer jailbreak?",
                    de: "Was ist das Hauptrisiko beim Rooting oder Jailbreaking?",
                    nl: "Wat is het hoofdrisico van rooten of jailbreaken?"
                },
                options: [
                    { en: "Voiding warranty and security vulnerabilities", es: "Anular la garantía y vulnerabilidades de seguridad", de: "Garantie verlieren und Sicherheitslücken", nl: "Garantie vervallen en beveiligingsproblemen" },
                    { en: "Better performance", es: "Mejor rendimiento", de: "Bessere Leistung", nl: "Betere prestaties" },
                    { en: "More apps available", es: "Más aplicaciones disponibles", de: "Mehr verfügbare Apps", nl: "Meer beschikbare apps" },
                    { en: "Faster internet", es: "Internet más rápido", de: "Schnelleres Internet", nl: "Sneller internet" }
                ],
                correct: 0,
                explanation: {
                    en: "The main risks include losing warranty protection and creating security vulnerabilities that can be exploited by malicious software.",
                    es: "Los principales riesgos incluyen perder protección de garantía y crear vulnerabilidades de seguridad que pueden ser explotadas por software malicioso.",
                    de: "Die Hauptrisiken umfassen den Verlust des Garantieschutzes und das Schaffen von Sicherheitslücken, die von bösartiger Software ausgenutzt werden können.",
                    nl: "De hoofdrisico's zijn het verliezen van garantiebescherming en het creëren van beveiligingslekken die kunnen worden uitgebuit door kwaadaardige software."
                }
            },
            {
                question: {
                    en: "What is a mobile device management (MDM) system?",
                    es: "¿Qué es un sistema de gestión de dispositivos móviles (MDM)?",
                    de: "Was ist ein Mobile Device Management (MDM) System?",
                    nl: "Wat is een mobiele apparaatbeheersysteem (MDM)?"
                },
                options: [
                    { en: "Software to manage and secure company mobile devices", es: "Software para gestionar y asegurar dispositivos móviles de la empresa", de: "Software zur Verwaltung und Sicherung von Firmen-Mobilgeräten", nl: "Software om bedrijfsmobiele apparaten te beheren en beveiligen" },
                    { en: "A type of mobile phone", es: "Un tipo de teléfono móvil", de: "Ein Typ Mobiltelefon", nl: "Een type mobiele telefoon" },
                    { en: "A mobile app store", es: "Una tienda de aplicaciones móviles", de: "Ein mobiler App Store", nl: "Een mobiele app store" },
                    { en: "A mobile game", es: "Un juego móvil", de: "Ein mobiles Spiel", nl: "Een mobiel spel" }
                ],
                correct: 0,
                explanation: {
                    en: "MDM systems allow companies to remotely manage, secure, and monitor mobile devices used by employees for work.",
                    es: "Los sistemas MDM permiten a las empresas gestionar, asegurar y monitorear remotamente dispositivos móviles usados por empleados para el trabajo.",
                    de: "MDM-Systeme ermöglichen es Unternehmen, mobile Geräte, die von Mitarbeitern für die Arbeit verwendet werden, aus der Ferne zu verwalten, zu sichern und zu überwachen.",
                    nl: "MDM-systemen stellen bedrijven in staat om mobiele apparaten die door werknemers voor werk worden gebruikt op afstand te beheren, beveiligen en monitoren."
                }
            },
            {
                question: {
                    en: "What is the benefit of regular software updates on mobile devices?",
                    es: "¿Cuál es el beneficio de las actualizaciones regulares de software en dispositivos móviles?",
                    de: "Was ist der Vorteil regelmäßiger Software-Updates auf mobilen Geräten?",
                    nl: "Wat is het voordeel van regelmatige software-updates op mobiele apparaten?"
                },
                options: [
                    { en: "Security patches, bug fixes, and new features", es: "Parches de seguridad, corrección de errores y nuevas características", de: "Sicherheitspatches, Fehlerbehebungen und neue Funktionen", nl: "Beveiligingspatches, bugfixes en nieuwe functies" },
                    { en: "Uses more battery", es: "Usa más batería", de: "Verbraucht mehr Batterie", nl: "Gebruikt meer batterij" },
                    { en: "Makes phone slower", es: "Hace el teléfono más lento", de: "Macht das Telefon langsamer", nl: "Maakt telefoon langzamer" },
                    { en: "Costs more money", es: "Cuesta más dinero", de: "Kostet mehr Geld", nl: "Kost meer geld" }
                ],
                correct: 0,
                explanation: {
                    en: "Regular software updates provide important security patches, bug fixes, and new features that improve device performance.",
                    es: "Las actualizaciones regulares de software proporcionan parches de seguridad importantes, correcciones de errores y nuevas características que mejoran el rendimiento del dispositivo.",
                    de: "Regelmäßige Software-Updates bieten wichtige Sicherheitspatches, Fehlerbehebungen und neue Funktionen, die die Geräteleistung verbessern.",
                    nl: "Regelmatige software-updates bieden belangrijke beveiligingspatches, bugfixes en nieuwe functies die de apparaatprestaties verbeteren."
                }
            },
            {
                question: {
                    en: "What is mobile cloud computing?",
                    es: "¿Qué es la computación en la nube móvil?",
                    de: "Was ist mobiles Cloud-Computing?",
                    nl: "Wat is mobiele cloudcomputing?"
                },
                options: [
                    { en: "Accessing computing resources and data via the internet on mobile devices", es: "Acceder a recursos informáticos y datos a través de internet en dispositivos móviles", de: "Zugriff auf Computerressourcen und Daten über das Internet auf mobilen Geräten", nl: "Toegang tot computerbronnen en gegevens via internet op mobiele apparaten" },
                    { en: "Storing apps on a cloud-shaped device", es: "Almacenar aplicaciones en un dispositivo con forma de nube", de: "Apps auf einem wolkenförmigen Gerät speichern", nl: "Apps opslaan op een wolkvormig apparaat" },
                    { en: "Using your phone during cloudy weather", es: "Usar tu teléfono durante tiempo nublado", de: "Dein Telefon bei bewölktem Wetter verwenden", nl: "Je telefoon gebruiken bij bewolkt weer" },
                    { en: "A white-colored mobile device", es: "Un dispositivo móvil de color blanco", de: "Ein weißes mobiles Gerät", nl: "Een wit mobiel apparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile cloud computing allows smartphones to access powerful computing resources and store data remotely via internet connection.",
                    es: "La computación en la nube móvil permite a los teléfonos inteligentes acceder a recursos informáticos potentes y almacenar datos de forma remota a través de conexión a internet.",
                    de: "Mobiles Cloud-Computing ermöglicht es Smartphones, auf leistungsstarke Computerressourcen zuzugreifen und Daten remote über Internetverbindung zu speichern.",
                    nl: "Mobiele cloudcomputing stelt smartphones in staat om krachtige computerbronnen te gebruiken en gegevens op afstand op te slaan via internetverbinding."
                }
            },
            {
                question: {
                    en: "What is augmented reality (AR) on mobile devices?",
                    es: "¿Qué es la realidad aumentada (AR) en dispositivos móviles?",
                    de: "Was ist erweiterte Realität (AR) auf mobilen Geräten?",
                    nl: "Wat is augmented reality (AR) op mobiele apparaten?"
                },
                options: [
                    { en: "Overlaying digital information onto the real world through the camera", es: "Superponer información digital sobre el mundo real a través de la cámara", de: "Digitale Informationen über die reale Welt durch die Kamera überlagern", nl: "Digitale informatie over de echte wereld leggen via de camera" },
                    { en: "Making your phone screen brighter", es: "Hacer la pantalla de tu teléfono más brillante", de: "Den Bildschirm deines Telefons heller machen", nl: "Je telefoonscherm helderder maken" },
                    { en: "Adding more apps to your phone", es: "Agregar más aplicaciones a tu teléfono", de: "Mehr Apps zu deinem Telefon hinzufügen", nl: "Meer apps toevoegen aan je telefoon" },
                    { en: "Virtual reality without goggles", es: "Realidad virtual sin gafas", de: "Virtuelle Realität ohne Brille", nl: "Virtual reality zonder bril" }
                ],
                correct: 0,
                explanation: {
                    en: "AR uses the device's camera and screen to display digital content overlaid on the real world, creating an enhanced viewing experience.",
                    es: "AR usa la cámara y pantalla del dispositivo para mostrar contenido digital superpuesto sobre el mundo real, creando una experiencia visual mejorada.",
                    de: "AR verwendet die Kamera und den Bildschirm des Geräts, um digitale Inhalte über die reale Welt zu legen und ein verbessertes Seherlebnis zu schaffen.",
                    nl: "AR gebruikt de camera en het scherm van het apparaat om digitale inhoud over de echte wereld te tonen, wat een verbeterde kijkervaring creëert."
                }
            },
            {
                question: {
                    en: "What is QR code scanning?",
                    es: "¿Qué es el escaneo de códigos QR?",
                    de: "Was ist QR-Code-Scannen?",
                    nl: "Wat is QR-code scannen?"
                },
                options: [
                    { en: "Using the camera to read square barcodes that contain information", es: "Usar la cámara para leer códigos de barras cuadrados que contienen información", de: "Die Kamera verwenden, um quadratische Barcodes zu lesen, die Informationen enthalten", nl: "De camera gebruiken om vierkante streepjescodes te lezen die informatie bevatten" },
                    { en: "Taking quality photos quickly", es: "Tomar fotos de calidad rápidamente", de: "Schnell qualitativ hochwertige Fotos machen", nl: "Snel kwaliteitsfoto's maken" },
                    { en: "Scanning for radio signals", es: "Escanear en busca de señales de radio", de: "Nach Funksignalen scannen", nl: "Scannen naar radiosignalen" },
                    { en: "Reading text messages quickly", es: "Leer mensajes de texto rápidamente", de: "Textnachrichten schnell lesen", nl: "Tekstberichten snel lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "QR codes are square barcodes that can store various types of information like URLs, contact details, or text, readable by smartphone cameras.",
                    es: "Los códigos QR son códigos de barras cuadrados que pueden almacenar varios tipos de información como URLs, detalles de contacto o texto, legibles por cámaras de teléfonos inteligentes.",
                    de: "QR-Codes sind quadratische Barcodes, die verschiedene Arten von Informationen wie URLs, Kontaktdaten oder Text speichern können und von Smartphone-Kameras lesbar sind.",
                    nl: "QR-codes zijn vierkante streepjescodes die verschillende soorten informatie kunnen opslaan zoals URL's, contactgegevens of tekst, leesbaar door smartphonecamera's."
                }
            },
            {
                question: {
                    en: "What is mobile hotspot functionality?",
                    es: "¿Qué es la funcionalidad de punto de acceso móvil?",
                    de: "Was ist die mobile Hotspot-Funktionalität?",
                    nl: "Wat is mobiele hotspot-functionaliteit?"
                },
                options: [
                    { en: "Sharing your phone's internet connection with other devices", es: "Compartir la conexión a internet de tu teléfono con otros dispositivos", de: "Die Internetverbindung deines Telefons mit anderen Geräten teilen", nl: "De internetverbinding van je telefoon delen met andere apparaten" },
                    { en: "Making your phone physically hot", es: "Hacer que tu teléfono se caliente físicamente", de: "Dein Telefon physisch heiß machen", nl: "Je telefoon fysiek heet maken" },
                    { en: "Finding hot weather locations", es: "Encontrar ubicaciones con clima caliente", de: "Heiße Wetterstandorte finden", nl: "Warme weerlocaties vinden" },
                    { en: "A popular app for phones", es: "Una aplicación popular para teléfonos", de: "Eine beliebte App für Telefone", nl: "Een populaire app voor telefoons" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile hotspot allows your smartphone to act as a Wi-Fi router, sharing its cellular data connection with other devices like laptops or tablets.",
                    es: "El punto de acceso móvil permite que tu teléfono inteligente actúe como un router Wi-Fi, compartiendo su conexión de datos celulares con otros dispositivos como laptops o tablets.",
                    de: "Der mobile Hotspot ermöglicht es deinem Smartphone, als Wi-Fi-Router zu fungieren und seine Mobilfunkdatenverbindung mit anderen Geräten wie Laptops oder Tablets zu teilen.",
                    nl: "Mobiele hotspot stelt je smartphone in staat om te fungeren als een Wi-Fi-router en zijn mobiele dataverbinding te delen met andere apparaten zoals laptops of tablets."
                }
            },
            {
                question: {
                    en: "What is the significance of mobile technology in daily life?",
                    es: "¿Cuál es la importancia de la tecnología móvil en la vida diaria?",
                    de: "Was ist die Bedeutung der mobilen Technologie im täglichen Leben?",
                    nl: "Wat is de betekenis van mobiele technologie in het dagelijks leven?"
                },
                options: [
                    { en: "It enables communication, information access, and productivity anywhere", es: "Permite comunicación, acceso a información y productividad en cualquier lugar", de: "Es ermöglicht Kommunikation, Informationszugang und Produktivität überall", nl: "Het maakt communicatie, toegang tot informatie en productiviteit overal mogelijk" },
                    { en: "It makes devices more expensive", es: "Hace que los dispositivos sean más caros", de: "Es macht Geräte teurer", nl: "Het maakt apparaten duurder" },
                    { en: "It only works for making phone calls", es: "Solo funciona para hacer llamadas telefónicas", de: "Es funktioniert nur zum Telefonieren", nl: "Het werkt alleen voor telefoongesprekken" },
                    { en: "It replaces all computers completely", es: "Reemplaza completamente todas las computadoras", de: "Es ersetzt alle Computer vollständig", nl: "Het vervangt alle computers volledig" }
                ],
                correct: 0,
                explanation: {
                    en: "Mobile technology has revolutionized daily life by providing instant access to communication, information, entertainment, and productivity tools from anywhere.",
                    es: "La tecnología móvil ha revolucionado la vida diaria al proporcionar acceso instantáneo a comunicación, información, entretenimiento y herramientas de productividad desde cualquier lugar.",
                    de: "Mobile Technologie hat das tägliche Leben revolutioniert, indem sie sofortigen Zugang zu Kommunikation, Informationen, Unterhaltung und Produktivitätstools von überall bietet.",
                    nl: "Mobiele technologie heeft het dagelijks leven gerevolutioneerd door directe toegang te bieden tot communicatie, informatie, entertainment en productiviteitstools van overal."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level2);
    }
})();